//@ts-check
export interface MetadataDefinition { name: string; }
export interface MetadataTypedDefinition { type: MetadataType; }
export interface MetadataMemberDefinition extends MetadataDefinition { is_static: boolean; is_read_only: boolean }

export type Range<A,I> = {max: A, min: I};
export type MetadataTypeName = (
    'int8' | 'uint8' | 'int16' | 'uint16' |'int32' | 'uint32' | 'int64' | 'uint64' | 'float' | 'double' |
    'variant' | 'optional' | 'array' | 'closure' | 'promise' | 'generator' | 'map' | 'boolean' | 'string' | 'undefined' | 'this' | 'iterator'
);
export type MetadataTypeErrorable = {error_types: MetadataType[];};
export type MetadataTypeBindable = {from_module: MetadataModuleBaseDefinition;};
export type MetadataTypeNumber = {valid_range: Range<number, number>};
export type MetadataTypeVariant = {variant_types: MetadataType[]};
export type MetadataTypeOptional = {optional_type: MetadataType};
export type MetadataTypeArray = {element_type: MetadataType};
export type MetadataTypeClosure = {closure_type: {argument_types: MetadataType[], return_type: MetadataType}};
export type MetadataTypePromise = {promise_type: MetadataType};
export type MetadataTypeIteratorResult = {iterator_result: MetadataType};
export type MetadataTypeGenerator = {generator_type: {next_type: MetadataType, return_type: MetadataType, yield_type: MetadataType}};
export type MetadataTypeMap = {key_type: MetadataType, value_type: MetadataType};
export type BaseMetadataType = 
    MetadataTypeErrorable & 
    MetadataTypeBindable & 
    MetadataTypeNumber & 
    MetadataTypeVariant & 
    MetadataTypeOptional & 
    MetadataTypeArray & 
    MetadataTypeClosure & 
    MetadataTypePromise & 
    MetadataTypeGenerator & 
    MetadataTypeMap &
    MetadataTypeIteratorResult;

export type MetadataType = {is_bind_type: boolean, is_errorable: boolean, name: MetadataTypeName} & BaseMetadataType;
export type MetadataFunctionArgumentDetialsDefinition = null | ({default_value: unknow} | (Range<number, number> & {default_value: unknow}))


export interface MetadataModuleBaseDefinition extends MetadataDefinition{
    version: string;
    uuid: string;
}
export interface MetadataModuleDefinition extends MetadataModuleBaseDefinition{
    module_type: "script";
    dependencies: MetadataModuleBaseDefinition[];
    objects: MetadataObjectDefinition[];
    constants: MetadataConstantDefinition[];
    enums: MetadataEnumDefinition[] | null;
    functions: MetadataFunctionDefinition[];
    classes: MetadataClassDefinition[];
    errors: MetadataErrorClassDefinition[];
    interfaces: MetadataInterfaceDefinition[];
    type_aliases: MetadataAliasDefinition[];
}
export interface MetadataObjectDefinition extends MetadataMemberDefinition, MetadataTypedDefinition { }
export interface MetadataConstantDefinition extends MetadataObjectDefinition { value?: unknown; }
export interface MetadataEnumDefinition extends MetadataDefinition {constants: MetadataConstantDefinition[]; }
export interface MetadataPropertyMemberDefinition extends MetadataMemberDefinition, MetadataTypedDefinition {
    privilege: "read_only" | "none";
}

export interface MetadataFunctionArgumentDefinition extends MetadataDefinition, MetadataTypedDefinition{
    details: MetadataFunctionArgumentDetialsDefinition;
}
export interface MetadataFunctionDefinition extends Omit<MetadataMemberDefinition, "is_read_only"> {
    arguments: MetadataFunctionArgumentDefinition[];
    is_constructor: boolean;
    privilege: "read_only" | "none";
    return_type: MetadataType;
}

export interface MetadataClassDefinition extends MetadataDefinition, MetadataTypedDefinition{
    base_types: MetadataType[];
    constants: MetadataConstantDefinition[];
    functions: MetadataFunctionDefinition[];
    properties: MetadataPropertyMemberDefinition[];
    iterator?: MetadataType;
}
export interface MetadataErrorClassDefinition extends MetadataDefinition, MetadataTypedDefinition{
    properties: MetadataPropertyMemberDefinition[];
}
export interface MetadataInterfaceDefinition extends MetadataDefinition, MetadataTypedDefinition{
    base_types: MetadataType[];
    properties: MetadataPropertyMemberDefinition[];
}

export type MetadataAliasMapEntry = {name: string, value: string};
export interface MetadataAliasDefinition extends MetadataDefinition, MetadataTypedDefinition{
    alias_type: "type_map";
    mappings: MetadataAliasMapEntry[];
    s: IteratorConstructor
}

declare global{
    interface IteratorObject<T, TReturn, TNext>{
        offset(next: T, onLast: (l: T)=>T): Generator<T, TReturn, TNext>;
    }
}