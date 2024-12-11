
//@ts-ignore
import {Extract} from "unzip-stream";

import { pipeline } from "node:stream/promises";

export async function FetchJson<T extends object = object>(target: string): Promise<T | null> {
    const response = await fetch(target);
    if(!response.ok) return null;
    return response.json().catch(e=>null);
}

export async function DownloadZipFile(link: string, outDir: string) {
    const response = await fetch(link/*`${LINK_BDS_CDN}/bin-${PLATFORM}${isPreview?"-preview":""}/bedrock-server-${version}.zip`version: VersionFull, isPreview: boolean, outDir: string = BDS_OUTDIR_PATH*/);
    if(!response.ok || !response.body) return -1;

    if (!response.ok || !response.body) return -1;

    const contentLength = response.headers.get('content-length');
    if (!contentLength) return -1;

    let filesCount = 0;

    //@ts-ignore
    const unzipStream = Extract({ path: outDir });

    //@ts-ignore
    unzipStream.unzipStream.on("entry",(p)=>{
        const isDir = p.isDirectory;
        if(isDir) console.log(`Downloading directory: ${p.path}`);
        else filesCount++;
    })

    const task = new Promise((res,rej)=>{
        unzipStream.on("error", rej);
        unzipStream.on("finish", res);
    });


    await pipeline(
        response.body,
        unzipStream
    ).catch(()=>filesCount = -1);
    await task.catch(()=>filesCount = -1);
    return filesCount;
}
