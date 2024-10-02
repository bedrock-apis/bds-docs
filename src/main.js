import { minimatch } from "minimatch";
import { ALWAYS_OVERWRITE, BDS_OUTDIR_PATH, FILE_CONTENT_CURRENT_EXIST, FILE_CONTENT_GITIGNORE, FILE_NAME_GITHUB_REPO_EXISTS, FILE_NAME_GITIGNORE, IS_GITHUB_ACTION } from "./consts.js";
import { ClearWholeFolder, ExecuteCommand, FetchBDSSource, FetchBDSVersions,GetEngineVersion,GithubChekoutBranch,GithubLoginAs,GithubPostNewBranch,group,groupEnd,VersionCheck } from "./functions.js";
import { writeFile } from "node:fs/promises";
import { SaveWorkspaceContent } from "./content_saver.js";

// Calling Main EntryPont
Main()
// Catch en error and report an invalid return code
.catch(er=>{console.log(er, er.stack); process.exit(-1)})
// Return and exit with this code, when Main entrypoint returns
.then(process.exit);

/**
 * Main Entry Point
 * @returns {Promise<number>}
 */
async function Main(){

    
    // Fetch Current BDS Versions
    const versions = await FetchBDSVersions().catch(console.error);
    if(!versions) {
        console.error("Failed to get current versions");
        return -1;
    }

    //Compare with already generated data and check if any new versions has been released
    const checkResults = await VersionCheck(versions);
    if(!checkResults) {
        console.log("All is up to date :)");
        return 0;
    }

    //@ts-ignore Just testing
    FILE_CONTENT_CURRENT_EXIST["version"] = "test:" + (checkResults.isPreview?checkResults.version:GetEngineVersion(checkResults.version));
    FILE_CONTENT_CURRENT_EXIST["build-version"] = checkResults.version;

    // Login and Checkout that specific branch
    group(`Branch checkout: ${checkResults.branch} IsForced: ${true}`);

    let successful = await GithubChekoutBranch(checkResults.branch, true);
    if(!successful){
        console.error(`Failed to checkout branch: ${checkResults.branch}`);
        return -1;
    }
    groupEnd();



    // Load Required File For Later Use
    await SaveWorkspaceContent();



    // Now we should clear whole working directory, so we could upload generated files
    // Commented bc its dangerous to run this on local machine so please be sure its executed only via Github Action
    // Maybe Add some checks for GITHUB specific ENV FILES like GITHUB_TOKEN or something
    if(IS_GITHUB_ACTION){
        group("Clear Repo Bruteforce")
        for await(const entry of ClearWholeFolder(
            ".",
            (f)=>{
                return [".git/**/*",".git/"].some(s=>minimatch(f, s, {nocase: true}));
            }
            )){
            console.log("[REPO Clear] entry: " + entry);
        }
        groupEnd();
    }
    // Once we cleared all the stuff, we should write updated version of .gitignore 
    await writeFile(FILE_NAME_GITIGNORE, FILE_CONTENT_GITIGNORE);



    // Fetch BDS Content
    group(`Download of BDS -> ${BDS_OUTDIR_PATH}`)
    successful = await FetchBDSSource(checkResults.version, checkResults.isPreview, BDS_OUTDIR_PATH).then(s=>s,(error)=>{
        console.error(error, error.stack);
        return false;
    });
    if(!successful){
        console.error("Faild to download BDS");
        return -1;
    }
    console.log("BDS Downloaded Successfully");
    groupEnd();




    // At the end write the exist.json content
    group("Writing " + FILE_NAME_GITHUB_REPO_EXISTS);
    const existContent = JSON.stringify(FILE_CONTENT_CURRENT_EXIST, null, 3);
    await writeFile(FILE_NAME_GITHUB_REPO_EXISTS, existContent);
    console.log(existContent);
    groupEnd();
    



    // Commit changes and force push
    group("Commit & Push -> " + checkResults.branch);
    await ExecuteCommand("git add .");
    await ExecuteCommand(`git commit -m \"New ${checkResults.branch} v${checkResults.isPreview?checkResults.version:GetEngineVersion(checkResults.version)}\"`);
    await ExecuteCommand("git push --force origin " + checkResults.branch);

    // Create New Branch for stable release
    if(!ALWAYS_OVERWRITE && !checkResults.isPreview){
        /**@type {import("./functions.js").BranchKind | `${import("./functions.js").BranchKind}-${import("./functions.js").VersionEngine}`} */
        const branch = `${checkResults.branch}-${GetEngineVersion(checkResults.version)}`;
        successful = await GithubPostNewBranch(branch);
        if(!successful){
            console.error("Faild to post new branch");
            return -1;
        }
    }
    groupEnd();

    return 0;
};