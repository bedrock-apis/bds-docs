const { exit } = require("process");
const {exec} = require("node:child_process");
const { Download, SafeDownloadContent}= require("./download.js");
const os = require("os");
const { promises, existsSync, readdir, readdirSync } = require("fs");
const bds_versions_link = "https://raw.githubusercontent.com/Bedrock-OSS/BDS-Versions/main/versions.json";
const exist_link = (branch) => `https://raw.githubusercontent.com/Bedrock-APIs/bds-docs/${branch}/exist.json`;
const github_notfound = "404: Not Found";
const bin = "./bin";
const test_config = "test_config.json";
const test_config_data = JSON.stringify({
    generate_documentation: true
});

const OSSYSTEM = os.platform() === "win32"?"win":"linux";

Generate("stable","1.20.15.01");


async function Generate(v,version){
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
//runDocs("stable","version").catch(er=>{globalThis.console.error(er.message); exit(1);});
async function runDocs(){
    const console = Logger("[Docs Generator]");
    console.log("Writing test_config.json");
    await promises.writeFile([bin,test_config].join("/"),test_config_data);
    console.log("Executing BDS in " + OSSYSTEM);
    globalThis.console.log("////////////////////////////////////////////////////");
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
    globalThis.console.log("////////////////////////////////////////////////////");
    if(existsSync([bin,"docs"].join("/"))) {
        console.log("Successfully Generated in " + (Date.now() - time) + "ms");
        for (let file of FileTree([bin,"docs"].join("/"))) console.log(file); 
    }
    //console.log((await promises.readFile(".\\bin\\docs\\script_modules\\@minecraft\\server-ui_1.0.0.json")).toString());
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
        console.log("New Stable Version Found: " + engine);
        Generate("stable",stable);
        return;
    }
    if(!await CheckForExist("preview",preview,console)) {
        console.log("New Stable Version Found: " + preview);
        Generate("preview",preview);
        return;
    }
}
/*
console.log("Downloading . . .");
Download("./bin/","1.20.40.20","linux",true)
.then(()=>{
    console.log("done...")
})
.catch(er=>{
    console.error(er);
    process.exit(1);
});*/
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
    console.log("Checking for " + v);
    let versionLink = exist_link(v);
    let response = (await SafeDownload(versionLink,console)).toString();
    if(response === github_notfound) {
        console.error(`Can't target to ${v} -> exist.json`);
        exit(1);
    }
    const {"build-version":bv,"version":vv} = SafeParse(response,console);
    return version==vv;
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
        exit(1);
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
function *FileTree(base,paths){
    for (const entry of readdirSync([base,...paths].join("/"),{withFileTypes:true})) {
        if(entry.isFile()) yield [base,...paths,entry.name].join("/");
        else if(entry.isDirectory()) yield*FileTree(base,[...paths,entry.name]);
    }
}