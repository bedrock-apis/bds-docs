import type { VersionEngine, VersionFull } from "../types";

export function GetEngineVersion(version: VersionFull): VersionEngine {
    const [ma = 1, mi = 0, en = 0] = version.split(".").map(Number);
    return `${ma}.${mi}.${Math.floor(en/10) * 10}`;
}
export function Panic(message: string){
    console.error(message);
    return -1;
}
export function Success(message: string){
    console.info("\x1b[32m" + message);
    return 0;
}