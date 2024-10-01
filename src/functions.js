import { readFile } from "node:fs/promises";
import { Buffer } from "node:buffer";
/**
 * 
 * @param {string} pathOrLink
 * @returns {Promise<Buffer|null>}
 */
export async function resolveDataFrom(pathOrLink) {
    if(!pathOrLink.startsWith("http")){
        return readFile(pathOrLink);
    }
    else
    {
        const response = await fetch(pathOrLink);
        if (response.status == 404) return null;
        return Buffer.from(await response.arrayBuffer());
    }
}