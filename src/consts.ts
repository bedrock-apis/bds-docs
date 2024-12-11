import { readFileSync } from "node:fs";
import { platform } from "node:os";
import { dirname, resolve } from "node:path";
import { env } from "node:process";
import { ExistJson, VersionEngine } from "./types";

export const EDITOR_EXTENSION_UUID = "3222066e-79d0-4573-9e15-93472d32cbd5";
export const PROCESS_TIMEOUT = 5_000;
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
export const GITHUB_PREVIEW_BRANCH_NAME = `preview`;
export const GITHUB_STABLE_VERSIONED_BRANCH_NAME: <T extends VersionEngine>(engine: T)=>`${typeof GITHUB_STABLE_BRANCH_NAME}-${T}` = <T extends VersionEngine>(engine: T)=>`${GITHUB_STABLE_BRANCH_NAME}-${engine}`;
export const LINK_GITHUB_DOMAIN = "https://raw.githubusercontent.com";
export const LINK_GITHUB_REPO: `${typeof LINK_GITHUB_DOMAIN}/${typeof GITHUB_REPO_NAME}` = `${LINK_GITHUB_DOMAIN}/${GITHUB_REPO_NAME}`;
export const FILE_NAME_GITHUB_REPO_EXISTS = "exist.json";
export const FILE_NAME_GITHUB_README = "README.md";
export const FILE_NAME_BDS_TEST_CONFIG = "test_config.json"
export const FILE_NAME_BDS_BINARY = "bedrock_server"; //In general, .exe is not valid on linux platforms
export const FILE_NAME_GITIGNORE = ".gitignore";
export const FILE_CONTENT_BDS_TEST_CONFIG = JSON.stringify({generate_documentation: true});
export const FILE_CONTENT_GITIGNORE = readFileSync(FILE_NAME_GITIGNORE).toString();
export const WORKING_DIRECTORY = DEBUG?((env.HOMEDRIVE??"") + (env.HOMEPATH??"") + "\\_test"):".";
export const TERMINAL_CREATE_GROUP = "::group::";
export const TERMINAL_END_GROUP = "::endgroup::";
export const BUNDLER_OUTPUT = import.meta.dirname;
export const FILE_NAME_SCRIPT_API = "script_api.js";

if(DEBUG) console.log("[DEBUG] Enabled: " + WORKING_DIRECTORY);
export const FILE_CONTENT_CURRENT_EXIST: ExistJson = {
    version: "",
    "build-version": "",
    "flags": []
} as unknown as ExistJson;