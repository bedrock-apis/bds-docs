import { readFile } from "node:fs/promises";
import { Buffer } from "node:buffer";
import { exec } from "node:child_process";
import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { ALWAYS_OVERWRITE, DEBUG, FILE_CONTENT_GITIGNORE, FILE_NAME_GITHUB_REPO_EXISTS, FILE_NAME_GITIGNORE, GITHUB_PREVIEW_BRAMCH_NAME, GITHUB_STABLE_BRANCH_NAME, LINK_BDS_VERSIONS, LINK_GITHUB_REPO, TERMINAL_CREATE_GROUP, TERMINAL_END_GROUP } from "./consts.js";
/**
 * @typedef {`${number}.${number}.${number}.${number}`} VersionFull
 * @typedef {`${number}.${number}.${number}` | VersionFull} Version
 * @typedef {{stable:VersionFull, preview: VersionFull, versions:VersionFull[], preview_versions: VersionFull[]}} BDSBuildVersions
 * @typedef {{linux:BDSBuildVersions, windows:BDSBuildVersions}} BDSVersions
 * @typedef {typeof GITHUB_PREVIEW_BRAMCH_NAME | typeof GITHUB_STABLE_BRANCH_NAME} BranchKind
 */
let isLoggedIn = false;
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
 * @param {number} [timeout=120]
 * @param {string} [cwd="."]
 * @returns {Promise<{exitCode: number, error?: any}>}
 * @throws {string}
 */
export async function ExecuteCommand(command, timeout, cwd = ".") {
    return new Promise((res, rej)=>{
        try {
            const child = exec(command,{cwd, timeout, windowsHide: true}, ()=>{});
            child.stdout?.pipe(process.stdout);
            child.stderr?.pipe(process.stderr);
            child.on("exit", (code)=>{
                res({exitCode: code??0});
            });
            child.on("error", (code)=>{
                res({exitCode: -1, error: code});
            });
        } catch (error) {
            res({exitCode: -1, error: error})
        }
    });
}
/**
 * 
 * @param {string} loc 
 */
export async function WriteGitIgnore(loc) {
    await writeFile(resolve(loc, FILE_NAME_GITIGNORE), FILE_CONTENT_GITIGNORE);
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
/**
 * @template T
 * @template {any[]} params
 * @param {(...p: params)=>T} method
 * @param {string} groupName 
 * @param {params} p 
 * @returns {T}
 */
export function TerminalGroup(method, groupName , ...p){
    console.log(TERMINAL_CREATE_GROUP + groupName);
    try {
        return method(...p);
    } finally {
        console.log(TERMINAL_END_GROUP);
    }
}
/**
 * @template T
 * @template {any[]} params
 * @param {(...p: params)=>PromiseLike<T>} method
 * @param {string} groupName 
 * @param {params} p 
 * @returns {Promise<T>}
 */
export async function TerminalGroupAsync(method, groupName , ...p){
    console.log(TERMINAL_CREATE_GROUP + groupName);
    try {
        return await method(...p);
    } finally {
        console.log(TERMINAL_END_GROUP);
    }
}

/**
 * 
 * @param {BranchKind} branch 
 */
export async function GithubChekoutBranch(branch) {
    
}
/**
 * 
 * @param {string} name 
 * @param {string} email 
 * @returns {Promise<boolean>}
 */
export async function GithubLoginAs(name, email) {
    if(isLoggedIn) return true;
    if(DEBUG) {
        console.log("[DEBUG] Login Skipped . . .");
        return true;
    }
    let result = await ExecuteCommand(`git config --global user.name "${name}"`);
    if(result.exitCode != 0) return false;

    result = await ExecuteCommand(`git config --global user.email "${email}"`);
    if(result.exitCode != 0) return false;

    console.log(`Successfully Logged in as '${name}'`);
    isLoggedIn = true;
    return true;
}