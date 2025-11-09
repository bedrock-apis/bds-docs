import { BRANCH_TO_UPDATE, DumperError, ErrorCodes, INSTALLATION_FOLDER, UNKNOWN_ERROR_CODE } from "./constants";
import { Installation } from "@bedrock-apis/bds-utils/install";
import { getLatestDownloadLink } from "@bedrock-apis/bds-utils/links";
import { platform } from "node:process";
import Metadata from "./dump-metadata";
import { GithubUtils } from "./utils";

// Main entry point
async function main(): Promise<number> {
    if (platform !== "win32" && platform !== "linux")
        throw new DumperError(ErrorCodes.UnsupportedPlatform, `Unknown OS platform: ${platform}`);

    let failed: number = 0;
    if((failed = await GithubUtils.login())) return failed;
    if((failed = await GithubUtils.initRepo())) return failed;
    if((failed = await GithubUtils.checkoutBranch("stable", true))) return failed;
    GithubUtils.clear();
    
    const link = await getLatestDownloadLink({
        is_preview: BRANCH_TO_UPDATE === "preview",
        platform: platform
    });

    if (!link) throw new DumperError(ErrorCodes.UnavailableInstallationLink, `Link not available branch:${BRANCH_TO_UPDATE} platform:${platform}`);
    console.info("Link found: " + link);

    const installation = new Installation(INSTALLATION_FOLDER);
    if (!installation.getExecutableFile()) {
        console.info("No executable installing");
        await installation.installFromURL(link);
    } else await installation.load();

    failed = await Metadata.Init(installation);
    if (failed)
        throw new DumperError(ErrorCodes.SubModuleFailed, "Submodule failed with error code: " + failed);

    for (const promise of Metadata.GetTasks(installation)) await promise;

    await Deno.writeFile(".gitignore", new TextEncoder().encode(`__*__`));
    if((failed = await GithubUtils.commitAndPush("stable", "New message"))) return failed;
    return 0;
}


// Entry Invocation
main()
    .catch(e => (console.error(e), e.CODE ?? UNKNOWN_ERROR_CODE))
    .then(Deno.exit);