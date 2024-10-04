//@ts-nocheck
import { read, writeFileSync } from "node:fs";
import { GENERATORS_FLAGS } from "../src/flags/index.js";
import { dirname, resolve } from "node:path";
import { readFile } from "node:fs/promises";

export const MAIN_DATA = await readFile(resolve(import.meta.dirname, "./__MAIN.md"));
let flagsInfo = "";
const newline = "\n\r";

for (const generator of GENERATORS_FLAGS) {
    let flagText = `### \`FLAG:${generator.flagId}\` Documentation${newline}`;
    flagText += `> ${(generator.description??(
        console.log("No generator metadata description for: " + generator.flagId),
        "NO DESCRIPTION"
    ))}`.replaceAll(/(\r\n|\r|\n)(\s+|)/g, newline + "> ");
    flagsInfo += flagText + newline;
}
let readme = `${MAIN_DATA}
## Current Flags
When you download files before that, you should check what content is available using the flag, 
these flags determine what is currently available, if the given flag is not there then the given 
information under this flag would not be generated or supported. always check that the given flag is available.
${GENERATORS_FLAGS.map(e=>` - \`${e.flagId}\``).join(newline)}

${flagsInfo}
`;
export const GENERAL_README = readme;
if(import.meta.filename == process.argv[1]) writeFileSync("./README.md", readme);