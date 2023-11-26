const { exec } = require("child_process");
const { argv, env } = require("process");
const os = require("os");
const {promises,readdirSync} = require("fs");
const path = require("path");
const { DownloadContent } = require("./download");

const getExistLink = (branch) => `https://raw.githubusercontent.com/Bedrock-APIs/bds-docs/${branch}/exist.json`;

const github_notfound = "404: Not Found";
const test_config_fileName = "test_config.json";
const binPath = "./bin";
const VersionSpecificOveriwrite = argv[3];
const DebugMode = argv[2];
const defualtExistConfig = {
    "build-version":"1.0.0.0",
    "version":"1.0.0.0",
    "glags":[
        "generated_types"
    ]
};
const test_config_data = JSON.stringify({generate_documentation: true});
const OSSYSTEM = os.platform() === "win32"?"win":"linux";
function *FileTree(base,paths = []){
    for (const entry of readdirSync([base,...paths].join("/"),{withFileTypes:true})) {
        if(entry.isFile()) yield [...paths,entry.name].join("/");
        else if(entry.isDirectory()) yield*FileTree(base,[...paths,entry.name]);
    }
}
async function DoFiles(fr,to,changeMethod){
    for (let file of FileTree(fr)) {
        const data = await promises.readFile([fr,file].join("/"));
        const makedir = await promises.mkdir(path.dirname([to,file].join("/")),{recursive:true});
        const [newF,newData] = await changeMethod(file,data);
        await promises.writeFile([to,newF].join("/"),newData);
    }
}
async function CopyFiles(fr,to){
    for (let file of FileTree(fr)) {
        const data = await promises.readFile([fr,file].join("/"));
        const makedir = await promises.mkdir(path.dirname([to,file].join("/")),{recursive:true});
        await promises.writeFile([to,file].join("/"),data);
    }
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
function StableVersion(num){
    if(num.length === 1) return "0";
    else {
        return num[0] + "0".repeat(num.length - 1);
    }
}
function GetEngine(v){
    const [major,minor,base] = v.split(".");
    return [major,minor,StableVersion(base)].join(".");
}
async function RunBedrockServer(){
    await promises.writeFile([binPath,test_config_fileName].join("/"),test_config_data);
    return;
    console.log("Executing BDS in " + OSSYSTEM);
    console.log("///////////////////////// Bedrock Dedicated Server ///////////////////////////");
    if(OSSYSTEM === "win"){
        await System("call bedrock_server.exe",binPath,120_000,"   ");
    }else{
        await System("chmod +x ./bin/bedrock_server",".",5_000);
        await System("LD_LIBRARY_PATH=. ./bedrock_server",binPath,120_000,"    ");;
    }
    console.log("///////////////////////// Bedrock Dedicated Server ///////////////////////////");
}
class JsonModule{
    constructor(fileName){
        if(fileName.endsWith(".json")) fileName = fileName.substring(0,fileName.length - ".json".length);
        this.fileName = fileName;
        const [name,v] = fileName.split('_');
        const [version,tag] = v.split("-");
        this.name = name;
        this.versions = version.split(".").map(v=>Number(v));
        this.version = version;
        this.tag = tag??null;
    }
    isNewer(compare){
        for (let i = 0; i < this.versions.length; i++) {
            if(compare.versions[i] > this.versions[i]) return true;
        }
        return compare.tag!==null?this.tag===null:false;
    }
}
async function GetGithubExist(version){
    let versionLink = getExistLink(version);
    let response = await DownloadContent(versionLink);
    if(response === github_notfound) return null;
    const d = JSON.parse(response);
    return d;
}
async function GetGithubFile(link){
    let response = await DownloadContent(link);
    if(response === github_notfound) return null;
    return response;
}

function LoadScriptModules(path){
    const modules = new Map();
    for (const file of FileTree(path)) {
        const m = new JsonModule(file);
        if(m.tag === "internal") continue;
        if(modules.has(m.name + m.tag??"")) {
            if(modules.get(m.name + m.tag??"").isNewer(m)) modules.set(m.name + m.tag??"",m);
        }else modules.set(m.name + m.tag??"",m);
    }
    return modules;
}
class Data{
    static async getCache(){
        const data = await promises.readFile("./cache.json");
        return JSON.parse(data.toString());
    }
    static async setCache(cache){
        const data = JSON.stringify(cache,null,"   ");
        await promises.writeFile("./cache.json",data);
    } 
}
const bin = "./bin";
module.exports = {
    Data,
    resources:{
        gitlink_bds_versions:"https://raw.githubusercontent.com/Bedrock-OSS/BDS-Versions/main/versions.json",
        test_config_data:JSON.stringify({generate_documentation:true}),
        test_config_fileName:"test_config.json",
        current_os:os.platform() === "win32"?"win":"linux",
        current_os_long:os.platform() === "win32"?"windows":"linux",
        bin_path:bin,
        bin_docs_path:bin + "/docs",
        docs_output:"script_metadata",
        types_output:"script_types",
        discord_token:env.DISCORD_BOT_TOKEN,
        git_not_found_error_message:"404: Not Found",
        cache_data:{
            version:"",
            "preview-version":""
        }
    },
    getExistLink(branch){return `https://raw.githubusercontent.com/Bedrock-APIs/bds-docs/${branch}/exist.json`;},
    VersionSpecificOveriwrite,
    DebugMode,
    defualtExistConfig,
    FileTree,
    GetEngine,
    System,
    DoFiles,
    CopyFiles,
    RunBedrockServer,
    JsonModule,
    LoadScriptModules,
    GetGithubFile,
    GetGithubExist
}