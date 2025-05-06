import * as _1e from '@minecraft/common';

// Enums - 9
export enum Direction { Down = "Down", East = "East", North = "North", South = "South", Up = "Up", West = "West"};
export enum DisplaySlotId { BelowName = "BelowName", List = "List", Sidebar = "Sidebar"};
export enum EntityDamageCause { anvil = "anvil", blockExplosion = "blockExplosion", charging = "charging", contact = "contact", drowning = "drowning", entityAttack = "entityAttack", entityExplosion = "entityExplosion", fall = "fall", fallingBlock = "fallingBlock", fire = "fire", fireTick = "fireTick", fireworks = "fireworks", flyIntoWall = "flyIntoWall", freezing = "freezing", lava = "lava", lightning = "lightning", magic = "magic", magma = "magma", none = "none", override = "override", piston = "piston", projectile = "projectile", selfDestruct = "selfDestruct", stalactite = "stalactite", stalagmite = "stalagmite", starve = "starve", suffocation = "suffocation", suicide = "suicide", temperature = "temperature", thorns = "thorns", void = "void", wither = "wither"};
export enum GameMode { adventure = "adventure", creative = "creative", spectator = "spectator", survival = "survival"};
export enum ItemLockMode { inventory = "inventory", none = "none", slot = "slot"};
export enum ObjectiveSortOrder { Ascending = 0, Descending = 1};
export enum ScoreboardIdentityType { Entity = "Entity", FakePlayer = "FakePlayer", Player = "Player"};
export enum ScriptEventSource { Block = "Block", Entity = "Entity", NPCDialogue = "NPCDialogue", Server = "Server"};
export enum TimeOfDay { Day = 1000, Midnight = 18000, Night = 13000, Noon = 6000, Sunrise = 23000, Sunset = 12000};

// Interfaces - 25
export interface BlockFilter { excludePermutations?: BlockPermutation[]; excludeTags?: string[]; excludeTypes?: string[]; includePermutations?: BlockPermutation[]; includeTags?: string[]; includeTypes?: string[]};
export interface BlockRaycastHit { block: Block; face: Direction; faceLocation: Vector3};
export interface BlockRaycastOptions extends BlockFilter{ includeLiquidBlocks?: boolean; includePassableBlocks?: boolean; maxDistance?: number};
export interface DimensionLocation { dimension: Dimension; x: number; y: number; z: number};
export interface EntityApplyDamageByProjectileOptions { damagingEntity?: Entity; damagingProjectile: Entity};
export interface EntityApplyDamageOptions { cause: EntityDamageCause; damagingEntity?: Entity};
export interface EntityDamageSource { cause: EntityDamageCause; damagingEntity?: Entity; damagingProjectile?: Entity};
export interface EntityEffectOptions { amplifier?: number; showParticles?: boolean};
export interface EntityEventOptions { entities?: Entity[]; entityTypes?: string[]};
export interface EntityFilter { excludeFamilies?: string[]; excludeGameModes?: GameMode[]; excludeNames?: string[]; excludeTags?: string[]; excludeTypes?: string[]; families?: string[]; gameMode?: GameMode; maxHorizontalRotation?: number; maxLevel?: number; maxVerticalRotation?: number; minHorizontalRotation?: number; minLevel?: number; minVerticalRotation?: number; name?: string; scoreOptions?: EntityQueryScoreOptions[]; tags?: string[]; type?: string};
export interface EntityQueryOptions extends EntityFilter{ closest?: number; farthest?: number; location?: Vector3; maxDistance?: number; minDistance?: number};
export interface EntityQueryScoreOptions { exclude?: boolean; maxScore?: number; minScore?: number; objective?: string};
export interface EntityRaycastHit { distance: number; entity: Entity};
export interface EntityRaycastOptions extends EntityFilter{ maxDistance?: number};
export interface MusicOptions { fade?: number; loop?: boolean; volume?: number};
export interface PlayerSoundOptions { location?: Vector3; pitch?: number; volume?: number};
export interface RawMessage { rawtext?: RawMessage[]; score?: RawMessageScore; text?: string; translate?: string; with?: string[] | RawMessage};
export interface RawMessageScore { name?: string; objective?: string};
export interface ScoreboardObjectiveDisplayOptions { objective: ScoreboardObjective; sortOrder?: ObjectiveSortOrder};
export interface ScriptEventMessageFilterOptions { namespaces: string[]};
export interface TeleportOptions { checkForBlocks?: boolean; dimension?: Dimension; facingLocation?: Vector3; keepVelocity?: boolean; rotation?: Vector2};
export interface TitleDisplayOptions { fadeInDuration: number; fadeOutDuration: number; stayDuration: number; subtitle?: (RawMessage | string)[] | RawMessage | string};
export interface Vector2 { x: number; y: number};
export interface Vector3 { x: number; y: number; z: number};
export interface WorldSoundOptions { pitch?: number; volume?: number};

// Classes - 126
export class Block { public readonly dimension: Dimension; public readonly location: Vector3; public readonly permutation: BlockPermutation; public readonly x: number; public readonly y: number; public readonly z: number; public getComponent(componentId: string): (BlockComponent | undefined); public isValid(): boolean; public setPermutation(permutation: BlockPermutation): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockComponent extends Component{ public readonly block: Block; private constructor();};
export class BlockEvent { public readonly block: Block; public readonly dimension: Dimension; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockInventoryComponent extends BlockComponent{ public static readonly componentId = "minecraft:inventory"; public readonly container?: Container; private constructor();};
export class BlockPermutation { public matches(blockName: string, states?: Record<string,boolean | number | string>): boolean; public static resolve(blockName: string, states?: Record<string,boolean | number | string>): BlockPermutation; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ButtonPushAfterEvent extends BlockEvent{ public readonly source: Entity; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ButtonPushAfterEventSignal extends IButtonPushAfterEventSignal{ private constructor();};
export class CommandResult { public readonly successCount: number; private constructor();};
export class Component { public readonly typeId: string; public isValid(): boolean; private constructor();};
export class Container { public readonly emptySlotsCount: number; public readonly size: number; public addItem(itemStack: ItemStack): (ItemStack | undefined); public clearAll(): void; public getItem(slot: number): (ItemStack | undefined); public isValid(): boolean; public moveItem(fromSlot: number, toSlot: number, toContainer: Container): void; public setItem(slot: number, itemStack?: ItemStack): void; public swapItems(slot: number, otherSlot: number, otherContainer: Container): void; public transferItem(fromSlot: number, toContainer: Container): (ItemStack | undefined); private constructor();};
export class Dimension { public readonly id: string; public getBlock(location: Vector3): (Block | undefined); public getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): (BlockRaycastHit | undefined); public getEntities(options?: EntityQueryOptions): Entity[]; public getEntitiesAtBlockLocation(location: Vector3): Entity[]; public getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[]; public getPlayers(options?: EntityQueryOptions): Player[]; public runCommand(commandString: string): CommandResult; public runCommandAsync(commandString: string): Promise<CommandResult>; public spawnEntity(identifier: string, location: Vector3): Entity; public spawnItem(itemStack: ItemStack, location: Vector3): Entity; private constructor();};
export class Effect { public readonly amplifier: number; public readonly displayName: string; public readonly duration: number; public readonly typeId: string; public isValid(): boolean; private constructor();};
export class EffectType { public getName(): string; private constructor();};
export class Entity { public readonly dimension: Dimension; public readonly id: string; public readonly location: Vector3; public nameTag: string; public readonly scoreboardIdentity?: ScoreboardIdentity; public readonly typeId: string; public addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): (Effect | undefined); public addTag(tag: string): boolean; public applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean; public applyImpulse(vector: Vector3): void; public applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void; public clearVelocity(): void; public getBlockFromViewDirection(options?: BlockRaycastOptions): (BlockRaycastHit | undefined); public getComponent(componentId: string): (EntityComponent | undefined); public getComponents(): EntityComponent[]; public getEffect(effectType: EffectType | string): (Effect | undefined); public getEffects(): Effect[]; public getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[]; public getHeadLocation(): Vector3; public getTags(): string[]; public getVelocity(): Vector3; public getViewDirection(): Vector3; public hasComponent(componentId: string): boolean; public hasTag(tag: string): boolean; public isValid(): boolean; public kill(): boolean; public removeEffect(effectType: EffectType | string): boolean; public removeTag(tag: string): boolean; public runCommand(commandString: string): CommandResult; public runCommandAsync(commandString: string): Promise<CommandResult>; public teleport(location: Vector3, teleportOptions?: TeleportOptions): void; public tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityAttributeComponent extends EntityComponent{ public readonly currentValue: number; public readonly defaultValue: number; public readonly effectiveMax: number; public readonly effectiveMin: number; public resetToDefaultValue(): void; public resetToMaxValue(): void; public resetToMinValue(): void; public setCurrentValue(value: number): boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityBaseMovementComponent extends EntityComponent{ public readonly maxTurn: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityCanClimbComponent extends EntityComponent{ public static readonly componentId = "minecraft:can_climb"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityCanFlyComponent extends EntityComponent{ public static readonly componentId = "minecraft:can_fly"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityCanPowerJumpComponent extends EntityComponent{ public static readonly componentId = "minecraft:can_power_jump"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityColorComponent extends EntityComponent{ public static readonly componentId = "minecraft:color"; public value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityComponent extends Component{ private constructor();};
export class EntityDieAfterEvent { public readonly damageSource: EntityDamageSource; public readonly deadEntity: Entity; private constructor();};
export class EntityDieAfterEventSignal { public subscribe(callback: (arg0: EntityDieAfterEvent)=>void, options?: EntityEventOptions): (arg0: EntityDieAfterEvent)=>void; public unsubscribe(callback: (arg0: EntityDieAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityFireImmuneComponent extends EntityComponent{ public static readonly componentId = "minecraft:fire_immune"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityFloatsInLiquidComponent extends EntityComponent{ public static readonly componentId = "minecraft:floats_in_liquid"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityFlyingSpeedComponent extends EntityComponent{ public static readonly componentId = "minecraft:flying_speed"; public value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityFrictionModifierComponent extends EntityComponent{ public static readonly componentId = "minecraft:friction_modifier"; public value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityGroundOffsetComponent extends EntityComponent{ public static readonly componentId = "minecraft:ground_offset"; public value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityHealableComponent extends EntityComponent{ public static readonly componentId = "minecraft:healable"; public readonly forceUse: boolean; public getFeedItems(): FeedItem[]; private constructor();};
export class EntityHealthChangedAfterEvent { public readonly entity: Entity; public readonly newValue: number; public readonly oldValue: number; private constructor();};
export class EntityHealthChangedAfterEventSignal { public subscribe(callback: (arg0: EntityHealthChangedAfterEvent)=>void, options?: EntityEventOptions): (arg0: EntityHealthChangedAfterEvent)=>void; public unsubscribe(callback: (arg0: EntityHealthChangedAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityHealthComponent extends EntityAttributeComponent{ public static readonly componentId = "minecraft:health"; private constructor();};
export class EntityHitBlockAfterEvent { public readonly blockFace: Direction; public readonly damagingEntity: Entity; public readonly hitBlock: Block; private constructor();};
export class EntityHitBlockAfterEventSignal { public subscribe(callback: (arg0: EntityHitBlockAfterEvent)=>void, options?: EntityEventOptions): (arg0: EntityHitBlockAfterEvent)=>void; public unsubscribe(callback: (arg0: EntityHitBlockAfterEvent)=>void): void; private constructor();};
export class EntityHitEntityAfterEvent { public readonly damagingEntity: Entity; public readonly hitEntity: Entity; private constructor();};
export class EntityHitEntityAfterEventSignal { public subscribe(callback: (arg0: EntityHitEntityAfterEvent)=>void, options?: EntityEventOptions): (arg0: EntityHitEntityAfterEvent)=>void; public unsubscribe(callback: (arg0: EntityHitEntityAfterEvent)=>void): void; private constructor();};
export class EntityHurtAfterEvent { public readonly damage: number; public readonly damageSource: EntityDamageSource; public readonly hurtEntity: Entity; private constructor();};
export class EntityHurtAfterEventSignal { public subscribe(callback: (arg0: EntityHurtAfterEvent)=>void, options?: EntityEventOptions): (arg0: EntityHurtAfterEvent)=>void; public unsubscribe(callback: (arg0: EntityHurtAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityInventoryComponent extends EntityComponent{ public static readonly componentId = "minecraft:inventory"; public readonly additionalSlotsPerStrength: number; public readonly canBeSiphonedFrom: boolean; public readonly container?: Container; public readonly containerType: string; public readonly inventorySize: number; public readonly private: boolean; public readonly restrictToOwner: boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsBabyComponent extends EntityComponent{ public static readonly componentId = "minecraft:is_baby"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsChargedComponent extends EntityComponent{ public static readonly componentId = "minecraft:is_charged"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsChestedComponent extends EntityComponent{ public static readonly componentId = "minecraft:is_chested"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsDyeableComponent extends EntityComponent{ public static readonly componentId = "minecraft:is_dyeable"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent{ public static readonly componentId = "minecraft:is_hidden_when_invisible"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsIgnitedComponent extends EntityComponent{ public static readonly componentId = "minecraft:is_ignited"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsIllagerCaptainComponent extends EntityComponent{ public static readonly componentId = "minecraft:is_illager_captain"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsSaddledComponent extends EntityComponent{ public static readonly componentId = "minecraft:is_saddled"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsShakingComponent extends EntityComponent{ public static readonly componentId = "minecraft:is_shaking"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsShearedComponent extends EntityComponent{ public static readonly componentId = "minecraft:is_sheared"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsStackableComponent extends EntityComponent{ public static readonly componentId = "minecraft:is_stackable"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsStunnedComponent extends EntityComponent{ public static readonly componentId = "minecraft:is_stunned"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsTamedComponent extends EntityComponent{ public static readonly componentId = "minecraft:is_tamed"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityItemComponent extends EntityComponent{ public static readonly componentId = "minecraft:item"; public readonly itemStack: ItemStack; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMarkVariantComponent extends EntityComponent{ public static readonly componentId = "minecraft:mark_variant"; public value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent{ public static readonly componentId = "minecraft:movement.amphibious"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementBasicComponent extends EntityBaseMovementComponent{ public static readonly componentId = "minecraft:movement.basic"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementFlyComponent extends EntityBaseMovementComponent{ public static readonly componentId = "minecraft:movement.fly"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementGenericComponent extends EntityBaseMovementComponent{ public static readonly componentId = "minecraft:movement.generic"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementHoverComponent extends EntityBaseMovementComponent{ public static readonly componentId = "minecraft:movement.hover"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementJumpComponent extends EntityBaseMovementComponent{ public static readonly componentId = "minecraft:movement.jump"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementSkipComponent extends EntityBaseMovementComponent{ public static readonly componentId = "minecraft:movement.skip"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityPushThroughComponent extends EntityComponent{ public static readonly componentId = "minecraft:push_through"; public value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityScaleComponent extends EntityComponent{ public static readonly componentId = "minecraft:scale"; public value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntitySkinIdComponent extends EntityComponent{ public static readonly componentId = "minecraft:skin_id"; public value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityVariantComponent extends EntityComponent{ public static readonly componentId = "minecraft:variant"; public readonly value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityWantsJockeyComponent extends EntityComponent{ public static readonly componentId = "minecraft:wants_jockey"; private constructor();};
export class FeedItem { public readonly healAmount: number; public readonly item: string; public getEffects(): FeedItemEffect[]; private constructor();};
export class FeedItemEffect { public readonly amplifier: number; public readonly chance: number; public readonly duration: number; public readonly name: string; private constructor();};
export class IButtonPushAfterEventSignal { public subscribe(callback: (arg0: ButtonPushAfterEvent)=>void): (arg0: ButtonPushAfterEvent)=>void; public unsubscribe(callback: (arg0: ButtonPushAfterEvent)=>void): void; private constructor();};
export class ILeverActionAfterEventSignal { public subscribe(callback: (arg0: LeverActionAfterEvent)=>void): (arg0: LeverActionAfterEvent)=>void; public unsubscribe(callback: (arg0: LeverActionAfterEvent)=>void): void; private constructor();};
export class IPlayerJoinAfterEventSignal { public subscribe(callback: (arg0: PlayerJoinAfterEvent)=>void): (arg0: PlayerJoinAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerJoinAfterEvent)=>void): void; private constructor();};
export class IPlayerLeaveAfterEventSignal { public subscribe(callback: (arg0: PlayerLeaveAfterEvent)=>void): (arg0: PlayerLeaveAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerLeaveAfterEvent)=>void): void; private constructor();};
export class IPlayerSpawnAfterEventSignal { public subscribe(callback: (arg0: PlayerSpawnAfterEvent)=>void): (arg0: PlayerSpawnAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerSpawnAfterEvent)=>void): void; private constructor();};
export class ItemCompleteUseAfterEvent { public readonly itemStack: ItemStack; public readonly source: Player; public readonly useDuration: number; private constructor();};
export class ItemCompleteUseAfterEventSignal { public subscribe(callback: (arg0: ItemCompleteUseAfterEvent)=>void): (arg0: ItemCompleteUseAfterEvent)=>void; public unsubscribe(callback: (arg0: ItemCompleteUseAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemComponent extends Component{ private constructor();};
export class ItemReleaseUseAfterEvent { public readonly itemStack?: ItemStack; public readonly source: Player; public readonly useDuration: number; private constructor();};
export class ItemReleaseUseAfterEventSignal { public subscribe(callback: (arg0: ItemReleaseUseAfterEvent)=>void): (arg0: ItemReleaseUseAfterEvent)=>void; public unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent)=>void): void; private constructor();};
export class ItemStack { public readonly amount: number; public readonly isStackable: boolean; public readonly keepOnDeath: boolean; public readonly lockMode: ItemLockMode; public readonly maxAmount: number; public readonly nameTag?: string; public readonly type: ItemType; public readonly typeId: string; public constructor(itemType: ItemType | string, amount?: number); public getComponent(componentId: string): (ItemComponent | undefined); public getComponents(): ItemComponent[]; public getLore(): string[]; public hasComponent(componentId: string): boolean; public isStackableWith(itemStack: ItemStack): boolean; public setLore(loreList?: string[]): void;};
export class ItemStartUseAfterEvent { public readonly itemStack: ItemStack; public readonly source: Player; public readonly useDuration: number; private constructor();};
export class ItemStartUseAfterEventSignal { public subscribe(callback: (arg0: ItemStartUseAfterEvent)=>void): (arg0: ItemStartUseAfterEvent)=>void; public unsubscribe(callback: (arg0: ItemStartUseAfterEvent)=>void): void; private constructor();};
export class ItemStartUseOnAfterEvent { public readonly block: Block; public readonly blockFace: Direction; public readonly itemStack?: ItemStack; public readonly source: Player; private constructor();};
export class ItemStartUseOnAfterEventSignal { public subscribe(callback: (arg0: ItemStartUseOnAfterEvent)=>void): (arg0: ItemStartUseOnAfterEvent)=>void; public unsubscribe(callback: (arg0: ItemStartUseOnAfterEvent)=>void): void; private constructor();};
export class ItemStopUseAfterEvent { public readonly itemStack?: ItemStack; public readonly source: Player; public readonly useDuration: number; private constructor();};
export class ItemStopUseAfterEventSignal { public subscribe(callback: (arg0: ItemStopUseAfterEvent)=>void): (arg0: ItemStopUseAfterEvent)=>void; public unsubscribe(callback: (arg0: ItemStopUseAfterEvent)=>void): void; private constructor();};
export class ItemStopUseOnAfterEvent { public readonly block: Block; public readonly itemStack?: ItemStack; public readonly source: Player; private constructor();};
export class ItemStopUseOnAfterEventSignal { public subscribe(callback: (arg0: ItemStopUseOnAfterEvent)=>void): (arg0: ItemStopUseOnAfterEvent)=>void; public unsubscribe(callback: (arg0: ItemStopUseOnAfterEvent)=>void): void; private constructor();};
export class ItemType { public readonly id: string; private constructor();};
export class ItemUseAfterEvent { public itemStack: ItemStack; public readonly source: Player; private constructor();};
export class ItemUseAfterEventSignal { public subscribe(callback: (arg0: ItemUseAfterEvent)=>void): (arg0: ItemUseAfterEvent)=>void; public unsubscribe(callback: (arg0: ItemUseAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemUseBeforeEvent extends ItemUseAfterEvent{ public cancel: boolean; private constructor();};
export class ItemUseBeforeEventSignal { public subscribe(callback: (arg0: ItemUseBeforeEvent)=>void): (arg0: ItemUseBeforeEvent)=>void; public unsubscribe(callback: (arg0: ItemUseBeforeEvent)=>void): void; private constructor();};
export class ItemUseOnAfterEvent { public readonly block: Block; public readonly blockFace: Direction; public readonly faceLocation: Vector3; public readonly itemStack: ItemStack; public readonly source: Player; private constructor();};
export class ItemUseOnAfterEventSignal { public subscribe(callback: (arg0: ItemUseOnAfterEvent)=>void): (arg0: ItemUseOnAfterEvent)=>void; public unsubscribe(callback: (arg0: ItemUseOnAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemUseOnBeforeEvent extends ItemUseOnAfterEvent{ public cancel: boolean; private constructor();};
export class ItemUseOnBeforeEventSignal { public subscribe(callback: (arg0: ItemUseOnBeforeEvent)=>void): (arg0: ItemUseOnBeforeEvent)=>void; public unsubscribe(callback: (arg0: ItemUseOnBeforeEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class LeverActionAfterEvent extends BlockEvent{ public readonly isPowered: boolean; public readonly player: Player; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class LeverActionAfterEventSignal extends ILeverActionAfterEventSignal{ private constructor();};
export class MinecraftDimensionTypes { public static readonly nether = "minecraft:nether"; public static readonly overworld = "minecraft:overworld"; public static readonly theEnd = "minecraft:the_end"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class Player extends Entity{ public readonly name: string; public readonly onScreenDisplay: ScreenDisplay; public getSpawnPoint(): (DimensionLocation | undefined); public playSound(soundId: string, soundOptions?: PlayerSoundOptions): void; public sendMessage(message: (RawMessage | string)[] | RawMessage | string): void; public setSpawnPoint(spawnPoint?: DimensionLocation): void; private constructor();};
export class PlayerJoinAfterEvent { public readonly playerId: string; public readonly playerName: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PlayerJoinAfterEventSignal extends IPlayerJoinAfterEventSignal{ private constructor();};
export class PlayerLeaveAfterEvent { public readonly playerId: string; public readonly playerName: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PlayerLeaveAfterEventSignal extends IPlayerLeaveAfterEventSignal{ private constructor();};
export class PlayerSpawnAfterEvent { public initialSpawn: boolean; public player: Player; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PlayerSpawnAfterEventSignal extends IPlayerSpawnAfterEventSignal{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PressurePlatePopAfterEvent extends BlockEvent{ public readonly previousRedstonePower: number; public readonly redstonePower: number; private constructor();};
export class PressurePlatePopAfterEventSignal { public subscribe(callback: (arg0: PressurePlatePopAfterEvent)=>void): (arg0: PressurePlatePopAfterEvent)=>void; public unsubscribe(callback: (arg0: PressurePlatePopAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PressurePlatePushAfterEvent extends BlockEvent{ public readonly previousRedstonePower: number; public readonly redstonePower: number; public readonly source: Entity; private constructor();};
export class PressurePlatePushAfterEventSignal { public subscribe(callback: (arg0: PressurePlatePushAfterEvent)=>void): (arg0: PressurePlatePushAfterEvent)=>void; public unsubscribe(callback: (arg0: PressurePlatePushAfterEvent)=>void): void; private constructor();};
export class Scoreboard { public addObjective(objectiveId: string, displayName?: string): ScoreboardObjective; public clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): (ScoreboardObjective | undefined); public getObjective(objectiveId: string): (ScoreboardObjective | undefined); public getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): (ScoreboardObjectiveDisplayOptions | undefined); public getObjectives(): ScoreboardObjective[]; public getParticipants(): ScoreboardIdentity[]; public removeObjective(objectiveId: ScoreboardObjective | string): boolean; public setObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId, objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions): (ScoreboardObjective | undefined); private constructor();};
export class ScoreboardIdentity { public readonly displayName: string; public readonly id: number; public readonly type: ScoreboardIdentityType; public getEntity(): (Entity | undefined); public isValid(): boolean; private constructor();};
export class ScoreboardObjective { public readonly displayName: string; public readonly id: string; public addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number; public getParticipants(): ScoreboardIdentity[]; public getScore(participant: Entity | ScoreboardIdentity | string): (number | undefined); public getScores(): ScoreboardScoreInfo[]; public hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean; public isValid(): boolean; public removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean; public setScore(participant: Entity | ScoreboardIdentity | string, score: number): void; private constructor();};
export class ScoreboardScoreInfo { public readonly participant: ScoreboardIdentity; public readonly score: number; private constructor();};
export class ScreenDisplay { public isValid(): boolean; public setActionBar(text: (RawMessage | string)[] | RawMessage | string): void; public setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void; public updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void; private constructor();};
export class ScriptEventCommandMessageAfterEvent { public readonly id: string; public readonly initiator?: Entity; public readonly message: string; public readonly sourceBlock?: Block; public readonly sourceEntity?: Entity; public readonly sourceType: ScriptEventSource; private constructor();};
export class ScriptEventCommandMessageAfterEventSignal { public subscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent)=>void, options?: ScriptEventMessageFilterOptions): (arg0: ScriptEventCommandMessageAfterEvent)=>void; public unsubscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent)=>void): void; private constructor();};
export class System { public readonly afterEvents: SystemAfterEvents; public readonly currentTick: number; public clearRun(runId: number): void; public run(callback: ()=>void): number; public runInterval(callback: ()=>void, tickInterval?: number): number; public runTimeout(callback: ()=>void, tickDelay?: number): number; private constructor();};
export class SystemAfterEvents { public readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class TargetBlockHitAfterEvent extends BlockEvent{ public readonly hitVector: Vector3; public readonly previousRedstonePower: number; public readonly redstonePower: number; public readonly source: Entity; private constructor();};
export class TargetBlockHitAfterEventSignal { public subscribe(callback: (arg0: TargetBlockHitAfterEvent)=>void): (arg0: TargetBlockHitAfterEvent)=>void; public unsubscribe(callback: (arg0: TargetBlockHitAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class TripWireTripAfterEvent extends BlockEvent{ public readonly isPowered: boolean; public readonly sources: Entity[]; private constructor();};
export class TripWireTripAfterEventSignal { public subscribe(callback: (arg0: TripWireTripAfterEvent)=>void): (arg0: TripWireTripAfterEvent)=>void; public unsubscribe(callback: (arg0: TripWireTripAfterEvent)=>void): void; private constructor();};
export class World { public readonly afterEvents: WorldAfterEvents; public readonly beforeEvents: WorldBeforeEvents; public readonly scoreboard: Scoreboard; public getAbsoluteTime(): number; public getAllPlayers(): Player[]; public getDay(): number; public getDefaultSpawnLocation(): Vector3; public getDimension(dimensionId: string): Dimension; public getPlayers(options?: EntityQueryOptions): Player[]; public getTimeOfDay(): number; public playMusic(trackId: string, musicOptions?: MusicOptions): void; public playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void; public queueMusic(trackId: string, musicOptions?: MusicOptions): void; public sendMessage(message: (RawMessage | string)[] | RawMessage | string): void; public setAbsoluteTime(absoluteTime: number): void; public setDefaultSpawnLocation(spawnLocation: Vector3): void; public setTimeOfDay(timeOfDay: number | TimeOfDay): void; public stopMusic(): void; private constructor();};
export class WorldAfterEvents { public readonly buttonPush: ButtonPushAfterEventSignal; public readonly entityDie: EntityDieAfterEventSignal; public readonly entityHealthChanged: EntityHealthChangedAfterEventSignal; public readonly entityHitBlock: EntityHitBlockAfterEventSignal; public readonly entityHitEntity: EntityHitEntityAfterEventSignal; public readonly entityHurt: EntityHurtAfterEventSignal; public readonly itemCompleteUse: ItemCompleteUseAfterEventSignal; public readonly itemReleaseUse: ItemReleaseUseAfterEventSignal; public readonly itemStartUse: ItemStartUseAfterEventSignal; public readonly itemStartUseOn: ItemStartUseOnAfterEventSignal; public readonly itemStopUse: ItemStopUseAfterEventSignal; public readonly itemStopUseOn: ItemStopUseOnAfterEventSignal; public readonly itemUse: ItemUseAfterEventSignal; public readonly itemUseOn: ItemUseOnAfterEventSignal; public readonly leverAction: LeverActionAfterEventSignal; public readonly playerJoin: PlayerJoinAfterEventSignal; public readonly playerLeave: PlayerLeaveAfterEventSignal; public readonly playerSpawn: PlayerSpawnAfterEventSignal; public readonly pressurePlatePop: PressurePlatePopAfterEventSignal; public readonly pressurePlatePush: PressurePlatePushAfterEventSignal; public readonly targetBlockHit: TargetBlockHitAfterEventSignal; public readonly tripWireTrip: TripWireTripAfterEventSignal; private constructor();};
export class WorldBeforeEvents { public readonly itemUse: ItemUseBeforeEventSignal; public readonly itemUseOn: ItemUseOnBeforeEventSignal; private constructor();};

// Constants & Objects - 2

export const system: System;
export const world: World;

// Functions - 0

// Errors - 5
export class CommandError extends Error{ private constructor();};
export class InvalidEntityError extends Error{ public readonly id: string; public readonly type: string; private constructor();};
export class LocationInUnloadedChunkError extends Error{ private constructor();};
export class LocationOutOfWorldBoundariesError extends Error{ private constructor();};
export class RawMessageError extends Error{ private constructor();};
