import { METADATA_WORKER } from "./metadata.js";

/**
 * @type {{
 * flagId: string, method(inputDir: string):Promise<boolean>
 * }[]}
 */
export const GENERATOR_FLAGS = [
    {
        flagId: METADATA_WORKER.FLAG_NAME,
        method: METADATA_WORKER
    }
];