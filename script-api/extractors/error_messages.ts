//@ts-nocheck
import { BlockPermutation, ItemStack, System, system, world } from "@minecraft/server";
import { ErrorMessagesDataPacketData } from "../net";

export function * ErrorMessages(): Generator<void,ErrorMessagesDataPacketData>{
    const errors = []
    for(const testCase of TEST_CASES){
        try {
            testCase();
            errors.push({message: null, type: null, code: testCase.toString()});
        } catch (error) {
            console.error(error);
            errors.push({message: error.message, type: error.constructor?.name, code: testCase.toString()});
        }
        yield;
    }
    return errors;
}
export const TEST_CASES = [
    ()=>new ItemStack("Yes",5,{}),
    ()=>new ItemStack(54),
    ()=>new ItemStack(""),
    ()=>new ItemStack(new String),
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