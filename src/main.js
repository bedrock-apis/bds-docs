import { resolveDataFrom } from "./functions.js";
import { LINK_BDS_VERSIONS } from "./consts.js";

resolveDataFrom(LINK_BDS_VERSIONS).then(e=>console.log(e.toString()));