import { platform } from "os";
import { env } from "process";

export const PLATFORM = platform()=="win32"?"win":"linux";
export const DEBUG = env["OPTIONS_DEBUG"]?true:false;
export const BDS_SRC_PATH = "./bds";
export const LINK_BDS_VERSIONS = "https://raw.githubusercontent.com/Bedrock-OSS/BDS-Versions/main/versions.json";
export const GITHUB_REPO_NAME = env["OPTIONS_REPO"]??"conmaster2112/bds-docs";
export const FILE_NAME_GITHUB_REPO_EXISTS = "exist.json";
export const FILE_NAME_BDS_TEST_CONFIG = "test_config.json"
export const FILE_CONTENT_BDS_TEST_CONFIG = JSON.stringify({generate_documentation: true});
export const FILE_CONTENT_GITIGNORE = `
bin/
bds/
node_modules/
private/
test/
`;



if(DEBUG) console.log("[DEBUG] Enabled");
