import { readFileSync } from "fs";
import { platform } from "os";
import { resolve } from "path";
import { env } from "process";

/**
 * @typedef {`${number}.${number}.${number}.${number}`} VersionFull
 * @typedef {`${number}.${number}.${number}`} VersionEngine
 * @typedef {VersionEngine | VersionFull} Version
 */

export const ALWAYS_OVERWRITE = env["ALWAYS_OVERWRITE"]??false;
export const PLATFORM = platform()=="win32"?"win":"linux";
export const DEBUG = env["DEBUG_MODE"]?true:false;
export const DISCORD_TOKEN = env["DISCORD_TOKEN"];
export const IS_GITHUB_ACTION = env["GITHUB_WORKFLOW"]?true:false;
export const BDS_OUTDIR_PATH = "./bin";
export const LINK_BDS_VERSIONS = "https://raw.githubusercontent.com/Bedrock-OSS/BDS-Versions/main/versions.json";
export const LINK_BDS_CDN = `https://www.minecraft.net/bedrockdedicatedserver`;
export const GITHUB_REPO_NAME = env["GITHUB_REPOSITORY"]??"bedrock-apis/bds-docs";
export const LOGIN_AS_NAME = "Metadata Generator";
export const LOGIN_AS_EMAIL = "metadatagenerator@fakemail.com"
export const GITHUB_STABLE_BRANCH_NAME = `stable`;
export const GITHUB_PREVIEW_BRAMCH_NAME = `preview`;
/**@type {<T extends VersionEngine = VersionEngine>(engine: T)=>`${GITHUB_STABLE_BRANCH_NAME}-${T}`} */
export const GITHUB_STABLE_VERSIONED_BRANCH_NAME = (engine)=>`${GITHUB_STABLE_BRANCH_NAME}-${engine}`;
export const LINK_GITHUB_DOMAIN = "https://raw.githubusercontent.com";
/**@type {`${typeof LINK_GITHUB_DOMAIN}/${typeof GITHUB_REPO_NAME}`} */
export const LINK_GITHUB_REPO = `${LINK_GITHUB_DOMAIN}/${GITHUB_REPO_NAME}`;
export const FILE_NAME_GITHUB_REPO_EXISTS = "exist.json";
export const FILE_NAME_GITHUB_README = "README.md";
export const FILE_NAME_BDS_TEST_CONFIG = "test_config.json"
export const FILE_NAME_BDS_BINARY = "bedrock_server"; //In general, .exe is not valid on linux platforms
export const FILE_NAME_GITIGNORE = ".gitignore";
export const FILE_CONTENT_BDS_TEST_CONFIG = JSON.stringify({generate_documentation: true});
export const FILE_CONTENT_GITIGNORE = readFileSync(resolve(import.meta.dirname, "..", FILE_NAME_GITIGNORE)).toString();
export const WORKING_DIRECTORY = DEBUG?((env.HOMEDRIVE??"") + (env.HOMEPATH??"") + "\\_test"):".";
export const TERMINAL_CREATE_GROUP = "::group::";
export const TERMINAL_END_GROUP = "::endgroup::";

if(DEBUG) console.log("[DEBUG] Enabled: " + WORKING_DIRECTORY);
/**
 * @type {{version:Version, "build-version":VersionFull, flags: string[]}}
 */
export const FILE_CONTENT_CURRENT_EXIST = {
    
//@ts-ignore
    version: "",
    
//@ts-ignore
    "build-version": "",
    "flags": []
};