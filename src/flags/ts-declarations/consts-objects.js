import { TypedScriptMeradataKind } from "./general";
import { ScriptMetadataType } from "./script-types";

export class ObjectScriptMetadataKind extends TypedScriptMeradataKind{
    /**
     * 
     * @param {string} name 
     * @param {ScriptMetadataType} type
     * @param {boolean} [isReadOnly] 
     * @param {boolean} [isStatic] 
     */
    constructor(name, type, isReadOnly = true, isStatic = true){
        super(name, type);
        this.isReadOnly = isReadOnly;
        this.isStatic = isStatic;
    }
}
export class ConstantScriptMetadataKind extends ObjectScriptMetadataKind{
    /**
     * @protected
     * @param {string} name 
     * @param {ScriptMetadataType} type
     * @param {boolean} [isReadOnly] 
     * @param {boolean} [isStatic] 
     * @param {unknown} value 
     */
    constructor(name, type, value, isReadOnly = true, isStatic = true){
        super(name, type, isReadOnly, isStatic);
        this.value = value;
    }
}
export class ConstantEntryScriptMeradataKind extends ConstantScriptMetadataKind{

}