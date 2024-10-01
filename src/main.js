import { FILE_CONTENT_GITIGNORE } from "./consts.js";
import { FetchBDSVersions,GithubLoginAs,VersionCheck } from "./functions.js";

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
    await GithubLoginAs("test","mymail@gmailike.com");

    const versions = await FetchBDSVersions();
    const checkResults = await VersionCheck(versions);
    if(!checkResults) {
        console.log("All is up to date");
        return 0;
    }

    console.log(`New ${checkResults.isPreview?"preview":""} version available ${checkResults.version}`);

    //await GithubLoginAs("test","mymail@gmailike.com");

    return 0;
};