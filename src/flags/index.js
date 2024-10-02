import { METADATA } from "./metadata.js";
import { SCRIPT_MODULES_MAPPING } from "./module_maping.js";

/**
 * @type {{
 * flagId: string, method(inputDir: string):Promise<boolean>
 * }[]}
 */
export const GENERATOR_FLAGS = [
    {
        flagId: METADATA.name,
        method: METADATA
    },
    {
        flagId: SCRIPT_MODULES_MAPPING.name,
        method: SCRIPT_MODULES_MAPPING
    }
];