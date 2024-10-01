import { resolveDataFrom } from "./functions.js";
import { LINK_BDS_VERSIONS } from "./consts.js";
import { appendFileSync, writeFileSync } from "node:fs";
import { env } from "node:process";

resolveDataFrom(LINK_BDS_VERSIONS).then(e=>{
    console.log(e?.toString());
    if(env["GITHUB_OUTPUT"]) appendFileSync("status=neutral", env["GITHUB_OUTPUT"]);
});
