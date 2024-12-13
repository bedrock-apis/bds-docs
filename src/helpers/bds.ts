import { readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { Panic, ReadJsonFile } from "../functions";
import { ManifestLike } from "../types";
import { EDITOR_EXTENSION_UUID } from "../consts";

const BEHAVIOR_PACKS_DIR = "behavior_packs";

export async function SearchForEditorExtension(basePath: string){
    const behavior_packs = resolve(basePath, BEHAVIOR_PACKS_DIR);
    for (const dir of await readdir(behavior_packs, { withFileTypes: true })) {
        // Skip if not directory [Skip]
        if (!dir.isDirectory()) continue;
        // Pack Base Path
        const base = resolve(basePath, dir.name);
        
        // Manifest File
        const manifest_file = base + "/manifest.json";
        
        // Exist check [Skip]
        if (!existsSync(manifest_file)) continue;
        
        // Read File Manifest
        const data = await ReadJsonFile<ManifestLike>(manifest_file);

        // Failed To Parse [Skip]
        if (!data || typeof data !== "object") continue;

        // Unknown format version [Report & Skip]
        if (data.format_version != 2) {
            console.warn("Unknown manifest format version: " + data.format_version);
            continue;
        }

        const {
            header: { uuid },
            modules,
        } = data;

        // Is not editor [Skip]
        if (EDITOR_EXTENSION_UUID !== uuid) continue;

        // Script Module
        const scriptModule = modules.find((e) => e.type === "script");

        // Check but return as this was the editor extension
        if(!scriptModule?.entry){
            Panic("Editor extension doesn't has script entry");
            return null;
        }

        // Check if entry exists in the folder
        if (!existsSync(resolve(base, scriptModule.entry))) {
            Panic(
                "Unexpected file name mismatch, file: " +
                scriptModule.entry +
                " doesn't exists for vanilla extension."
            );
            return null;
        }

        return { manifest: data, basePath: base, entry: resolve(base, scriptModule.entry) };
    }

    // No Match
    return null;   
}
export async function GetServerProperties(basePath: string): Promise<Record<string, string> | null>{

    const settings = {};
    for (const property of data.replace(/#(.+|)/g, "").match(/[a-z-]+=.+/g) ??
        []) {
        const [key, ...value] = property.split("=");

        console.log(key, (settings[key.toLocaleLowerCase()] = value.join("=")));
    }
    return settings;
}