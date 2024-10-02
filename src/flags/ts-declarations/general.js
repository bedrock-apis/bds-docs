/**
 * @typedef {import("./script-types.js").ScriptMetadataType} ScriptMetadataType
 */

export class ScriptMetadataKind {
    /**
     * @param {string} name 
     */
    constructor(name){
        this.name = name
    }
}
export class TypedScriptMeradataKind extends ScriptMetadataKind {
    /**
     * @param {string} name 
     * @param {ScriptMetadataType} type 
     */
    constructor(name, type){
        super(name);
        this.type = type;
    }
}