import * as _1e from '@minecraft/common';

// Enums - 18
export enum BlockPistonState { Expanded = "Expanded", Expanding = "Expanding", Retracted = "Retracted", Retracting = "Retracting"};
export enum Direction { Down = "Down", East = "East", North = "North", South = "South", Up = "Up", West = "West"};
export enum DisplaySlotId { BelowName = "BelowName", List = "List", Sidebar = "Sidebar"};
export enum DyeColor { Black = "Black", Blue = "Blue", Brown = "Brown", Cyan = "Cyan", Gray = "Gray", Green = "Green", LightBlue = "LightBlue", Lime = "Lime", Magenta = "Magenta", Orange = "Orange", Pink = "Pink", Purple = "Purple", Red = "Red", Silver = "Silver", White = "White", Yellow = "Yellow"};
export enum EasingType { InBack = "InBack", InBounce = "InBounce", InCirc = "InCirc", InCubic = "InCubic", InElastic = "InElastic", InExpo = "InExpo", InOutBack = "InOutBack", InOutBounce = "InOutBounce", InOutCirc = "InOutCirc", InOutCubic = "InOutCubic", InOutElastic = "InOutElastic", InOutExpo = "InOutExpo", InOutQuad = "InOutQuad", InOutQuart = "InOutQuart", InOutQuint = "InOutQuint", InOutSine = "InOutSine", InQuad = "InQuad", InQuart = "InQuart", InQuint = "InQuint", InSine = "InSine", Linear = "Linear", OutBack = "OutBack", OutBounce = "OutBounce", OutCirc = "OutCirc", OutCubic = "OutCubic", OutElastic = "OutElastic", OutExpo = "OutExpo", OutQuad = "OutQuad", OutQuart = "OutQuart", OutQuint = "OutQuint", OutSine = "OutSine", Spring = "Spring"};
export enum EntityDamageCause { anvil = "anvil", blockExplosion = "blockExplosion", campfire = "campfire", charging = "charging", contact = "contact", drowning = "drowning", entityAttack = "entityAttack", entityExplosion = "entityExplosion", fall = "fall", fallingBlock = "fallingBlock", fire = "fire", fireTick = "fireTick", fireworks = "fireworks", flyIntoWall = "flyIntoWall", freezing = "freezing", lava = "lava", lightning = "lightning", maceSmash = "maceSmash", magic = "magic", magma = "magma", none = "none", override = "override", piston = "piston", projectile = "projectile", ramAttack = "ramAttack", selfDestruct = "selfDestruct", sonicBoom = "sonicBoom", soulCampfire = "soulCampfire", stalactite = "stalactite", stalagmite = "stalagmite", starve = "starve", suffocation = "suffocation", suicide = "suicide", temperature = "temperature", thorns = "thorns", void = "void", wither = "wither"};
export enum EntityInitializationCause { Born = "Born", Event = "Event", Loaded = "Loaded", Spawned = "Spawned", Transformed = "Transformed"};
export enum EquipmentSlot { Chest = "Chest", Feet = "Feet", Head = "Head", Legs = "Legs", Mainhand = "Mainhand", Offhand = "Offhand"};
export enum FluidType { Lava = "Lava", Potion = "Potion", PowderSnow = "PowderSnow", Water = "Water"};
export enum GameMode { adventure = "adventure", creative = "creative", spectator = "spectator", survival = "survival"};
export enum ItemLockMode { inventory = "inventory", none = "none", slot = "slot"};
export enum MoonPhase { FirstQuarter = 2, FullMoon = 0, LastQuarter = 6, NewMoon = 4, WaningCrescent = 3, WaningGibbous = 1, WaxingCrescent = 5, WaxingGibbous = 7};
export enum ObjectiveSortOrder { Ascending = 0, Descending = 1};
export enum ScoreboardIdentityType { Entity = "Entity", FakePlayer = "FakePlayer", Player = "Player"};
export enum ScriptEventSource { Block = "Block", Entity = "Entity", NPCDialogue = "NPCDialogue", Server = "Server"};
export enum SignSide { Back = "Back", Front = "Front"};
export enum TimeOfDay { Day = 1000, Midnight = 18000, Night = 13000, Noon = 6000, Sunrise = 23000, Sunset = 12000};
export enum WeatherType { Clear = "Clear", Rain = "Rain", Thunder = "Thunder"};

// Interfaces - 45
export interface BlockEventOptions { blockTypes?: string[]; permutations?: BlockPermutation[]};
export interface BlockFilter { excludePermutations?: BlockPermutation[]; excludeTags?: string[]; excludeTypes?: string[]; includePermutations?: BlockPermutation[]; includeTags?: string[]; includeTypes?: string[]};
export interface BlockHitInformation { block: Block; face: Direction; faceLocation: Vector3};
export interface BlockRaycastHit { block: Block; face: Direction; faceLocation: Vector3};
export interface BlockRaycastOptions extends BlockFilter{ includeLiquidBlocks?: boolean; includePassableBlocks?: boolean; maxDistance?: number};
export interface CameraDefaultOptions { easeOptions: CameraEaseOptions};
export interface CameraEaseOptions { easeTime?: number; easeType?: EasingType};
export interface CameraFadeOptions { fadeColor?: RGB; fadeTime?: CameraFadeTimeOptions};
export interface CameraFadeTimeOptions { fadeInTime: number; fadeOutTime: number; holdTime: number};
export interface CameraFixedBoomOptions { entityOffset?: Vector3; viewOffset?: Vector2};
export interface CameraSetFacingOptions { easeOptions?: CameraEaseOptions; facingEntity: Entity; location?: Vector3};
export interface CameraSetLocationOptions { easeOptions?: CameraEaseOptions; location: Vector3};
export interface CameraSetPosOptions { easeOptions?: CameraEaseOptions; facingLocation: Vector3; location?: Vector3};
export interface CameraSetRotOptions { easeOptions?: CameraEaseOptions; location?: Vector3; rotation: Vector2};
export interface CameraTargetOptions { offsetFromTargetCenter?: Vector3; targetEntity: Entity};
export interface DefinitionModifier { addedComponentGroups: string[]; removedComponentGroups: string[]};
export interface DimensionLocation { dimension: Dimension; x: number; y: number; z: number};
export interface EntityApplyDamageByProjectileOptions { damagingEntity?: Entity; damagingProjectile: Entity};
export interface EntityApplyDamageOptions { cause: EntityDamageCause; damagingEntity?: Entity};
export interface EntityDamageSource { cause: EntityDamageCause; damagingEntity?: Entity; damagingProjectile?: Entity};
export interface EntityDataDrivenTriggerEventOptions { entities?: Entity[]; entityTypes?: string[]; eventTypes?: string[]};
export interface EntityEffectOptions { amplifier?: number; showParticles?: boolean};
export interface EntityEventOptions { entities?: Entity[]; entityTypes?: string[]};
export interface EntityFilter { excludeFamilies?: string[]; excludeGameModes?: GameMode[]; excludeNames?: string[]; excludeTags?: string[]; excludeTypes?: string[]; families?: string[]; gameMode?: GameMode; maxHorizontalRotation?: number; maxLevel?: number; maxVerticalRotation?: number; minHorizontalRotation?: number; minLevel?: number; minVerticalRotation?: number; name?: string; scoreOptions?: EntityQueryScoreOptions[]; tags?: string[]; type?: string};
export interface EntityHitInformation { entity?: Entity};
export interface EntityQueryOptions extends EntityFilter{ closest?: number; farthest?: number; location?: Vector3; maxDistance?: number; minDistance?: number};
export interface EntityQueryScoreOptions { exclude?: boolean; maxScore?: number; minScore?: number; objective?: string};
export interface EntityRaycastHit { distance: number; entity: Entity};
export interface EntityRaycastOptions extends EntityFilter{ maxDistance?: number};
export interface ExplosionOptions { allowUnderwater?: boolean; breaksBlocks?: boolean; causesFire?: boolean; source?: Entity};
export interface MusicOptions { fade?: number; loop?: boolean; volume?: number};
export interface PlayAnimationOptions { blendOutTime?: number; controller?: string; nextState?: string; players?: string[]; stopExpression?: string};
export interface PlayerSoundOptions { location?: Vector3; pitch?: number; volume?: number};
export interface RawMessage { rawtext?: RawMessage[]; score?: RawMessageScore; text?: string; translate?: string; with?: string[] | RawMessage};
export interface RawMessageScore { name?: string; objective?: string};
export interface RawText { rawtext?: RawMessage[]};
export interface RGB { blue: number; green: number; red: number};
export interface RGBA extends RGB{ alpha: number};
export interface ScoreboardObjectiveDisplayOptions { objective: ScoreboardObjective; sortOrder?: ObjectiveSortOrder};
export interface ScriptEventMessageFilterOptions { namespaces: string[]};
export interface TeleportOptions { checkForBlocks?: boolean; dimension?: Dimension; facingLocation?: Vector3; keepVelocity?: boolean; rotation?: Vector2};
export interface TitleDisplayOptions { fadeInDuration: number; fadeOutDuration: number; stayDuration: number; subtitle?: (RawMessage | string)[] | RawMessage | string};
export interface Vector2 { x: number; y: number};
export interface Vector3 { x: number; y: number; z: number};
export interface WorldSoundOptions { pitch?: number; volume?: number};

// Classes - 185
export class Block { public readonly dimension: Dimension; public readonly isAir: boolean; public readonly isLiquid: boolean; public readonly location: Vector3; public readonly permutation: BlockPermutation; public readonly x: number; public readonly y: number; public readonly z: number; public above(steps?: number): (Block | undefined); public below(steps?: number): (Block | undefined); public bottomCenter(): Vector3; public center(): Vector3; public east(steps?: number): (Block | undefined); public getComponent(componentId: string): (BlockComponent | undefined); public getTags(): string[]; public hasTag(tag: string): boolean; public isValid(): boolean; public north(steps?: number): (Block | undefined); public offset(offset: Vector3): (Block | undefined); public setPermutation(permutation: BlockPermutation): void; public south(steps?: number): (Block | undefined); public west(steps?: number): (Block | undefined); private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockComponent extends Component{ public readonly block: Block; private constructor();};
export class BlockEvent { public readonly block: Block; public readonly dimension: Dimension; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockInventoryComponent extends BlockComponent{ public static readonly componentId = "minecraft:inventory"; public readonly container?: Container; private constructor();};
export class BlockPermutation { public getAllStates(): Record<string,boolean | number | string>; public getState(stateName: string): (boolean | number | string | undefined); public matches(blockName: string, states?: Record<string,boolean | number | string>): boolean; public static resolve(blockName: string, states?: Record<string,boolean | number | string>): BlockPermutation; public withState(name: string, value: boolean | number | string): BlockPermutation; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockPistonComponent extends BlockComponent{ public static readonly componentId = "minecraft:piston"; public readonly isMoving: boolean; public readonly state: BlockPistonState; public getAttachedBlocks(): Block[]; public getAttachedBlocksLocations(): Vector3[]; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockSignComponent extends BlockComponent{ public static readonly componentId = "minecraft:sign"; public readonly isWaxed: boolean; public getRawText(side?: SignSide): (RawText | undefined); public getText(side?: SignSide): (string | undefined); public getTextDyeColor(side?: SignSide): (DyeColor | undefined); public setText(message: RawMessage | RawText | string, side?: SignSide): void; public setTextDyeColor(color?: DyeColor, side?: SignSide): void; public setWaxed(waxed: boolean): void; private constructor();};
export class BlockStates { public static get(stateName: string): (BlockStateType | undefined); public static getAll(): BlockStateType[]; private constructor();};
export class BlockStateType { public readonly id: string; public readonly validValues: (boolean | number | string)[]; private constructor();};
export class BlockType { private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ButtonPushAfterEvent extends BlockEvent{ public readonly source: Entity; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ButtonPushAfterEventSignal extends IButtonPushAfterEventSignal{ private constructor();};
export class Camera { public clear(): void; public fade(fadeCameraOptions?: CameraFadeOptions): void; public setCamera(cameraPreset: string, setOptions?: CameraDefaultOptions | CameraFixedBoomOptions | CameraSetFacingOptions | CameraSetLocationOptions | CameraSetPosOptions | CameraSetRotOptions | CameraTargetOptions): void; private constructor();};
export class CommandResult { public readonly successCount: number; private constructor();};
export class Component { public readonly typeId: string; public isValid(): boolean; private constructor();};
export class Container { public readonly emptySlotsCount: number; public readonly size: number; public addItem(itemStack: ItemStack): (ItemStack | undefined); public clearAll(): void; public getItem(slot: number): (ItemStack | undefined); public getSlot(slot: number): ContainerSlot; public isValid(): boolean; public moveItem(fromSlot: number, toSlot: number, toContainer: Container): void; public setItem(slot: number, itemStack?: ItemStack): void; public swapItems(slot: number, otherSlot: number, otherContainer: Container): void; public transferItem(fromSlot: number, toContainer: Container): (ItemStack | undefined); private constructor();};
export class ContainerSlot { public amount: number; public readonly isStackable: boolean; public keepOnDeath: boolean; public lockMode: ItemLockMode; public readonly maxAmount: number; public nameTag?: string; public readonly type: ItemType; public readonly typeId: string; public clearDynamicProperties(): void; public getCanDestroy(): string[]; public getCanPlaceOn(): string[]; public getDynamicProperty(identifier: string): (boolean | number | number | string | Vector3 | undefined); public getDynamicPropertyIds(): string[]; public getDynamicPropertyTotalByteCount(): number; public getItem(): (ItemStack | undefined); public getLore(): string[]; public getTags(): string[]; public hasItem(): boolean; public hasTag(tag: string): boolean; public isStackableWith(itemStack: ItemStack): boolean; public isValid(): boolean; public setCanDestroy(blockIdentifiers?: string[]): void; public setCanPlaceOn(blockIdentifiers?: string[]): void; public setDynamicProperty(identifier: string, value?: boolean | number | number | string | Vector3): void; public setItem(itemStack?: ItemStack): void; public setLore(loreList?: string[]): void; private constructor();};
export class DataDrivenEntityTriggerAfterEvent { public readonly entity: Entity; public readonly eventId: string; public getModifiers(): DefinitionModifier[]; private constructor();};
export class DataDrivenEntityTriggerAfterEventSignal { public subscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent)=>void, options?: EntityDataDrivenTriggerEventOptions): (arg0: DataDrivenEntityTriggerAfterEvent)=>void; public unsubscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent)=>void): void; private constructor();};
export class Dimension { public readonly heightRange: _1e.NumberRange; public readonly id: string; public createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): boolean; public getBlock(location: Vector3): (Block | undefined); public getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): (BlockRaycastHit | undefined); public getEntities(options?: EntityQueryOptions): Entity[]; public getEntitiesAtBlockLocation(location: Vector3): Entity[]; public getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[]; public getPlayers(options?: EntityQueryOptions): Player[]; public runCommand(commandString: string): CommandResult; public runCommandAsync(commandString: string): Promise<CommandResult>; public setWeather(weatherType: WeatherType, duration?: number): void; public spawnEntity(identifier: string, location: Vector3): Entity; public spawnItem(itemStack: ItemStack, location: Vector3): Entity; public spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void; private constructor();};
export class DimensionType { public readonly typeId: string; private constructor();};
export class DimensionTypes { public static get(dimensionTypeId: string): (DimensionType | undefined); public static getAll(): DimensionType[]; private constructor();};
export class Effect { public readonly amplifier: number; public readonly displayName: string; public readonly duration: number; public readonly typeId: string; public isValid(): boolean; private constructor();};
export class EffectAddAfterEvent { public readonly effect: Effect; public readonly entity: Entity; private constructor();};
export class EffectAddAfterEventSignal { public subscribe(callback: (arg0: EffectAddAfterEvent)=>void, options?: EntityEventOptions): (arg0: EffectAddAfterEvent)=>void; public unsubscribe(callback: (arg0: EffectAddAfterEvent)=>void): void; private constructor();};
export class EffectAddBeforeEvent { public cancel: boolean; public duration: number; public readonly effectType: string; public readonly entity: Entity; private constructor();};
export class EffectAddBeforeEventSignal { public subscribe(callback: (arg0: EffectAddBeforeEvent)=>void): (arg0: EffectAddBeforeEvent)=>void; public unsubscribe(callback: (arg0: EffectAddBeforeEvent)=>void): void; private constructor();};
export class EffectType { public getName(): string; private constructor();};
export class EffectTypes { public static get(identifier: string): (EffectType | undefined); public static getAll(): EffectType[]; private constructor();};
export class Entity { public readonly dimension: Dimension; public readonly id: string; public readonly isClimbing: boolean; public readonly isFalling: boolean; public readonly isInWater: boolean; public readonly isOnGround: boolean; public readonly isSleeping: boolean; public isSneaking: boolean; public readonly isSprinting: boolean; public readonly isSwimming: boolean; public readonly location: Vector3; public nameTag: string; public readonly scoreboardIdentity?: ScoreboardIdentity; public readonly typeId: string; public addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): (Effect | undefined); public addTag(tag: string): boolean; public applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean; public applyImpulse(vector: Vector3): void; public applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void; public clearDynamicProperties(): void; public clearVelocity(): void; public extinguishFire(useEffects?: boolean): boolean; public getBlockFromViewDirection(options?: BlockRaycastOptions): (BlockRaycastHit | undefined); public getComponent(componentId: string): (EntityComponent | undefined); public getComponents(): EntityComponent[]; public getDynamicProperty(identifier: string): (boolean | number | number | string | Vector3 | undefined); public getDynamicPropertyIds(): string[]; public getDynamicPropertyTotalByteCount(): number; public getEffect(effectType: EffectType | string): (Effect | undefined); public getEffects(): Effect[]; public getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[]; public getHeadLocation(): Vector3; public getProperty(identifier: string): (boolean | number | string | undefined); public getRotation(): Vector2; public getTags(): string[]; public getVelocity(): Vector3; public getViewDirection(): Vector3; public hasComponent(componentId: string): boolean; public hasTag(tag: string): boolean; public isValid(): boolean; public kill(): boolean; public matches(options: EntityQueryOptions): boolean; public playAnimation(animationName: string, options?: PlayAnimationOptions): void; public remove(): void; public removeEffect(effectType: EffectType | string): boolean; public removeTag(tag: string): boolean; public resetProperty(identifier: string): (boolean | number | string); public runCommand(commandString: string): CommandResult; public runCommandAsync(commandString: string): Promise<CommandResult>; public setDynamicProperty(identifier: string, value?: boolean | number | number | string | Vector3): void; public setOnFire(seconds: number, useEffects?: boolean): boolean; public setProperty(identifier: string, value: boolean | number | string): void; public setRotation(rotation: Vector2): void; public teleport(location: Vector3, teleportOptions?: TeleportOptions): void; public triggerEvent(eventName: string): void; public tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean; private constructor();};
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
export class EntityEquippableComponent extends EntityComponent{ public static readonly componentId = "minecraft:equippable"; public getEquipment(equipmentSlot: EquipmentSlot): (ItemStack | undefined); public getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot; public setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean; private constructor();};
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
export class EntityLoadAfterEvent { public entity: Entity; private constructor();};
export class EntityLoadAfterEventSignal { public subscribe(callback: (arg0: EntityLoadAfterEvent)=>void): (arg0: EntityLoadAfterEvent)=>void; public unsubscribe(callback: (arg0: EntityLoadAfterEvent)=>void): void; private constructor();};
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
export class EntityOnFireComponent extends EntityComponent{ public static readonly componentId = "minecraft:onfire"; public readonly onFireTicksRemaining: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityPushThroughComponent extends EntityComponent{ public static readonly componentId = "minecraft:push_through"; public value: number; private constructor();};
export class EntityRemoveAfterEvent { public readonly removedEntityId: string; public readonly typeId: string; private constructor();};
export class EntityRemoveAfterEventSignal { public subscribe(callback: (arg0: EntityRemoveAfterEvent)=>void, options?: EntityEventOptions): (arg0: EntityRemoveAfterEvent)=>void; public unsubscribe(callback: (arg0: EntityRemoveAfterEvent)=>void): void; private constructor();};
export class EntityRemoveBeforeEvent { public readonly removedEntity: Entity; private constructor();};
export class EntityRemoveBeforeEventSignal { public subscribe(callback: (arg0: EntityRemoveBeforeEvent)=>void): (arg0: EntityRemoveBeforeEvent)=>void; public unsubscribe(callback: (arg0: EntityRemoveBeforeEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityScaleComponent extends EntityComponent{ public static readonly componentId = "minecraft:scale"; public value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntitySkinIdComponent extends EntityComponent{ public static readonly componentId = "minecraft:skin_id"; public value: number; private constructor();};
export class EntitySpawnAfterEvent { public readonly cause: EntityInitializationCause; public entity: Entity; private constructor();};
export class EntitySpawnAfterEventSignal { public subscribe(callback: (arg0: EntitySpawnAfterEvent)=>void): (arg0: EntitySpawnAfterEvent)=>void; public unsubscribe(callback: (arg0: EntitySpawnAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityVariantComponent extends EntityComponent{ public static readonly componentId = "minecraft:variant"; public readonly value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityWantsJockeyComponent extends EntityComponent{ public static readonly componentId = "minecraft:wants_jockey"; private constructor();};
export class ExplosionAfterEvent { public readonly dimension: Dimension; public readonly source?: Entity; public getImpactedBlocks(): Block[]; private constructor();};
export class ExplosionAfterEventSignal { public subscribe(callback: (arg0: ExplosionAfterEvent)=>void): (arg0: ExplosionAfterEvent)=>void; public unsubscribe(callback: (arg0: ExplosionAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ExplosionBeforeEvent extends ExplosionAfterEvent{ public cancel: boolean; public setImpactedBlocks(blocks: Block[]): void; private constructor();};
export class ExplosionBeforeEventSignal { public subscribe(callback: (arg0: ExplosionBeforeEvent)=>void): (arg0: ExplosionBeforeEvent)=>void; public unsubscribe(callback: (arg0: ExplosionBeforeEvent)=>void): void; private constructor();};
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
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemDurabilityComponent extends ItemComponent{ public static readonly componentId = "minecraft:durability"; public damage: number; public readonly maxDurability: number; public getDamageChance(unbreakingEnchantmentLevel?: number): number; public getDamageChanceRange(): _1e.NumberRange; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemFoodComponent extends ItemComponent{ public static readonly componentId = "minecraft:food"; public readonly canAlwaysEat: boolean; public readonly nutrition: number; public readonly saturationModifier: number; public readonly usingConvertsTo: string; private constructor();};
export class ItemReleaseUseAfterEvent { public readonly itemStack?: ItemStack; public readonly source: Player; public readonly useDuration: number; private constructor();};
export class ItemReleaseUseAfterEventSignal { public subscribe(callback: (arg0: ItemReleaseUseAfterEvent)=>void): (arg0: ItemReleaseUseAfterEvent)=>void; public unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent)=>void): void; private constructor();};
export class ItemStack { public amount: number; public readonly isStackable: boolean; public keepOnDeath: boolean; public lockMode: ItemLockMode; public readonly maxAmount: number; public nameTag?: string; public readonly type: ItemType; public readonly typeId: string; public clearDynamicProperties(): void; public clone(): ItemStack; public constructor(itemType: ItemType | string, amount?: number); public getCanDestroy(): string[]; public getCanPlaceOn(): string[]; public getComponent(componentId: string): (ItemComponent | undefined); public getComponents(): ItemComponent[]; public getDynamicProperty(identifier: string): (boolean | number | number | string | Vector3 | undefined); public getDynamicPropertyIds(): string[]; public getDynamicPropertyTotalByteCount(): number; public getLore(): string[]; public getTags(): string[]; public hasComponent(componentId: string): boolean; public hasTag(tag: string): boolean; public isStackableWith(itemStack: ItemStack): boolean; public setCanDestroy(blockIdentifiers?: string[]): void; public setCanPlaceOn(blockIdentifiers?: string[]): void; public setDynamicProperty(identifier: string, value?: boolean | number | number | string | Vector3): void; public setLore(loreList?: string[]): void;};
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
export class MolangVariableMap { public constructor(); public setColorRGB(variableName: string, color: RGB): void; public setColorRGBA(variableName: string, color: RGBA): void; public setFloat(variableName: string, number: number): void; public setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void; public setVector3(variableName: string, vector: Vector3): void;};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PistonActivateAfterEvent extends BlockEvent{ public readonly isExpanding: boolean; public readonly piston: BlockPistonComponent; private constructor();};
export class PistonActivateAfterEventSignal { public subscribe(callback: (arg0: PistonActivateAfterEvent)=>void): (arg0: PistonActivateAfterEvent)=>void; public unsubscribe(callback: (arg0: PistonActivateAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class Player extends Entity{ public readonly camera: Camera; public readonly isEmoting: boolean; public readonly isFlying: boolean; public readonly isGliding: boolean; public readonly isJumping: boolean; public readonly level: number; public readonly name: string; public readonly onScreenDisplay: ScreenDisplay; public readonly totalXpNeededForNextLevel: number; public readonly xpEarnedAtCurrentLevel: number; public addExperience(amount: number): number; public addLevels(amount: number): number; public getSpawnPoint(): (DimensionLocation | undefined); public getTotalXp(): number; public playSound(soundId: string, soundOptions?: PlayerSoundOptions): void; public resetLevel(): void; public sendMessage(message: (RawMessage | string)[] | RawMessage | string): void; public setSpawnPoint(spawnPoint?: DimensionLocation): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PlayerBreakBlockAfterEvent extends BlockEvent{ public readonly brokenBlockPermutation: BlockPermutation; public readonly itemStackAfterBreak?: ItemStack; public readonly itemStackBeforeBreak?: ItemStack; public readonly player: Player; private constructor();};
export class PlayerBreakBlockAfterEventSignal { public subscribe(callback: (arg0: PlayerBreakBlockAfterEvent)=>void, options?: BlockEventOptions): (arg0: PlayerBreakBlockAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PlayerBreakBlockBeforeEvent extends BlockEvent{ public cancel: boolean; public itemStack?: ItemStack; public readonly player: Player; private constructor();};
export class PlayerBreakBlockBeforeEventSignal { public subscribe(callback: (arg0: PlayerBreakBlockBeforeEvent)=>void, options?: BlockEventOptions): (arg0: PlayerBreakBlockBeforeEvent)=>void; public unsubscribe(callback: (arg0: PlayerBreakBlockBeforeEvent)=>void): void; private constructor();};
export class PlayerDimensionChangeAfterEvent { public readonly fromDimension: Dimension; public readonly fromLocation: Vector3; public readonly player: Player; public readonly toDimension: Dimension; public readonly toLocation: Vector3; private constructor();};
export class PlayerDimensionChangeAfterEventSignal { public subscribe(callback: (arg0: PlayerDimensionChangeAfterEvent)=>void): (arg0: PlayerDimensionChangeAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerDimensionChangeAfterEvent)=>void): void; private constructor();};
export class PlayerInteractWithBlockAfterEvent { public readonly block: Block; public readonly blockFace: Direction; public readonly faceLocation: Vector3; public readonly itemStack?: ItemStack; public readonly player: Player; private constructor();};
export class PlayerInteractWithBlockAfterEventSignal { public subscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent)=>void): (arg0: PlayerInteractWithBlockAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent)=>void): void; private constructor();};
export class PlayerInteractWithBlockBeforeEvent { public readonly block: Block; public readonly blockFace: Direction; public cancel: boolean; public readonly faceLocation: Vector3; public readonly itemStack?: ItemStack; public readonly player: Player; private constructor();};
export class PlayerInteractWithBlockBeforeEventSignal { public subscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent)=>void): (arg0: PlayerInteractWithBlockBeforeEvent)=>void; public unsubscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent)=>void): void; private constructor();};
export class PlayerInteractWithEntityAfterEvent { public readonly itemStack?: ItemStack; public readonly player: Player; public readonly target: Entity; private constructor();};
export class PlayerInteractWithEntityAfterEventSignal { public subscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent)=>void): (arg0: PlayerInteractWithEntityAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent)=>void): void; private constructor();};
export class PlayerInteractWithEntityBeforeEvent { public cancel: boolean; public readonly itemStack?: ItemStack; public readonly player: Player; public readonly target: Entity; private constructor();};
export class PlayerInteractWithEntityBeforeEventSignal { public subscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent)=>void): (arg0: PlayerInteractWithEntityBeforeEvent)=>void; public unsubscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent)=>void): void; private constructor();};
export class PlayerJoinAfterEvent { public readonly playerId: string; public readonly playerName: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PlayerJoinAfterEventSignal extends IPlayerJoinAfterEventSignal{ private constructor();};
export class PlayerLeaveAfterEvent { public readonly playerId: string; public readonly playerName: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PlayerLeaveAfterEventSignal extends IPlayerLeaveAfterEventSignal{ private constructor();};
export class PlayerLeaveBeforeEvent { public readonly player: Player; private constructor();};
export class PlayerLeaveBeforeEventSignal { public subscribe(callback: (arg0: PlayerLeaveBeforeEvent)=>void): (arg0: PlayerLeaveBeforeEvent)=>void; public unsubscribe(callback: (arg0: PlayerLeaveBeforeEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PlayerPlaceBlockAfterEvent extends BlockEvent{ public readonly player: Player; private constructor();};
export class PlayerPlaceBlockAfterEventSignal { public subscribe(callback: (arg0: PlayerPlaceBlockAfterEvent)=>void, options?: BlockEventOptions): (arg0: PlayerPlaceBlockAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerPlaceBlockAfterEvent)=>void): void; private constructor();};
export class PlayerSpawnAfterEvent { public initialSpawn: boolean; public player: Player; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PlayerSpawnAfterEventSignal extends IPlayerSpawnAfterEventSignal{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PressurePlatePopAfterEvent extends BlockEvent{ public readonly previousRedstonePower: number; public readonly redstonePower: number; private constructor();};
export class PressurePlatePopAfterEventSignal { public subscribe(callback: (arg0: PressurePlatePopAfterEvent)=>void): (arg0: PressurePlatePopAfterEvent)=>void; public unsubscribe(callback: (arg0: PressurePlatePopAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PressurePlatePushAfterEvent extends BlockEvent{ public readonly previousRedstonePower: number; public readonly redstonePower: number; public readonly source: Entity; private constructor();};
export class PressurePlatePushAfterEventSignal { public subscribe(callback: (arg0: PressurePlatePushAfterEvent)=>void): (arg0: PressurePlatePushAfterEvent)=>void; public unsubscribe(callback: (arg0: PressurePlatePushAfterEvent)=>void): void; private constructor();};
export class ProjectileHitBlockAfterEvent { public readonly dimension: Dimension; public readonly hitVector: Vector3; public readonly location: Vector3; public readonly projectile: Entity; public readonly source?: Entity; public getBlockHit(): BlockHitInformation; private constructor();};
export class ProjectileHitBlockAfterEventSignal { public subscribe(callback: (arg0: ProjectileHitBlockAfterEvent)=>void): (arg0: ProjectileHitBlockAfterEvent)=>void; public unsubscribe(callback: (arg0: ProjectileHitBlockAfterEvent)=>void): void; private constructor();};
export class ProjectileHitEntityAfterEvent { public readonly dimension: Dimension; public readonly hitVector: Vector3; public readonly location: Vector3; public readonly projectile: Entity; public readonly source?: Entity; public getEntityHit(): EntityHitInformation; private constructor();};
export class ProjectileHitEntityAfterEventSignal { public subscribe(callback: (arg0: ProjectileHitEntityAfterEvent)=>void): (arg0: ProjectileHitEntityAfterEvent)=>void; public unsubscribe(callback: (arg0: ProjectileHitEntityAfterEvent)=>void): void; private constructor();};
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
export class WeatherChangeAfterEvent { public readonly dimension: string; public readonly newWeather: WeatherType; public readonly previousWeather: WeatherType; private constructor();};
export class WeatherChangeAfterEventSignal { public subscribe(callback: (arg0: WeatherChangeAfterEvent)=>void): (arg0: WeatherChangeAfterEvent)=>void; public unsubscribe(callback: (arg0: WeatherChangeAfterEvent)=>void): void; private constructor();};
export class World { public readonly afterEvents: WorldAfterEvents; public readonly beforeEvents: WorldBeforeEvents; public readonly scoreboard: Scoreboard; public clearDynamicProperties(): void; public getAbsoluteTime(): number; public getAllPlayers(): Player[]; public getDay(): number; public getDefaultSpawnLocation(): Vector3; public getDimension(dimensionId: string): Dimension; public getDynamicProperty(identifier: string): (boolean | number | number | string | Vector3 | undefined); public getDynamicPropertyIds(): string[]; public getDynamicPropertyTotalByteCount(): number; public getEntity(id: string): (Entity | undefined); public getMoonPhase(): MoonPhase; public getPlayers(options?: EntityQueryOptions): Player[]; public getTimeOfDay(): number; public playMusic(trackId: string, musicOptions?: MusicOptions): void; public playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void; public queueMusic(trackId: string, musicOptions?: MusicOptions): void; public sendMessage(message: (RawMessage | string)[] | RawMessage | string): void; public setAbsoluteTime(absoluteTime: number): void; public setDefaultSpawnLocation(spawnLocation: Vector3): void; public setDynamicProperty(identifier: string, value?: boolean | number | number | string | Vector3): void; public setTimeOfDay(timeOfDay: number | TimeOfDay): void; public stopMusic(): void; private constructor();};
export class WorldAfterEvents { public readonly buttonPush: ButtonPushAfterEventSignal; public readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal; public readonly effectAdd: EffectAddAfterEventSignal; public readonly entityDie: EntityDieAfterEventSignal; public readonly entityHealthChanged: EntityHealthChangedAfterEventSignal; public readonly entityHitBlock: EntityHitBlockAfterEventSignal; public readonly entityHitEntity: EntityHitEntityAfterEventSignal; public readonly entityHurt: EntityHurtAfterEventSignal; public readonly entityLoad: EntityLoadAfterEventSignal; public readonly entityRemove: EntityRemoveAfterEventSignal; public readonly entitySpawn: EntitySpawnAfterEventSignal; public readonly explosion: ExplosionAfterEventSignal; public readonly itemCompleteUse: ItemCompleteUseAfterEventSignal; public readonly itemReleaseUse: ItemReleaseUseAfterEventSignal; public readonly itemStartUse: ItemStartUseAfterEventSignal; public readonly itemStartUseOn: ItemStartUseOnAfterEventSignal; public readonly itemStopUse: ItemStopUseAfterEventSignal; public readonly itemStopUseOn: ItemStopUseOnAfterEventSignal; public readonly itemUse: ItemUseAfterEventSignal; public readonly itemUseOn: ItemUseOnAfterEventSignal; public readonly leverAction: LeverActionAfterEventSignal; public readonly pistonActivate: PistonActivateAfterEventSignal; public readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal; public readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal; public readonly playerJoin: PlayerJoinAfterEventSignal; public readonly playerLeave: PlayerLeaveAfterEventSignal; public readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal; public readonly playerSpawn: PlayerSpawnAfterEventSignal; public readonly pressurePlatePop: PressurePlatePopAfterEventSignal; public readonly pressurePlatePush: PressurePlatePushAfterEventSignal; public readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal; public readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal; public readonly targetBlockHit: TargetBlockHitAfterEventSignal; public readonly tripWireTrip: TripWireTripAfterEventSignal; public readonly weatherChange: WeatherChangeAfterEventSignal; private constructor();};
export class WorldBeforeEvents { public readonly effectAdd: EffectAddBeforeEventSignal; public readonly entityRemove: EntityRemoveBeforeEventSignal; public readonly explosion: ExplosionBeforeEventSignal; public readonly itemUse: ItemUseBeforeEventSignal; public readonly itemUseOn: ItemUseOnBeforeEventSignal; public readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal; public readonly playerLeave: PlayerLeaveBeforeEventSignal; private constructor();};

// Constants & Objects - 4
export const MoonPhaseCount = 8;
export const TicksPerSecond = 20;

export const system: System;
export const world: World;

// Functions - 0

// Errors - 6
export class CommandError extends Error{ private constructor();};
export class InvalidContainerSlotError extends Error{ private constructor();};
export class InvalidEntityError extends Error{ public readonly id: string; public readonly type: string; private constructor();};
export class LocationInUnloadedChunkError extends Error{ private constructor();};
export class LocationOutOfWorldBoundariesError extends Error{ private constructor();};
export class RawMessageError extends Error{ private constructor();};
