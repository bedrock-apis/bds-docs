import { resolveDataFrom } from "./functions.js";
import { LINK_BDS_VERSIONS } from "./consts.js";
import { appendFileSync, writeFileSync } from "node:fs";

resolveDataFrom(LINK_BDS_VERSIONS).then(e=>{
    console.log(e.toString());
    appendFileSync("status=neutral");
});
