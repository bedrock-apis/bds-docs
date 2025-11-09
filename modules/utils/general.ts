export function getEngineVersion(fullVersion: string): string{
    return fullVersion.split(".").slice(0, 3).join(".");
}