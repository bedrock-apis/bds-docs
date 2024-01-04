import * as _00 from '@minecraft/common';
export enum EntityDamageCause {anvil = "anvil", blockExplosion = "blockExplosion", charging = "charging", contact = "contact", drowning = "drowning", entityAttack = "entityAttack", entityExplosion = "entityExplosion", fall = "fall", fallingBlock = "fallingBlock", fire = "fire", fireTick = "fireTick", fireworks = "fireworks", flyIntoWall = "flyIntoWall", freezing = "freezing", lava = "lava", lightning = "lightning", magic = "magic", magma = "magma", none = "none", override = "override", piston = "piston", projectile = "projectile", stalactite = "stalactite", stalagmite = "stalagmite", starve = "starve", suffocation = "suffocation", suicide = "suicide", temperature = "temperature", thorns = "thorns", void = "void", wither = "wither"}
export enum GameMode {adventure = "adventure", creative = "creative", spectator = "spectator", survival = "survival"}
export enum ItemLockMode {inventory = "inventory", none = "none", slot = "slot"}
export class Block { private constructor(); readonly dimension: Dimension; readonly location: Vector3; readonly permutation: BlockPermutation; readonly x: number; readonly y: number; readonly z: number; getComponent(componentId: string): BlockComponent; setPermutation(permutation: BlockPermutation): void}
//@ts-ignore allow class inheritance for native classes
export class BlockComponent extends Component{ private constructor(); readonly block: Block}
export class BlockEvent { private constructor(); readonly block: Block; readonly dimension: Dimension}
//@ts-ignore allow class inheritance for native classes
export class BlockInventoryComponent extends BlockComponent{ private constructor(); static readonly componentId: "minecraft:inventory"; readonly container?: Container}
export class BlockPermutation { private constructor(); static resolve(blockName: string, states?: Record<string,boolean | number | string>): BlockPermutation; matches(blockName: string, states?: Record<string,boolean | number | string>): boolean}
//@ts-ignore allow class inheritance for native classes
export class ButtonPushAfterEvent extends BlockEvent{ private constructor(); readonly source: Entity}
//@ts-ignore allow class inheritance for native classes
export class ButtonPushAfterEventSignal extends IButtonPushAfterEventSignal{ private constructor()}
export class CommandResult { private constructor(); readonly successCount: number}
export class Component { private constructor(); readonly typeId: string}
export class Container { private constructor(); readonly emptySlotsCount: number; readonly size: number; addItem(itemStack: ItemStack): ItemStack; clearAll(): void; getItem(slot: number): ItemStack; moveItem(fromSlot: number, toSlot: number, toContainer: Container): void; setItem(slot: number, itemStack?: ItemStack): void; swapItems(slot: number, otherSlot: number, otherContainer: Container): void; transferItem(fromSlot: number, toContainer: Container): ItemStack}
export class Dimension { private constructor(); readonly id: string; getBlock(location: Vector3): Block; getEntities(options?: EntityQueryOptions): Entity[]; getEntitiesAtBlockLocation(location: Vector3): Entity[]; getPlayers(options?: EntityQueryOptions): Player[]; runCommand(commandString: string): CommandResult; runCommandAsync(commandString: string): Promise<CommandResult>; spawnEntity(identifier: string, location: Vector3): Entity; spawnItem(itemStack: ItemStack, location: Vector3): Entity}
export class Effect { private constructor(); readonly amplifier: number; readonly displayName: string; readonly duration: number; readonly typeId: string; isValid(): boolean}
export class EffectType { private constructor(); getName(): string}
export class Entity { private constructor(); readonly dimension: Dimension; readonly id: string; readonly location: Vector3; nameTag: string; readonly typeId: string; addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): void; addTag(tag: string): boolean; applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean; applyImpulse(vector: Vector3): void; applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void; clearVelocity(): void; getComponent(componentId: string): EntityComponent; getComponents(): EntityComponent[]; getEffect(effectType: EffectType | string): Effect; getEffects(): Effect[]; getHeadLocation(): Vector3; getTags(): string[]; getVelocity(): Vector3; getViewDirection(): Vector3; hasComponent(componentId: string): boolean; hasTag(tag: string): boolean; kill(): boolean; removeEffect(effectType: EffectType | string): boolean; removeTag(tag: string): boolean; runCommand(commandString: string): CommandResult; runCommandAsync(commandString: string): Promise<CommandResult>; teleport(location: Vector3, teleportOptions?: TeleportOptions): void; tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean}
//@ts-ignore allow class inheritance for native classes
export class EntityAttributeComponent extends EntityComponent{ private constructor(); readonly currentValue: number; readonly defaultValue: number; readonly effectiveMax: number; readonly effectiveMin: number; resetToDefaultValue(): void; resetToMaxValue(): void; resetToMinValue(): void; setCurrentValue(value: number): boolean}
//@ts-ignore allow class inheritance for native classes
export class EntityBaseMovementComponent extends EntityComponent{ private constructor(); readonly maxTurn: number}
//@ts-ignore allow class inheritance for native classes
export class EntityCanClimbComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:can_climb"}
//@ts-ignore allow class inheritance for native classes
export class EntityCanFlyComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:can_fly"}
//@ts-ignore allow class inheritance for native classes
export class EntityCanPowerJumpComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:can_power_jump"}
//@ts-ignore allow class inheritance for native classes
export class EntityColorComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:color"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityComponent extends Component{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityFireImmuneComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:fire_immune"}
//@ts-ignore allow class inheritance for native classes
export class EntityFloatsInLiquidComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:floats_in_liquid"}
//@ts-ignore allow class inheritance for native classes
export class EntityFlyingSpeedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:flying_speed"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityFrictionModifierComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:friction_modifier"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityGroundOffsetComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:ground_offset"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityHealableComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:healable"; readonly forceUse: boolean; getFeedItems(): FeedItem[]}
//@ts-ignore allow class inheritance for native classes
export class EntityHealthComponent extends EntityAttributeComponent{ private constructor(); static readonly componentId: "minecraft:health"}
//@ts-ignore allow class inheritance for native classes
export class EntityInventoryComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:inventory"; readonly additionalSlotsPerStrength: number; readonly canBeSiphonedFrom: boolean; readonly container?: Container; readonly containerType: string; readonly inventorySize: number; readonly private: boolean; readonly restrictToOwner: boolean}
//@ts-ignore allow class inheritance for native classes
export class EntityIsBabyComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_baby"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsChargedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_charged"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsChestedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_chested"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsDyeableComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_dyeable"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_hidden_when_invisible"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsIgnitedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_ignited"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsIllagerCaptainComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_illager_captain"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsSaddledComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_saddled"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsShakingComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_shaking"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsShearedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_sheared"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsStackableComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_stackable"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsStunnedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_stunned"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsTamedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_tamed"}
//@ts-ignore allow class inheritance for native classes
export class EntityItemComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:item"; readonly itemStack: ItemStack}
//@ts-ignore allow class inheritance for native classes
export class EntityMarkVariantComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:mark_variant"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.amphibious"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementBasicComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.basic"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementFlyComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.fly"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementGenericComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.generic"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementHoverComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.hover"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementJumpComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.jump"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementSkipComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.skip"}
//@ts-ignore allow class inheritance for native classes
export class EntityPushThroughComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:push_through"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityScaleComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:scale"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntitySkinIdComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:skin_id"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityVariantComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:variant"; readonly value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityWantsJockeyComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:wants_jockey"}
export class FeedItem { private constructor(); readonly healAmount: number; readonly item: string; getEffects(): FeedItemEffect[]}
export class FeedItemEffect { private constructor(); readonly amplifier: number; readonly chance: number; readonly duration: number; readonly name: string}
export class IButtonPushAfterEventSignal { private constructor(); subscribe(callback: (arg0: ButtonPushAfterEvent)=>void): (arg0: ButtonPushAfterEvent)=>void; unsubscribe(callback: (arg0: ButtonPushAfterEvent)=>void): void}
export class ILeverActionAfterEventSignal { private constructor(); subscribe(callback: (arg0: LeverActionAfterEvent)=>void): (arg0: LeverActionAfterEvent)=>void; unsubscribe(callback: (arg0: LeverActionAfterEvent)=>void): void}
export class IPlayerJoinAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerJoinAfterEvent)=>void): (arg0: PlayerJoinAfterEvent)=>void; unsubscribe(callback: (arg0: PlayerJoinAfterEvent)=>void): void}
export class IPlayerLeaveAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerLeaveAfterEvent)=>void): (arg0: PlayerLeaveAfterEvent)=>void; unsubscribe(callback: (arg0: PlayerLeaveAfterEvent)=>void): void}
export class IPlayerSpawnAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerSpawnAfterEvent)=>void): (arg0: PlayerSpawnAfterEvent)=>void; unsubscribe(callback: (arg0: PlayerSpawnAfterEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class ItemComponent extends Component{ private constructor()}
export class ItemStack { constructor(itemType: ItemType | string, amount?: number); readonly amount: number; readonly isStackable: boolean; readonly keepOnDeath: boolean; readonly lockMode: ItemLockMode; readonly maxAmount: number; readonly nameTag?: string; readonly 'type': ItemType; readonly typeId: string; getComponent(componentId: string): ItemComponent; getComponents(): ItemComponent[]; hasComponent(componentId: string): boolean; isStackableWith(itemStack: ItemStack): boolean}
export class ItemType { private constructor(); readonly id: string}
//@ts-ignore allow class inheritance for native classes
export class LeverActionAfterEvent extends BlockEvent{ private constructor(); readonly isPowered: boolean; readonly player: Player}
//@ts-ignore allow class inheritance for native classes
export class LeverActionAfterEventSignal extends ILeverActionAfterEventSignal{ private constructor()}
export class MinecraftDimensionTypes { private constructor(); static readonly nether: "minecraft:nether"; static readonly overworld: "minecraft:overworld"; static readonly theEnd: "minecraft:the_end"}
//@ts-ignore allow class inheritance for native classes
export class Player extends Entity{ private constructor(); readonly name: string; playSound(soundId: string, soundOptions?: PlayerSoundOptions): void; sendMessage(message: RawMessage | string[] | RawMessage | string): void}
export class PlayerJoinAfterEvent { private constructor(); readonly playerId: string; readonly playerName: string}
//@ts-ignore allow class inheritance for native classes
export class PlayerJoinAfterEventSignal extends IPlayerJoinAfterEventSignal{ private constructor()}
export class PlayerLeaveAfterEvent { private constructor(); readonly playerId: string; readonly playerName: string}
//@ts-ignore allow class inheritance for native classes
export class PlayerLeaveAfterEventSignal extends IPlayerLeaveAfterEventSignal{ private constructor()}
export class PlayerSpawnAfterEvent { private constructor(); initialSpawn: boolean; player: Player}
//@ts-ignore allow class inheritance for native classes
export class PlayerSpawnAfterEventSignal extends IPlayerSpawnAfterEventSignal{ private constructor()}
export class System { private constructor(); readonly currentTick: number; clearRun(runId: number): void; run(callback: ()=>void): number; runInterval(callback: ()=>void, tickInterval?: number): number; runTimeout(callback: ()=>void, tickDelay?: number): number}
export class World { private constructor(); getAllPlayers(): Player[]; getDimension(dimensionId: string): Dimension; getPlayers(options?: EntityQueryOptions): Player[]; playMusic(trackId: string, musicOptions?: MusicOptions): void; playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void; queueMusic(trackId: string, musicOptions?: MusicOptions): void; sendMessage(message: RawMessage | string[] | RawMessage | string): void; stopMusic(): void}
export class WorldAfterEvents { private constructor(); readonly buttonPush: ButtonPushAfterEventSignal; readonly leverAction: LeverActionAfterEventSignal; readonly playerJoin: PlayerJoinAfterEventSignal; readonly playerLeave: PlayerLeaveAfterEventSignal; readonly playerSpawn: PlayerSpawnAfterEventSignal}
export interface EntityApplyDamageByProjectileOptions {damagingEntity?: Entity, damagingProjectile: Entity}
export interface EntityApplyDamageOptions {cause: EntityDamageCause, damagingEntity?: Entity}
export interface EntityEffectOptions {amplifier?: number, showParticles?: boolean}
export interface EntityQueryOptions {closest?: number, excludeFamilies?: string[], excludeGameModes?: GameMode[], excludeNames?: string[], excludeTags?: string[], excludeTypes?: string[], families?: string[], farthest?: number, gameMode?: GameMode, location?: Vector3, maxDistance?: number, maxHorizontalRotation?: number, maxLevel?: number, maxVerticalRotation?: number, minDistance?: number, minHorizontalRotation?: number, minLevel?: number, minVerticalRotation?: number, name?: string, scoreOptions?: EntityQueryScoreOptions[], tags?: string[], 'type'?: string}
export interface EntityQueryScoreOptions {exclude?: boolean, maxScore?: number, minScore?: number, objective?: string}
export interface MusicOptions {fade?: number, loop?: boolean, volume?: number}
export interface PlayerSoundOptions {location?: Vector3, pitch?: number, volume?: number}
export interface RawMessage {rawtext?: RawMessage[], score?: RawMessageScore, text?: string, translate?: string, with?: string[] | RawMessage}
export interface RawMessageScore {name?: string, objective?: string}
export interface TeleportOptions {checkForBlocks?: boolean, dimension?: Dimension, facingLocation?: Vector3, keepVelocity?: boolean, rotation?: Vector2}
export interface Vector2 {x: number, y: number}
export interface Vector3 {x: number, y: number, z: number}
export interface WorldSoundOptions {pitch?: number, volume?: number}
export class CommandError extends Error { private constructor() }
export class LocationInUnloadedChunkError extends Error { private constructor() }
export class LocationOutOfWorldBoundariesError extends Error { private constructor() }
export const system: System;
export const world: World;