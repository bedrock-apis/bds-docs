const { exit } = require("process");
const {exec} = require("node:child_process");
const { Download, SafeDownloadContent}= require("./download.js");
const os = require("os");
const { promises, existsSync, readdirSync } = require("fs");
const path = require("path");
const { ScriptModule } = require("./d.tsGenerator.js");
const { writeFile } = require("fs/promises");
const bds_versions_link = "https://raw.githubusercontent.com/Bedrock-OSS/BDS-Versions/main/versions.json";
const exist_link = (branch) => `https://raw.githubusercontent.com/Bedrock-APIs/bds-docs/${branch}/exist.json`;
const github_notfound = "404: Not Found";
const bin = "./bin";
const test_config = "test_config.json";
const test_config_data = JSON.stringify({
    generate_documentation: true
});
const docs_generated = [bin,"docs"].join("/");
const docs_cleaned = "./docs";
const declarations = "./script_types";
const version_registred = {
    "build-version":"1.0.0.0",
    "version":"1.0.0.0",
    "flags":[
        "generated_types",
        "script_module_list",
        "module_mapping"
    ],
    "script_modules":[],
    "script_modules_mapping":{},
};
const git_ignore = `
bin/
bds/
node_modules/
private/
test/
`;
const OSSYSTEM = os.platform() === "win32"?"win":"linux";


CompareLatestVersions();

async function Preload(v){
    console.log("Loggin as 'Documentation Manager Bot'")
    await System('git config --global user.name "Documentation Manager Bot"');
    await System('git config --global user.email "conmaster2112@gmail.com"');
    await System(`git checkout ${v}`);
    await writeFile(".gitignore", git_ignore);
    console.log("GIT INGORE WRITTEN!");
}

async function Finish(v,version){
    console.log("Versions registred");
    await promises.writeFile("exist.json",JSON.stringify(version_registred,null,"  "));
    console.log("Loggin as 'Documentation Manager Bot'")
    await System('git config --global user.name "Documentation Manager Bot"');
    await System('git config --global user.email "conmaster2112@gmail.com"');
    await System(`git checkout ${v}`);
    console.log("Commit");
    await System("git add .");
    await System(`git commit -m \"New ${v} v${v==="stable"?GetEngine(version):version}\"`);
    console.log("Push");
    await System("git push --force origin " + v);
    if(v==="stable") {
        console.log("New Branch stable-" + GetEngine(version));
        await System("git checkout -b stable-" + GetEngine(version));
        await System("git push -u origin stable-" + GetEngine(version));
    }
    console.log("Done..."); 
}
async function Generate(v,version){
    globalThis.console.log("Moving from main branch to " + v);
    await System(`git checkout ${v} || git checkout -b ${v}`);
    const console = Logger("[BDS Downloader]");
    console.log("Downloading started. . .");
    await Download("bin",version,OSSYSTEM,v.toLowerCase() === "preview").catch(er=>{
        console.error(er.message);
        console.error("Fails to download bds: " + version);
        exit(1);
    });
    console.log("Successfully Downloaded: " + OSSYSTEM);
    runDocs(v,version).catch(er=>{globalThis.console.error(er.message); exit(1);});
}
async function runDocs(v,version){
    const console = Logger("[Docs Generator]");
    console.log("Writing test_config.json");
    await promises.writeFile([bin,test_config].join("/"),test_config_data);
    console.log("Executing BDS in " + OSSYSTEM);
    globalThis.console.log("///////////////////////// Bedrock Dedicated Server ///////////////////////////");
    const time = Date.now();
    if(OSSYSTEM === "win"){
        await System("call bedrock_server.exe",bin,60_000,"   ").catch(er=>{
            console.error(er.message);
            exit(1);
        });
    }else{
        await System("chmod +x ./bin/bedrock_server",".",5_000).catch().catch(er=>{
            console.error(er.message);
            exit(1);
        });
        await System("LD_LIBRARY_PATH=. ./bedrock_server",bin,60_000,"    ").catch(er=>{
            console.error(er.message);
            exit(1);
        });
    }
    globalThis.console.log("///////////////////////// Bedrock Dedicated Server ///////////////////////////");
    if(existsSync(docs_generated)) {
        console.log("Successfully Generated in " + (Date.now() - time) + "ms");
        CopyFiles(v,version).catch(er=>{
            global.console.error(er.message);
            exit(1);
        });
        DoFiles(docs_generated + "/script_modules",declarations, (file, data)=>{
            const Json = JSON.parse(data.toString());
            const script_module = new ScriptModule(Json);
            const {name, uuid, version} = script_module;
            const ddd = version_registred.script_modules_mapping[name] =  version_registred.script_modules_mapping[name]??{versions:[]};
            ddd.uuid = uuid;
            ddd.versions.push(version);
            version_registred.script_modules.push(file);
            return [file.replace(".json",".d.ts"),script_module.toString()];
        }).then(()=>Finish(v,version)).catch(er=>{
            global.console.error(er.message);
            exit(1);
        });
    }else{
        console.error("Generating Docs doesn't success, folder not found './bin/docs'");
        exit(1);
    }
    //console.log((await promises.readFile(".\\bin\\docs\\script_modules\\@minecraft\\server-ui_1.0.0.json")).toString());
}
async function CopyFiles(v,version){
    const console = Logger("[Moving Files]");
    for (let file of FileTree(docs_generated)) {
        console.log(file);
        const data = await promises.readFile([docs_generated,file].join("/"));
        const makedir = await promises.mkdir(path.dirname([docs_cleaned,file].join("/")),{recursive:true});
        await promises.writeFile([docs_cleaned,file].join("/"),data);
    }
}
async function DoFiles(fr,to,changeMethod){
    const console = Logger("[Generating Docs Files]");
    for (let file of FileTree(fr)) {
        const data = await promises.readFile([fr,file].join("/"));
        const makedir = await promises.mkdir(path.dirname([to,file].join("/")),{recursive:true});
        const [newF,newData] = changeMethod(file,data);
        console.log("Generated types  ->  " + newF);
        await promises.writeFile([to,newF].join("/"),newData);
    }
}
async function CompareLatestVersions(){
    const console = Logger("[Checking Versions]");
    console.log("Checking for Updates . . .");
    
    //----------------------------------------------------------------------------------
    
    console.log("Getting versions"); 
    let response = (await SafeDownload(bds_versions_link,console)).toString();
    if(response == github_notfound) {
        console.error("File not found: " + bds_versions_link);
        process.exit(1);
    }
    const {linux:{stable,preview}} = SafeParse(response);
    const engine = GetEngine(stable);
    console.log("Stable Version: " + engine);
    console.log("Preview Version: " + preview);

    //----------------------------------------------------------------------------------
    if(!await CheckForExist("stable",engine,console)) {
        Object.assign(version_registred, {
            "build-version":stable,
            "version":engine
        })
        _preview = false;
        console.log("New Stable Version Found: " + engine);
        await Preload("stable");
        Generate("stable",stable);
        return;
    }
    if(!await CheckForExist("preview",preview,console)) {
        Object.assign(version_registred, {
            "build-version":preview,
            "version":preview
        })
        _preview = true;
        console.log("New Stable Version Found: " + preview);
        await Preload("preview");
        Generate("preview",preview);
        return;
    }
    console.log("Docs are up to date");
}
async function System(cmd,cwd = ".",timeout=undefined,prefix=""){
    return new Promise((resolve, reject) => {
        const child = exec(cmd, {cwd, windowsHide: true,timeout}, function(){});
        process.stdout.write(prefix);
        child.stdout.on('data', (data) => {
            process.stdout.write(data.replaceAll("\n","\n" + prefix));
        });
      
        child.stderr.on('data', (data) => {
            process.stderr.write(data.replaceAll("\n","\n" + prefix));
        });
      
        child.on('error', (error) => {
          console.error(`exec error: ${error.message}`);
          reject(error);
        });
      
        child.on('exit', (code, signal) => {
          if (code !== 0) {
            reject(new Error(`Process exited with code ${code} and signal ${signal}`));
          } else {
            resolve();
          }
        });
      }).then(()=>process.stdout.write("\n"));
}
async function CheckForExist(v,version,console){
    try {
        console.log("Checking for " + v);
        let versionLink = exist_link(v);
        let response = (await SafeDownload(versionLink,console)).toString();
        if(response === github_notfound) {
            console.error(`Can't target to ${v} -> exist.json`);
            return false;
        }
        const {"build-version":bv,"version":vv} = JSON.parse(response,console);
        console.log(`Version compare: ${vv} === ${version}`);
        return version==vv;
    } catch (error) {
        return false;
    }
}
function GetEngine(v){
    const [major,minor,base] = v.split(".");
    return [major,minor,StableVersion(base)].join(".");
}
function SafeParse(data,console = globalThis.console){
    try {
        return JSON.parse(data);
    } catch (error) {
        console.error(error.message);
    }
}
async function SafeDownload(link,console = globalThis.console){
    const {error,data} = await SafeDownloadContent(link);
    if(error){
        console.error(error.message);
        exit(1);
    }
    return data;
}
function StableVersion(num){
    if(num.length === 1) return "0";
    else {
        return num[0] + "0".repeat(num.length - 1);
    }
}
function Logger(text,console=globalThis.console){
    const {log,error,warn} = console;
    return Object.assign({},{
        log:log.bind(console,text),
        error:error.bind(console,text),
        warn:warn.bind(console,text),
    });
}
function *FileTree(base,paths = []){
    for (const entry of readdirSync([base,...paths].join("/"),{withFileTypes:true})) {
        if(entry.isFile()) yield [...paths,entry.name].join("/");
        else if(entry.isDirectory()) yield*FileTree(base,[...paths,entry.name]);
    }
}
