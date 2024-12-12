import { dirname, resolve } from "node:path";
import { createWriteStream, existsSync, mkdirSync } from "node:fs";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { Printer } from "./ts-declarations/printers";
import { FileTree, Panic, ReadFile } from "../functions";

const OUTPUT_FOLDER = "./script-declarations";
const description = "The SCRIPT_DECLARATIONS flag generator creates TypeScript declaration files from JSON metadata about script modules. It processes JSON files, transforming their content into .d.ts files, which are then stored in the ./script-declarations directory. This ensures that all script modules have accurate TypeScript declarations, making it easier for developers to work with the generated documentation. The process involves reading the JSON files, transforming their content, and writing the output to the appropriate directory, ensuring that all tasks are completed successfully.";

export default {
    method: SCRIPT_DECLARATIONS,
    flagId: SCRIPT_DECLARATIONS.name,
    description
};


async function SCRIPT_DECLARATIONS(inputDirPath: string): Promise<number> {
    const inputDir = resolve(inputDirPath, "docs/script_modules");
    const tasks: Promise<number>[] = [];

    // Task Factory for each file in the path tree
    for (const file of FileTree(inputDir)) tasks.push(
        Task(inputDir, file).catch(()=>-1)
    );

    // Return Only Successful Creations
    const results = (await Promise.all(tasks)).filter(s=>!s);

    // Check if all tasks has successfully ended.
    return tasks.length === results.length?0:-1;
}

async function Task(input: string, fileName: string): Promise<number> {

    // Transform File content
    if(!fileName.endsWith(".json")) 
        return Panic("File name doesn't ends with '.json'");

    // Read File
    let buffer = await ReadFile(resolve(input, fileName));

    // Check if file was properly read
    if(buffer == null) 
        return Panic("Failed to read file: " + fileName);


    const outFile = resolve(OUTPUT_FOLDER, fileName);
    const outDir = dirname(outFile);

    // Has to be sync to be sure we are not about to call mkdir with same directory path
    if(!existsSync(outDir)) mkdirSync(outDir, {recursive: true});

    const writeStream = createWriteStream(outFile.replace(/.json$/g,".d.ts"));

    const readable = PrintScriptModule(buffer);
    if(!readable)
        return Panic("Failed to create readable from buffer");

    const results = await pipeline(
        readable,
        writeStream
    ).then(()=>0, Panic);

    if(results) console.log("[SCRIPT_DECLARATIONS] Generated: " + fileName);
    else console.log("[SCRIPT_DECLARATIONS] Generation failed: " + fileName);
    
    // Returns if file was successfully created
    return results;
}

function PrintScriptModule(input: Buffer): Readable | null {
    // Parse Content
    const data = JSON.parse(input.toString());

    // Check if content was object
    if(typeof data != "object") 
        return null;

    // throw new TypeError("Expected JSON module is not an instance of object.s");
    return Readable.from(Printer(data));
}