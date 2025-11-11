export * from "./printer";
import type { Installation } from "@bedrock-apis/bds-utils/install";
import { TheDumper } from "../dumper";
import { getFilesRecursiveIterator } from "../utils";
import { dirname, join } from "node:path";
import { MetadataDumper } from "../dump-metadata";
import { MetadataModuleDefinition } from "../script-module-metadata";
import { Printer } from "./printer";
import { CONTENTS_FILE_NAME, TO_JSON_FORMAT } from "../constants";

const OUTPUT_FOLDER = "types";

export class TypePrinterDumper {
    public static output = OUTPUT_FOLDER;
    public static async run(_: Installation): Promise<number> {
        const baseSource = join(MetadataDumper.output, "script_modules");
        const baseDestination = TypePrinterDumper.output;
        const contents: string[] = [];
        for await (const file of getFilesRecursiveIterator(baseSource)){
            const text = await Deno.readTextFile(join(baseSource, file));
            const data = JSON.parse(text) as MetadataModuleDefinition;
            let apiCount = data.classes.length + 
            data.constants.length +
            data.objects.length +
            data.errors.length +
            (data.enums?.length??0) +
            data.functions.length +
            data.interfaces.length + 
            data.type_aliases.length;
            if(apiCount === 0) continue;

            const poorFileName = file.replace(/.json$/,".d.ts");
            const filename = join(baseDestination, poorFileName);
            console.log(filename);
            await Deno.mkdir(dirname(filename), {recursive: true}).catch(_=>null);
            await Deno.writeTextFile(filename, Printer.printModule(data).toArray().join("\n"));
            contents.push(poorFileName);
        }
        await Deno.writeTextFile(join(baseDestination, CONTENTS_FILE_NAME), TO_JSON_FORMAT(contents.sort()));
        return 0;
    }
};
export default TypePrinterDumper satisfies TheDumper as TheDumper;