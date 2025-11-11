export function getEngineVersion(fullVersion: string): string{
    let versions = fullVersion.split(".").slice(0, 3);
    let num = Number(versions.at(-1));
    if(isFinite(Number(versions.at(-1))))
        versions[versions.length - 1] = String((Math.floor(num/10))*10);

    return versions.join(".");
}