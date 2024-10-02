import { Buffer } from "node:buffer";
import { exec } from "node:child_process";
import { readdir, rm, rmdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pipeline } from "node:stream/promises";
import { ALWAYS_OVERWRITE, DEBUG, FILE_CONTENT_GITIGNORE, FILE_NAME_GITHUB_REPO_EXISTS, FILE_NAME_GITIGNORE, GITHUB_PREVIEW_BRAMCH_NAME, GITHUB_STABLE_BRANCH_NAME, LINK_BDS_CDN, LINK_BDS_VERSIONS, LINK_GITHUB_REPO, LOGIN_AS_EMAIL, LOGIN_AS_NAME, PLATFORM, TERMINAL_CREATE_GROUP, TERMINAL_END_GROUP } from "./consts.js";
import { Extract } from "unzip-stream";
import { readdirSync, rmSync } from "node:fs";
/**
 * @typedef {`${number}.${number}.${number}.${number}`} VersionFull
 * @typedef {`${number}.${number}.${number}`} VersionEngine
 * @typedef {VersionEngine | VersionFull} Version
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
export async function TryFetch(pathOrLink) {
    const response = await fetch(pathOrLink);
    if (response.status == 404) return null;
    return Buffer.from(await response.arrayBuffer());
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
        const child = exec(command,{cwd, timeout, windowsHide: true}, ()=>{});
        child.stdout?.pipe(process.stdout);
        child.stderr?.pipe(process.stderr);
        child.on("exit", (code)=>res({exitCode: code??0}));
        child.on("error", (code)=>res({exitCode: -1, error: code}));
        child.on("spawn", ()=>console.log("[Command Exec] '" + command + "'"));
    }).catch(error=>({errorCode: -1, error}));
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
    const data = await TryFetch(`${LINK_GITHUB_REPO}/${branch}/${FILE_NAME_GITHUB_REPO_EXISTS}`);
    if(data == null) return null;
    return JSON.parse(data.toString("utf-8"));
}

/**
 * 
 * @param {BDSVersions} versions
 * @returns {Promise<{branch: BranchKind, version: VersionFull, isPreview: boolean} | null>}
 */
export async function VersionCheck(versions) {
    if(await CheckForVersionMatch(versions.windows.stable, GITHUB_STABLE_BRANCH_NAME)) return {
        branch: GITHUB_STABLE_BRANCH_NAME, 
        isPreview: false, 
        version: versions.windows.stable
    };
    else if(await CheckForVersionMatch(versions.windows.preview, GITHUB_PREVIEW_BRAMCH_NAME, true)) return {
        branch: GITHUB_PREVIEW_BRAMCH_NAME,
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

export function group(content=""){
    console.log(TERMINAL_CREATE_GROUP + content);
}
export function groupEnd(){
    console.log(TERMINAL_END_GROUP);
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
 * @param {boolean} force 
 */
export async function GithubChekoutBranch(branch, force) {
    group(`Branch checkout: ${branch} IsForced: ${force}`)

    // Make sure i am logged in
    const loginResult = await GithubLoginAs(LOGIN_AS_NAME, LOGIN_AS_EMAIL);
    if(!loginResult) {
        console.error(`Faild to login as ${LOGIN_AS_NAME} ${LOGIN_AS_EMAIL}`);
        groupEnd();
        return false;
    }

    // I have forgot for what is this usefull, but i know its important
    let cmd = 'git fetch';

    let result = await ExecuteCommand(cmd);
    if(result.exitCode != 0) {
        console.error(`Fail to execute '${cmd}' command`);
        groupEnd();
        return false;
    }


    // Basic checkout command execution
    cmd = `git checkout ${branch}${force?" -f":""}`;

    result = await ExecuteCommand(cmd);
    if(result.exitCode != 0)  {
        console.error(`Fail to execute '${cmd}' command`);
        groupEnd();
        return false;
    }

    groupEnd();
    return true;
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

/**
 * 
 * @param {VersionFull} version
 * @param {boolean} isPreview 
 * @param {string} outDir 
 */
export async function FetchBDSSource(version, isPreview, outDir) {
    const response = await fetch(`${LINK_BDS_CDN}/bin-${PLATFORM}${isPreview?"-preview":""}/bedrock-server-${version}.zip`);
    if(!response.ok || !response.body) return;

    //@ts-ignore As unzip-stream doesn't have types we have to ignore this line
    await pipeline(
        response.body,
        Extract({ outDir })
    );
}

/**
 * 
 * @param {string} dir 
 * @param {string} filter
 * @returns {Promise<number>}
 */
export async function ClearWholeFolder(dir, filter = "*") {
    let i = 0;
    /**@type {PromiseLike<any>[]} */
    const tasks = [];
    for(const file of FileTree(dir + "/")) {
        if(file.startsWith(filter)) {
            console.log(file);
            continue;
        }
        i++;
        tasks.push(rm(resolve(dir, file)));
    }
    await Promise.all(tasks);
    
    // Have to be synced, bc we have to be sure the directory it self is empty before its removal
    for(const directory of DirectoryTree(dir)) {
        if(directory.startsWith(filter))  {
            console.log(directory);
            continue;
        }
        i++
        await rmdir(resolve(dir, directory));
    }
    return i;
}
/**
 * 
 * @param {string} base 
 * @param {string[]} paths 
 * @returns {Generator<string>}
 */
function *FileTree(base, paths = []){
    for (const entry of readdirSync([base,...paths].join("/"),{withFileTypes:true})) {
        if(entry.isFile()) yield [...paths,entry.name].join("/");
        else if(entry.isDirectory()) yield*FileTree(base,[...paths,entry.name]);
    }
}

/**
 * 
 * @param {string} base 
 * @param {string[]} paths 
 * @returns {Generator<string>}
 */
function *DirectoryTree(base, paths = []){
    for (const entry of readdirSync([base,...paths].join("/"),{withFileTypes:true})) {
        if(entry.isDirectory()) {
            yield * DirectoryTree(base,[...paths,entry.name]);
            yield [...paths,entry.name].join("/");
        }
    }
}