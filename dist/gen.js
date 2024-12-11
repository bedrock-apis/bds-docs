import { createWriteStream, existsSync, existsSync as existsSync$1, existsSync as existsSync$2, mkdirSync, mkdirSync as mkdirSync$1, mkdirSync as mkdirSync$2, readFileSync, writeFileSync } from "node:fs";
import { dirname as dirname$1, dirname as dirname$2, resolve, resolve as resolve$1, resolve as resolve$2, resolve as resolve$3, resolve as resolve$4 } from "node:path";
import { readFile, readFile as readFile$1, writeFile } from "node:fs/promises";
import { pipeline } from "node:stream/promises";
import { platform } from "node:os";
import { env } from "node:process";
import { spawn } from "node:child_process";
import { Readable } from "node:stream";

//#region src/functions/utils.ts
function Panic(message) {
	console.error(message);
	return -1;
}

//#endregion
//#region src/functions/file-system.ts
function* FileTree(base, paths = []) {
	for (const entry of readdirSync([base, ...paths].join("/"), { withFileTypes: true })) if (entry.isFile()) yield [...paths, entry.name].join("/");
else if (entry.isDirectory()) yield* FileTree(base, [...paths, entry.name]);
}
async function ReadFile(fileName) {
	return await readFile$1(fileName).catch((e) => null);
}
async function WriteFile(fileName, data) {
	return await writeFile(fileName, data).then((e) => 0, Panic);
}

//#endregion
//#region src/consts.ts
const PROCESS_TIMEOUT = 5e3;
const ALWAYS_OVERWRITE = env["ALWAYS_OVERWRITE"] ?? false;
const PLATFORM = platform() == "win32" ? "win" : "linux";
const DEBUG = env["DEBUG_MODE"] ? true : false;
const DISCORD_TOKEN = env["DISCORD_TOKEN"];
const IS_GITHUB_ACTION = env["GITHUB_WORKFLOW"] ? true : false;
const GITHUB_REPO_NAME = env["GITHUB_REPOSITORY"] ?? "bedrock-apis/bds-docs";
const LINK_GITHUB_DOMAIN = "https://raw.githubusercontent.com";
const LINK_GITHUB_REPO = `${LINK_GITHUB_DOMAIN}/${GITHUB_REPO_NAME}`;
const FILE_NAME_GITIGNORE = ".gitignore";
const FILE_CONTENT_BDS_TEST_CONFIG = JSON.stringify({ generate_documentation: true });
const FILE_CONTENT_GITIGNORE = readFileSync(FILE_NAME_GITIGNORE).toString();
const WORKING_DIRECTORY = DEBUG ? (env.HOMEDRIVE ?? "") + (env.HOMEPATH ?? "") + "\\_test" : ".";
const BUNDLER_OUTPUT = import.meta.dirname;
if (DEBUG) console.log("[DEBUG] Enabled: " + WORKING_DIRECTORY);
const FILE_CONTENT_CURRENT_EXIST = {
	version: "",
	"build-version": "",
	"flags": []
};

//#endregion
//#region src/functions/exec.ts
async function InvokeProcess(command, parameters, timeout = PROCESS_TIMEOUT) {
	const fullCommand = `${command} ${parameters.join(" ")}`;
	return new Promise((res, rej) => {
		let timeouted = false;
		const timeTick = setTimeout(() => {
			timeouted = true;
			child.kill("SIGKILL");
		}, timeout);
		let wasResolved = false;
		const child = spawn(command, parameters, { windowsHide: true });
		child.stdout?.pipe(process.stdout);
		child.stderr?.pipe(process.stderr);
		child.on("error", (code) => wasResolved ? null : res({
			exitCode: -1,
			error: code,
			command,
			fullCommand
		}));
		child.on("spawn", () => console.log("[Command Exec] '" + command + "'"));
		child.on("close", (code) => {
			clearTimeout(timeTick);
			console.error("[Command Exec Closed] : " + command);
			if (wasResolved) return;
			if (timeouted) res({
				exitCode: -1,
				error: "TIMEOUTED",
				command,
				fullCommand
			});
else res({
				exitCode: code ?? 0,
				command,
				fullCommand
			});
		});
	}).catch((error) => ({
		errorCode: -1,
		error,
		command,
		fullCommand
	}));
}
/**

* @param {string} executable 

* @param {number} [timeout]

* @param {...string} args 

* @returns {Promise<{exitCode: number, error?: any}>}

* @throws {string}



export async function Execute(executable, timeout = 1000, ...args) {

if(PLATFORM == "win"){

return ExecuteCommand(`${executable}`, timeout, ...args);

}

else 

if(PLATFORM == "linux"){

let result = await ExecuteCommand(`chmod +x ${executable}`, timeout, cwd);

if(result.exitCode != 0) return result;

return ExecuteCommand(`LD_LIBRARY_PATH=. ${executable}`, timeout, cwd);

}

return {exitCode: -1, error: "Unknown platform"}

}*/
//#endregion
//#region src/functions/github.ts
const InvokeGit = InvokeProcess.bind(void 0, "git");

//#endregion
//#region src/flags/data/consts.ts
const DATA_OUTPUT_FOLDER = "./data";

//#endregion
//#region src/flags/data/blocks.ts
const OUTPUT_BLOCK_STATES = "block_states.json";
const OUTPUT_BLOCKS = "blocks.json";
const description$3 = "The BLOCKS_DATA flag generator creates JSON files containing detailed information about block states and blocks from vanilla data modules. It processes JSON files, extracting block properties and data items, and generates two output files: block_states.json and blocks.json. This ensures that all block-related data is accurately captured and organized, making it easier for developers to work with the generated documentation. The process involves reading the JSON files, transforming their content, and writing the output to the appropriate directory, ensuring that all tasks are completed successfully.";
var blocks_default = {
	method: BLOCKS_DATA,
	flagId: BLOCKS_DATA.name,
	description: description$3
};
async function BLOCKS_DATA(inputDirPath) {
	const inputDir = resolve$4(inputDirPath, "docs/vanilladata_modules");
	const tasks = [];
	for (const file of FileTree(inputDir)) tasks.push(Task$3(inputDir, file).catch(() => false));
	const results = (await Promise.all(tasks)).filter((s) => s);
	return results.length == 1 ? 0 : -1;
}
async function Task$3(input, fileName) {
	if (!fileName.endsWith(".json")) return Panic("Invalid file name suffix: " + fileName + " expected .json");
	let buffer = await ReadFile(resolve$4(input, fileName));
	if (buffer == null) return Panic("Failed to read file: " + fileName);
	const data = JSON.parse(buffer.toString());
	if (typeof data !== "object") return Panic("Json content is not a object");
	if (data["module_type"] !== "vanilla_data") return Panic("Json content is not type of vanilla_data");
	if (data["vanilla_data_type"] !== "block") return Panic("JSON content vanilla_data_type is nota block type");
	const states_map = {};
	const states = data["block_properties"].map((e) => {
		e.values = e.values.map((s) => s.value);
		states_map[e.name] = e.values;
		return e;
	});
	if (!existsSync$2(DATA_OUTPUT_FOLDER)) mkdirSync$2(DATA_OUTPUT_FOLDER, { recursive: true });
	let results = await WriteFile(resolve$4(DATA_OUTPUT_FOLDER, OUTPUT_BLOCK_STATES), JSON.stringify(states, null, 3));
	if (!results) return Panic("Failed to write file: " + OUTPUT_BLOCK_STATES);
	console.log("[DATA/BLOCKS_STATES] Generated: " + OUTPUT_BLOCK_STATES);
	const blocks = data["data_items"].map((e) => {
		e.properties = e.properties.map((s) => s.name);
		return MapBlock(states_map, e);
	});
	results = await WriteFile(resolve$4(DATA_OUTPUT_FOLDER, OUTPUT_BLOCKS), JSON.stringify(blocks, null, 3));
	if (!results) return Panic("Failed to write file: " + OUTPUT_BLOCKS);
	console.log("[DATA/BLOCKS] Generated: " + OUTPUT_BLOCKS);
	return 0;
}
function MapBlock(states_map, block_item) {
	const lengths = block_item.properties.map((e) => states_map[e].length);
	const index = lengths.length - 1;
	block_item.permutations = [...PermutationGenerator(lengths, index)];
	return block_item;
}
function* PermutationGenerator(lengths, index) {
	for (let v = 0; v < lengths[index]; v++) if (index > 0) for (const permutations of PermutationGenerator(lengths, index - 1)) yield [...permutations, v];
else yield [v];
}

//#endregion
//#region src/flags/metadata.ts
const OUTPUT_FOLDER$1 = "./metadata";
const description$2 = `This generator is moving BDS generated docs to **${OUTPUT_FOLDER$1}** and removes version from all JSON modules so github doesn't generates usless diff for every version change.`;
var metadata_default = {
	method: METADATA,
	flagId: METADATA.name,
	description: description$2
};
async function METADATA(inputDirPath) {
	const inputDir = resolve$3(inputDirPath, "docs");
	const tasks = [];
	for (const file of FileTree(inputDir)) tasks.push(Task$2(inputDir, file).catch(() => false));
	const results = (await Promise.all(tasks)).filter((s) => s);
	return tasks.length == results.length ? 0 : -1;
}
async function Task$2(input, fileName) {
	let buffer = await ReadFile(resolve$3(input, fileName)).catch(() => null);
	if (buffer == null) return Panic("Failed to load file: " + fileName);
	if (fileName.endsWith(".json")) buffer = await TransformJsonModule(buffer.toString()).catch((e) => null);
	if (buffer == null) return Panic("Failed to transform file: " + fileName);
	const outFile = resolve$3(OUTPUT_FOLDER$1, fileName);
	const outDir = dirname$2(outFile);
	if (!existsSync$1(outDir)) mkdirSync$1(outDir, { recursive: true });
	let results = await WriteFile(outFile, buffer);
	if (!results) console.log("[METADATA] Generated: " + fileName);
else console.log("[METADATA] Generation failed: " + fileName);
	return results;
}
async function TransformJsonModule(input) {
	const data = JSON.parse(input);
	if (typeof data == "object") {
		if ("minecraft_version" in data) delete data["minecraft_version"];
	}
	return JSON.stringify(data, null, 4);
}

//#endregion
//#region src/flags/module_mapping.ts
const description$1 = `This flag generator creates a detailed mapping of script modules from the documentation files. It reads and processes JSON files to gather metadata about various script modules. This information is then organized and added to main the \`./exist.json\` file, ensuring that all relevant data about script modules, such as names, UUIDs, and versions, is accurately captured`;
var module_mapping_default = {
	method: SCRIPT_MODULES_MAPPING,
	flagId: SCRIPT_MODULES_MAPPING.name,
	description: description$1
};
async function SCRIPT_MODULES_MAPPING(inputDirPath) {
	const inputDir = resolve$2(inputDirPath, "docs/script_modules");
	const tasks = [];
	for (const file of FileTree(inputDir)) tasks.push(Task$1(inputDir, file).catch(() => false));
	const results = (await Promise.all(tasks)).filter((s) => s);
	VERSION_REGISTERED.script_module_files = VERSION_REGISTERED.script_module_files.sort();
	const OLD_MAPPINGS = VERSION_REGISTERED.script_modules_mapping;
	VERSION_REGISTERED.script_modules_mapping = {};
	for (const moduleName of Object.keys(OLD_MAPPINGS).sort()) {
		const map = OLD_MAPPINGS[moduleName];
		map.versions = map.versions.sort();
		VERSION_REGISTERED.script_modules.push(moduleName);
		VERSION_REGISTERED.script_modules_mapping[moduleName] = map;
	}
	return tasks.length == results.length ? 0 : -1;
}
async function Task$1(input, fileName) {
	let buffer = await ReadFile(resolve$2(input, fileName));
	if (buffer == null) return Panic("Failed to read file: " + fileName);
	const data = JSON.parse(buffer.toString());
	if (typeof data !== "object") return Panic("Invalid type of content: " + typeof data);
	if (data["module_type"] !== "script") return Panic("Json Module type is not of 'script'");
	const name = data["name"];
	const module_package = VERSION_REGISTERED.script_modules_mapping[name] = VERSION_REGISTERED.script_modules_mapping[name] ?? {
		name,
		uuid: data["uuid"],
		versions: []
	};
	module_package.versions.push(data["version"]);
	VERSION_REGISTERED.script_module_files.push(fileName);
	console.log("[MODULE_MAPPING] Generated: " + fileName);
	return 0;
}
const VERSION_REGISTERED = FILE_CONTENT_CURRENT_EXIST[SCRIPT_MODULES_MAPPING.name] = {
	script_modules: [],
	script_modules_mapping: {},
	script_module_files: []
};

//#endregion
//#region src/flags/ts-declarations/printers.js
var BaseContext = class {
	/**
	
	* @type {{[key: string]: string}}
	
	*/
	dependencies = {};
	index = 0;
	recursionLevel = 0;
	space = "  ";
	/**
	
	* 
	
	* @param {MD.MetadataModuleBaseDefinition} dependency
	
	*/
	getModuleName(dependency) {
		return this.dependencies[dependency.name] ?? (this.dependencies[dependency.name] = "_" + (++this.index << 4 | (this.index ^ this.index * 31) & 15).toString(16));
	}
	/**
	
	* 
	
	* @param {IteratorObject<string>} formatable 
	
	*/
	formater(formatable) {
		return formatable.map((data) => this.space + data);
	}
};
function* Printer(data) {
	for (const p of PrintModule(data)) {
		if (typeof p === "string") yield p;
else yield* Printable(p);
		yield "\n";
	}
}
/**

* @param {IterableIterator<string | PrintableIterator>} iterator 

* @returns {Generator<string>}

*/
function* Printable(iterator) {
	for (const p of iterator) if (typeof p === "string") yield p;
else yield* Printable(p);
}
/**

* @param {MD.MetadataModuleDefinition} data 

* @returns {Generator<IterableIterator<string> | string>}

*/
function* PrintModule(data) {
	const context = new BaseContext();
	yield* data.dependencies.map((e) => PrintDependency(e, context));
	yield "\n// Enums - " + (data.enums?.length ?? 0);
	yield* data.enums?.map((e) => PrintEnum(e, context)) ?? [];
	yield "\n// Interfaces - " + (data.interfaces?.length ?? 0);
	yield* data.interfaces.map((e) => PrintInterface(e, context));
	yield "\n// Classes - " + (data.classes?.length ?? 0);
	yield* data.classes.map((e) => PrintClass(e, context));
	yield "\n// Constants & Objects - " + (data.constants.length + data.objects.length);
	yield* data.constants.map((e) => PrintConst(e, context));
	yield "";
	yield* data.objects.map((e) => PrintObject(e, context));
	yield "\n// Functions - " + data.functions.length;
	yield* data.functions.map((e) => PrintFunction(e, context));
	yield "\n// Errors - " + data.errors.length;
	yield* data.errors.map((e) => PrintError(e, context));
}
/**

* @param {string} property

*/
function propertName(property) {
	try {
		eval(`class S { ${property}(){} }`);
		return property;
	} catch (error) {
		console.log("Keyword fix for: " + property);
		return `'${property}'`;
	}
}
/**

* @param {MD.MetadataModuleBaseDefinition} data 

* @param {BaseContext} context 

*/
function* PrintDependency(data, context) {
	yield `import * as ${context.getModuleName(data)} from '${data.name}';`;
}
/**

* 

* @param {MD.MetadataObjectDefinition} data 

* @param {BaseContext} context 

*/
function* PrintObject(data, context) {
	yield `export ${data.is_read_only ? "const" : "let"} ${data.name}: ${TypePrinter(data.type, context)};`;
}
/**

* 

* @param {MD.MetadataConstantDefinition} data 

* @param {BaseContext} context 

*/
function* PrintConst(data, context) {
	if ("value" in data) yield `export ${data.is_read_only ? "const" : "let"} ${data.name} = ${ToLiteral(data.value)};`;
else yield `export ${data.is_read_only ? "const" : "let"} ${data.name}: ${TypePrinter(data.type, context, true, false)};`;
}
/**

* 

* @param {MD.MetadataInterfaceDefinition} data

* @param {BaseContext} context 

*/
function* PrintInterface(data, context) {
	yield `export interface ${data.name} ${(data.base_types?.length ?? 0) > 0 ? `extends ${data.base_types.map((t) => TypePrinter(t, context, false, false)).join(", ")}` : ""}{ ${data.properties.map((p) => InterfaceProperty(p, context)).join("; ")}};`;
}
/**

* @param {MD.MetadataPropertyMemberDefinition} data

* @param {BaseContext} context 

*/
function InterfaceProperty(data, context) {
	if (data.type.name === "optional") return `${data.is_read_only ? "readonly " : ""}${propertName(data.name)}?: ${TypePrinter(data.type.optional_type, context, true, false)}`;
else return `${data.is_read_only ? "readonly " : ""}${propertName(data.name)}: ${TypePrinter(data.type, context, true, false)}`;
}
/**

* 

* @param {Partial<Omit<MD.MetadataType, "name" | "is_bind_type" | "is_errorable">> & Pick<MD.MetadataType, "name" | "is_bind_type" | "is_errorable">} object

* @returns {MD.MetadataType}

*/
function createType(object) {
	return object;
}
/**

* 

* @param {MD.MetadataErrorClassDefinition} data

* @param {BaseContext} context 

*/
function* PrintError(data, context) {
	let hadConstructor = false;
	const content = [...data.properties.map((p) => ClassProperty(p, context)), ...hadConstructor ? [] : ["private constructor()"]];
	yield `export class ${data.name} extends Error{ ${content.join("; ") + (content.length > 0 ? ";" : "")}};`;
}
/**

* 

* @param {MD.MetadataClassDefinition} data

* @param {BaseContext} context 

*/
function* PrintClass(data, context) {
	let hadConstructor = false;
	if (data.iterator) {
		data.functions.push({
			arguments: [],
			is_constructor: false,
			is_static: false,
			name: "next",
			privilege: "read_only",
			return_type: createType({
				is_bind_type: false,
				is_errorable: data.iterator.is_errorable,
				name: "iterator",
				iterator_result: data.iterator.optional_type ? data.iterator.optional_type : data.iterator
			})
		});
		data.functions.push({
			arguments: [],
			is_constructor: false,
			is_static: false,
			name: "[Symbol.iterator]",
			privilege: "read_only",
			return_type: createType({
				is_bind_type: false,
				is_errorable: false,
				name: "this"
			})
		});
	}
	const content = [
		...data.constants.map((p) => ClassConstant(p, context)),
		...data.properties.map((p) => ClassProperty(p, context)),
		...data.functions.map((p) => {
			if (p.is_constructor) hadConstructor = true;
			return ClassMethod(p, context);
		}),
		...hadConstructor ? [] : ["private constructor()"]
	];
	if ((data.base_types.length ?? 0) > 0) yield "//@ts-ignore extending for classes with private constructor is possible with native API\n";
	yield `export class ${data.name} ${(data.base_types?.length ?? 0) > 0 ? `extends ${data.base_types.map((t) => TypePrinter(t, context, false, false)).join(", ")}` : ""}{ ${content.join("; ") + (content.length > 0 ? ";" : "")}};`;
}
/**

* @param {MD.MetadataFunctionDefinition} data

* @param {BaseContext} context 

*/
function ClassMethod(data, context) {
	let text = "public ";
	if (data.is_static) text += "static ";
	text += `${propertName(data.name)}(${data.arguments.map((e) => PrintArgument(e, context)).join(", ")})`;
	if (!data.is_constructor) text += ": " + TypePrinter(data.return_type, context, false, true);
	return text;
}
/**

* @param {MD.MetadataPropertyMemberDefinition} data

* @param {BaseContext} context 

*/
function ClassProperty(data, context) {
	let text = "public ";
	if (data.is_static) text += "static ";
	if (data.is_read_only) text += "readonly ";
	text += propertName(data.name);
	if (data.type.optional_type) text += "?";
	text += ": " + TypePrinter(data.type.optional_type ?? data.type, context, true, false);
	return text;
}
/**

* @param {MD.MetadataConstantDefinition} data

* @param {BaseContext} context 

*/
function ClassConstant(data, context) {
	let text = "public ";
	if (data.is_static) text += "static ";
	if (data.is_read_only) text += "readonly ";
	text += "value" in data ? `${propertName(data.name)} = ${ToLiteral(data.value)}` : `${propertName(data.name)}: ${TypePrinter(data.type, context, true, false)}`;
	return text;
}
/**

* 

* @param {MD.MetadataEnumDefinition} data 

* @param {BaseContext} context 

*/
function* PrintEnum(data, context) {
	const test = `export enum ${data.name} { ${data.constants.map((e) => `${propertName(e.name)} = ${ToLiteral(e.value)}`).join(", ")}};`;
	yield test;
}
/**

* @param {MD.MetadataFunctionDefinition} data 

* @param {BaseContext} context 

*/
function* PrintFunction(data, context) {
	const test = `export function ${data.name}(${data.arguments.map((a) => PrintArgument(a, context)).join(", ")}): ${TypePrinter(data.return_type, context, false, true)}`;
	yield test;
}
/**

* @param {MD.MetadataFunctionArgumentDefinition} data 

* @param {BaseContext} context 

*/
function PrintArgument(data, context) {
	return `${data.name}${"default_value" in (data.details ?? {}) ? "?" : ""}: ${TypePrinter(data.type.name === "optional" ? data.type.optional_type : data.type, context, true, false)}`;
}
/**

* 

* @param {MD.MetadataType} data 

* @param {BaseContext} context 

* @returns {string}

*/
function TypePrinter(data, context, safeContext = true, isReturnType = false) {
	if (data.is_bind_type) return `${data.from_module ? context.getModuleName(data.from_module) + "." : ""}${data.name}`;
	switch (data.name) {
		case "array": return `${data.element_type.name == "undefined" ? "never" : TypePrinter(data.element_type, context, false, false)}[]`;
		case "boolean": return data.name;
		case "string": return data.name;
		case "this": return data.name;
		case "undefined": return isReturnType ? "void" : "undefined";
		case "generator": return `Generator<${TypePrinter(data.generator_type.next_type, context)}${data.generator_type.return_type.name != "undefined" || data.generator_type.yield_type.name != "undefined" ? ", " + TypePrinter(data.generator_type.return_type, context, true, true) : ""}${data.generator_type.yield_type.name != "undefined" ? ", " + TypePrinter(data.generator_type.yield_type, context, true, false) : ""}>`;
		case "optional": return safeContext ? `${TypePrinter(data.optional_type, context, true, isReturnType)} | undefined` : `(${TypePrinter(data.optional_type, context, true, isReturnType)} | undefined)`;
		case "promise": return `Promise<${TypePrinter(data.promise_type, context, true, isReturnType)}>`;
		case "iterator": return `IteratorResult<${TypePrinter(data.iterator_result, context, true, false)}>`;
		case "variant": return safeContext ? `${data.variant_types.map((s) => TypePrinter(s, context, true, isReturnType)).join(" | ")}` : `(${data.variant_types.map((s) => TypePrinter(s, context, true, isReturnType)).join(" | ")})`;
		case "map": return `Record<${TypePrinter(data.key_type, context, true, false)},${TypePrinter(data.value_type, context, true, false)}>`;
		case "closure": return `(${data.closure_type.argument_types.map((s, i) => `arg${i}${s.optional_type ? `?: ${TypePrinter(s.optional_type, context, true, false)}` : `: ${TypePrinter(s, context, true, false)}`}`).join(", ")})=>${TypePrinter(data.closure_type.return_type, context, false, true)}`;
		case "uint8":
		case "uint16":
		case "uint32":
		case "uint64":
		case "int8":
		case "int16":
		case "int32":
		case "int64":
		case "double":
		case "float": return "number";
		default: return "unknown";
	}
}
/**

* 

* @param {any} data 

* @returns 

*/
function ToLiteral(data) {
	return typeof data === "string" ? `${JSON.stringify(data)}` : data;
}
/**

* 

* @param {string} next

* @param {IterableIterator<string>} iterator

* @param {(p: string)=>string} onLast

* @param {BaseContext} context 

*/
function* PrinterHelper(iterator, next, onLast, context) {
	for (const v of iterator) {
		yield next;
		next = v;
	}
	yield onLast(next);
}

//#endregion
//#region src/flags/script_declaration.ts
const OUTPUT_FOLDER = "./script-declarations";
const description = "The SCRIPT_DECLARATIONS flag generator creates TypeScript declaration files from JSON metadata about script modules. It processes JSON files, transforming their content into .d.ts files, which are then stored in the ./script-declarations directory. This ensures that all script modules have accurate TypeScript declarations, making it easier for developers to work with the generated documentation. The process involves reading the JSON files, transforming their content, and writing the output to the appropriate directory, ensuring that all tasks are completed successfully.";
var script_declaration_default = {
	method: SCRIPT_DECLARATIONS,
	flagId: SCRIPT_DECLARATIONS.name,
	description
};
async function SCRIPT_DECLARATIONS(inputDirPath) {
	const inputDir = resolve$1(inputDirPath, "docs/script_modules");
	const tasks = [];
	for (const file of FileTree(inputDir)) tasks.push(Task(inputDir, file).catch(() => -1));
	const results = (await Promise.all(tasks)).filter((s) => !s);
	return tasks.length === results.length ? 0 : -1;
}
async function Task(input, fileName) {
	if (!fileName.endsWith(".json")) return Panic("File name doesn't ends with '.json'");
	let buffer = await ReadFile(resolve$1(input, fileName));
	if (buffer == null) return Panic("Failed to read file: " + fileName);
	const outFile = resolve$1(OUTPUT_FOLDER, fileName);
	const outDir = dirname$1(outFile);
	if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
	const writeStream = createWriteStream(outFile.replace(/.json$/g, ".d.ts"));
	const readable = PrintScriptModule(buffer);
	if (!readable) return Panic("Failed to create readable from buffer");
	const results = await pipeline(readable, writeStream).then(() => 0, Panic);
	if (results) console.log("[SCRIPT_DECLARATIONS] Generated: " + fileName);
else console.log("[SCRIPT_DECLARATIONS] Generation failed: " + fileName);
	return results;
}
function PrintScriptModule(input) {
	const data = JSON.parse(input.toString());
	if (typeof data != "object") return null;
	return Readable.from(Printer(data));
}

//#endregion
//#region src/flags/index.ts
const GENERATORS = [
	metadata_default,
	module_mapping_default,
	script_declaration_default,
	blocks_default
];

//#endregion
//#region DOCUMENTATION/gen.mjs
const MAIN_DATA = await readFile(resolve(import.meta.dirname, "./__MAIN.md"));
let flagsInfo = "";
const newline = "\n\r";
for (const generator of GENERATORS) {
	let flagText = `### \`FLAG:${generator.flagId}\` Documentation${newline}`;
	flagText += `> ${generator.description ?? (console.log("No generator metadata description for: " + generator.flagId), "NO DESCRIPTION")}`.replaceAll(/(\r\n|\r|\n)(\s+|)/g, newline + "> ");
	flagsInfo += flagText + newline;
}
let readme = `${MAIN_DATA}
## Current Flags
When you download files before that, you should check what content is available using the flag, 
these flags determine what is currently available, if the given flag is not there then the given 
information under this flag would not be generated or supported. always check that the given flag is available.
${GENERATORS.map((e) => ` - \`${e.flagId}\``).join(newline)}

${flagsInfo}
`;
const GENERAL_README = readme;
if (import.meta.filename == process.argv[1]) writeFileSync("./README.md", readme);

//#endregion
export { GENERAL_README, MAIN_DATA };