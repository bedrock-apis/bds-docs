import { FILE_CONTENT_CURRENT_EXIST, FILE_CONTENT_GITIGNORE, FILE_NAME_GITHUB_REPO_EXISTS, IS_GITHUB_ACTION } from "./consts.js";
import { ClearWholeFolder, ExecuteCommand, FetchBDSVersions,GetEngineVersion,GithubChekoutBranch,GithubLoginAs,groupEnd,VersionCheck } from "./functions.js";
import { existsSync, writeFileSync } from "node:fs";

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

    // Login and Checkout that specific branch
    let successful = GithubChekoutBranch(checkResults.branch, true);
    if(!successful){
        console.error(`Failed to checkout branch: ${checkResults.branch}`);
        return -1;
    }

    groupEnd();

    // We should clear whole working directory, so we could upload generated files
    // Commented bc its dangerous to run this on local machine so please be sure its executed only via Github Action
    // Maybe Add some checks for GITHUB specific ENV FILES like GITHUB_TOKEN or something
    if(IS_GITHUB_ACTION){
        let entriesRemoved = await ClearWholeFolder(".", ".git");
        console.log(`[REPO CLEAR] Removed ${entriesRemoved} entries.`);
    }

    writeFileSync(FILE_NAME_GITHUB_REPO_EXISTS, JSON.stringify(FILE_CONTENT_CURRENT_EXIST, null, 3));
    
    console.log("Commit");
    await ExecuteCommand("git add .");
    await ExecuteCommand(`git commit -m \"New ${checkResults.branch} v${checkResults.isPreview?checkResults.version:GetEngineVersion(checkResults.version)}\"`);
    await ExecuteCommand("git push --force origin " + checkResults.branch);


    console.log(`New ${checkResults.isPreview?"preview":""} version available ${checkResults.version}`);
    return 0;
};