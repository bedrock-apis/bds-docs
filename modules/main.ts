import { BRANCH_TO_UPDATE, CONTENTS_FILE_NAME, DumperError, ErrorCodes, EXISTS_FILE, GIT_ATTRIBUTES_DATA, GIT_ATTRIBUTES_FILE_NAME, GIT_IGNORE_DATA, GIT_IGNORE_FILE_NAME, INSTALLATION_FOLDER, TO_JSON_FORMAT, UNKNOWN_ERROR_CODE } from "./constants";
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
    if ((failed = await GithubUtils.checkoutBranch(BRANCH_TO_UPDATE ?? "stable", true))) return failed;
    GithubUtils.clear();

    const version = await getLatestBuildVersionFromOSS({
        preview: BRANCH_TO_UPDATE === "preview",
        platform: platform
    });

    if (!version)
        throw new DumperError(-1, "Failed to get latest build version for BDS via OSS versions");
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

    return await finialize(version);
}

async function finialize(version: string): Promise<number> {
    const BASED_VERSION = BRANCH_TO_UPDATE === "preview" ? version : getEngineVersion(version);
    let failed = 0;
    if ((failed = await Deno.writeTextFile(EXISTS_FILE, TO_JSON_FORMAT({
        "version": BASED_VERSION,
        "build-version": version,
    })).then(_ => 0, _ => -1))) return failed;

    const list = Deno.readDirSync(".")
        .filter(({ name, isSymlink }) => !(name.startsWith(".") || name.startsWith("__") || isSymlink))
        .map(_ => _.isDirectory ? _.name + "/" : _.name)
        .toArray();
    await Deno.writeTextFile(CONTENTS_FILE_NAME, TO_JSON_FORMAT(list.sort()));
    await Deno.writeTextFile(GIT_IGNORE_FILE_NAME, GIT_IGNORE_DATA);
    await Deno.writeTextFile(GIT_ATTRIBUTES_FILE_NAME, GIT_ATTRIBUTES_DATA);
    if ((failed = await GithubUtils.commitAndPush(BRANCH_TO_UPDATE ?? "stable", "New Update - " + BASED_VERSION))) return failed;
    if (BRANCH_TO_UPDATE !== "preview") await GithubUtils.postNewBranch("stable-" + BASED_VERSION);
    return failed;
}