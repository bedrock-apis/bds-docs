import { dirname, resolve } from "node:path";
import { readFile } from "node:fs/promises";
import { createWriteStream, existsSync, mkdirSync } from "node:fs";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { Printer } from "./ts-declarations/printers.js";
import { FileTree } from "../functions.js";

const OUTPUT_FOLDER = "./script-declerations";
/**
 * 
 * @param {string} inputDirPath
 * @returns {Promise<boolean>}
 */
export async function SCRIPT_DECLARATIONS(inputDirPath) {
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

    // Read File
    /**@type {Buffer | string | null} */
    let buffer = await readFile(resolve(input, fileName)).catch(()=>null);

    // Check if file was properly readed
    if(buffer == null) return false;

    // Transform File content
    if(!fileName.endsWith(".json")) return false;

    // Check if buffer is valid content
    if(buffer == null) return false;



    const outFile = resolve(OUTPUT_FOLDER, fileName);
    const outDir = dirname(outFile);

    // Has to be sync to be sure we are not about to call mkdir with same directory path
    if(!existsSync(outDir)) mkdirSync(outDir, {recursive: true});


    const writeStream = createWriteStream(outFile.replace(/.json$/g,".d.ts"));

    const readable = PrintScriptModule(buffer);

    const results = await pipeline(
        readable,
        writeStream
    ).then(()=>true, ()=>false);

    if(results) console.log("[SCRIPT_DECLARATIONS] Generated: " + fileName);
    else console.log("[SCRIPT_DECLARATIONS] Generation failed: " + fileName);
    
    // Returns if file was successfully created
    return results;
}

/**
 * @param {Buffer} input
 */
function PrintScriptModule(input) {
    // Parse Conent
    const data = JSON.parse(input.toString());
    // Check if content was object
    if(typeof data != "object") throw new TypeError("Expected JSON module is not an instance of object.s");

    return Readable.from(Printer(data));
}