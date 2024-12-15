//@ts-nocheck
import { BlockPermutation, ItemStack, Player, System, system, world } from "@minecraft/server";
import { ErrorMessagesDataPacketData } from "../net";

export function * ErrorMessages(): Generator<void,ErrorMessagesDataPacketData>{
    for(const testCase of ERROR_DOCUMENTATIONS){
        testCase.run();
        yield;
    }
    return {general: ERROR_DOCUMENTATIONS};
}
export class ErrorDocumentation{
    public readonly method;
    public readonly id;
    public message?: string;
    public type?: new ()=>Error;
    constructor(id: number, code: ()=>unknown){
        this.method = code;
        this.id = id;
    }
    run(){
        try {
            this.method();
        } catch (error: any) {
            this.message = error.message;
            this.type = error.constructor;
        }
    }
    toJSON(): ErrorMessagesDataPacketData["general"][number]{
        return {
            code: this.method.toString(),
            message: this.message??null,
            type: this.type?.name??null,
            id: this.id
        };
    }
}
export enum ErrorDocumentationIds {
    NativeObjectBoundToPrototype = 1,
    IncorrectNumberOfArguments = 2,
    NativeVariantTypeConversionFailed = 3,
    NoConstructor = 4,
    FailedToSetMember = 5,
    ArrayContainsUnsupportedType = 6,
    HasInvalidNativeHandle = 7,
    DidNotHaveNativeHandle = 8,

    LocationInUnloadedChunk = 9,

}
export const ERROR_DOCUMENTATIONS = [
    new ErrorDocumentation(ErrorDocumentationIds.NativeObjectBoundToPrototype, ()=>ItemStack.prototype.getComponents.call(null)),
    new ErrorDocumentation(ErrorDocumentationIds.IncorrectNumberOfArguments, ()=>new ItemStack("Yes", 5, 5)),
    new ErrorDocumentation(ErrorDocumentationIds.NativeVariantTypeConversionFailed, ()=>new ItemStack(5)),
    new ErrorDocumentation(ErrorDocumentationIds.NativeVariantTypeConversionFailed, ()=>new Player()),
    new ErrorDocumentation(ErrorDocumentationIds.FailedToSetMember, () => Object.getOwnPropertyDescriptor(ItemStack.prototype, "amount")?.set?.call(world, 5)),
    new ErrorDocumentation(ErrorDocumentationIds.ArrayContainsUnsupportedType, () => world.beforeEvents.playerBreakBlock.subscribe(() => {}, { blockTypes: [new ItemStack("stick")] })),
    new ErrorDocumentation(ErrorDocumentationIds.HasInvalidNativeHandle, () => world.beforeEvents.playerBreakBlock.subscribe(() => {}, { blockTypes: [new String("stick")] })),
    new ErrorDocumentation(ErrorDocumentationIds.DidNotHaveNativeHandle, () => world.beforeEvents.playerBreakBlock.subscribe(() => {}, { blockTypes: [{}] })),

    new ErrorDocumentation(ErrorDocumentationIds.LocationInUnloadedChunk, () => world.getDimension("minecraft:overworld").setBlockType({x:654654,y: 55, z: 6},"bedrock")),
]
export const TEST_CASES = [
    ()=>new ItemStack("Yes",5,{}),
    ()=>new ItemStack(54),
    ()=>new ItemStack(""),
    ()=>new ItemStack(new String("")),
    ()=>ItemStack.prototype.getComponents.call(null),
    ()=>ItemStack.prototype.getComponents.call(world),
    ()=>Object.getOwnPropertyDescriptor(ItemStack.prototype, "amount")?.set?.call(world, 5),
    ()=>Object.getOwnPropertyDescriptor(ItemStack.prototype, "amount")?.set?.call(),
    ()=>Object.getOwnPropertyDescriptor(ItemStack.prototype, "nameTag")?.set?.call(new ItemStack("stick"), {}),
    ()=>world.getDimension("minecraft:overworld").setBlockType(Object.setPrototypeOf({x:654654}, {y: 55, z: 6}),"bedrock"),
    ()=>world.beforeEvents.playerBreakBlock.subscribe(()=>{}, {blockTypes:[new ItemStack("stick")]}),
    ()=>world.beforeEvents.playerBreakBlock.subscribe(()=>{}, {blockTypes:[new String("Yes")]}),
    ()=>world.beforeEvents.playerBreakBlock.subscribe(()=>{}, {blockTypes:[new Promise(()=>{})]}),
    ()=>world.beforeEvents.playerBreakBlock.subscribe(()=>{}, {blockTypes:[{}]})
];