import { ModuleDependencyScriptMetadataKind, ModuleScriptMetadataKind } from "./script-module";
/**
 * @typedef {import("../server_2.0.0-alpha.json")} RawJsonModule
 */

/**
 * @param {RawJsonModule} rModule 
 * @returns {ModuleScriptMetadataKind}
 */
export function ScriptModuleLoader(rModule){
    const m = new ModuleScriptMetadataKind(rModule.name, rModule.uuid, rModule.version);
    
    // Load Dependencies
    rModule.dependencies.forEach(e=>m.dependencies.add(ScriptModuleDependencyLoader(e)));
    
    return m;
}

/**
 * @param {RawJsonModule["dependencies"][number]} dependency 
 * @returns {ModuleDependencyScriptMetadataKind}
 */
export function ScriptModuleDependencyLoader(dependency){
    return new ModuleDependencyScriptMetadataKind(dependency.name, dependency.uuid, dependency.version);
}