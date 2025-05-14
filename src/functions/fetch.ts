//@ts-ignore
import { Extract } from 'unzip-stream';

import { pipeline } from 'node:stream/promises';
import { Panic } from './utils';
import { fileURLToPath } from 'node:url';

export async function FetchJson<T extends object = object>(target: string): Promise<T | null> {
   const response = await fetch(target);
   if (!response.ok) return null;
   return response.json().catch(e => null);
}

export async function DownloadZipFile(link: string, outDir: string) {
   const response = await fetch(
      link /*`${LINK_BDS_CDN}/bin-${PLATFORM}${isPreview?"-preview":""}/bedrock-server-${version}.zip`version: VersionFull, isPreview: boolean, outDir: string = BDS_OUTDIR_PATH*/,
   );
   if (!response.ok || !response.body)
      return Panic('Invalid response or no body available statusCode: ' + response.status);

   const contentLength = response.headers.get('content-length');
   if (!contentLength) return Panic('Content length is zero: ' + contentLength);

   //@ts-ignore
   const unzipStream = Extract({ path: outDir });

   //@ts-ignore
   unzipStream.unzipStream.on('entry', p => {
      const isDir = p.isDirectory;
      if (isDir) console.log(`Downloading directory: ${p.path}`);
   });

   const task = new Promise((res, rej) => {
      unzipStream.on('error', rej);
      unzipStream.on('finish', res);
   });

   let failed = await pipeline(response.body, unzipStream).then(() => 0, Panic);

   if (failed) return Panic('Failed to pipe stream with the unzip-extractor');

   failed = await task.then(
      () => 0,
      () => -1,
   );

   if (failed) return Panic('Failed to pipe stream with the unzip-extractor');

   return 0;
}
