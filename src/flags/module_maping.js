import { resolve } from "node:path";
import { FileTree } from "../functions.js";
import { readFile } from "node:fs/promises";
import { FILE_CONTENT_CURRENT_EXIST } from "../consts.js";

/**
 * 
 * @param {string} inputDirPath
 * @returns {Promise<boolean>}
 */
export async function SCRIPT_MODULES_MAPPING(inputDirPath) {
    // Init
    const inputDir = resolve(inputDirPath, "docs/script_modules");
    const tasks = [];

    // Task Factory for each file in the path tree
    for (const file of FileTree(inputDir)) tasks.push(
        Task(inputDir, file).catch(()=>false)
    );

    // Return Only Succesfull Creations
    const results = (await Promise.all(tasks)).filter(s=>s);

    // NOTE: I know this method mutates the array and returns a reference to the same array, but i feel more comfortable was assignment expression
    VERSION_REGISTERED.script_module_files = VERSION_REGISTERED.script_module_files.sort();

    const OLD_MAPPINGS = VERSION_REGISTERED.script_modules_mapping;
    VERSION_REGISTERED.script_modules_mapping = {};
    for (const moduleName of Object.keys(OLD_MAPPINGS).sort()) {
        const map = OLD_MAPPINGS[moduleName];

        map.versions = map.versions.sort();

        VERSION_REGISTERED.script_modules.push(moduleName);
        VERSION_REGISTERED.script_modules_mapping[moduleName] = map;
    }
    // Check if all tasks has successfully ended.
    return tasks.length == results.length;
}
/**
 * @param {string} input
 * @param {string} fileName
 * @returns {Promise<boolean>}
 */
async function Task(input, fileName) {

    // Read File
    /**@type {Buffer | string | null} */
    let buffer = await readFile(resolve(input, fileName)).catch(()=>null);

    // Check if file was properly readed
    if(buffer == null) return false;

    const data = JSON.parse(buffer.toString());

    if(typeof data !== "object") return false;
    if(data["module_type"] !== "script") return false;

    const name = data["name"];
    const module_package = VERSION_REGISTERED.script_modules_mapping[name] =  VERSION_REGISTERED.script_modules_mapping[name]??{name, uuid: data["uuid"], versions:[]};
    module_package.versions.push(data["version"]);
    VERSION_REGISTERED.script_module_files.push(fileName);

    console.log("[MODULE_MAPING] Generated: " + fileName);
    
    // Returns if file was successfully created
    return true;
}
/**
 * @type {{script_modules_mapping: {[k: string]: {versions:string[], uuid: string, name: string}}, script_modules: string[], script_module_files: string[]}}
 */
//@ts-ignore
const VERSION_REGISTERED = FILE_CONTENT_CURRENT_EXIST[SCRIPT_MODULES_MAPPING.name] = {
    script_modules:[],
    script_modules_mapping:{},
    script_module_files:[]
};