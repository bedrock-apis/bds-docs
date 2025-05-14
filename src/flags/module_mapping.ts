import { resolve } from "node:path";
import type { ModuleDefaultExport } from ".";
import { FILE_CONTENT_CURRENT_EXIST } from "../consts";
import { FileTree, Panic, ReadFile } from "../functions";

const description = `This flag generator creates a detailed mapping of script modules from the documentation files. It reads and processes JSON files to gather metadata about various script modules. This information is then organized and added to main the \`./exist.json\` file, ensuring that all relevant data about script modules, such as names, UUIDs, and versions, is accurately captured`;

export default {
    method: SCRIPT_MODULES_MAPPING,
    flagId: SCRIPT_MODULES_MAPPING.name,
    description,
} satisfies ModuleDefaultExport;

async function SCRIPT_MODULES_MAPPING(inputDirPath: string): Promise<number> {
    // Init
    const inputDir = resolve(inputDirPath, "docs/script_modules");
    const tasks = [];

    // Task Factory for each file in the path tree
    for (const file of FileTree(inputDir)) tasks.push(Task(inputDir, file).catch(() => false));

    // Return Only Successful Creations
    const results = (await Promise.all(tasks)).filter((s) => s);

    // NOTE: I know this method mutates the array and returns a reference to the same array, but i feel more comfortable was assignment expression
    VERSION_REGISTERED.script_module_files = VERSION_REGISTERED.script_module_files.sort();

    const OLD_MAPPINGS = VERSION_REGISTERED.script_modules_mapping;
    VERSION_REGISTERED.script_modules_mapping = {};
    for (const moduleName of Object.keys(OLD_MAPPINGS).sort()) {
        const map = OLD_MAPPINGS[moduleName];

        if (!map) return Panic(`Unable to get map for module ${moduleName}`);

        map.versions = map.versions.sort();

        VERSION_REGISTERED.script_modules.push(moduleName);
        VERSION_REGISTERED.script_modules_mapping[moduleName] = map;
    }
    // Check if all tasks has successfully ended.
    return tasks.length == results.length ? 0 : -1;
}

async function Task(input: string, fileName: string): Promise<number> {
    // Read File
    let buffer = await ReadFile(resolve(input, fileName));

    // Check if file was properly read
    if (buffer == null) return Panic("Failed to read file: " + fileName);

    const data = JSON.parse(buffer.toString()) as { version: string; name: string; module_type: string; uuid: string };

    if (typeof data !== "object") return Panic("Invalid type of content: " + typeof data);
    if (data["module_type"] !== "script") return Panic("Json Module type is not of 'script'");

    const name = data["name"];
    const module_package = (VERSION_REGISTERED.script_modules_mapping[name] = VERSION_REGISTERED.script_modules_mapping[name] ?? { name, uuid: data["uuid"], versions: [] });
    module_package.versions.push(data["version"]);
    VERSION_REGISTERED.script_module_files.push(fileName);

    console.log("[MODULE_MAPPING] Generated: " + fileName);

    // Returns if file was successfully created
    return 0;
}
const VERSION_REGISTERED: {
    script_modules_mapping: {
        [k: string]: { versions: string[]; uuid: string; name: string };
    };
    script_modules: string[];
    script_module_files: string[];
} = ((FILE_CONTENT_CURRENT_EXIST as any)[SCRIPT_MODULES_MAPPING.name] = {
    script_modules: [],
    script_modules_mapping: {},
    script_module_files: [],
});
