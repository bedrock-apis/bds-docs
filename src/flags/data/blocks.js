import { resolve } from "node:path";
import { FileTree } from "../../functions.js";
import { readFile, writeFile } from "node:fs/promises";
import { DATA_OUTPUT_FOLDER } from "./consts.js";
import { existsSync, mkdirSync } from "node:fs";

const OUTPUT_BLOCK_STATES = "block_states.json";
const OUTPUT_BLOCKS = "blocks.json";
const description = "The BLOCKS_DATA flag generator creates JSON files containing detailed information about block states and blocks from vanilla data modules. It processes JSON files, extracting block properties and data items, and generates two output files: block_states.json and blocks.json. This ensures that all block-related data is accurately captured and organized, making it easier for developers to work with the generated documentation. The process involves reading the JSON files, transforming their content, and writing the output to the appropriate directory, ensuring that all tasks are completed successfully.";
export default {
    method: BLOCKS_DATA,
    flagId: BLOCKS_DATA.name,
    description
};
/**
 * 
 * @param {string} inputDirPath
 * @returns {Promise<boolean>}
 */
async function BLOCKS_DATA(inputDirPath) {
    // Init
    const inputDir = resolve(inputDirPath, "docs/vanilladata_modules");
    const tasks = [];

    // Task Factory for each file in the path tree
    for (const file of FileTree(inputDir)) tasks.push(
        Task(inputDir, file).catch(()=>false)
    );

    // Return Only Succesfull Creations
    const results = (await Promise.all(tasks)).filter(s=>s);

    // Check if all tasks has successfully ended.
    return results.length == 1;
}
/**
 * @param {string} input
 * @param {string} fileName
 * @returns {Promise<boolean>}
 */
async function Task(input, fileName) {

    // Read File
    if(!fileName.endsWith(".json")) return false;

    /**@type {Buffer | string | null} */
    let buffer = await readFile(resolve(input, fileName)).catch(()=>null);

    // Check if file was properly readed
    if(buffer == null) return false;

    const data = JSON.parse(buffer.toString());

    if(typeof data !== "object") return false;
    if(data["module_type"] !== "vanilla_data") return false;
    if(data["vanilla_data_type"] !== "block") return false;

    /**@type {{[key: string]: any[]}} */
    const states_map = {};
    // @ts-ignore
    const states = data["block_properties"].map((e)=>{
        // @ts-ignore
        e.values = e.values.map(s=>s.value);

        states_map[e.name] = e.values;
        return e;
    });

    if(!existsSync(DATA_OUTPUT_FOLDER)) mkdirSync(DATA_OUTPUT_FOLDER, {recursive:true});
    
    let results = await writeFile(resolve(DATA_OUTPUT_FOLDER, OUTPUT_BLOCK_STATES), JSON.stringify(states, null, 3)).then(()=>true, ()=>false);
    if(!results) return false;
    console.log("[DATA/BLOCKS_STATES] Generated: " + OUTPUT_BLOCK_STATES);

    // @ts-ignore
    const blocks = data["data_items"].map((e)=>{
        // @ts-ignore
        e.properties = e.properties.map(s=>s.name);
        return MapBlock(states_map, e);
    });

    results = await writeFile(resolve(DATA_OUTPUT_FOLDER, OUTPUT_BLOCKS), JSON.stringify(blocks, null, 3)).then(()=>true, ()=>false);
    if(!results) return false;
    console.log("[DATA/BLOCKS] Generated: " + OUTPUT_BLOCKS);
    
    // Returns if file was successfully created
    return true;
}
/**
 * 
 * @param {{[key: string]: any[]}} states_map 
 * @param {{name: string, permutations?: number[][], properties: string[], raw_id: number, serialization_id: string}} block_item 
 */
function MapBlock(states_map, block_item){
    const lengths = block_item.properties.map(e=>states_map[e].length);
    const index = lengths.length - 1;
    block_item.permutations = [...PermutationGenerator(lengths, index)];
    return block_item;
}
/**
 * @param {number[]} lengths 
 * @param {number} index 
 * @returns {Generator<number[]>}
 */
function * PermutationGenerator(lengths, index){
    for (let v = 0; v < lengths[index]; v++) {
        if(index > 0) for(const permutations of PermutationGenerator(lengths, index-1)) yield [...permutations, v];
        else yield [v];
    }
}
function GetStringFor(num = 0, lengthExpected = 2, r = 16){
    const str = num.toString(r);
    if(str.length < lengthExpected) return "0".repeat(lengthExpected - str.length) + str;
    else if (str.length > lengthExpected) throw new RangeError("Number doesn't fit to expecte length: " + lengthExpected + " num: " + str);
    return str;
}