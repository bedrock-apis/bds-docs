//@ts-nocheck
/**
 * @import * as MD from "./ScriptModule";
 * @typedef {IterableIterator<string | PrintableIterator>} PrintableIterator
 */
export class BaseContext{
    /**
     * @type {{[key: string]: string}}
     */
    dependencies = {};
    index = 0;
    recursionLevel = 0;
    space = "  ";
    
/**
 * 
 * @param {MD.MetadataModuleBaseDefinition} dependency
 */
    getModuleName(dependency){
        return this.dependencies[dependency.name]??(this.dependencies[dependency.name] = "_" + (((++this.index)<<4) | ((this.index ^ (this.index*31))&0xf)).toString(16));
    }
    /**
     * 
     * @param {IteratorObject<string>} formatable 
     */
    formater(formatable){
        return formatable.map(data=>this.space + data);
    }
}

/**
 * @param {MD.MetadataModuleDefinition} data 
 * @returns {Generator<string>}
 */
export function * Printer(data){
    for(const p of PrintModule(data)){
        if(typeof p === "string") yield p;
        else yield * Printable(p);
        yield "\n";
    }
}

/**
 * @param {IterableIterator<string | PrintableIterator>} iterator 
 * @returns {Generator<string>}
 */
function * Printable(iterator){
    for(const p of iterator){
        if(typeof p === "string") yield p;
        else yield * Printable(p);
    }
}
/**
 * @param {MD.MetadataModuleDefinition} data 
 * @returns {Generator<IterableIterator<string> | string>}
 */
function * PrintModule(data){
    const context = new BaseContext();
    yield * data.dependencies.map(e=>PrintDependency(e, context));
    
    yield "\n// Enums - " + (data.enums?.length??0);
    yield * data.enums?.map(e=>PrintEnum(e, context))??[];
    yield "\n// Interfaces - " + (data.interfaces?.length??0);
    yield * data.interfaces.map(e=>PrintInterface(e, context));
    yield "\n// Classes - " + (data.classes?.length??0);
    yield * data.classes.map(e=>PrintClass(e, context));
    yield "\n// Constants & Objects - " + (data.constants.length + data.objects.length);
    yield * data.constants.map(e=>PrintConst(e, context));
    // Just basic line space
    yield "";
    yield * data.objects.map(e=>PrintObject(e, context));
    yield "\n// Functions - " + data.functions.length;
    yield * data.functions.map(e=>PrintFunction(e, context));
    yield "\n// Errors - " + data.errors.length;
    yield * data.errors.map(e=>PrintError(e, context));
}

/**
 * @param {string} property
 */
function propertName(property){
    try {
        eval(`class S { ${property}(){} }`);
        return property;
    } catch (error) {
        console.log("Keyword fix for: " + property);
        return `'${property}'`;
    }
}
/**
 * @param {MD.MetadataModuleBaseDefinition} data 
 * @param {BaseContext} context 
 */
function * PrintDependency(data, context){
    yield `import * as ${context.getModuleName(data)} from '${data.name}';`;
}

/**
 * 
 * @param {MD.MetadataObjectDefinition} data 
 * @param {BaseContext} context 
 */
function * PrintObject(data, context){
    yield `export ${data.is_read_only?"const":"let"} ${data.name}: ${TypePrinter(data.type, context)};`;
}

/**
 * 
 * @param {MD.MetadataConstantDefinition} data 
 * @param {BaseContext} context 
 */
function * PrintConst(data, context){
    if("value" in data) yield `export ${data.is_read_only?"const":"let"} ${data.name} = ${ToLiteral(data.value)};`;
    else yield `export ${data.is_read_only?"const":"let"} ${data.name}: ${TypePrinter(data.type, context, true, false)};`;
}

/**
 * 
 * @param {MD.MetadataInterfaceDefinition} data
 * @param {BaseContext} context 
 */
function * PrintInterface(data, context){
    yield `export interface ${data.name} ${(data.base_types?.length??0) > 0?`extends ${data.base_types.map(t=>TypePrinter(t, context, false, false)).join(", ")}`:""}{ ${data.properties.map(p=>InterfaceProperty(p, context)).join("; ")}};`;
}
/**
 * @param {MD.MetadataPropertyMemberDefinition} data
 * @param {BaseContext} context 
 */
function InterfaceProperty(data, context){
    if(data.type.name === "optional"){
        return `${data.is_read_only?"readonly ":""}${propertName(data.name)}?: ${TypePrinter(data.type.optional_type, context, true, false)}`;
    }else{
        return `${data.is_read_only?"readonly ":""}${propertName(data.name)}: ${TypePrinter(data.type, context, true, false)}`;
    }
}

/**
 * 
 * @param {Partial<Omit<MD.MetadataType, "name" | "is_bind_type" | "is_errorable">> & Pick<MD.MetadataType, "name" | "is_bind_type" | "is_errorable">} object
 * @returns {MD.MetadataType}
 */
function createType(object){
    //@ts-ignore
    return object;
}
/**
 * 
 * @param {MD.MetadataErrorClassDefinition} data
 * @param {BaseContext} context 
 */
function * PrintError(data, context){
    let hadConstructor = false;
    const content = [
        ...data.properties.map(p=>ClassProperty(p, context)),
        ...(hadConstructor?[]:["private constructor()"])
    ];
    yield `export class ${data.name} extends Error{ ${
        content.join("; ") + (content.length > 0 ? ";":"")
    }};`;
}
/**
 * 
 * @param {MD.MetadataClassDefinition} data
 * @param {BaseContext} context 
 */
function * PrintClass(data, context){
    let hadConstructor = false;
    if(data.iterator){
        data.functions.push({
            arguments:[],
            is_constructor: false,
            is_static: false,
            name: "next",
            privilege: "read_only",
            return_type: createType({
                is_bind_type: false,
                is_errorable: data.iterator.is_errorable,
                name: "iterator",
                iterator_result: data.iterator.optional_type?data.iterator.optional_type:data.iterator
            })
        });
        data.functions.push({
            arguments:[],
            is_constructor: false,
            is_static: false,
            name: "[Symbol.iterator]",
            privilege: "read_only",
            return_type: createType({
                is_bind_type: false,
                is_errorable: false,
                name: "this"
            })
        });
    }
    const content =     [
        ...data.constants.map(p=>ClassConstant(p, context)),
        ...data.properties.map(p=>ClassProperty(p, context)),
        ...data.functions.map(p=>{
            if(p.is_constructor) hadConstructor = true;
            return ClassMethod(p, context);
        }),
        ...(hadConstructor?[]:["private constructor()"])
    ];
    if((data.base_types.length??0)>0) yield "//@ts-ignore extending for classes with private constructor is possible with native API\n"
    yield `export class ${data.name} ${(data.base_types?.length??0) > 0?`extends ${data.base_types.map(t=>TypePrinter(t, context, false, false)).join(", ")}`:""}{ ${
        content.join("; ") + (content.length > 0 ? ";":"")
    }};`;
}
/**
 * @param {MD.MetadataFunctionDefinition} data
 * @param {BaseContext} context 
 */
function ClassMethod(data, context){
    let text =  "public ";
    if(data.is_static) text += "static ";
    text += `${propertName(data.name)}(${data.arguments.map(e=>PrintArgument(e, context)).join(", ")})`;

    if(!data.is_constructor) text += ": "+ TypePrinter(data.return_type, context, false, true);
    return text;
}
/**
 * @param {MD.MetadataPropertyMemberDefinition} data
 * @param {BaseContext} context 
 */
function ClassProperty(data, context){
    let text =  "public ";
    if(data.is_static) text += "static ";
    if(data.is_read_only) text += "readonly "
    text += propertName(data.name);
    if(data.type.optional_type) text += "?";
    text += ": "+ TypePrinter(data.type.optional_type??data.type, context, true, false);
    return text;
}
/**
 * @param {MD.MetadataConstantDefinition} data
 * @param {BaseContext} context 
 */
function ClassConstant(data, context){
    let text =  "public ";
    if(data.is_static) text += "static ";
    if(data.is_read_only) text += "readonly "
    text += ("value" in data)?`${propertName(data.name)} = ${ToLiteral(data.value)}`:`${propertName(data.name)}: ${TypePrinter(data.type, context, true, false)}`;
    return text;
}
/**
 * 
 * @param {MD.MetadataEnumDefinition} data 
 * @param {BaseContext} context 
 */
function * PrintEnum(data, context){
    const test = `export enum ${data.name} { ${data.constants.map(e=>`${propertName(e.name)} = ${ToLiteral(e.value)}`).join(", ")}};`;
    yield test;
}
/**
 * @param {MD.MetadataFunctionDefinition} data 
 * @param {BaseContext} context 
 */
function * PrintFunction(data, context){
    const test = `export function ${data.name}(${data.arguments.map(a=>PrintArgument(a, context)).join(", ")}): ${TypePrinter(data.return_type, context, false, true)}`;
    yield test;
}
/**
 * @param {MD.MetadataFunctionArgumentDefinition} data 
 * @param {BaseContext} context 
 */
function PrintArgument(data, context){
    return `${data.name}${"default_value" in (data.details??{})?"?":""}: ${TypePrinter(data.type.name === "optional"?data.type.optional_type:data.type, context, true, false)}`;
}

/**
 * 
 * @param {MD.MetadataType} data 
 * @param {BaseContext} context 
 * @returns {string}
 */
function TypePrinter(data, context, safeContext = true, isReturnType = false){
    if(data.is_bind_type){
        return `${data.from_module?context.getModuleName(data.from_module) + ".":""}${data.name}`;
    }

    switch (data.name) {
        case "array": return `${data.element_type.name == "undefined"?"never":TypePrinter(data.element_type, context, false, false)}[]`;
        case "boolean": return data.name;
        case "string": return data.name;
        case "this": return data.name;
        case "undefined": return isReturnType?"void":"undefined";
        case "generator": 
            return `Generator<${
                TypePrinter(data.generator_type.next_type, context)}${
                (data.generator_type.return_type.name != "undefined" || data.generator_type.yield_type.name != "undefined" )?", " + TypePrinter(data.generator_type.return_type, context, true, true):""}${
                (data.generator_type.yield_type.name != "undefined")?", " + TypePrinter(data.generator_type.yield_type, context, true, false):""
                }>`;
        case "optional": return safeContext?`${TypePrinter(data.optional_type, context, true, isReturnType)} | undefined`:`(${TypePrinter(data.optional_type, context, true, isReturnType)} | undefined)`;
        case "promise": return `Promise<${TypePrinter(data.promise_type, context, true, isReturnType)}>`;
        case "iterator": return `IteratorResult<${TypePrinter(data.iterator_result, context, true, false)}>`;
        case "variant": return safeContext?`${data.variant_types.map(s=>TypePrinter(s, context, true, isReturnType)).join(" | ")}`:`(${data.variant_types.map(s=>TypePrinter(s, context, true, isReturnType)).join(" | ")})`
        case "map": return `Record<${TypePrinter(data.key_type, context, true, false)},${TypePrinter(data.value_type, context, true, false)}>`;
        case "closure": return `(${data.closure_type.argument_types.map((s, i)=>`arg${i}${s.optional_type?`?: ${TypePrinter(s.optional_type, context, true, false)}`:`: ${TypePrinter(s, context, true, false)}`}`).join(", ")})=>${TypePrinter(data.closure_type.return_type, context, false, true)}`;
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
/**
 * 
 * @param {any} data 
 * @returns 
 */
function ToLiteral(data){
    return typeof data === "string"?`${JSON.stringify(data)}`:data;
}
/**
 * 
 * @param {string} next
 * @param {IterableIterator<string>} iterator
 * @param {(p: string)=>string} onLast
 * @param {BaseContext} context 
 */
function * PrinterHelper(iterator, next, onLast, context){
    for(const v of iterator) {
        yield next;
        next = v;
    }
    yield onLast(next);
}
