import { Buffer } from "node:buffer";
import { exec } from "node:child_process";
import { rm, rmdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pipeline } from "node:stream/promises";
import { ALWAYS_OVERWRITE, DEBUG, FILE_CONTENT_GITIGNORE, FILE_NAME_GITHUB_REPO_EXISTS, FILE_NAME_GITIGNORE, GITHUB_PREVIEW_BRAMCH_NAME, GITHUB_STABLE_BRANCH_NAME, LINK_BDS_CDN, LINK_BDS_VERSIONS, LINK_GITHUB_REPO, LOGIN_AS_EMAIL, LOGIN_AS_NAME, PLATFORM, TERMINAL_CREATE_GROUP, TERMINAL_END_GROUP } from "./consts.js";
import { Extract } from "unzip-stream";
import { readdirSync } from "node:fs";
import { Transform } from "node:stream";
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
 * @param {number} [timeout]
 * @param {string} [cwd="."]
 * @returns {Promise<{exitCode: number, error?: any}>}
 * @throws {string}
 */
export async function ExecuteCommand(command, timeout = 1000, cwd = ".") {
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
 * @param {string} executable 
 * @param {number} [timeout]
 * @param {string} [cwd="."]
 * @returns {Promise<{exitCode: number, error?: any}>}
 * @throws {string}
 */
// FIXME: This doesn't really works on linux as linux doesn't have executables like ".exe"
export async function ExecuteExecutable(executable, timeout = 1000, cwd = ".") {
    if(PLATFORM == "win"){
        return ExecuteCommand(`cmd /c call ${executable}`, timeout, cwd);
    }
    else if(PLATFORM == "linux"){
        let result = await ExecuteCommand(`chmod +x ${executable}`, timeout, cwd);
        if(result.exitCode != 0) return result;
        return ExecuteCommand(`LD_LIBRARY_PATH=. ${executable}`, timeout, cwd);
    }
    return {exitCode: -1, error: "Unknown platform"}
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
    if(ALWAYS_OVERWRITE) console.warn("[VERSION CHECK SKIPPED] About to overwrite current repo branch: " + branch);
    return ALWAYS_OVERWRITE || (existsData && (existsData.version != (fullMatch?version:GetEngineVersion(version))));
}
/**
 * 
 * @returns {Promise<BDSVersions>}
 */
export async function FetchBDSVersions() { return (await fetch(LINK_BDS_VERSIONS)).json(); }
/**
 * @param {VersionFull} version 
 * @returns {VersionEngine}
 */
export function GetEngineVersion(version) {
    const [ma = 1, mi = 0, en = 0] = version.split(".").map(Number);
    return `${ma}.${mi}.${Math.floor(en/10) * 10}`;
}

/**
 * @typedef {{time: number, base?: GroupDef}} GroupDef
 * @type {GroupDef | undefined}
 */
let lastGroup = undefined;


export function group(content=""){
    lastGroup = {
        time: Date.now(),
        base: lastGroup
    }
    console.log(TERMINAL_CREATE_GROUP + content);
}
export function groupEnd(){
    const {time = 0, base} = lastGroup??{};
    lastGroup = base;
    console.log("Group Performed in " + (Date.now() - time) + "ms");
    console.log(TERMINAL_END_GROUP);
}
export function groupFinish(){
    while(lastGroup) groupEnd();
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
 * @param {BranchKind | `${BranchKind}-${VersionEngine}`} branch 
 */
export async function GithubPostNewBranch(branch) {
    if(DEBUG) {
        console.log("[DEBUG] Login Skipped . . .");
        return true;
    }
    // Make sure i am logged in
    const loginResult = await GithubLoginAs(LOGIN_AS_NAME, LOGIN_AS_EMAIL);
    if(!loginResult) {
        console.error(`Faild to login as ${LOGIN_AS_NAME} ${LOGIN_AS_EMAIL}`);
        return false;
    }

    // I have forgot for what is this usefull, but i know its important
    let cmd = `git checkout -b ${branch}`;

    let result = await ExecuteCommand(cmd);
    if(result.exitCode != 0) {
        console.error(`Fail to execute '${cmd}' command`);
        return false;
    }


    // Basic checkout command execution
    cmd = `git push -u ${branch}`;

    result = await ExecuteCommand(cmd);
    if(result.exitCode != 0)  {
        console.error(`Fail to execute '${cmd}' command`);
        return false;
    }

    return true;
}
/**
 * 
 * @param {BranchKind} branch 
 * @param {boolean} force 
 */
export async function GithubChekoutBranch(branch, force) {
    if(DEBUG) {
        console.log("[DEBUG] Login Skipped . . .");
        return true;
    }
    // Make sure i am logged in
    const loginResult = await GithubLoginAs(LOGIN_AS_NAME, LOGIN_AS_EMAIL);
    if(!loginResult) {
        console.error(`Faild to login as ${LOGIN_AS_NAME} ${LOGIN_AS_EMAIL}`);
        return false;
    }

    // I have forgot for what is this usefull, but i know its important
    let cmd = 'git fetch';

    let result = await ExecuteCommand(cmd);
    if(result.exitCode != 0) {
        console.error(`Fail to execute '${cmd}' command`);
        return false;
    }

    await ExecuteCommand("git branch -r -a");
    
    // Basic checkout command execution
    cmd = `git checkout ${branch}${force?" -f":""}`;

    result = await ExecuteCommand(cmd);
    if(result.exitCode != 0)  {
        console.error(`Fail to execute '${cmd}' command`);
        return false;
    }

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
 * @param {BranchKind} branch 
 * @param {boolean} isPreview 
 * @param {VersionFull} version 
 * @returns {Promise<boolean>}
 */
export async function GithubCommitAndPush(branch, version, isPreview) {
    if(DEBUG) {
        console.log("[DEBUG] Login Skipped . . .");
        return true;
    }
    
    let result = await ExecuteCommand("git add .");
    if(result.exitCode != 0) return false;

    result = await ExecuteCommand(`git commit -m \"New ${branch} v${isPreview?version:GetEngineVersion(version)}\"`);
    if(result.exitCode != 0) return false;

    result = await ExecuteCommand("git push --force origin " + branch);
    if(result.exitCode != 0) return false;
    
    return true;
}

/**
 * 
 * @param {VersionFull} version
 * @param {boolean} isPreview 
 * @param {string} outDir
 * -1 When Erros is present
 * @returns {Promise<number>}
 */
export async function FetchBDSSource(version, isPreview, outDir) {
    const response = await fetch(`${LINK_BDS_CDN}/bin-${PLATFORM}${isPreview?"-preview":""}/bedrock-server-${version}.zip`);
    if(!response.ok || !response.body) return -1;

    if (!response.ok || !response.body) return -1;

    const contentLength = response.headers.get('content-length');
    if (!contentLength) return -1;

    let filesCounr = 0;

    /**
     * @type {Transform}
     */
    //@ts-ignore
    const unzipStream = Extract({ path: outDir });

    //@ts-ignore
    unzipStream.unzipStream.on("entry",(p)=>{
        const isDir = p.isDirectory;
        if(isDir) console.log(`Downloading directory: ${p.path}`);
        else filesCounr++;
    })

    const task = new Promise((res,rej)=>{
        unzipStream.on("error", rej);
        unzipStream.on("finish", res);
    });


    await pipeline(
        response.body,
        unzipStream
    );
    await task;
    return filesCounr;
}

/**
 * 
 * @param {string} dir 
 * @param {(file: string)=>boolean} method
 * @returns {AsyncGenerator<string,number>}
 */
export async function * ClearWholeFolder(dir, method) {
    let i = 0;
    /**@type {PromiseLike<any>[]} */
    const tasks = [];
    for(const file of FileTree(dir)) {
        if(method(file)) {
            console.log("[Skipped Entry]: " + file);
            continue;
        }
        i++;
        tasks.push(rm(resolve(dir, file)));
        yield file;
    }
    await Promise.all(tasks);
    
    // Have to be synced, bc we have to be sure the directory it self is empty before its removal
    for(const directory of DirectoryTree(dir)) {
        if(method(directory))  {
            console.log("[Skipped Entry]: " + directory);
            continue;
        }
        i++;
        await rmdir(resolve(dir, directory));
        yield directory;
    }
    return i;
}
/**
 * 
 * @param {string} base 
 * @param {string[]} paths 
 * @returns {Generator<string>}
 */
export function *FileTree(base, paths = []){
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
export function *DirectoryTree(base, paths = []){
    for (const entry of readdirSync([base,...paths].join("/"),{withFileTypes:true})) {
        if(entry.isDirectory()) {
            yield * DirectoryTree(base,[...paths,entry.name]);
            yield [...paths,entry.name,""].join("/");
        }
    }
}