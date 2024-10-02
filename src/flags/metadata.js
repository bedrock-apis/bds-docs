import { dirname, resolve } from "node:path";
import { FileTree } from "../functions.js";
import { readFile, writeFile } from "node:fs/promises";
import { existsSync, mkdirSync } from "node:fs";

/**
 * 
 * @param {string} inputDirPath
 * @returns {Promise<boolean>}
 */
export async function METADATA_WORKER(inputDirPath) {
    // Init
    const inputDir = resolve(inputDirPath, "docs");
    const tasks = [];

    // Task Factory for each file in the path tree
    for (const file of FileTree(inputDir)) tasks.push(
        Task(inputDir, file).catch(()=>false)
    );

    // Return Only Succesfull Creations
    const results = (await Promise.all(tasks)).filter(s=>s);

    // Check if all tasks has successfully ended.
    return tasks.length == results.length;
}
/**
 * @param {string} input
 * @param {string} fileName
 * @returns {Promise<boolean>}
 */
async function Task(input,fileName) {

    // Read File
    /**@type {Buffer | string | null} */
    let buffer = await readFile(resolve(input, fileName)).catch(()=>null);

    // Check if file was properly readed
    if(buffer == null) return false;

    // Transform File content
    if(fileName.endsWith(".json")) buffer = await TransformJsonModule(buffer);

    // Check if buffer is valid content
    if(buffer == null) return false;

    const outFile = resolve(METADATA_FOLDER, fileName);
    const outDir = dirname(outFile);

    // Has to be sync to be sure we are not about to call mkdir with same directory path
    if(!existsSync(outDir)) mkdirSync(outDir, {recursive: true});

    // Write File Content
    let results = await writeFile(
        outFile, 
        buffer
    ).then(()=>true, ()=>false);

    if(results) console.log("[METADATA] Generated: " + fileName);
    else console.log("[METADATA] Generate: " + fileName);
    
    // Returns if file was successfully created
    return results;
}

/**
 * @param {Buffer} input
 * @returns {Promise<Buffer | string>}
 */
async function TransformJsonModule(input) {
    // Parse Conent
    const data = JSON.parse(input.toString());
    // Check if content was object
    if(typeof data == "object"){
        // Remove "minecraft_version" property if possible
        if("minecraft_version" in data) delete data["minecraft_version"];
    }

    // Serialize object back to JSON
    return JSON.stringify(data, null, 4);
}


const METADATA_FOLDER = "./metadata";
METADATA_WORKER.FLAG_NAME = "metadata";