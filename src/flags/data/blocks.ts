import { resolve } from "node:path";
import { FileTree, Panic, ReadFile, WriteFile } from "../../functions";
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

async function BLOCKS_DATA(inputDirPath: string): Promise<number> {
    // Init
    const inputDir = resolve(inputDirPath, "docs/vanilladata_modules");
    const tasks = [];

    // Task Factory for each file in the path tree
    for (const file of FileTree(inputDir)) tasks.push(
        Task(inputDir, file).catch(()=>false)
    );

    // Return Only Successful Creations
    const results = (await Promise.all(tasks)).filter(s=>s);

    // Check if all tasks has successfully ended.
    return results.length == 1?0:-1;
}


async function Task(input: string, fileName: string): Promise<number> {

    // Read File
    if(!fileName.endsWith(".json")) return Panic("Invalid file name suffix: " + fileName + " expected .json");

    let buffer = await ReadFile(resolve(input, fileName));

    // Check if file was properly read
    if(buffer == null) return Panic("Failed to read file: " + fileName);

    const data = JSON.parse(buffer.toString());

    if(typeof data !== "object") return Panic("Json content is not a object");
    if(data["module_type"] !== "vanilla_data") return Panic("Json content is not type of vanilla_data");
    if(data["vanilla_data_type"] !== "block") return Panic("JSON content vanilla_data_type is nota block type");

    const states_map: {[key: string]: any[]} = {};
    const states = data["block_properties"].map((e: any)=>{
        e.values = e.values.map((s: any)=>s.value);

        states_map[e.name] = e.values;
        return e;
    });

    if(!existsSync(DATA_OUTPUT_FOLDER)) mkdirSync(DATA_OUTPUT_FOLDER, {recursive:true});
    
    let results = await WriteFile(resolve(DATA_OUTPUT_FOLDER, OUTPUT_BLOCK_STATES), JSON.stringify(states, null, 3));
    if(!results) return Panic("Failed to write file: " + OUTPUT_BLOCK_STATES);
    console.log("[DATA/BLOCKS_STATES] Generated: " + OUTPUT_BLOCK_STATES);

    const blocks = data["data_items"].map((e: any)=>{
        e.properties = e.properties.map((s: any)=>s.name);
        return MapBlock(states_map, e);
    });

    results = await WriteFile(resolve(DATA_OUTPUT_FOLDER, OUTPUT_BLOCKS), JSON.stringify(blocks, null, 3));
    if(!results) 
        return Panic("Failed to write file: " + OUTPUT_BLOCKS);
    console.log("[DATA/BLOCKS] Generated: " + OUTPUT_BLOCKS);
    
    // Returns if file was successfully created
    return 0;
}
function MapBlock(states_map: {[key: string]: any[]}, block_item: {name: string, permutations?: number[][], properties: string[], raw_id: number, serialization_id: string}){
    const lengths = block_item.properties.map(e=>states_map[e].length);
    const index = lengths.length - 1;
    block_item.permutations = [...PermutationGenerator(lengths, index)];
    return block_item;
}
function * PermutationGenerator(lengths: number[], index: number): Generator<number[]>{
    for (let v = 0; v < lengths[index]; v++) {
        if(index > 0) for(const permutations of PermutationGenerator(lengths, index-1)) yield [...permutations, v];
        else yield [v];
    }
}