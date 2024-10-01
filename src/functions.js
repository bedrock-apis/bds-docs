import { readFile } from "node:fs/promises";
import { Buffer } from "node:buffer";
import { exec } from "node:child_process";
import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { ALWAYS_OVERWRITE, FILE_NAME_GITHUB_REPO_EXISTS, GIT_IGNORE, GITHUB_PREVIEW_BRAMCH_NAME, GITHUB_STABLE_BRANCH_NAME, LINK_BDS_VERSIONS, LINK_GITHUB_REPO } from "./consts.js";
/**
 * @typedef {`${number}.${number}.${number}.${number}`} VersionFull
 * @typedef {`${number}.${number}.${number}` | VersionFull} Version
 * @typedef {{stable:VersionFull, preview: VersionFull, versions:VersionFull[], preview_versions: VersionFull[]}} BDSBuildVersions
 * @typedef {{linux:BDSBuildVersions, windows:BDSBuildVersions}} BDSVersions
 * @typedef {typeof GITHUB_PREVIEW_BRAMCH_NAME | typeof GITHUB_STABLE_BRANCH_NAME} BranchKind
 */
/**
 * 
 * @param {string} pathOrLink
 * @returns {Promise<Buffer|null>}
 */
export async function ResolveData(pathOrLink) {
    if(!pathOrLink.startsWith("http")){
        return readFile(pathOrLink);
    }
    else
    {
        const response = await fetch(pathOrLink);
        if (response.status == 404) return null;
        return Buffer.from(await response.arrayBuffer());
    }
}
/**
 * 
 * @param {string} command 
 * @param {string | undefined} [cwd=undefined]
 * @returns {Promise<string>}
 * @throws {string}
 */
export async function ExecuteCommand(command, cwd) {
    return new Promise((res, rej)=>{
        if(cwd){
            exec(command,{cwd}, (er, output, message)=>{
                if(er) rej(message);
                res(output);
            });
        }
        else{
            exec(command, (er, output, message)=>{
                if(er) rej(message);
                res(output);
            });
        }
    });
}
/**
 * 
 * @param {string} loc 
 */
export async function WriteGitIgnore(loc) {
    await writeFile(resolve(loc, "./.gitignore"), GIT_IGNORE.join("\r\n"));
}
/**
 * 
 * @param {BranchKind} branch
 * @returns {Promise<any | null>}
 */
export async function FetchExistFromBranch(branch) {
    const data = await ResolveData(`${LINK_GITHUB_REPO}/${branch}/${FILE_NAME_GITHUB_REPO_EXISTS}`);
    if(data == null) return null;
    return JSON.parse(data.toString("utf-8"));
}

/**
 * 
 * @param {BDSVersions} versions
 * @returns {Promise<{kind: BranchKind, version: VersionFull, isPreview: boolean} | null>}
 */
export async function VersionCheck(versions) {
    if(await CheckForVersionMatch(versions.windows.stable, GITHUB_STABLE_BRANCH_NAME)) return {
        kind: GITHUB_STABLE_BRANCH_NAME, 
        isPreview: false, 
        version: versions.windows.stable
    };
    else if(await CheckForVersionMatch(versions.windows.preview, GITHUB_PREVIEW_BRAMCH_NAME, true)) return {
        kind: GITHUB_PREVIEW_BRAMCH_NAME,
        isPreview: true, 
        version: versions.windows.preview
    };
    return null;
}
/**
 * 
 * @param {VersionFull} version
 * @param {BranchKind} branch
 * @param {boolean} [fullMatch=false] 
 */
export async function CheckForVersionMatch(version, branch, fullMatch = false) {
    let existsData = await FetchExistFromBranch(branch);
    return ALWAYS_OVERWRITE || (existsData && (existsData.version != (fullMatch?version:GetEngineVersion(version))));
}
/**
 * 
 * @returns {Promise<BDSVersions>}
 */
export async function FetchBDSVersions() { return (await fetch(LINK_BDS_VERSIONS)).json(); }
/**
 * @param {VersionFull} version 
 * @returns {Version}
 */
export function GetEngineVersion(version) {
    const [ma = 1, mi = 0, en = 0] = version.split(".").map(Number);
    return `${ma}.${mi}.${Math.floor(en/10) * 10}`;
}