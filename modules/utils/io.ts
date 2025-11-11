import { join } from "node:path";

export async function* getFilesRecursiveIterator(base: string, src?: string): AsyncGenerator<string> {
    for await (const { name, isFile, isDirectory } of Deno.readDir(join(base, src ?? ""))) {
        let path = src?src + "/" + name:name;
        if (isFile) yield path;
        if (isDirectory) yield* getFilesRecursiveIterator(base, path);
    }
}