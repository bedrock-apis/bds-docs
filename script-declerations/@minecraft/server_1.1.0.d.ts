import * as _1e from '@minecraft/common';

// Enums - 1
export enum GameMode { adventure = "adventure", creative = "creative", spectator = "spectator", survival = "survival"};

// Interfaces - 6
export interface EntityFilter { excludeFamilies?: string[]; excludeGameModes?: GameMode[]; excludeNames?: string[]; excludeTags?: string[]; excludeTypes?: string[]; families?: string[]; gameMode?: GameMode; maxHorizontalRotation?: number; maxLevel?: number; maxVerticalRotation?: number; minHorizontalRotation?: number; minLevel?: number; minVerticalRotation?: number; name?: string; scoreOptions?: EntityQueryScoreOptions[]; tags?: string[]; type?: string};
export interface EntityQueryOptions extends EntityFilter{ closest?: number; farthest?: number; location?: Vector3; maxDistance?: number; minDistance?: number};
export interface EntityQueryScoreOptions { exclude?: boolean; maxScore?: number; minScore?: number; objective?: string};
export interface RawMessage { rawtext?: RawMessage[]; score?: RawMessageScore; text?: string; translate?: string; with?: string[] | RawMessage};
export interface RawMessageScore { name?: string; objective?: string};
export interface Vector3 { x: number; y: number; z: number};

// Classes - 9
export class Block { public readonly dimension: Dimension; public readonly location: Vector3; public readonly permutation: BlockPermutation; public readonly x: number; public readonly y: number; public readonly z: number; public setPermutation(permutation: BlockPermutation): void; private constructor();};
export class BlockPermutation { public matches(blockName: string, states?: Record<string,boolean | number | string>): boolean; public static resolve(blockName: string, states?: Record<string,boolean | number | string>): BlockPermutation; private constructor();};
export class CommandResult { public readonly successCount: number; private constructor();};
export class Dimension { public readonly id: string; public getBlock(location: Vector3): (Block | undefined); public getEntities(options?: EntityQueryOptions): Entity[]; public getEntitiesAtBlockLocation(location: Vector3): Entity[]; public getPlayers(options?: EntityQueryOptions): Player[]; public runCommandAsync(commandString: string): Promise<CommandResult>; private constructor();};
export class Entity { public readonly dimension: Dimension; public readonly id: string; public readonly location: Vector3; public nameTag: string; public readonly typeId: string; public getHeadLocation(): Vector3; public getVelocity(): Vector3; public getViewDirection(): Vector3; public runCommandAsync(commandString: string): Promise<CommandResult>; private constructor();};
export class MinecraftDimensionTypes { public static readonly nether = "minecraft:nether"; public static readonly overworld = "minecraft:overworld"; public static readonly theEnd = "minecraft:the_end"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class Player extends Entity{ public readonly name: string; public sendMessage(message: (RawMessage | string)[] | RawMessage | string): void; private constructor();};
export class System { public readonly currentTick: number; public clearRun(runId: number): void; public run(callback: ()=>void): number; public runInterval(callback: ()=>void, tickInterval?: number): number; public runTimeout(callback: ()=>void, tickDelay?: number): number; private constructor();};
export class World { public getAllPlayers(): Player[]; public getDimension(dimensionId: string): Dimension; public getPlayers(options?: EntityQueryOptions): Player[]; public sendMessage(message: (RawMessage | string)[] | RawMessage | string): void; private constructor();};

// Constants & Objects - 2

export const system: System;
export const world: World;

// Functions - 0

// Errors - 2
export class LocationInUnloadedChunkError extends Error{ private constructor();};
export class LocationOutOfWorldBoundariesError extends Error{ private constructor();};
