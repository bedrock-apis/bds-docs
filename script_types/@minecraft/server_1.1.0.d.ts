import * as _00 from '@minecraft/common';
export enum GameMode {adventure = "adventure", creative = "creative", spectator = "spectator", survival = "survival"}
export class Block { private constructor(); readonly dimension: Dimension; readonly location: Vector3; readonly permutation: BlockPermutation; readonly x: number; readonly y: number; readonly z: number; setPermutation(permutation: BlockPermutation): void}
export class BlockPermutation { private constructor(); static resolve(blockName: string, states?: Record<string,boolean | number | string>): BlockPermutation; matches(blockName: string, states?: Record<string,boolean | number | string>): boolean}
export class CommandResult { private constructor(); readonly successCount: number}
export class Dimension { private constructor(); readonly id: string; getBlock(location: Vector3): Block; getEntities(options?: EntityQueryOptions): Entity[]; getEntitiesAtBlockLocation(location: Vector3): Entity[]; getPlayers(options?: EntityQueryOptions): Player[]; runCommandAsync(commandString: string): Promise<CommandResult>}
export class Entity { private constructor(); readonly dimension: Dimension; readonly id: string; readonly location: Vector3; nameTag: string; readonly typeId: string; getHeadLocation(): Vector3; getVelocity(): Vector3; getViewDirection(): Vector3; runCommandAsync(commandString: string): Promise<CommandResult>}
export class MinecraftDimensionTypes { private constructor(); static readonly nether: "minecraft:nether"; static readonly overworld: "minecraft:overworld"; static readonly theEnd: "minecraft:the_end"}
//@ts-ignore allow class inheritance for native classes
export class Player extends Entity{ private constructor(); readonly name: string; sendMessage(message: RawMessage | string[] | RawMessage | string): void}
export class System { private constructor(); readonly currentTick: number; clearRun(runId: number): void; run(callback: ()=>void): number; runInterval(callback: ()=>void, tickInterval?: number): number; runTimeout(callback: ()=>void, tickDelay?: number): number}
export class World { private constructor(); getAllPlayers(): Player[]; getDimension(dimensionId: string): Dimension; getPlayers(options?: EntityQueryOptions): Player[]; sendMessage(message: RawMessage | string[] | RawMessage | string): void}
export interface EntityQueryOptions {closest?: number, excludeFamilies?: string[], excludeGameModes?: GameMode[], excludeNames?: string[], excludeTags?: string[], excludeTypes?: string[], families?: string[], farthest?: number, gameMode?: GameMode, location?: Vector3, maxDistance?: number, maxHorizontalRotation?: number, maxLevel?: number, maxVerticalRotation?: number, minDistance?: number, minHorizontalRotation?: number, minLevel?: number, minVerticalRotation?: number, name?: string, scoreOptions?: EntityQueryScoreOptions[], tags?: string[], 'type'?: string}
export interface EntityQueryScoreOptions {exclude?: boolean, maxScore?: number, minScore?: number, objective?: string}
export interface RawMessage {rawtext?: RawMessage[], score?: RawMessageScore, text?: string, translate?: string, with?: string[] | RawMessage}
export interface RawMessageScore {name?: string, objective?: string}
export interface Vector3 {x: number, y: number, z: number}
export class LocationInUnloadedChunkError extends Error { private constructor() }
export class LocationOutOfWorldBoundariesError extends Error { private constructor() }
export const system: System;
export const world: World;