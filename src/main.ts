import { ALWAYS_OVERWRITE, BDS_OUTDIR_PATH, DEBUG, FILE_CONTENT_BDS_TEST_CONFIG, FILE_CONTENT_CURRENT_EXIST, FILE_CONTENT_GITIGNORE, FILE_NAME_BDS_BINARY, FILE_NAME_BDS_TEST_CONFIG, FILE_NAME_GITHUB_README, FILE_NAME_GITHUB_REPO_EXISTS, FILE_NAME_GITIGNORE, GITHUB_REPO_NAME, IS_GITHUB_ACTION, LINK_BDS_CDN, LINK_BDS_VERSIONS, PLATFORM } from "./consts";
import { DirectoryTreeRemoval, DownloadZipFile, FetchJson, GetEngineVersion, GithubCheckoutBranch, GithubCommitAndPush, GithubPostNewBranch, group, groupEnd, groupFinish, InvokeProcess, Panic, Success, WriteFile } from "./functions";
import { GetRepositoryVersionIncompatibility } from "./helper";
import type { BDSVersions } from "./types";
import { SaveWorkspaceContent } from "./content_saver";
import { resolve } from "node:path";
import { GENERATORS } from "./flags";
//@ts-expect-error JS i know
import { GENERAL_README } from "../DOCUMENTATION/gen.mjs";
import { createPost } from "./discord";
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

async function Main(): Promise<number>{
    console.warn(DEBUG, ALWAYS_OVERWRITE);
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////

    ///////////////////////// CHECKS FOR NEW AVAILABLE BDS RELEASES
    
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////


    // Fetch Current BDS Versions
    const versions = await FetchJson<BDSVersions>(LINK_BDS_VERSIONS);
    if(!versions) 
        return Panic("Failed to get current versions");


    //Compare with already generated data and check if any new versions has been released
    const checkResults = await GetRepositoryVersionIncompatibility(versions);
    if(!checkResults) 
        return Success("All is up to date . . .");


    FILE_CONTENT_CURRENT_EXIST["version"] = (checkResults.usePreview?checkResults.version:GetEngineVersion(checkResults.version));
    FILE_CONTENT_CURRENT_EXIST["build-version"] = checkResults.version;

    // Login and Checkout that specific branch
    group(`Branch checkout: ${checkResults.branch} IsForced: ${true}`);

    let failed = await GithubCheckoutBranch(checkResults.branch, true);
    if(failed)
        return Panic(`Failed to checkout branch: ${checkResults.branch}`);
    groupEnd();


    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////

    ///////////////////////// CHECKS DONE -> START SAVING CONTENT
    
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////


    // Load Required File For Later Use
    failed = await SaveWorkspaceContent();
    if(failed)
        return Panic("Failed to save workspace content");


    // Now we should clear whole working directory, so we could upload generated files
    // Commented bc its dangerous to run this on local machine so please be sure its executed only via Github Action
    // Maybe Add some checks for GITHUB specific ENV FILES like GITHUB_TOKEN or something
    if(IS_GITHUB_ACTION){
        group("Clear Repo Brute force")
        // Fast System Deletion
        //let result = await InvokeProcess("cmd", ["/c", "rd /s /q node_modules"]);
        
        //if(result.exitCode !== 0)
            //return Panic((result.error as string)??"Failed to system remove node_modules");

        for await(const entry of DirectoryTreeRemoval(
            ".",
            (f)=>{
                // We can just ignore node_modules bc they are in .gitignore anyway
                return f.startsWith(".git") || f.startsWith("node_modules");
            }
            ))
        {
            console.log("[Entry cleared] entry: " + entry);
        }
        groupEnd();
    }


    
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////

    ///////////// REPOSITORY IS BRAND NEW AND READY TO GENERATE CONTENT
    
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////


    
    // Once we cleared all the stuff, we should write updated version of .gitignore 
    failed = await WriteFile(FILE_NAME_GITIGNORE, FILE_CONTENT_GITIGNORE);
    if(failed)
        return Panic("Failed to write .gitignore file");


    // Fetch BDS Content
    group(`Download of Bedrock Dedicated Server -> ${BDS_OUTDIR_PATH}`);
    failed = await DownloadZipFile(`${LINK_BDS_CDN}/bin-${PLATFORM}${checkResults.usePreview?"-preview":""}/bedrock-server-${checkResults.version}.zip`, BDS_OUTDIR_PATH);
    if(failed) 
        return Panic("Failed to download BDS");

    console.log("Bedrock Dedicated Server Downloaded Successfully");
    groupEnd();


    
    
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////

    ///////////// BDS IS DOWNLOADED AND IS READY FOR EXECUTION
    
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////


    // Add Test config to generate metadata
    //await writeFile(resolve(BDS_OUTDIR_PATH, FILE_NAME_BDS_TEST_CONFIG), FILE_CONTENT_BDS_TEST_CONFIG);
    failed = await WriteFile(resolve(BDS_OUTDIR_PATH, FILE_NAME_BDS_TEST_CONFIG), FILE_CONTENT_BDS_TEST_CONFIG);
    if(failed)
        return Panic("Failed to write test_config.json");




    // Execute BDS Executable
    group(`Running Bedrock Dedicated Server -> ${BDS_OUTDIR_PATH}`);
    let exeSuccessful = await InvokeProcess(resolve(BDS_OUTDIR_PATH, FILE_NAME_BDS_BINARY), [], 60_000); //1min limit
    if(exeSuccessful.exitCode)
        return Panic("Failed to invoke BDS with test_config.json: " + exeSuccessful.error);

    console.log("BDS has quit Successfully");
    groupEnd();

    
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////

    ///////////// METADATA GENERATORS, TRANSFORMERS AND MOVERS
    
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////

    // Process All Related Generator Flag Workers
    console.log(`${GENERATORS.length} Generators Flags . . .`);
    let temp = 0;
    for (const flag of GENERATORS) {
        group(`[${++temp} / ${GENERATORS.length}] Generator ${flag.flagId}`);

        failed = await flag.method(BDS_OUTDIR_PATH).then(()=>0,Panic);

        if(failed)
            return Panic("Generator Failed " + flag.flagId);

        // Once generator ends, we can assign the generator flag to exist.json
        FILE_CONTENT_CURRENT_EXIST.flags.push(flag.flagId);

        groupEnd();
    }


    // At the end write the exist.json content
    group("Writing " + FILE_NAME_GITHUB_REPO_EXISTS);
    // TODO: fix
    (FILE_CONTENT_CURRENT_EXIST as any).test = Math.random();
    const existContent = JSON.stringify(FILE_CONTENT_CURRENT_EXIST, null, 3);
    failed = await WriteFile(FILE_NAME_GITHUB_REPO_EXISTS, existContent);

    if(failed)
        return Panic("Failed to write exist.json file");

    console.log(existContent);
    groupEnd();
    
    failed = await WriteFile(FILE_NAME_GITHUB_README, GENERAL_README);
    if(failed)
        return Panic("Failed to write README.md file");

    failed = await createPost("1150152535475240991","Hello World").then(()=>0, Panic);
    if(failed)
        return Panic("Failed to post on discord");

    // Commit changes and force push
    group("Commit & Push -> " + checkResults.branch);
    failed = await GithubCommitAndPush(checkResults.branch, checkResults.version, checkResults.usePreview);
    if(failed) 
        return Panic("Failed to commit and push");
    
    // There is no need to create new branch
    if(ALWAYS_OVERWRITE || checkResults.usePreview){
        groupEnd();
        return 0;
    }

    // Create New Branch for stable release
    failed = await GithubPostNewBranch(`${checkResults.branch}-${GetEngineVersion(checkResults.version)}`);
    if(failed)
        return Panic("Failed to post new branch");


    groupEnd();
    return 0;
};