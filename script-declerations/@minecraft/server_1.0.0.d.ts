import * as _1e from '@minecraft/common';

// Enums - 0

// Interfaces - 0

// Classes - 7
export class CommandResult { public readonly successCount: number; private constructor();};
export class Dimension { public readonly id: string; public runCommandAsync(commandString: string): Promise<CommandResult>; private constructor();};
export class Entity { public readonly id: string; public readonly typeId: string; public runCommandAsync(commandString: string): Promise<CommandResult>; private constructor();};
export class MinecraftDimensionTypes { public static readonly nether = "minecraft:nether"; public static readonly overworld = "minecraft:overworld"; public static readonly theEnd = "minecraft:the_end"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class Player extends Entity{ public readonly name: string; private constructor();};
export class System { public run(callback: ()=>void): number; private constructor();};
export class World { public getAllPlayers(): Player[]; public getDimension(dimensionId: string): Dimension; private constructor();};

// Constants & Objects - 2

export const system: System;
export const world: World;

// Functions - 0

// Errors - 0
