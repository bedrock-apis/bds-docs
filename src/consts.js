import { platform } from "os";
import { env } from "process";

/**
 * @type {<T extends number>()=>T}
 */

/**@type {string[]} */
export const GIT_IGNORE = [];
export const ALWAYS_OVERWRITE = env["ALWAYS_OVERWRITE"]??false;
export const PLATFORM = platform()=="win32"?"win":"linux";
export const DEBUG = env["OPTIONS_DEBUG"]?true:false;
export const BDS_SRC_PATH = "./bds";
export const LINK_BDS_VERSIONS = "https://raw.githubusercontent.com/Bedrock-OSS/BDS-Versions/main/versions.json";
export const GITHUB_REPO_NAME = env["GITHUB_REPOSITORY"]??"bedrock-apis/bds-docs";
export const GITHUB_STABLE_BRANCH_NAME = `stable`;
export const GITHUB_PREVIEW_BRAMCH_NAME = `preview`;
/**@type {<T1 extends number, T2 extends number, T3 extends number>(ma: T1, mi: T2, en: T3)=>`${GITHUB_STABLE_BRANCH_NAME}-${T1}.${T2}.${T3}`} */
export const GITHUB_STABLE_VERSIONED_BRANCH_NAME = (ma, mi, en)=>`${GITHUB_STABLE_BRANCH_NAME}-${ma}.${mi}.${en}`;
export const LINK_GITHUB_DOMAIN = "https://raw.githubusercontent.com";
/**@type {`${typeof LINK_GITHUB_DOMAIN}/${typeof GITHUB_REPO_NAME}`} */
export const LINK_GITHUB_REPO = `${LINK_GITHUB_DOMAIN}/${GITHUB_REPO_NAME}`;
export const FILE_NAME_GITHUB_REPO_EXISTS = "exist.json";
export const FILE_NAME_BDS_TEST_CONFIG = "test_config.json"
export const FILE_CONTENT_BDS_TEST_CONFIG = JSON.stringify({generate_documentation: true});
export const WORKING_DIRECTORY = DEBUG?((env.HOMEDRIVE??"") + (env.HOMEPATH??"") + "\\_test"):".";
export const FILE_CONTENT_GITIGNORE = `
bin/
bds/
node_modules/
private/
test/
`;
if(DEBUG) console.log("[DEBUG] Enabled: " + WORKING_DIRECTORY);
/**
 * @type {{version:string, "build-version":string, flags: string[]}}
 */
export const CURRENT_CONFIG = {
    version: "",
    "build-version": "",
    "flags": []
};