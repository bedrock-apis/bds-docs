import { BRANCH_TO_UPDATE, DumperError, ErrorCodes, INSTALLATION_FOLDER, UNKNOWN_ERROR_CODE } from "./constants";
import { Installation } from "@bedrock-apis/bds-utils/install";
import { getLatestDownloadLink } from "@bedrock-apis/bds-utils/links";
import { platform } from "node:process";
import Metadata from "./dump-metadata";
import MetadataDumper from "./dump-metadata";
import { GithubUtils } from "./utils";
import TypePrinterDumper from "./dump-types";
import { TheDumper } from "./dumper";

// Main entry point
async function main(): Promise<number> {
    // Platform check
    if (platform !== "win32" && platform !== "linux")
        throw new DumperError(ErrorCodes.UnsupportedPlatform, `Unknown OS platform: ${platform}`);

    // Github setup
    let failed: number = 0;
    if((failed = await GithubUtils.login())) return failed;
    if((failed = await GithubUtils.initRepo())) return failed;
    if((failed = await GithubUtils.checkoutBranch("stable", true))) return failed;
    GithubUtils.clear();


    // BDS Setup
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

    const DUMPERS: TheDumper[] = [MetadataDumper, TypePrinterDumper];
    for(const dumper of DUMPERS)
        if((failed = await dumper.init?.(installation)??0)) return failed;

    for(const dumper of DUMPERS)
        if((failed = await dumper.run?.(installation)??0)) return failed;
    
    await Deno.writeFile(".gitignore", new TextEncoder().encode(`__*__`));
    await Deno.writeTextFile("contents.json", JSON.stringify(Deno.readDirSync(".").filter(e=>(e.isDirectory && !e.name.startsWith(".") && !e.name.startsWith("__"))), null, 3))
    if((failed = await GithubUtils.commitAndPush("stable", "New message"))) return failed;
    return 0;
}


// Entry Invocation
main()
    .catch(e => (console.error(e), e.CODE ?? UNKNOWN_ERROR_CODE))
    .then(Deno.exit);