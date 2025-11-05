import { BRANCH_TO_UPDATE, DumperError, ErrorCodes, INSTALLATION_FOLDER, UNKNOWN_ERROR_CODE } from "./constants";
import {Installation} from "@bedrock-apis/bds-utils/install";
import {getLatestDownloadLink} from "@bedrock-apis/bds-utils/links";
import { platform } from "node:process";
import runnable from "./dump-metadata";
import Metadata from "./dump-metadata";

// Main entry point
async function main(): Promise<number>{
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
    console.info("Installed")
    
    let failed = await Metadata.Init(installation); 
    if(failed)
        throw new DumperError(ErrorCodes.SubModuleFailed,"Submodule failed with error code: " + failed);
    
    const values = await Promise.allSettled(Metadata.GetTasks(installation));

    console.log(values);
    console.log(await Array.fromAsync(Deno.readDir(".")));
    return 0;
}


// Entry Invocation
main()
   .catch(e => (console.error(e), e.CODE??UNKNOWN_ERROR_CODE))
   .then(Deno.exit);