import { MetadataClassDefinition, MetadataConstantDefinition, MetadataEnumDefinition, MetadataErrorClassDefinition, MetadataFunctionArgumentDefinition, MetadataFunctionDefinition, MetadataInterfaceDefinition, MetadataModuleBaseDefinition, MetadataModuleDefinition, MetadataObjectDefinition, MetadataPropertyMemberDefinition, MetadataType } from "../script-module-metadata";

export class Printer {
    public static SPACING = "   ";
    public static * printModule(def: MetadataModuleDefinition): Generator<string>{
        yield * def.dependencies.values().map(Printer.imports);
        yield * def.peer_dependencies.values().map(Printer.imports);
        yield "";
        for(const gen of (def.enums??[]).values().map(Printer.printEnums)) yield * gen;
        yield "";
        for(const gen of (def.interfaces??[]).values().map(Printer.printInterface)) yield * gen;
        yield "";
        for(const gen of (def.classes??[]).values().map(Printer.printClass)) yield * gen;
        yield "";
        yield * def.constants.values().map(Printer.printConstant).map(Printer.consts).map(Printer.exports).map(Printer.suffix(";"));
        yield "";
        yield * def.objects.values().map(Printer.printObject).map(Printer.consts).map(Printer.exports).map(Printer.suffix(";"));
        yield "";
        yield * def.functions.values().map(Printer.printMethod).map(Printer.functions).map(Printer.exports).map(Printer.suffix(";"));
        yield "";
        for(const gen of (def.errors??[]).values().map(Printer.printError)) yield * gen;
    }
    public static * printEnums(type: MetadataEnumDefinition): Generator<string>{
        if(type.constants.length === 0) return void (yield `export enum ${type.name} {}`);
        yield `export enum ${type.name} {`
        yield * type.constants.map(Printer.printConstant).map(Printer.suffix(",")).map(Printer.prefix(Printer.SPACING))
        yield "}";
    }
    public static printError(type: MetadataErrorClassDefinition): Generator<string>{
        return Printer.printClass({
            base_types: [{name: "Error", is_bind_type: true, is_errorable: false} as any],
            constants: [],
            functions: [],
            name: type.name,
            properties: type.properties,
            type: type.type
        });
    }
    public static * printClass(type: MetadataClassDefinition): Generator<string> {
        const hasParent = type.base_types.length>0;
        if(hasParent)
            yield "//@ts-ignore";
        yield `export class ${type.name}${hasParent?` extends ${Printer.getType(type.base_types[0]!)}`:""} {`
        const prefix = Printer.prefix(Printer.SPACING);
        const suffix = Printer.suffix(";");
        let hadConstructor = false;
        yield * type.constants.map(Printer.printProperty(Printer.printConstant)).map(Printer.publics).map(prefix).map(suffix);
        yield * type.properties.map(Printer.printProperty(Printer.printObject)).map(Printer.publics).map(prefix).map(suffix);
        yield * type.functions.map(e=>{
            let code;
            if(e.is_constructor){
                hadConstructor = true;
                code = `constructor(${Printer.printParams(e.arguments)})`
            }
            else code = Printer.printMethod(e);
            if(e.is_static) code = Printer.statics(code);
            return suffix(prefix(Printer.publics(code)));
        })
        if(!hadConstructor)
            yield suffix(prefix("private constructor()"));
        if(type.iterator)
            yield suffix(prefix(`public [Symbol.iterator](): Iterator<${Printer.getType(type.iterator.optional_type?type.iterator.optional_type:type.iterator)}>`));
        yield "}";
    }
    public static * printInterface(type: MetadataInterfaceDefinition): Generator<string> {
        const hasParent = type.base_types.length>0;
        if(hasParent)
            yield "//@ts-ignore";
        yield `export interface ${type.name}${hasParent?` extends ${Printer.getType(type.base_types[0]!)}`:""} {`
        const prefix = Printer.prefix(Printer.SPACING);
        const suffix = Printer.suffix(";");
        yield * type.properties.map(Printer.printProperty(Printer.printObject)).map(prefix).map(suffix);
        yield "}";
    }
    public static printProperty<T extends MetadataConstantDefinition | MetadataPropertyMemberDefinition | MetadataObjectDefinition>(func: (param: T)=>string): (param: T)=>string{
        return t=>{
            let code = func(t)
            if(t.is_read_only) code = Printer.readonlies(code);
            if(t.is_static) code = Printer.statics(code);
            return code;
        }
    }
    public static printParams(types: MetadataFunctionArgumentDefinition[]): string{
        return types.map(e=>`${e.name}${(e.details?.default_value!==undefined||e.type.optional_type)?"?":""}: ${Printer.getType(e.type.optional_type?e.type.optional_type:e.type)}`).join(", ")
    }
    public static printMethod(type: MetadataFunctionDefinition): string{
        return `${type.name}(${Printer.printParams(type.arguments)}): ${Printer.getType(type.return_type, true, false)}`
    }
    public static printObject(type: MetadataObjectDefinition | MetadataPropertyMemberDefinition): string {
        return `${type.name}${type.type.optional_type?"?":""}: ${Printer.getType(type.type.optional_type?type.type.optional_type:type.type)}`;
    }
    public static printConstant(type: MetadataConstantDefinition): string {
        return `${type.name} = ${JSON.stringify(type.value)}`;
    }
    public static prefix(prefix: string): (text: string)=>string{
        return t=>`${prefix}${t}`;
    }
    public static suffix(suffix: string): (text: string)=>string{
        return t=>`${t}${suffix}`;
    }
    public static exports(text: string): string{return `export ${text}`;}
    public static consts(text: string): string{return `const ${text}`;}
    public static readonlies(text: string): string{return `readonly ${text}`;}
    public static statics(text: string): string{return `static ${text}`;}
    public static publics(text: string): string{return `public ${text}`;}
    public static functions(text: string): string{return `function ${text}`;}
    public static imports(dependency: MetadataModuleBaseDefinition): string{
        return `import * as ${Printer.getSafeModuleName(dependency.name)} from ${JSON.stringify(dependency.name)};`
    }
    public static getSafeModuleName(name: string): string{
        name = name.split("/")?.at(-1)??name;
        if(name.endsWith("-bindings")) name = name.substring(0, name.length - "-bindings".length);
        return Printer.getSafeName(name);
    }
    public static getSafeName(text: string): string{
        return text.replaceAll(/-|@|\/|\\/g,"_");
    }
    public static getType(type: MetadataType, isReturnType: boolean = false, safeContext = true): string {
        if (type.is_bind_type) {
            if(type.from_module)
                return `${Printer.getSafeModuleName(type.from_module.name)}.${type.name}`;
            return `${type.name}`;
        }

        switch (type.name) {
            case "array": return `Array<${type.element_type.name == "undefined" ? "never" : Printer.getType(type.element_type, isReturnType)}>`;
            case "boolean": return type.name;
            case "string": return type.name;
            case "this": return type.name;
            case "undefined": return isReturnType ? "void" : "undefined";
            case "generator": 
                return `Generator<${Printer.getType(type.generator_type.next_type, isReturnType, true)}${(type.generator_type.return_type.name != "undefined" || type.generator_type.yield_type.name != "undefined") ? ", " + Printer.getType(type.generator_type.return_type, isReturnType, true) : ""}${(type.generator_type.yield_type.name != "undefined") ? ", " + Printer.getType(type.generator_type.yield_type, isReturnType, true) : ""}>`;
            case "optional": return safeContext ? `${Printer.getType(type.optional_type, isReturnType)} | undefined` : `(${Printer.getType(type.optional_type, isReturnType, true)} | undefined)`;
            case "promise": return `Promise<${Printer.getType(type.promise_type, isReturnType, true)}>`;
            case "iterator": return `IteratorResult<${Printer.getType(type.iterator_result, isReturnType, safeContext)}>`;
            case "variant": return safeContext ? `${type.variant_types.map(s => Printer.getType(s, isReturnType, safeContext)).join(" | ")}` : `(${type.variant_types.map(s => Printer.getType(s, isReturnType, true)).join(" | ")})`
            case "map": return `Record<${Printer.getType(type.key_type, false, true)},${Printer.getType(type.value_type, isReturnType, true)}>`;
            case "closure": return `(${type.closure_type.argument_types.map((s, i) => `arg${i}${s.optional_type ? `?: ${Printer.getType(s.optional_type, false, true)}` : `: ${Printer.getType(s, false, true)}`}`).join(", ")})=>${Printer.getType(type.closure_type.return_type, true, false)}`;
            case "uint8":
            case "uint16":
            case "uint32":
            case "uint64":
            case "int8":
            case "int16":
            case "int32":
            case "int64":
            case "double":
            case "float":
                return 'number';
            default:
                return "unknown";
        }
    }
}