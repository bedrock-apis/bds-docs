import { ScriptMetadataKindCollection } from "./collection";
import { ScriptMetadataKind } from "./general";
import ts, {factory} from "typescript";

export class Context {
    constructor(){
        this.idnex = 0;
        /**
         * @type {{[key: string]: string}}
         */
        this.aliases = {};
    }
    newAlias(){
        const ali = (this.idnex++).toString(16);
        return ali.length>1?ali:"0"+ali;
    }
    /**
     * 
     * @param {ModuleDependencyScriptMetadataKind} m 
     */
    getModuleAlias(m){
        return this.aliases[m.name] = this.aliases[m.name]??this.newAlias();
    }
}

export class ModuleDependencyScriptMetadataKind extends ScriptMetadataKind {
    /**
     * @param {string} name 
     * @param {string} uuid 
     * @param {string} version 
     */
    constructor(name, uuid, version){
        super(name);
        this.uuid = uuid;
        this.version = version;
    }
    /**
     * 
     * @param {Context} context 
     */
    factoryBuild(context){
        factory.createImportDeclaration(
            undefined,
            factory.createImportClause(
              false,
              undefined,
              factory.createNamespaceImport(factory.createIdentifier(context.getModuleAlias(this)))
            ),
            factory.createStringLiteral(this.name),
            undefined
          )
    }
}

export class ModuleScriptMetadataKind extends ModuleDependencyScriptMetadataKind{
    /**
     * @param {string} name 
     * @param {string} uuid 
     * @param {string} version 
     */
    constructor(name, uuid, version){
        super(name, uuid, version);
    }

    /**
     * @type {ScriptMetadataKindCollection<ModuleDependencyScriptMetadataKind>}
     */
    dependencies = new ScriptMetadataKindCollection();
    /**
     * @type {ScriptMetadataKindCollection<import("./consts-objects").ObjectScriptMetadataKind>}
     */
    objects = new ScriptMetadataKindCollection();
    /**
     * @type {ScriptMetadataKindCollection<import("./consts-objects").ConstantEntryScriptMeradataKind>}
     */
    constants = new ScriptMetadataKindCollection();

    /**
     * 
     * @param {Context} context 
     */
    factoryBuild(context){
        return [
            [...this.dependencies.values()].map(e=>e.factoryBuild(context))
        ];
    }
}