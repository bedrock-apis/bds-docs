import blocks from "./data/blocks";
import metadata from "./metadata";
import module_mapping from "./module_mapping";
import script_declaration from "./script_declaration";
export type ModuleDefaultExport = {
    flagId: string,
    method: (dir: string)=>Promise<number>,
    description: string
};
export const GENERATORS: ModuleDefaultExport[] = [
    metadata,
    module_mapping,
    script_declaration,
    blocks
];