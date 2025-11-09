import { BRANCH_TO_UPDATE, DumperError, ErrorCodes, INSTALLATION_FOLDER, IS_GITHUB_ACTION, UNKNOWN_ERROR_CODE } from "./constants";
import {Installation} from "@bedrock-apis/bds-utils/install";
import {getLatestDownloadLink} from "@bedrock-apis/bds-utils/links";
import { platform } from "node:process";
import Metadata from "./dump-metadata";

// Main entry point
async function main(): Promise<number>{
    console.log("Is github action:", IS_GITHUB_ACTION);
    if(platform !== "win32" && platform !== "linux")
        throw new DumperError(ErrorCodes.UnsupportedPlatform, `Unknown OS platform: ${platform}`);

    const link = await getLatestDownloadLink({
        is_preview: BRANCH_TO_UPDATE === "preview",
        platform: platform
    });

    if(!link) throw new DumperError(ErrorCodes.UnavailableInstallationLink, `Link not available branch:${BRANCH_TO_UPDATE} platform:${platform}`);
    console.info("Link found: " + link);

    const installation = new Installation(INSTALLATION_FOLDER);
    console.info("Installation started");
    await installation.installFromURL(link);
    console.info("Installed");
    
    let failed = await Metadata.Init(installation); 
    if(failed)
        throw new DumperError(ErrorCodes.SubModuleFailed, "Submodule failed with error code: " + failed);
    
    for(const promise of Metadata.GetTasks(installation)) await promise;
    return 0;
}


// Entry Invocation
main()
   .catch(e => (console.error(e), e.CODE??UNKNOWN_ERROR_CODE))
   .then(Deno.exit);