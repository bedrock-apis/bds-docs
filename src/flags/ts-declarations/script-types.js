import { ScriptMetadataKind } from "./general";

export class ScriptMetadataType extends ScriptMetadataKind{
    /**
     * 
     * @param {string} name 
     * @param {ScriptMetadataType[]} [errorTypes] 
     */
    constructor(name, errorTypes = []){
        super(name);
        this.errorTypes = errorTypes;
    }
    get isErrorable(){return this.errorTypes.length > 0;}
}
export class BindableScriptMetadataType extends ScriptMetadataType{
    /**
     * 
     * @param {string} name 
     * @param {import("./script-module.js").ModuleDependencyScriptMetadataKind} scriptModule
     * @param {ScriptMetadataType[]} [errorTypes] 
     */
    constructor(name, scriptModule, errorTypes = []){
        super(name, errorTypes);
        this.scriptModele = scriptModule;
    }
}