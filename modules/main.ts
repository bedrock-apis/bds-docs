import { BRANCH_TO_UPDATE, DumperError, ErrorCodes, EXISTS_FILE, INSTALLATION_FOLDER, UNKNOWN_ERROR_CODE } from "./constants";
import { Installation } from "@bedrock-apis/bds-utils/install";
import { getLatestBuildVersionFromOSS, getSpecificDownloadLinkOSS } from "@bedrock-apis/bds-utils/links";
import { platform } from "node:process";
import MetadataDumper from "./dump-metadata";
import { getEngineVersion, GithubUtils } from "./utils";
import TypePrinterDumper from "./dump-types";
import { TheDumper } from "./dumper";

// Entry Invocation
main()
    .catch(e => (console.error(e), e.CODE ?? UNKNOWN_ERROR_CODE))
    .then(Deno.exit);

// Main entry point
async function main(): Promise<number> {
    // Platform check
    if (platform !== "win32" && platform !== "linux")
        throw new DumperError(ErrorCodes.UnsupportedPlatform, `Unknown OS platform: ${platform}`);

    // Github setup
    let failed: number = 0;
    if ((failed = await GithubUtils.login())) return failed;
    if ((failed = await GithubUtils.initRepo())) return failed;
    if ((failed = await GithubUtils.checkoutBranch("stable", true))) return failed;
    GithubUtils.clear();

    const version = await getLatestBuildVersionFromOSS({
        preview: BRANCH_TO_UPDATE === "preview",
        platform: platform
    });

    if(!version)
        throw new DumperError(-1,"Failed to get latest build version for BDS via OSS versions");
    // BDS Setup
    const link = await getSpecificDownloadLinkOSS({
        preview: BRANCH_TO_UPDATE === "preview",
        platform: platform,
        version,
    });


    if (!link) throw new DumperError(ErrorCodes.UnavailableInstallationLink, `Link not available branch:${BRANCH_TO_UPDATE} platform:${platform}`);
    console.info("Link found: " + link);

    const installation = new Installation(INSTALLATION_FOLDER);
    if (!installation.getExecutableFile()) {
        console.info("No executable installing");
        await installation.installFromURL(link);
    } else await installation.load();

    const DUMPERS: TheDumper[] = [MetadataDumper, TypePrinterDumper];
    for (const dumper of DUMPERS)
        if ((failed = await dumper.init?.(installation) ?? 0)) return failed;

    for (const dumper of DUMPERS)
        if ((failed = await dumper.run?.(installation) ?? 0)) return failed;

    await Deno.writeFile(".gitignore", new TextEncoder().encode(`__*__`));
    await repoExists(version);
    await Deno.writeTextFile("contents.json", JSON.stringify(Array.from(Deno.readDirSync(".").filter(e => (!e.name.startsWith(".") && !e.name.startsWith("__")))), null, 3))
    if ((failed = await GithubUtils.commitAndPush("stable", "New message"))) return failed;
    return 0;
}

async function repoExists(version: string): Promise<number> {
    const data = {
        "version": BRANCH_TO_UPDATE === "preview"?version:getEngineVersion(version),
        "build-version": version,
    };
    return await Deno.writeTextFile(EXISTS_FILE, JSON.stringify(data, null, 3)).then(_=>0, _=>-1);
}
