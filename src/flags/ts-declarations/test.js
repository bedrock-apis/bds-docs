import { createWriteStream, readFileSync } from "node:fs";
import { basename, resolve,  } from "node:path";
import { Printer } from "./printers.js";

export async function MainEntry(){

    const path = `D:/Resources/Programming/Github/bds-docs/bin/bds/docs/script_modules/@minecraft/server-gametest_2.0.0-alpha.json`;
    const data = Printer(JSON.parse(readFileSync(resolve(import.meta.dirname, path)).toString()));

    const stream = createWriteStream("./" + basename(path, ".json") + ".d.ts", {autoClose: true});

    for(const chunk of data) {
        process.stdout.write(chunk);
        await new Promise((res,rej)=>stream.write(chunk,(s)=>s?rej(s):res(s)));
    }
    console.log();
    stream.end();


/*
    const p = createPrinter({ removeComments: true});
    
    const m = ScriptModuleLoader();
    const src =createSourceFile("output.d.ts", "", ScriptTarget.ES2022);


    const nodes =  m.factoryBuild(new Context(m));


    //console.log(p.printNode(EmitHint.Unspecified, new EnumScriptMetadataKind("Test").factoryBuild(new Context(m)), src));

    let test = "";

    for(const node of nodes){
        test += p.printNode(EmitHint.Unspecified, node, src).replaceAll(/\n(\s+|)/g,"") + "\r\n";
    }

    writeFileSync("./test.d.ts", test);*/
}