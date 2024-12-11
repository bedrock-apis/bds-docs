import { dirname, resolve } from "node:path";
import { FileTree, Panic, ReadFile, WriteFile } from "../functions";
import { readFile, writeFile } from "node:fs/promises";
import { existsSync, mkdirSync } from "node:fs";

const OUTPUT_FOLDER = "./metadata";
const description = `This generator is moving BDS generated docs to **${OUTPUT_FOLDER}** and removes version from all JSON modules so github doesn't generates usless diff for every version change.`;

export default {
    method: METADATA,
    flagId: METADATA.name,
    description: description
};

async function METADATA(inputDirPath: string): Promise<number> {
    // Init
    const inputDir = resolve(inputDirPath, "docs");
    const tasks = [];

    // Task Factory for each file in the path tree
    for (const file of FileTree(inputDir)) tasks.push(
        Task(inputDir, file).catch(()=>false)
    );

    // Return Only Successful Creations
    const results = (await Promise.all(tasks)).filter(s=>s);

    // Check if all tasks has successfully ended.
    return tasks.length == results.length?0:-1;
}

async function Task(input: string, fileName: string): Promise<number> {

    // Read File
    let buffer: string | Buffer | null = await ReadFile(resolve(input, fileName)).catch(()=>null);

    // Check if file was properly read
    if(buffer == null)
        return Panic("Failed to load file: " + fileName);

    // Transform File content
    if(fileName.endsWith(".json")) 
        buffer = await TransformJsonModule(buffer.toString()).catch(e=>null);

    // Check if buffer is valid content
    if(buffer == null) 
        return Panic("Failed to transform file: " + fileName);

    const outFile = resolve(OUTPUT_FOLDER, fileName);
    const outDir = dirname(outFile);

    // Has to be sync to be sure we are not about to call mkdir with same directory path
    if(!existsSync(outDir)) mkdirSync(outDir, {recursive: true});

    // Write File Content
    let results = await WriteFile(
        outFile, 
        buffer
    );

    if(!results) console.log("[METADATA] Generated: " + fileName);
    else console.log("[METADATA] Generation failed: " + fileName);
    
    // Returns if file was successfully created
    return results;
}

async function TransformJsonModule(input: string): Promise<string> {
    // Parse Content
    const data = JSON.parse(input);
    // Check if content was object
    if(typeof data == "object"){
        // Remove "minecraft_version" property if possible
        if("minecraft_version" in data) delete data["minecraft_version"];
    }

    // Serialize object back to JSON
    return JSON.stringify(data, null, 4);
}

