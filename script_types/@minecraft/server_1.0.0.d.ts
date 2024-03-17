import * as _00 from '@minecraft/common';
export class CommandResult { private constructor(); readonly successCount: number}
export class Dimension { private constructor(); readonly id: string; runCommandAsync(commandString: string): Promise<CommandResult>}
export class Entity { private constructor(); readonly id: string; readonly typeId: string; runCommandAsync(commandString: string): Promise<CommandResult>}
export class MinecraftDimensionTypes { private constructor(); static readonly nether: "minecraft:nether"; static readonly overworld: "minecraft:overworld"; static readonly theEnd: "minecraft:the_end"}
//@ts-ignore allow class inheritance for native classes
export class Player extends Entity{ private constructor(); readonly name: string}
export class System { private constructor(); run(callback: ()=>undefined): number}
export class World { private constructor(); getAllPlayers(): Player[]; getDimension(dimensionId: string): Dimension}
export const system: System;
export const world: World;