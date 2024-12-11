import { createWriteStream, existsSync, existsSync as existsSync$1, existsSync as existsSync$2, mkdirSync, mkdirSync as mkdirSync$1, mkdirSync as mkdirSync$2, readFileSync, writeFileSync } from "node:fs";
import { platform } from "node:os";
import { env } from "node:process";
import { readFile, readFile as readFile$1, readFile as readFile$2, rm, rmdir, writeFile } from "node:fs/promises";
import { dirname as dirname$1, dirname as dirname$2, resolve, resolve as resolve$1, resolve as resolve$2, resolve as resolve$3, resolve as resolve$4, resolve as resolve$5, resolve as resolve$6 } from "node:path";
import { pipeline, pipeline as pipeline$1 } from "node:stream/promises";
import { spawn } from "node:child_process";
import { minimatch } from "minimatch";
import { Readable } from "node:stream";

//#region src/consts.ts
const PROCESS_TIMEOUT = 5e3;
const ALWAYS_OVERWRITE = env["ALWAYS_OVERWRITE"] ?? false;
const PLATFORM = platform() == "win32" ? "win" : "linux";
const DEBUG = env["DEBUG_MODE"] ? true : false;
const DISCORD_TOKEN = env["DISCORD_TOKEN"];
const IS_GITHUB_ACTION = env["GITHUB_WORKFLOW"] ? true : false;
const BDS_OUTDIR_PATH = "./bin";
const LINK_BDS_VERSIONS = "https://raw.githubusercontent.com/Bedrock-OSS/BDS-Versions/main/versions.json";
const LINK_BDS_CDN = `https://www.minecraft.net/bedrockdedicatedserver`;
const GITHUB_REPO_NAME = env["GITHUB_REPOSITORY"] ?? "bedrock-apis/bds-docs";
const LOGIN_AS_NAME = "Metadata Generator";
const LOGIN_AS_EMAIL = "metadatagenerator@fakemail.com";
const GITHUB_STABLE_BRANCH_NAME = `stable`;
const GITHUB_PREVIEW_BRANCH_NAME = `preview`;
const LINK_GITHUB_DOMAIN = "https://raw.githubusercontent.com";
const LINK_GITHUB_REPO = `${LINK_GITHUB_DOMAIN}/${GITHUB_REPO_NAME}`;
const FILE_NAME_GITHUB_REPO_EXISTS = "exist.json";
const FILE_NAME_GITHUB_README = "README.md";
const FILE_NAME_BDS_TEST_CONFIG = "test_config.json";
const FILE_NAME_BDS_BINARY = "bedrock_server";
const FILE_NAME_GITIGNORE = ".gitignore";
const FILE_CONTENT_BDS_TEST_CONFIG = JSON.stringify({ generate_documentation: true });
const FILE_CONTENT_GITIGNORE = readFileSync(FILE_NAME_GITIGNORE).toString();
const WORKING_DIRECTORY = DEBUG ? (env.HOMEDRIVE ?? "") + (env.HOMEPATH ?? "") + "\\_test" : ".";
const TERMINAL_CREATE_GROUP = "::group::";
const TERMINAL_END_GROUP = "::endgroup::";
const BUNDLER_OUTPUT = import.meta.dirname;
if (DEBUG) console.log("[DEBUG] Enabled: " + WORKING_DIRECTORY);
const FILE_CONTENT_CURRENT_EXIST = {
	version: "",
	"build-version": "",
	"flags": []
};

//#endregion
//#region src/functions/utils.ts
function GetEngineVersion(version) {
	const [ma = 1, mi = 0, en = 0] = version.split(".").map(Number);
	return `${ma}.${mi}.${Math.floor(en / 10) * 10}`;
}
function Panic(message) {
	console.error(message);
	return -1;
}
function Success(message) {
	console.info("\x1B[32m" + message);
	return 0;
}

//#endregion
//#region src/functions/file-system.ts
async function* DirectoryTreeRemoval(dir, method) {
	let i = 0;
	const tasks = [];
	for (const file of FileTree(dir)) {
		if (method(file)) {
			console.log("[Skipped Entry]: " + file);
			continue;
		}
		i++;
		tasks.push(rm(resolve$6(dir, file)));
		yield file;
	}
	await Promise.all(tasks);
	for (const directory of DirectoryTree(dir)) {
		if (method(directory)) {
			console.log("[Skipped Entry]: " + directory);
			continue;
		}
		i++;
		await rmdir(resolve$6(dir, directory));
		yield directory;
	}
	return i;
}
function* FileTree(base, paths = []) {
	for (const entry of readdirSync([base, ...paths].join("/"), { withFileTypes: true })) if (entry.isFile()) yield [...paths, entry.name].join("/");
else if (entry.isDirectory()) yield* FileTree(base, [...paths, entry.name]);
}
function* DirectoryTree(base, paths = []) {
	for (const entry of readdirSync([base, ...paths].join("/"), { withFileTypes: true })) if (entry.isDirectory()) {
		yield* DirectoryTree(base, [...paths, entry.name]);
		yield [
			...paths,
			entry.name,
			""
		].join("/");
	}
}
async function ReadFile(fileName) {
	return await readFile$2(fileName).catch((e) => null);
}
async function WriteFile(fileName, data) {
	return await writeFile(fileName, data).then((e) => 0, Panic);
}

//#endregion
//#region src/functions/fetch.ts
async function FetchJson(target) {
	const response = await fetch(target);
	if (!response.ok) return null;
	return response.json().catch((e) => null);
}
async function DownloadZipFile(link, outDir) {
	const response = await fetch(
		link
		/*`${LINK_BDS_CDN}/bin-${PLATFORM}${isPreview?"-preview":""}/bedrock-server-${version}.zip`version: VersionFull, isPreview: boolean, outDir: string = BDS_OUTDIR_PATH*/
);
	if (!response.ok || !response.body) return -1;
	if (!response.ok || !response.body) return -1;
	const contentLength = response.headers.get("content-length");
	if (!contentLength) return -1;
	let filesCount = 0;
	const unzipStream = Extract({ path: outDir });
	unzipStream.unzipStream.on("entry", (p) => {
		const isDir = p.isDirectory;
		if (isDir) console.log(`Downloading directory: ${p.path}`);
else filesCount++;
	});
	const task = new Promise((res, rej) => {
		unzipStream.on("error", rej);
		unzipStream.on("finish", res);
	});
	await pipeline$1(response.body, unzipStream).catch(() => filesCount = -1);
	await task.catch(() => filesCount = -1);
	return filesCount;
}

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
let isLoggedIn = false;
const InvokeGit = InvokeProcess.bind(void 0, "git");
async function GithubPostNewBranch(branch) {
	if (DEBUG) {
		console.log("[DEBUG] Login Skipped . . .");
		return 0;
	}
	const loginResult = await GithubLoginAs(LOGIN_AS_NAME, LOGIN_AS_EMAIL);
	if (!loginResult) return Panic(`Failed to login as ${LOGIN_AS_NAME} ${LOGIN_AS_EMAIL}`);
	let params = `checkout -b ${branch}`.split(" ");
	let result = await InvokeGit(params);
	if (result.exitCode != 0) return Panic(`Fail to execute '${result.command + " " + params.join(" ")}'  command`);
	params = `push -u ${branch}`.split(" ");
	result = await InvokeGit(params);
	if (result.exitCode != 0) return Panic(`Fail to execute '${result.command} ${params.join(" ")}' command`);
	return 0;
}
async function GithubCheckoutBranch(branch, force) {
	if (DEBUG) {
		console.log("[DEBUG] Login Skipped . . .");
		return 0;
	}
	const loginResult = await GithubLoginAs(LOGIN_AS_NAME, LOGIN_AS_EMAIL);
	if (!loginResult) return Panic(`Failed to login as ${LOGIN_AS_NAME} ${LOGIN_AS_EMAIL}`);
	let result = await InvokeGit(["fetch"]);
	if (result.exitCode != 0) return Panic(`Fail to execute '${result.fullCommand}' command`);
	result = await InvokeGit([
		"checkout",
		branch,
		force ? "-f" : ""
	]);
	if (result.exitCode != 0) return Panic(`Fail to execute '${result.fullCommand}' command`);
	return 0;
}
async function GithubLoginAs(name, email) {
	if (isLoggedIn) return true;
	if (DEBUG) {
		console.log("[DEBUG] Login Skipped . . .");
		return true;
	}
	let result = await InvokeGit([
		"config",
		"--global",
		"user.name",
		name
	]);
	if (result.exitCode != 0) return false;
	result = await InvokeGit([
		"config",
		"--global",
		"user.email",
		email
	]);
	if (result.exitCode != 0) return false;
	console.log(`Successfully Logged in as '${name}'`);
	isLoggedIn = true;
	return true;
}
async function GithubCommitAndPush(branch, version, isPreview) {
	if (DEBUG) {
		console.log("[DEBUG] Login Skipped . . .");
		return 0;
	}
	let result = await InvokeGit(["add", "."]);
	if (result.exitCode != 0) return -1;
	result = await InvokeGit([`commit`, `-m New ${branch} v${isPreview ? version : GetEngineVersion(version)}`]);
	if (result.exitCode != 0) return -1;
	result = await InvokeGit([
		"push",
		"--force",
		"origin",
		branch
	]);
	if (result.exitCode != 0) return -1;
	return 0;
}

//#endregion
//#region src/functions/console.ts
let lastGroup = undefined;
function group(content = "") {
	lastGroup = {
		time: Date.now(),
		base: lastGroup
	};
	console.log(TERMINAL_CREATE_GROUP + content);
}
function groupEnd() {
	const { time = 0, base } = lastGroup ?? {};
	lastGroup = base;
	console.log("Group Performed in " + (Date.now() - time) + "ms");
	console.log(TERMINAL_END_GROUP);
}
function groupFinish() {
	while (lastGroup) groupEnd();
}

//#endregion
//#region src/helper.ts
async function GetRepositoryExistJson(branch) {
	return await FetchJson(`${LINK_GITHUB_REPO}/${branch}/${FILE_NAME_GITHUB_REPO_EXISTS}`);
}
async function GetRepositoryVersionIncompatibility(versions) {
	if (ALWAYS_OVERWRITE) return null;
	let data = await GetRepositoryExistJson(GITHUB_STABLE_BRANCH_NAME);
	if (!data || data.version !== GetEngineVersion(versions.windows.stable)) return {
		branch: GITHUB_STABLE_BRANCH_NAME,
		version: versions.windows.stable,
		usePreview: false
	};
	data = await GetRepositoryExistJson(GITHUB_PREVIEW_BRANCH_NAME);
	if (!data || data.version !== versions.windows.preview) return {
		branch: GITHUB_PREVIEW_BRANCH_NAME,
		version: versions.windows.preview,
		usePreview: true
	};
	return null;
}

//#endregion
//#region src/content_saver.ts
async function SaveWorkspaceContent() {
	let failed = await readFile$1("./dist/script_api.js");
	if (failed) return Panic("Failed to load file");
	return 0;
}

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
	const inputDir = resolve$5(inputDirPath, "docs/vanilladata_modules");
	const tasks = [];
	for (const file of FileTree(inputDir)) tasks.push(Task$3(inputDir, file).catch(() => false));
	const results = (await Promise.all(tasks)).filter((s) => s);
	return results.length == 1 ? 0 : -1;
}
async function Task$3(input, fileName) {
	if (!fileName.endsWith(".json")) return Panic("Invalid file name suffix: " + fileName + " expected .json");
	let buffer = await ReadFile(resolve$5(input, fileName));
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
	let results = await WriteFile(resolve$5(DATA_OUTPUT_FOLDER, OUTPUT_BLOCK_STATES), JSON.stringify(states, null, 3));
	if (!results) return Panic("Failed to write file: " + OUTPUT_BLOCK_STATES);
	console.log("[DATA/BLOCKS_STATES] Generated: " + OUTPUT_BLOCK_STATES);
	const blocks = data["data_items"].map((e) => {
		e.properties = e.properties.map((s) => s.name);
		return MapBlock(states_map, e);
	});
	results = await WriteFile(resolve$5(DATA_OUTPUT_FOLDER, OUTPUT_BLOCKS), JSON.stringify(blocks, null, 3));
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
	const inputDir = resolve$4(inputDirPath, "docs");
	const tasks = [];
	for (const file of FileTree(inputDir)) tasks.push(Task$2(inputDir, file).catch(() => false));
	const results = (await Promise.all(tasks)).filter((s) => s);
	return tasks.length == results.length ? 0 : -1;
}
async function Task$2(input, fileName) {
	let buffer = await ReadFile(resolve$4(input, fileName)).catch(() => null);
	if (buffer == null) return Panic("Failed to load file: " + fileName);
	if (fileName.endsWith(".json")) buffer = await TransformJsonModule(buffer.toString()).catch((e) => null);
	if (buffer == null) return Panic("Failed to transform file: " + fileName);
	const outFile = resolve$4(OUTPUT_FOLDER$1, fileName);
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
	const inputDir = resolve$3(inputDirPath, "docs/script_modules");
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
	let buffer = await ReadFile(resolve$3(input, fileName));
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
	const inputDir = resolve$2(inputDirPath, "docs/script_modules");
	const tasks = [];
	for (const file of FileTree(inputDir)) tasks.push(Task(inputDir, file).catch(() => -1));
	const results = (await Promise.all(tasks)).filter((s) => !s);
	return tasks.length === results.length ? 0 : -1;
}
async function Task(input, fileName) {
	if (!fileName.endsWith(".json")) return Panic("File name doesn't ends with '.json'");
	let buffer = await ReadFile(resolve$2(input, fileName));
	if (buffer == null) return Panic("Failed to read file: " + fileName);
	const outFile = resolve$2(OUTPUT_FOLDER, fileName);
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
const MAIN_DATA = await readFile(resolve$1(import.meta.dirname, "./__MAIN.md"));
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
//#region src/discord/index.ts
async function createPost(channelId, content) {
	console.log("Creating post");
	const url = `https://discord.com/api/v10/channels/${channelId}/threads`;
	const token = DISCORD_TOKEN;
	console.log("Token Length:", token?.length);
	const body = {
		name: "New Update",
		message: { content }
	};
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bot ${token}`
		},
		body: JSON.stringify(body)
	});
	if (!response.ok) return Panic(response.statusText);
	const data = await response.json().then(() => 0, Panic);
	if (!data) return Panic("Failed to parse discord response.");
	console.log("Post created successfully!");
	return 0;
}

//#endregion
//#region src/main.ts
let performanceTime = Date.now();
Main().catch((er) => {
	console.log(er, er.stack);
	process.exit(-1);
}).then((c) => {
	groupFinish();
	console.log(`Execution time: ${~~((Date.now() - performanceTime) / 1e3)}s`);
	process.exit(c);
});
async function Main() {
	const versions = await FetchJson(LINK_BDS_VERSIONS);
	if (!versions) return Panic("Failed to get current versions");
	const checkResults = await GetRepositoryVersionIncompatibility(versions);
	if (!checkResults) return Success("All is up to date . . .");
	FILE_CONTENT_CURRENT_EXIST["version"] = checkResults.usePreview ? checkResults.version : GetEngineVersion(checkResults.version);
	FILE_CONTENT_CURRENT_EXIST["build-version"] = checkResults.version;
	group(`Branch checkout: ${checkResults.branch} IsForced: ${true}`);
	console.log(GITHUB_REPO_NAME, process.env);
	let successful = await GithubCheckoutBranch(checkResults.branch, true);
	if (!successful) return Panic(`Failed to checkout branch: ${checkResults.branch}`);
	groupEnd();
	await SaveWorkspaceContent();
	if (IS_GITHUB_ACTION) {
		group("Clear Repo Bruteforce");
		for await (const entry of DirectoryTreeRemoval(".", (f) => {
			return [".git/**/*", ".git/"].some((s) => minimatch(f, s, { nocase: true }));
		})) console.log("[REPO Clear] entry: " + entry);
		groupEnd();
	}
	successful = await WriteFile(FILE_NAME_GITIGNORE, FILE_CONTENT_GITIGNORE);
	if (!successful) return Panic("Failed to write .gitignore file");
	group(`Download of Bedrock Dedicated Server -> ${BDS_OUTDIR_PATH}`);
	successful = await DownloadZipFile(`${LINK_BDS_CDN}/bin-${PLATFORM}${checkResults.usePreview ? "-preview" : ""}/bedrock-server-${checkResults.version}.zip`, BDS_OUTDIR_PATH);
	if (!successful) return Panic("Failed to download BDS");
	console.log("Bedrock Dedicated Server Downloaded Successfully");
	groupEnd();
	successful = await WriteFile(resolve(BDS_OUTDIR_PATH, FILE_NAME_BDS_TEST_CONFIG), FILE_CONTENT_BDS_TEST_CONFIG);
	if (!successful) return Panic("Failed to write test_config.json");
	group(`Running Bedrock Dedicated Server -> ${BDS_OUTDIR_PATH}`);
	let exeSuccessful = await InvokeProcess(resolve(BDS_OUTDIR_PATH, FILE_NAME_BDS_BINARY), [], 6e4);
	if (!exeSuccessful.exitCode) return Panic("Failed to invoke BDS with test_config.json: " + exeSuccessful.error);
	console.log("BDS has quit Successfully");
	groupEnd();
	console.log(`${GENERATORS.length} Generators Flags . . .`);
	let temp = 0;
	for (const flag of GENERATORS) {
		group(`[${++temp} / ${GENERATORS.length}] Generator ${flag.flagId}`);
		successful = await flag.method(BDS_OUTDIR_PATH).then(() => 0, Panic);
		if (!successful) return Panic("Generator Failed " + flag.flagId);
		FILE_CONTENT_CURRENT_EXIST.flags.push(flag.flagId);
		groupEnd();
	}
	group("Writing " + FILE_NAME_GITHUB_REPO_EXISTS);
	const existContent = JSON.stringify(FILE_CONTENT_CURRENT_EXIST, null, 3);
	successful = await WriteFile(FILE_NAME_GITHUB_REPO_EXISTS, existContent);
	if (!successful) return Panic("Failed to write exist.json file");
	console.log(existContent);
	groupEnd();
	successful = await WriteFile(FILE_NAME_GITHUB_README, GENERAL_README);
	if (!successful) return Panic("Failed to write README.md file");
	successful = await createPost("1150152535475240991", "Hello World").then(() => 0, Panic);
	if (!successful) return Panic("Failed to post on discord");
	group("Commit & Push -> " + checkResults.branch);
	successful = await GithubCommitAndPush(checkResults.branch, checkResults.version, checkResults.usePreview);
	if (!successful) {
		console.error("Failed to commit and push");
		return -1;
	}
	if (ALWAYS_OVERWRITE || checkResults.usePreview) {
		groupEnd();
		return 0;
	}
	successful = await GithubPostNewBranch(`${checkResults.branch}-${GetEngineVersion(checkResults.version)}`);
	if (!successful) return Panic("Failed to post new branch");
	groupEnd();
	return 0;
}

//#endregion