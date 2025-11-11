import * as common from "@minecraft/common";

export enum GameMode {
   adventure = "adventure",
   creative = "creative",
   spectator = "spectator",
   survival = "survival",
}

export interface EntityFilter {
   excludeFamilies?: Array<string>;
   excludeGameModes?: Array<GameMode>;
   excludeNames?: Array<string>;
   excludeTags?: Array<string>;
   excludeTypes?: Array<string>;
   families?: Array<string>;
   gameMode?: GameMode;
   maxHorizontalRotation?: number;
   maxLevel?: number;
   maxVerticalRotation?: number;
   minHorizontalRotation?: number;
   minLevel?: number;
   minVerticalRotation?: number;
   name?: string;
   scoreOptions?: Array<EntityQueryScoreOptions>;
   tags?: Array<string>;
   type?: string;
}
//@ts-ignore
export interface EntityQueryOptions extends EntityFilter {
   closest?: number;
   farthest?: number;
   location?: Vector3;
   maxDistance?: number;
   minDistance?: number;
}
export interface EntityQueryScoreOptions {
   exclude?: boolean;
   maxScore?: number;
   minScore?: number;
   objective?: string;
}
export interface RawMessage {
   rawtext?: Array<RawMessage>;
   score?: RawMessageScore;
   text?: string;
   translate?: string;
   with?: Array<string> | RawMessage;
}
export interface RawMessageScore {
   name?: string;
   objective?: string;
}
export interface Vector3 {
   x: number;
   y: number;
   z: number;
}

export class Block {
   public readonly dimension: Dimension;
   public readonly location: Vector3;
   public readonly permutation: BlockPermutation;
   public readonly x: number;
   public readonly y: number;
   public readonly z: number;
   public setPermutation(permutation: BlockPermutation): void;
   private constructor();
}
export class BlockPermutation {
   public matches(blockName: string, states?: Record<string,boolean | number | string>): boolean;
   public static resolve(blockName: string, states?: Record<string,boolean | number | string>): BlockPermutation;
   private constructor();
}
export class CommandResult {
   public readonly successCount: number;
   private constructor();
}
export class Dimension {
   public readonly id: string;
   public getBlock(location: Vector3): (Block | undefined);
   public getEntities(options?: EntityQueryOptions): Array<Entity>;
   public getEntitiesAtBlockLocation(location: Vector3): Array<Entity>;
   public getPlayers(options?: EntityQueryOptions): Array<Player>;
   public runCommandAsync(commandString: string): Promise<CommandResult>;
   private constructor();
}
export class Entity {
   public readonly dimension: Dimension;
   public readonly id: string;
   public readonly location: Vector3;
   public nameTag: string;
   public readonly typeId: string;
   public getHeadLocation(): Vector3;
   public getVelocity(): Vector3;
   public getViewDirection(): Vector3;
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
   public sendMessage(message: Array<RawMessage | string> | RawMessage | string): void;
   private constructor();
}
export class System {
   public readonly currentTick: number;
   public clearRun(runId: number): void;
   public run(callback: ()=>void): number;
   public runInterval(callback: ()=>void, tickInterval?: number): number;
   public runTimeout(callback: ()=>void, tickDelay?: number): number;
   private constructor();
}
export class World {
   public getAllPlayers(): Array<Player>;
   public getDimension(dimensionId: string): Dimension;
   public getPlayers(options?: EntityQueryOptions): Array<Player>;
   public sendMessage(message: Array<RawMessage | string> | RawMessage | string): void;
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
export class LocationInUnloadedChunkError extends Error {
   private constructor();
}
//@ts-ignore
export class LocationOutOfWorldBoundariesError extends Error {
   private constructor();
}
//@ts-ignore
export class RawMessageError extends Error {
   private constructor();
}