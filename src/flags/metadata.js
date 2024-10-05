import { dirname, resolve } from "node:path";
import { FileTree } from "../functions.js";
import { readFile, writeFile } from "node:fs/promises";
import { existsSync, mkdirSync } from "node:fs";

const OUTPUT_FOLDER = "./metadata";
const description = `This generator is moving BDS generated docs to **${OUTPUT_FOLDER}** and removes version from all JSON modules so github doesn't generates usless diff for every version change.`;

export default {
    method: METADATA,
    flagId: METADATA.name,
    description: description
};
/**
 * 
 * @param {string} inputDirPath
 * @returns {Promise<boolean>}
 */
async function METADATA(inputDirPath) {
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

    const outFile = resolve(OUTPUT_FOLDER, fileName);
    const outDir = dirname(outFile);

    // Has to be sync to be sure we are not about to call mkdir with same directory path
    if(!existsSync(outDir)) mkdirSync(outDir, {recursive: true});

    // Write File Content
    let results = await writeFile(
        outFile, 
        buffer
    ).then(()=>true, ()=>false);

    if(results) console.log("[METADATA] Generated: " + fileName);
    else console.log("[METADATA] Generation failed: " + fileName);
    
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

