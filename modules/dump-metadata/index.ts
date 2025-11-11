import type { Installation } from "@bedrock-apis/bds-utils/install";
import { dirname, join } from "node:path";
import { getFilesRecursiveIterator } from "../utils";
import { TheDumper } from "../dumper";
import { CONTENTS_FILE_NAME, TO_JSON_FORMAT } from "../constants";

const BDS_PROCESS_MAX_LIFE_TIME = 15_000; //15s
const BDS_DOCS_FOLDER_NAME = "docs";
const OUTPUT_FOLDER = "metadata";

export class MetadataDumper {
    public static output = OUTPUT_FOLDER;
    public static description = `METADATA DESCRIPTION`;
    public static async init(installation: Installation): Promise<number> {
        await Deno.remove(installation.worlds.directory, { recursive: true }).catch(_ => null);
        const process = await installation.runWithTestConfig({
            generate_api_metadata: true,
            generate_documentation: true,
        }, null);
        process.enabledOutputRedirection();
        process.stop(true, BDS_PROCESS_MAX_LIFE_TIME); //15s should more more than good
        const result = await process.wait().catch(_ => (console.error(_), null));
        if (result === null) return -1;
        return result;
    }
    public static run(installation: Installation): Promise<number>{
        return this.CopyDocsTask(join(installation.directory, BDS_DOCS_FOLDER_NAME), OUTPUT_FOLDER).catch(_=>-1);
    }
    public static async CopyDocsTask(source: string, destination: string): Promise<number> {
        const contents: string[] = [];
        const action = async (fileName: string) => {
            let data: Uint8Array = await Deno.readFile(join(source, fileName));
            if (fileName.endsWith(".json")) try {
                let object = JSON.parse(new TextDecoder().decode(data as Uint8Array)) as Record<string, any>;
                // Extract any related properties that might change every version
                delete object["minecraft_version"];
                delete object["x-minecraft-version"];
                data = new TextEncoder().encode(TO_JSON_FORMAT(object));
            } finally { }
            fileName = fileName.replaceAll(" ", "_");
            contents.push(fileName);
            let dest = join(destination, fileName);
            await Deno.mkdir(dirname(dest), {recursive: true}).catch(_=>null);
            await Deno.writeFile(dest, data as Uint8Array);
        };
        const tasks = [];
        for await (const file of getFilesRecursiveIterator(source)) tasks.push(action(file));
        await Promise.all(tasks);
        await Deno.writeTextFile(join(destination, CONTENTS_FILE_NAME), TO_JSON_FORMAT(contents));
        return 0;
    }
}
export default MetadataDumper satisfies TheDumper as TheDumper;