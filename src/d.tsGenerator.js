const randomAliaes = [];
for(let i = 0, id = "00"; i <255; i++, id = i.toString(16)) randomAliaes.push("_" + (id.length<2?id + "0":id));
class ScriptModule{
    constructor(base){
        const {
            classes=[],
            constants=[],
            dependencies=[],
            enums=[],
            errors=[],
            functions=[],
            interfaces=[],
            minecraft_version,
            module_type,
            name,
            objects=[],
            uuid,
            version
        } = base;
        this.name = name;
        this.uuid = uuid;
        this.version = version;
        this.type = module_type;
        this.engine = minecraft_version;
        this.constants = constants?.map(e=>new ModuleConstant(e))??[];
        this.objects = objects?.map(e=>new ModuleObject(e))??[];
        this.enums = enums?.map(e=>new ModuleEnum(e))??[];
        this.interfaces = interfaces?.map(e=>new ModuleInterface(e))??[];
        this.errors = errors?.map(e=>new ModuleError(e))??[];
        this.functions = functions?.map(e=>new ModuleFunction(e))??[];
        this.classes = classes?.map(e=>new ModuleClass(e))??[];
        this.dependencies = {};
        this.dependenciesNames =  [];
        dependencies.forEach((e,i)=>{e.AKA = randomAliaes[i];this.dependencies[e.name] = e; this.dependenciesNames.push(e.name)});
    }
    /**@type {ModuleConstant[]} */
    constants;
    toString(){
        const array = [];
        this.dependenciesNames.forEach(e=>array.push(`import * as ${this.dependencies[e].AKA} from '${e}';`));
        this.enums.forEach(e=>{array.push(e.exportFrom(this));});
        this.classes.forEach(e=>{array.push(e.exportFrom(this));});
        this.functions.forEach(e=>{array.push(e.exportFrom(this));});
        this.interfaces.forEach(e=>{array.push(e.exportFrom(this));});
        this.errors.forEach(e=>{array.push(e.exportFrom(this));});
        this.constants.forEach(e=>{array.push(e.exportFrom(this));});
        this.objects.forEach(e=>{array.push(e.exportFrom(this));});
        this.functions.forEach(e=>{array.push(e.exportFrom(this));});
        return array.join("\n");
    }
    getModuleReference(name){
        return this.dependencies[name].AKA;
        throw new Error("No implementation error lol");
    }
}
module.exports = {
    ScriptModule
}




////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// Types
////////////////////////////////////////////////////////////////////
class Type{
    constructor(type){
        const {
            is_bind_type,
            is_errorable,
            name
        } = type;
        this.name = name;
        this.isBindType = is_bind_type;
        this.isErrorable = is_errorable;
        if(this.isErrorable){
            this.errorTypes = type?.error_types?.map(e=>TypeResolver(e))??[];
        }
    }
    toString(m){console.warn("never type!",this.name); return "never";}
    fromValue(m,v){return this.toString(m)}
}
class StringType extends Type{toString(m){return "string";}; fromValue(m,v){return `"${v}"`;}}
class NumberType extends Type{toString(m){return "number";}; fromValue(m,v){return `${v}`;}}
class BooleanType extends Type{toString(m){return "boolean";}; fromValue(m,v){return `${v}`;}}

class AnyType extends Type{toString(m){return "any"}}
class UndefinedType extends Type{toString(m){return this.isReturnType?"void":"undefined"}}
class ComplexType extends Type{
    constructor(type,complexProperty){
        super(type);
        this.type = TypeResolver(type[complexProperty]);
    }
}
class RecordType extends Type{
    constructor(data){
        super(data);
        this.keyType = TypeResolver(data.key_type);
        this.valueType = TypeResolver(data.value_type);
    }
    toString(m){return `Record<${this.keyType.toString(m)},${this.valueType.toString(m)}>`;}
}
class PromiseType extends ComplexType{
    constructor(type){
        super(type,"promise_type");
    }
    toString(m){return `Promise<${this.type.toString(m)}>`}
}
class GeneratorType extends Type{
    constructor(type){
        super(type);
        this.nextType = TypeResolver(type.generator_type.next_type);
        this.returnType = TypeResolver(type.generator_type.return_type);
        this.yieldType = TypeResolver(type.generator_type.yield_type);
    }
    toString(m){return `Generator<${this.nextType.toString(m)},${this.returnType.toString(m)},${this.yieldType.toString(m)}>`}
}
class ClosureType extends Type{
    constructor(data){
        super(data);
        data = data.closure_type;
        this.argumentTypes = data.argument_types.map(a=>TypeResolver(a));
        this.returnType = TypeResolver(data.return_type);
    }
    toString(m){return `(${this.argumentTypes.map((a,i)=>`arg${i}${a instanceof OptionalType?"?":""}: ${a.toString(m)}`)})=>${this.returnType.toString(m)}`}
}
class OptionalType extends ComplexType{
    constructor(type){
        super(type,"optional_type");
    }
    toString(m){return this.type.toString(m);}
}
class BindType extends Type{
    constructor(type){
        super(type);
        this.isFromModule = "from_module" in type;
        this.fromModule = type.from_module;
    }
    toString(m){
        if(this.fromModule) return `${m.getModuleReference(this.fromModule.name)}.${this.name}`;
        return this.name;
    }
}
class VariantType extends Type{
    constructor(type){
        super(type);
        this.types = type.variant_types.map(e=>TypeResolver(e));
    }
    toString(m){return this.types.map(e=>e.toString(m)).join(" | ");}
}
class ArrayType extends ComplexType{
    constructor(type){
        super(type,"element_type");
    }
    toString(m){return this.type.toString(m) + "[]";}
}
function TypeResolver(type){
    const {
        is_bind_type,
        name
    } = type;
    if(is_bind_type) return new BindType(type);
    if(name in KnownTypeContructors) return new KnownTypeContructors[name](type);
    return new Type(type);
}
const KnownTypeContructors = {
    'string':StringType,
    'int8':NumberType,
    'int16':NumberType,
    'int32':NumberType,
    'int64':NumberType,
    'uint8':NumberType,
    'uint16':NumberType,
    'uint32':NumberType,
    'uint64':NumberType,
    'float':NumberType,
    'double':NumberType,
    'boolean':BooleanType,
    'number':NumberType,
    'optional':OptionalType,
    'array':ArrayType,
    'variant':VariantType,
    'closure':ClosureType,
    'undefined':UndefinedType,
    'promise':PromiseType,
    'generator':GeneratorType,
    'map':RecordType,
    'any':AnyType,
}


function safePropertyName(n){
    if(n === 'type') return `'type'`;
    if(n.includes(".")) return `'${n}'`;
    return n;
}
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////// Module Member
////////////////////////////////////////////////////////////////////
class ModuleMember {
    constructor(data){
        this.name = data.name;
    }
}
class ModuleMemberHasProperties extends ModuleMember {
    constructor(data){
        super(data);
        this.properties = data.properties.map(e=>new ModuleProperty(e));
    }
}
class ModuleEnum extends ModuleMember{
    constructor(data){
        super(data);
        this.constants = data.constants.map(e=>new ModuleConstant(e));
    }
    exportFrom(m){
        return `export enum ${this.name} {${this.constants.length?`${this.constants.map(e=>`${safePropertyName(e.name)} = ${e.toString(m)}`).join(", ")}`:" "}}`;
    }
}
class ModuleInterface extends ModuleMemberHasProperties{
    exportFrom(m){return `export interface ${this.name} {${this.properties.length?`${this.properties.map(e=>`${e.isStatic?"static ":""}${e.isReadOnly?"readonly ":""}${safePropertyName(e.name)}${e.type instanceof OptionalType?"?":""}: ${e.type.toString(m)}`).join(", ")}`:" "}}`;}
}
class ModuleError extends ModuleMemberHasProperties{
    exportFrom(m){return `export class ${this.name} extends Error { private constructor()${this.properties.length?`, ${this.properties.map(e=>`${e.isStatic?"static ":""}${e.isReadOnly?"readonly ":""}${safePropertyName(e.name)}${e.type instanceof OptionalType?"?":""}: ${e.type.toString(m)}`).join(", ")}`:" "}}`}
}
class ModuleValue extends ModuleMember{
    constructor(data){
        super(data);
        this.isStatic = data.is_static;
        this.isReadOnly = data.is_read_only??false;
    }
}
class ModuleObject extends ModuleValue{
    constructor(data){
        super(data);
        this.type = TypeResolver(data.type);
    }
    exportFrom(m){return `export ${this.isReadOnly?"const":"var"} ${this.name}: ${this.type.toString(m)};`}
};
class ModuleConstant extends ModuleValue{
    constructor(data){
        super(data);
        this.value = data.value;
        this.type = TypeResolver(data.type);
    }
    toString(m){ return KnownTypeContructors[typeof this.value].prototype.fromValue(m,this.value)}
    exportFrom(m){return `export ${this.isReadOnly?"const":"var"} ${this.name} = ${this.toString(m)};`}
};
class ModuleProperty extends ModuleValue{
    constructor(data){
        super(data);
        this.type = TypeResolver(data.type);
    }
}
class ModuleFunction extends ModuleValue{
    constructor(data){
        super(data);
        this.isConstructor = data.is_constructor;
        this.privilege = data.privilege;
        this.arguments = data.arguments.map(a=>new ModuleFunctionParams(a));
        this.returnType = TypeResolver(data.return_type);
        this.returnType.isReturnType = true;
    }
    exportFrom(m){return `export function ${this.name}(${this.buildParams(m)}): ${this.returnType.toString(m)}`}
    buildParams(m){
        let hasOptional = false;
        return `${this.arguments.map(a=>{
            hasOptional = hasOptional | a.isOptional;
            return `${a.name}${hasOptional?"?":""}: ${a.type.toString(m)}`;
        }).join(", ")}`;
    }
}
class ModuleFunctionParams extends ModuleMember{
    constructor(data){
        super(data);
        this.isOptional = !!data?.details?.default_value;
        this.type = TypeResolver(data.type);
        if(this.type instanceof OptionalType) this.type = this.type.type;
    }
}
class ModuleClass extends ModuleMember{
    constructor(data){
        super(data);
        this.properties = data.properties.map(e=>new ModuleProperty(e));
        this.constants = data.constants.map(e=>new ModuleConstant(e));
        this.functions = data.functions.map(e=>new ModuleFunction(e));
        this.baseTypes = data.base_types.map(e=>TypeResolver(e));
    }
    exportFrom(m){
        const staticProperties = this.properties.filter(p=>p.isStatic);
        const otherProperties = this.properties.filter(p=>!p.isStatic);
        const staticConstants = this.constants.filter(p=>p.isStatic);
        const otherConstants = this.constants.filter(p=>!p.isStatic);
        const staticFunctions = this.functions.filter(p=>p.isStatic & !p.isConstructor);
        const otherFunctions = this.functions.filter(p=>!p.isStatic & !p.isConstructor);
        const constructor = this.functions.find(f=>f.isConstructor);
        const members = [
            constructor?` constructor(${constructor.buildParams(m)})`:" private constructor()",
            ...staticConstants.map(e=>`static ${e.isReadOnly?"readonly ":""}${safePropertyName(e.name)}${e.type instanceof OptionalType?"?":""}: ${e.toString(m)}`),
            ...staticProperties.map(e=>`static ${e.isReadOnly?"readonly ":""}${safePropertyName(e.name)}${e.type instanceof OptionalType?"?":""}: ${e.type.toString(m)}`),
            ...staticFunctions.map(e=>`static ${safePropertyName(e.name)}(${e.buildParams(m)}): ${e.returnType.toString(m)}`),
            ...otherConstants.map(e=>`${e.isReadOnly?"readonly ":""}${safePropertyName(e.name)}${e.type instanceof OptionalType?"?":""}: ${e.toString(m)}`),
            ...otherProperties.map(e=>`${e.isReadOnly?"readonly ":""}${safePropertyName(e.name)}${e.type instanceof OptionalType?"?":""}: ${e.type.toString(m)}`),
            ...otherFunctions.map(e=>`${safePropertyName(e.name)}(${e.buildParams(m)}): ${e.returnType.toString(m)}`)
        ];
        return (this.baseTypes.length?"//@ts-ignore allow class inheritance for native classes\n":"") + `export class ${this.name} ${this.baseTypes.length?`extends ${this.baseTypes[0].toString(m)}`:""}{${members.join("; ")}}`;
    }
}
