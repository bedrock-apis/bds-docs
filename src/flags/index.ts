export type ModuleDefaultExport = {
    flagId: string,
    method: (dir: string)=>Promise<number>,
    description: string
};
export const GENERATORS: ModuleDefaultExport[] = [
    (await import("./metadata")).default,
    (await import("./module_mapping")).default,
    (await import("./script_declaration")).default,
    (await import("./data/blocks")).default
];