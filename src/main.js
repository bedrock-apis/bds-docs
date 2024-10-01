import { ExecuteCommand, FetchBDSVersions, GetEngineVersion, VersionCheck } from "./functions.js";
import { LINK_BDS_VERSIONS } from "./consts.js";
Main().catch(er=>{console.log(er, er.stack); process.exit(-1)}).then(process.exit);

VersionCheck(await FetchBDSVersions()).then(e=>{
    if(!e) return;
    console.log(GetEngineVersion(e.version));
});



/**
 * 
 * @returns {Promise<number>}
 */
async function Main(){
    console.log("::group::Init");
    const versions = await FetchBDSVersions();
    const checkResults = await VersionCheck(versions);
    if(!checkResults) {
        console.log("No versions found");
        return 0;
    }
    console.log("versions found")
    console.log("::endgroup::");
    return 0;
};