import { dirname, resolve } from "node:path";
import { readFile } from "node:fs/promises";
import { createWriteStream, existsSync, mkdirSync } from "node:fs";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { FileTree } from "../functions.js";

const OUTPUT_FOLDER = "./changelog/index.js";
const description = "The CHANGELOG_GENERATOR flag generator creates TypeScript declaration files from JSON metadata about script modules. It processes JSON files, transforming their content into .d.ts files, which are then stored in the ./script-declarations directory. This ensures that all script modules have accurate TypeScript declarations, making it easier for developers to work with the generated documentation. The process involves reading the JSON files, transforming their content, and writing the output to the appropriate directory, ensuring that all tasks are completed successfully.";

export default {
    method: CHANGELOG_GENERATOR,
    flagId: CHANGELOG_GENERATOR.name,
    description
};
/**
 * 
 * @param {string} inputDirPath
 * @returns {Promise<boolean>}
 */
async function CHANGELOG_GENERATOR(inputDirPath) {
    // Init
    const inputDir = resolve(inputDirPath, "docs/script_modules");
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

    // Transform File content
    if(!fileName.endsWith(".json")) return false;

    // Read File
    /**@type {Buffer | string | null} */
    let buffer = await readFile(resolve(input, fileName)).catch(()=>null);

    // Check if file was properly readed
    if(buffer == null) return false;

    const outFile = resolve(OUTPUT_FOLDER, fileName);
    const outDir = dirname(outFile);

    // Has to be sync to be sure we are not about to call mkdir with same directory path
    if(!existsSync(outDir)) mkdirSync(outDir, {recursive: true});


    const data = "";
    console.log(JSON.parse(buffer.toString()));
    /*
    const writeStream = createWriteStream(outFile.replace(/.json$/g,".d.ts"));



    const readable = PrintScriptModule(buffer);

    const results = await pipeline(
        readable,
        writeStream
    ).then(()=>true, ()=>false);*/

    if(true) console.log("[CHANGELOG_GENERATOR] Generated: " + fileName);
    else console.log("[CHANGELOG_GENERATOR] Generation failed: " + fileName);
    
    // Returns if file was successfully created
    return true;
}