import { existsSync, readdirSync } from "node:fs";
import { readFile, rm, rmdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { Panic } from "./utils";

export async function * DirectoryTreeRemoval(dir: string, method: (file: string)=>boolean): AsyncGenerator<string, number> {
    let i = 0;
    const tasks: PromiseLike<any>[] = [];
    for(const file of FileTree(dir)) {
        if(method(file)) {
            continue;
        }
        i++;
        tasks.push(rm(resolve(dir, file)));
        yield file;
    }
    console.log("Removed: " + tasks.length);
    await Promise.all(tasks);
    
    // Have to be synced, bc we have to be sure the directory it self is empty before its removal
    for(const directory of DirectoryTree(dir)) {
        if(method(directory))  {
            continue;
        }
        i++;
        await rmdir(resolve(dir, directory));
        yield directory;
    }
    return i;
}

export function *FileTree(base: string, paths: string[] = []): Generator<string>{
    for (const entry of readdirSync([base,...paths].join("/"),{withFileTypes:true})) {
        if(entry.isFile()) yield [...paths,entry.name].join("/");
        else if(entry.isDirectory()) yield*FileTree(base,[...paths,entry.name]);
    }
}

export function *DirectoryTree(base: string, paths: string[] = []): Generator<string>{
    for (const entry of readdirSync([base,...paths].join("/"),{withFileTypes:true})) {
        if(entry.isDirectory()) {
            yield * DirectoryTree(base,[...paths,entry.name]);
            yield [...paths,entry.name,""].join("/");
        }
    }
}

export async function ReadFile(fileName: string): Promise<Buffer | null> {
    return await readFile(fileName).catch(e=>null);
}
export async function WriteFile(fileName: string, data: string | Buffer): Promise<number>{
    return await writeFile(fileName, data).then(e=>0, Panic);
}
export async function ReadJsonFile<T = object>(fileName: string): Promise<T | null> {
    return ReadFile(fileName).then(e=>e?JSON.parse(e.toString()):e, ()=>null);
}
export function PathExists(name: string){return existsSync(name);}