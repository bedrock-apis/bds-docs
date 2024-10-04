import { minimatch } from "minimatch";
import { ALWAYS_OVERWRITE, BDS_OUTDIR_PATH, FILE_CONTENT_BDS_TEST_CONFIG, FILE_CONTENT_CURRENT_EXIST, FILE_CONTENT_GITIGNORE, FILE_NAME_BDS_BINARY, FILE_NAME_BDS_TEST_CONFIG, FILE_NAME_GITHUB_README, FILE_NAME_GITHUB_REPO_EXISTS, FILE_NAME_GITIGNORE, IS_GITHUB_ACTION } from "./consts.js";
import { ClearWholeFolder, ExecuteCommand, ExecuteExecutable, FetchBDSSource, FetchBDSVersions,GetEngineVersion,GithubChekoutBranch,GithubCommitAndPush,GithubLoginAs,GithubPostNewBranch,group,groupEnd,groupFinish,VersionCheck } from "./functions.js";
import { writeFile } from "node:fs/promises";
import { SaveWorkspaceContent } from "./content_saver.js";
import { resolve } from "node:path";
import { GENERATORS_FLAGS } from "./flags/index.js";
import { GENERAL_README } from "../DOCUMENTATION/gen.mjs";
let performanceTime = Date.now();
// Calling Main EntryPont
Main()
// Catch en error and report an invalid return code
.catch(er=>{console.log(er, er.stack); process.exit(-1)})
// Return and exit with this code, when Main entrypoint returns
.then((c)=>{
    groupFinish();
    console.log(`Execution time: ${~~((Date.now() - performanceTime) / 1000)}s`);
    process.exit(c);
});

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
    group(`Download of Bedrock Dedicated Server -> ${BDS_OUTDIR_PATH}`);
    successful = await FetchBDSSource(checkResults.version, checkResults.isPreview, BDS_OUTDIR_PATH).then(s=>s >= 0,(error)=>{
        console.error(error, error.stack);
        return false;
    });
    if(!successful){
        console.error("Faild to download BDS");
        return -1;
    }
    console.log("Bedrock Dedicated Server Downloaded Successfully");
    groupEnd();


    // Add Test config to generate metadata
    await writeFile(resolve(BDS_OUTDIR_PATH, FILE_NAME_BDS_TEST_CONFIG), FILE_CONTENT_BDS_TEST_CONFIG);

    // Execute BDS Executable
    group(`Running Bedrock Dedicated Server -> ${BDS_OUTDIR_PATH}`);
    let exeSuccessful = await ExecuteExecutable(FILE_NAME_BDS_BINARY, 60_000, BDS_OUTDIR_PATH);
    if(exeSuccessful.exitCode != 0){
        console.error("Faild to download BDS: " + exeSuccessful.error);
        return -1;
    }
    console.log("BDS has quit Successfully");
    groupEnd();


    // Proccess All Related Generator Flag Workers
    console.log(`${GENERATORS_FLAGS.length} Generators Flags . . .`);
    let temp = 0;
    for (const flag of GENERATORS_FLAGS) {
        group(`[${++temp} / ${GENERATORS_FLAGS.length}] Generator ${flag.flagId}`);

        successful = await flag.method(BDS_OUTDIR_PATH).catch((er)=>{
            console.error(`Generator ${flag.flagId} fails: ${er}`);
            return false;
        });

        if(!successful){
            console.log("Generator Failed " + flag.flagId);
            return -1;
        }

        // Once generator ends, we can assign the generator flag to exist.json
        FILE_CONTENT_CURRENT_EXIST.flags.push(flag.flagId);

        groupEnd();
    }


    // At the end write the exist.json content
    group("Writing " + FILE_NAME_GITHUB_REPO_EXISTS);
    const existContent = JSON.stringify(FILE_CONTENT_CURRENT_EXIST, null, 3);
    await writeFile(FILE_NAME_GITHUB_REPO_EXISTS, existContent);
    console.log(existContent);
    groupEnd();
    
    await writeFile(FILE_NAME_GITHUB_README, GENERAL_README);


    // Commit changes and force push
    group("Commit & Push -> " + checkResults.branch);
    successful = await GithubCommitAndPush(checkResults.branch, checkResults.version, checkResults.isPreview);
    if(!successful){
        console.error("Faild to commit and push");
        return -1;
    }

    // There is no need to create new branch
    if(ALWAYS_OVERWRITE || checkResults.isPreview){
        groupEnd();
        return 0;
    }


    // Create New Branch for stable release
    /**@type {import("./functions.js").BranchKind | `${import("./functions.js").BranchKind}-${import("./functions.js").VersionEngine}`} */
    const branch = `${checkResults.branch}-${GetEngineVersion(checkResults.version)}`;
    successful = await GithubPostNewBranch(branch);
    if(!successful){
        console.error("Faild to post new branch");
        return -1;
    }


    groupEnd();
    return 0;
};