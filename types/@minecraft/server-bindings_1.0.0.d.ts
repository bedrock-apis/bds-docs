import * as common from "@minecraft/common";



export class CommandResult {
   public readonly successCount: number;
   private constructor();
}
export class Dimension {
   public readonly id: string;
   public runCommandAsync(commandString: string): Promise<CommandResult>;
   private constructor();
}
export class Entity {
   public readonly id: string;
   public readonly typeId: string;
   public runCommandAsync(commandString: string): Promise<CommandResult>;
   private constructor();
}
export class MinecraftDimensionTypes {
   public static readonly nether = "minecraft:nether";
   public static readonly overworld = "minecraft:overworld";
   public static readonly theEnd = "minecraft:the_end";
   private constructor();
}
//@ts-ignore
export class Player extends Entity {
   public readonly name: string;
   private constructor();
}
export class System {
   public run(callback: ()=>void): number;
   private constructor();
}
export class World {
   public getAllPlayers(): Array<Player>;
   public getDimension(dimensionId: string): Dimension;
   private constructor();
}


export const system: System;
export const world: World;


//@ts-ignore
export class CommandError extends Error {
   private constructor();
}
//@ts-ignore
export class InvalidEntityError extends Error {
   public readonly id: string;
   public readonly type: string;
   private constructor();
}
//@ts-ignore
export class RawMessageError extends Error {
   private constructor();
}