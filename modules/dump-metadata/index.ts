import type { Installation } from "@bedrock-apis/bds-utils/install";
import { join } from "node:path";

const BDS_PROCESS_MAX_LIFE_TIME = 15_000; //15s
const BDS_DOCS_FOLDER_NAME = "docs";
const OUTPUT_FOLDER = "metadata";

export default class Metadata {
    public static DESCRIPTION = `METADATA DESCRIPTION`;
    public static async Init(installation: Installation): Promise<number> {
        await Deno.remove(installation.worlds.directory, { recursive: true }).catch(_=>null);
        const process = await installation.runWithTestConfig({
            generate_api_metadata: true,
            generate_documentation: true,
        }, null);
        process.stop(true, BDS_PROCESS_MAX_LIFE_TIME); //15s should more more than good
        const result = await process.wait().catch(_ => (console.error(_), null));
        if (result === null) return -1;
        return result;
    }
    public static * GetTasks(installation: Installation): Generator<Promise<number>>{
        yield this.CopyDocsTask(join(installation.directory, BDS_DOCS_FOLDER_NAME), OUTPUT_FOLDER);
    }
    public static async CopyDocsTask(source: string, destination: string): Promise<number>{
        for await (const file of readDirRecursive(source)){
            console.log(file);
        }
        return 0;
    }
}
export async function* readDirRecursive(base: string, src?: string): AsyncGenerator<string> {
    for await (const { name, isFile, isDirectory } of Deno.readDir(join(base, src??""))) {
        let path = join(src??"", name);
        if (isFile) yield path;
        if (isDirectory) yield* readDirRecursive(base, path);
    }
}