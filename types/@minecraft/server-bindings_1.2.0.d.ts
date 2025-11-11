import * as common from "@minecraft/common";

export enum EntityDamageCause {
   anvil = "anvil",
   blockExplosion = "blockExplosion",
   charging = "charging",
   contact = "contact",
   drowning = "drowning",
   entityAttack = "entityAttack",
   entityExplosion = "entityExplosion",
   fall = "fall",
   fallingBlock = "fallingBlock",
   fire = "fire",
   fireTick = "fireTick",
   fireworks = "fireworks",
   flyIntoWall = "flyIntoWall",
   freezing = "freezing",
   lava = "lava",
   lightning = "lightning",
   magic = "magic",
   magma = "magma",
   none = "none",
   override = "override",
   piston = "piston",
   projectile = "projectile",
   selfDestruct = "selfDestruct",
   stalactite = "stalactite",
   stalagmite = "stalagmite",
   starve = "starve",
   suffocation = "suffocation",
   suicide = "suicide",
   temperature = "temperature",
   thorns = "thorns",
   void = "void",
   wither = "wither",
}
export enum GameMode {
   adventure = "adventure",
   creative = "creative",
   spectator = "spectator",
   survival = "survival",
}
export enum ItemLockMode {
   inventory = "inventory",
   none = "none",
   slot = "slot",
}

export interface EntityApplyDamageByProjectileOptions {
   damagingEntity?: Entity;
   damagingProjectile: Entity;
}
export interface EntityApplyDamageOptions {
   cause: EntityDamageCause;
   damagingEntity?: Entity;
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
export interface MusicOptions {
   fade?: number;
   loop?: boolean;
   volume?: number;
}
export interface PlayerSoundOptions {
   location?: Vector3;
   pitch?: number;
   volume?: number;
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
export interface WorldSoundOptions {
   pitch?: number;
   volume?: number;
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
//@ts-ignore
export class BlockComponent extends Component {
   private constructor();
}
//@ts-ignore
export class BlockInventoryComponent extends BlockComponent {
   public static readonly componentId = "minecraft:inventory";
   public readonly container?: Container;
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
export class Component {
   public readonly typeId: string;
   private constructor();
}
export class Container {
   public readonly emptySlotsCount: number;
   public readonly size: number;
   public addItem(itemStack: ItemStack): (ItemStack | undefined);
   public clearAll(): void;
   public getItem(slot: number): (ItemStack | undefined);
   public moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
   public setItem(slot: number, itemStack?: ItemStack): void;
   public swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
   public transferItem(fromSlot: number, toContainer: Container): (ItemStack | undefined);
   private constructor();
}
export class Dimension {
   public readonly id: string;
   public getBlock(location: Vector3): (Block | undefined);
   public getEntities(options?: EntityQueryOptions): Array<Entity>;
   public getEntitiesAtBlockLocation(location: Vector3): Array<Entity>;
   public getPlayers(options?: EntityQueryOptions): Array<Player>;
   public runCommand(commandString: string): CommandResult;
   public runCommandAsync(commandString: string): Promise<CommandResult>;
   private constructor();
}
export class Entity {
   public readonly dimension: Dimension;
   public readonly id: string;
   public readonly location: Vector3;
   public nameTag: string;
   public readonly typeId: string;
   public addTag(tag: string): boolean;
   public applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
   public applyImpulse(vector: Vector3): void;
   public applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void;
   public clearVelocity(): void;
   public getComponent(componentId: string): (EntityComponent | undefined);
   public getComponents(): Array<EntityComponent>;
   public getHeadLocation(): Vector3;
   public getTags(): Array<string>;
   public getVelocity(): Vector3;
   public getViewDirection(): Vector3;
   public hasComponent(componentId: string): boolean;
   public hasTag(tag: string): boolean;
   public kill(): boolean;
   public removeTag(tag: string): boolean;
   public runCommand(commandString: string): CommandResult;
   public runCommandAsync(commandString: string): Promise<CommandResult>;
   private constructor();
}
//@ts-ignore
export class EntityBaseMovementComponent extends EntityComponent {
   public readonly maxTurn: number;
   private constructor();
}
//@ts-ignore
export class EntityCanClimbComponent extends EntityComponent {
   public static readonly componentId = "minecraft:can_climb";
   private constructor();
}
//@ts-ignore
export class EntityCanFlyComponent extends EntityComponent {
   public static readonly componentId = "minecraft:can_fly";
   private constructor();
}
//@ts-ignore
export class EntityCanPowerJumpComponent extends EntityComponent {
   public static readonly componentId = "minecraft:can_power_jump";
   private constructor();
}
//@ts-ignore
export class EntityColorComponent extends EntityComponent {
   public static readonly componentId = "minecraft:color";
   public value: number;
   private constructor();
}
//@ts-ignore
export class EntityComponent extends Component {
   private constructor();
}
//@ts-ignore
export class EntityFireImmuneComponent extends EntityComponent {
   public static readonly componentId = "minecraft:fire_immune";
   private constructor();
}
//@ts-ignore
export class EntityFloatsInLiquidComponent extends EntityComponent {
   public static readonly componentId = "minecraft:floats_in_liquid";
   private constructor();
}
//@ts-ignore
export class EntityFlyingSpeedComponent extends EntityComponent {
   public static readonly componentId = "minecraft:flying_speed";
   public value: number;
   private constructor();
}
//@ts-ignore
export class EntityFrictionModifierComponent extends EntityComponent {
   public static readonly componentId = "minecraft:friction_modifier";
   public value: number;
   private constructor();
}
//@ts-ignore
export class EntityGroundOffsetComponent extends EntityComponent {
   public static readonly componentId = "minecraft:ground_offset";
   public value: number;
   private constructor();
}
//@ts-ignore
export class EntityInventoryComponent extends EntityComponent {
   public static readonly componentId = "minecraft:inventory";
   public readonly additionalSlotsPerStrength: number;
   public readonly canBeSiphonedFrom: boolean;
   public readonly container?: Container;
   public readonly containerType: string;
   public readonly inventorySize: number;
   public readonly private: boolean;
   public readonly restrictToOwner: boolean;
   private constructor();
}
//@ts-ignore
export class EntityIsBabyComponent extends EntityComponent {
   public static readonly componentId = "minecraft:is_baby";
   private constructor();
}
//@ts-ignore
export class EntityIsChargedComponent extends EntityComponent {
   public static readonly componentId = "minecraft:is_charged";
   private constructor();
}
//@ts-ignore
export class EntityIsChestedComponent extends EntityComponent {
   public static readonly componentId = "minecraft:is_chested";
   private constructor();
}
//@ts-ignore
export class EntityIsDyeableComponent extends EntityComponent {
   public static readonly componentId = "minecraft:is_dyeable";
   private constructor();
}
//@ts-ignore
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent {
   public static readonly componentId = "minecraft:is_hidden_when_invisible";
   private constructor();
}
//@ts-ignore
export class EntityIsIgnitedComponent extends EntityComponent {
   public static readonly componentId = "minecraft:is_ignited";
   private constructor();
}
//@ts-ignore
export class EntityIsIllagerCaptainComponent extends EntityComponent {
   public static readonly componentId = "minecraft:is_illager_captain";
   private constructor();
}
//@ts-ignore
export class EntityIsSaddledComponent extends EntityComponent {
   public static readonly componentId = "minecraft:is_saddled";
   private constructor();
}
//@ts-ignore
export class EntityIsShakingComponent extends EntityComponent {
   public static readonly componentId = "minecraft:is_shaking";
   private constructor();
}
//@ts-ignore
export class EntityIsShearedComponent extends EntityComponent {
   public static readonly componentId = "minecraft:is_sheared";
   private constructor();
}
//@ts-ignore
export class EntityIsStackableComponent extends EntityComponent {
   public static readonly componentId = "minecraft:is_stackable";
   private constructor();
}
//@ts-ignore
export class EntityIsStunnedComponent extends EntityComponent {
   public static readonly componentId = "minecraft:is_stunned";
   private constructor();
}
//@ts-ignore
export class EntityIsTamedComponent extends EntityComponent {
   public static readonly componentId = "minecraft:is_tamed";
   private constructor();
}
//@ts-ignore
export class EntityItemComponent extends EntityComponent {
   public static readonly componentId = "minecraft:item";
   public readonly itemStack: ItemStack;
   private constructor();
}
//@ts-ignore
export class EntityMarkVariantComponent extends EntityComponent {
   public static readonly componentId = "minecraft:mark_variant";
   public value: number;
   private constructor();
}
//@ts-ignore
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent {
   public static readonly componentId = "minecraft:movement.amphibious";
   private constructor();
}
//@ts-ignore
export class EntityMovementBasicComponent extends EntityBaseMovementComponent {
   public static readonly componentId = "minecraft:movement.basic";
   private constructor();
}
//@ts-ignore
export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
   public static readonly componentId = "minecraft:movement.fly";
   private constructor();
}
//@ts-ignore
export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
   public static readonly componentId = "minecraft:movement.generic";
   private constructor();
}
//@ts-ignore
export class EntityMovementHoverComponent extends EntityBaseMovementComponent {
   public static readonly componentId = "minecraft:movement.hover";
   private constructor();
}
//@ts-ignore
export class EntityMovementJumpComponent extends EntityBaseMovementComponent {
   public static readonly componentId = "minecraft:movement.jump";
   private constructor();
}
//@ts-ignore
export class EntityMovementSkipComponent extends EntityBaseMovementComponent {
   public static readonly componentId = "minecraft:movement.skip";
   private constructor();
}
//@ts-ignore
export class EntityPushThroughComponent extends EntityComponent {
   public static readonly componentId = "minecraft:push_through";
   public value: number;
   private constructor();
}
//@ts-ignore
export class EntityScaleComponent extends EntityComponent {
   public static readonly componentId = "minecraft:scale";
   public value: number;
   private constructor();
}
//@ts-ignore
export class EntitySkinIdComponent extends EntityComponent {
   public static readonly componentId = "minecraft:skin_id";
   public value: number;
   private constructor();
}
//@ts-ignore
export class EntityVariantComponent extends EntityComponent {
   public static readonly componentId = "minecraft:variant";
   public readonly value: number;
   private constructor();
}
//@ts-ignore
export class EntityWantsJockeyComponent extends EntityComponent {
   public static readonly componentId = "minecraft:wants_jockey";
   private constructor();
}
//@ts-ignore
export class ItemComponent extends Component {
   private constructor();
}
export class ItemStack {
   public readonly amount: number;
   public readonly isStackable: boolean;
   public readonly keepOnDeath: boolean;
   public readonly lockMode: ItemLockMode;
   public readonly maxAmount: number;
   public readonly nameTag?: string;
   public readonly type: ItemType;
   public readonly typeId: string;
   public constructor(itemType: ItemType | string, amount?: number);
   public getComponent(componentId: string): (ItemComponent | undefined);
   public getComponents(): Array<ItemComponent>;
   public hasComponent(componentId: string): boolean;
   public isStackableWith(itemStack: ItemStack): boolean;
}
export class ItemType {
   public readonly id: string;
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
   public playSound(soundId: string, soundOptions?: PlayerSoundOptions): void;
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
   public playMusic(trackId: string, musicOptions?: MusicOptions): void;
   public playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
   public queueMusic(trackId: string, musicOptions?: MusicOptions): void;
   public sendMessage(message: Array<RawMessage | string> | RawMessage | string): void;
   public stopMusic(): void;
   private constructor();
}


export const system: System;
export const world: World;


//@ts-ignore
export class CommandError extends Error {
   private constructor();
}
//@ts-ignore
export class ContainerRulesError extends Error {
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