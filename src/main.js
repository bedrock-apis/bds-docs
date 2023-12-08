const { ScriptModule } = require("./docs_types");
const data = require("./data");
const { promises, writeFile, existsSync, readFile, readFileSync } = require("fs");
const { Download: DownloadBDS } = require("./download");
const { NBTFile } = require("./NBT_Reader");

const {
    GetEngine,
    GetGithubFile,
    System,
    LoadScriptModules,
    Data
} = data;
async function Main(){
    /*
    for (const n of data.LoadScriptModules("docs/script_modules/@minecraft").values()) {
        const m = new ScriptModule(JSON.parse((await promises.readFile("docs/script_modules/@minecraft/" + n.fileName + ".json")).toString()));
        await promises.writeFile("types/" + n.fileName + ".d.ts",m.toString());
    }*/
}
class Updater{
    constructor(res){this.resources = res;}
    async _setup(){
        const tasks = [];
        const {cache_data,bin_path} = this.resources;
        if(existsSync(bin_path)) tasks.push(promises.rm(bin_path,{recursive:true,force:true}));
        if(!existsSync("./cache.json")) tasks.push(Data.setCache(cache_data));
        if(!existsSync("./preview_types")) tasks.push(promises.mkdir("./preview_types"));
        if(!existsSync("./types")) tasks.push(promises.mkdir("./types"));
        if(!existsSync("./preview_metadata")) tasks.push(promises.mkdir("./preview_metadata"));
        if(!existsSync("./changelogs")) tasks.push(promises.mkdir("./changelogs"));
        Promise.all(tasks);
    }
    async _versionCheck(){
        const {
            gitlink_bds_versions,
            current_os_long
        } = this.resources;
        ///async Tasks
        const linkTask = GetGithubFile(gitlink_bds_versions);
        const cacheTask = Data.getCache();
        ///source
        const a = await linkTask;
        if(a == null) throw new Error("Can't target the current bds versions: " + gitlink_bds_versions);
        const data = JSON.parse(a.toString());
        const cache = await cacheTask;
        if(cache["preview-version"] != data[current_os_long].preview) return {version:data[current_os_long].preview,isPreview:true};
        else if(cache["version"] != GetEngine(data[current_os_long].stable)) return {version:data[current_os_long].stable,isPreview:false};
        else return null;
    }
    async _downloadBDS(check){
        const {version,isPreview} = check;
        const {bin_path,current_os} = this.resources;
        await DownloadBDS(bin_path,version,current_os,isPreview);
        return true;
    }
    async _setupBDS(){
        const {bin_path,test_config_data,test_config_fileName} = this.resources;
        await promises.writeFile(bin_path + "/" + test_config_fileName,test_config_data);
    }
    async _runBDS(prefix = ""){
        const {current_os,bin_path} = this.resources;
        if(current_os === "win"){
            await System("call bedrock_server.exe",bin_path,120_000,prefix);
        }else{
            await System("chmod +x ./bin/bedrock_server",".",5_000);
            await System("LD_LIBRARY_PATH=. ./bedrock_server",bin_path,120_000,prefix);;
        }
    }
    async _generateChanges(check){

    }
    async _cloneMetadata(check){

    }
    async _generateTypes(check){

    }
    async Start(){
        await this._setup();
        const check = await this._versionCheck();
        if(!check) return console.log("No version available");
        const {version,isPreview} = check;
        console.log(isPreview?"Preview:":"Stable:",isPreview?version:GetEngine(version));
        console.log("Downloading BDS");
        if(!await this._downloadBDS(check)) return;
        console.log("Setup BDS");
        await this._setupBDS();
        console.log("Running BDS");
        await this._runBDS("//// ");
        console.log("Running types");
        for (const n of LoadScriptModules("bin/docs/script_modules/@minecraft").values()) {
            const m = new ScriptModule(JSON.parse((await promises.readFile("bin/docs/script_modules/@minecraft/" + n.fileName + ".json")).toString()));
            await promises.writeFile("types/" + n.fileName + ".d.ts",m.toString());
        }
        console.log("Done");
    }
}

const updater = new Updater(data.resources);
updater.Start().catch(er=>console.error(er,er.stack));