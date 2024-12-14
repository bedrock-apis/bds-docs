import type { VersionEngine, VersionFull } from "../types";

export function GetEngineVersion(version: VersionFull): VersionEngine {
    const [ma = 1, mi = 0, en = 0] = version.split(".").map(Number);
    return `${ma}.${mi}.${Math.floor(en/10) * 10}`;
}
export function Panic(message: string): -1{
    console.error(message);
    return -1;
}
export function Success(message: string): 0{
    console.info("\x1b[32m" + message);
    return 0;
}
export function ResolvablePromise<T>(): ({promise: Promise<T>, resolve: (r: T)=>void, reject: (e: unknown)=>void})
{
    let res: (r: T)=>void = null!, rej: (e: unknown)=>void = null!;
    const promise = new Promise<T>((r, j)=>(res = r, rej=j));
    return {promise, reject: rej, resolve:res}
}