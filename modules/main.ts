import { BRANCH_TO_UPDATE, DumperError, ErrorCodes, INSTALLATION_FOLDER, UNKNOWN_ERROR_CODE } from "./constants";
import {Installation} from "@bedrock-apis/bds-utils/install";
import {getLatestDownloadLink} from "@bedrock-apis/bds-utils/links";
import { platform } from "node:process";

// Main entry point
async function main(): Promise<number>{
    if(platform !== "win32" && platform !== "linux")
        throw new DumperError(ErrorCodes.UnsupportedPlatform, `Unknown OS platform: ${platform}`);

    const link = await getLatestDownloadLink({
        is_preview: BRANCH_TO_UPDATE === "preview",
        platform: platform
    });

    if(!link) throw new DumperError(ErrorCodes.UnavailableInstallationLink, `Link not available branch:${BRANCH_TO_UPDATE} platform:${platform}`);


    const installation = new Installation(INSTALLATION_FOLDER);
    await installation.installFromURL(link);
    const process = await installation.runWithTestConfig({
        generate_documentation: true,
        generate_api_metadata: true,
    }, []);


    const result = await process.wait().catch(_=>null);
    if(result === null)
        throw new DumperError(ErrorCodes.BedrockServerProcessCriticalExit, `BDS critical fail . . .`);

    if(result !== 0)
        throw new DumperError(ErrorCodes.BedrockServerProcessExitedWithErrorCode, `BDS run failed with exit code: ${result}`);

    console.log(Array.fromAsync(Deno.readDir(".")));
    return 0;
}


// Entry Invocation
main()
   .catch(e => (console.error(e), e.CODE??UNKNOWN_ERROR_CODE))
   .then(Deno.exit);