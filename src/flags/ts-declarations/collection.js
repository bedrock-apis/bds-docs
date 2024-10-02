/**
 * @template {import("./general").ScriptMetadataKind} T
 * @extends {Map<string, T>}
 */
export class ScriptMetadataKindCollection extends Map {
    /**
     * 
     * @param {string | import("./general").ScriptMetadataKind} key 
     */
    has(key){
        return typeof key === "object"?super.has(key.name):super.has(key);
    }
    /**
     * 
     * @param {T} value
     */
    add(value){
        return super.set(value.name, value);
    }
}