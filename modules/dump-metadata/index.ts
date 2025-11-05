import type { Installation } from "@bedrock-apis/bds-utils/install";

const BDS_PROCESS_MAX_LIFE_TIME = 15_000; //15s

export default async function runnable(installation: Installation): Promise<number>{
    await Deno.remove(installation.worlds.directory, {recursive: true});
    const process = await installation.runWithTestConfig({
        generate_api_metadata: true, 
        generate_documentation: true,
    }, null);

    process.stop(true, BDS_PROCESS_MAX_LIFE_TIME); //15s should more more than good
    const result = await process.wait().catch(_=>(console.error(_), null));
    if(result === null) return -1;
    return 0;
}