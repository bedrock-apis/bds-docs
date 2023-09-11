const stream = require ("stream/promises");
const {Buffer} = require("node:buffer");
module.exports = {
    async Download(path,version,type,preview=false){
        const {Extract} = await import("unzip-stream");
        const {default: fetch} = await import("node-fetch");
        const response = await fetch(`https://minecraft.azureedge.net/bin-${type}${preview?"-preview":""}/bedrock-server-${version}.zip`);
        await stream.pipeline(
            response.body,
            Extract({ path }),
        );
    },
    async DownloadContent(url, header={}) {
        const {default: fetch,Headers} = await import("node-fetch");
        return Buffer.from(await (await fetch(url,{headers:new Headers(header),redirect:"follow",follow:5})).arrayBuffer());
    }
}