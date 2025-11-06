
// Enums - 4
export enum Direction { down = 0, east = 5, north = 2, south = 3, up = 1, west = 4};
export enum EntityDamageCause { anvil = "anvil", blockExplosion = "block_explosion", campfire = "campfire", charging = "charging", contact = "contact", dehydration = "dehydration", drowning = "drowning", entityAttack = "entity_attack", entityExplosion = "entity_explosion", fall = "fall", fallingBlock = "falling_block", fire = "fire", fireTick = "fire_tick", fireworks = "fireworks", flyIntoWall = "fly_into_wall", freezing = "freezing", lava = "lava", lightning = "lightning", maceSmash = "mace_smash", magic = "magic", magma = "magma", none = "none", override = "override", piston = "piston", projectile = "projectile", ramAttack = "ram_attack", selfDestruct = "self_destruct", sonicBoom = "sonic_boom", soulCampfire = "soul_campfire", stalactite = "stalactite", stalagmite = "stalagmite", starve = "starve", suffocation = "suffocation", temperature = "temperature", thorns = "thorns", void = "void", wither = "wither"};
export enum GameMode { adventure = 2, creative = 1, spectator = 6, survival = 0};
export enum ScoreboardIdentityType { entity = 2, fakePlayer = 3, player = 1};

// Interfaces - 0

// Classes - 171
//@ts-ignore extending for classes with private constructor is possible with native API
export class BeforeChatEvent extends ChatEvent{ public cancel: boolean; public targets: Player[]; private constructor();};
export class BeforeChatEventSignal { public subscribe(callback: (arg0: BeforeChatEvent)=>void): (arg0: BeforeChatEvent)=>void; public unsubscribe(callback: (arg0: BeforeChatEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BeforeItemUseEvent extends ItemUseEvent{ public cancel: boolean; private constructor();};
export class BeforeItemUseEventSignal { public subscribe(callback: (arg0: BeforeItemUseEvent)=>void): (arg0: BeforeItemUseEvent)=>void; public unsubscribe(callback: (arg0: BeforeItemUseEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BeforeItemUseOnEvent extends ItemUseOnEvent{ public cancel: boolean; private constructor();};
export class BeforeItemUseOnEventSignal { public subscribe(callback: (arg0: BeforeItemUseOnEvent)=>void): (arg0: BeforeItemUseOnEvent)=>void; public unsubscribe(callback: (arg0: BeforeItemUseOnEvent)=>void): void; private constructor();};
export class Block { public readonly dimension: Dimension; public readonly id: string; public readonly isEmpty: boolean; public readonly location: BlockLocation; public readonly permutation: BlockPermutation; public readonly type: BlockType; public readonly x: number; public readonly y: number; public readonly z: number; public getComponent(componentName: string): (BlockComponent | undefined); public getTags(): string[]; public hasTag(tag: string): boolean; public setPermutation(permutation: BlockPermutation): void; public setType(blockType: BlockType): void; private constructor();};
export class BlockAreaSize { public x: number; public y: number; public z: number; public constructor(x: number, y: number, z: number); public equals(other: BlockAreaSize): boolean;};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockComponent extends Component{ public readonly location: BlockLocation; private constructor();};
export class BlockEvent { public readonly block: Block; public readonly dimension: Dimension; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockInventoryComponent extends BlockComponent{ public readonly container?: BlockInventoryComponentContainer; private constructor();};
export class BlockInventoryComponentContainer { public readonly emptySlotsCount: number; public readonly size: number; public addItem(itemStack: ItemStack): void; public getItem(slot: number): (ItemStack | undefined); public setItem(slot: number, itemStack: ItemStack): void; public swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean; public transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockLavaContainerComponent extends BlockLiquidContainerComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockLiquidContainerComponent extends BlockComponent{ public fillLevel: number; private constructor();};
export class BlockLocation { public x: number; public y: number; public z: number; public above(): BlockLocation; public blocksBetween(other: BlockLocation): BlockLocation[]; public constructor(x: number, y: number, z: number); public equals(other: BlockLocation): boolean; public offset(x: number, y: number, z: number): BlockLocation;};
export class BlockPermutation { public readonly type: BlockType; public getAllProperties(): (IBlockProperty | undefined)[]; public getProperty(propertyName: string): (IBlockProperty | undefined); public getTags(): string[]; public hasTag(tag: string): boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockPistonComponent extends BlockComponent{ public readonly attachedBlocks: BlockLocation[]; public readonly isExpanded: boolean; public readonly isExpanding: boolean; public readonly isMoving: boolean; public readonly isRetracted: boolean; public readonly isRetracting: boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockPotionContainerComponent extends BlockLiquidContainerComponent{ public setPotionType(item: ItemStack): void; private constructor();};
export class BlockRaycastOptions { public includeLiquidBlocks?: boolean; public includePassableBlocks?: boolean; public maxDistance?: number; public constructor();};
export class BlockRecordPlayerComponent { public clearRecord(): void; public isPlaying(): boolean; public setRecord(recordItemType: ItemType): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockSnowContainerComponent extends BlockLiquidContainerComponent{ private constructor();};
export class BlockType { public readonly id: string; public createDefaultBlockPermutation(): BlockPermutation; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockWaterContainerComponent extends BlockLiquidContainerComponent{ public addDye(itemType: ItemType): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BoolBlockProperty extends IBlockProperty{ public readonly validValues: boolean[]; public value: boolean; private constructor();};
export class ChatEvent { public message: string; public sender: Player; public sendToTargets: boolean; public targets: Player[]; private constructor();};
export class Color { public alpha: number; public blue: number; public green: number; public red: number; public constructor(red: number, green: number, blue: number, alpha: number);};
export class Component { public readonly id: string; private constructor();};
export class Container { public readonly emptySlotsCount: number; public readonly size: number; public addItem(itemStack: ItemStack): void; public getItem(slot: number): (ItemStack | undefined); public setItem(slot: number, itemStack: ItemStack): void; public swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean; public transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean; private constructor();};
export class DataDrivenEntityTriggerEvent { public readonly entity: Entity; public readonly id: string; public readonly modifiers: DefinitionModifier[]; private constructor();};
export class DataDrivenEntityTriggerEventSignal { public subscribe(callback: (arg0: DataDrivenEntityTriggerEvent)=>void, options?: EntityDataDrivenTriggerEventOptions): (arg0: DataDrivenEntityTriggerEvent)=>void; public unsubscribe(callback: (arg0: DataDrivenEntityTriggerEvent)=>void): void; private constructor();};
export class DefinitionModifier { public readonly componentGroupsToAdd: string[]; public readonly componentGroupsToRemove: string[]; public triggers: Trigger[]; public constructor();};
export class Dimension { public readonly id: string; public createExplosion(location: Location, radius: number, explosionOptions: ExplosionOptions): void; public getBlock(location: BlockLocation): Block; public getBlockFromRay(location: Location, direction: Vector, options?: BlockRaycastOptions): (Block | undefined); public getEntities(options?: EntityQueryOptions): EntityIterator; public getEntitiesAtBlockLocation(location: BlockLocation): Entity[]; public getEntitiesFromRay(location: Location, direction: Vector, options?: EntityRaycastOptions): Entity[]; public getPlayers(options?: EntityQueryOptions): PlayerIterator; public isEmpty(location: BlockLocation): boolean; public runCommand(commandString: string): unknown; public spawnEntity(identifier: string, location: BlockLocation | Location): Entity; public spawnItem(item: ItemStack, location: BlockLocation | Location): Entity; public spawnParticle(effectName: string, location: Location, molangVariables: MolangVariableMap): void; private constructor();};
export class DynamicPropertiesDefinition { public constructor(); public defineBoolean(identifier: string, defaultValue?: boolean): DynamicPropertiesDefinition; public defineNumber(identifier: string, defaultValue?: number): DynamicPropertiesDefinition; public defineString(identifier: string, maxLength: number, defaultValue?: string): DynamicPropertiesDefinition;};
export class Effect { public readonly amplifier: number; public readonly displayName: string; public readonly duration: number; private constructor();};
export class EffectType { public getName(): string; private constructor();};
export class Entity { public readonly dimension: Dimension; public readonly headLocation: Location; public readonly id: string; public isSneaking: boolean; public readonly location: Location; public nameTag: string; public readonly rotation: XYRotation; public target: Entity; public readonly velocity: Vector; public readonly viewVector: Vector; public addEffect(effectType: EffectType, duration: number, amplifier?: number, showParticles?: boolean): void; public addTag(tag: string): boolean; public getBlockFromViewVector(options?: BlockRaycastOptions): (Block | undefined); public getComponent(componentId: string): (IEntityComponent | undefined); public getComponents(): IEntityComponent[]; public getDynamicProperty(identifier: string): (boolean | number | number | Location | string | undefined); public getEffect(effectType: EffectType): (Effect | undefined); public getEntitiesFromViewVector(options?: EntityRaycastOptions): Entity[]; public getTags(): string[]; public hasComponent(componentId: string): boolean; public hasTag(tag: string): boolean; public kill(): void; public removeDynamicProperty(identifier: string): boolean; public removeTag(tag: string): boolean; public runCommand(commandString: string): unknown; public setDynamicProperty(identifier: string, value: boolean | number | number | Location | string): void; public setRotation(degreesX: number, degreesY: number): void; public setVelocity(velocity: Vector): void; public teleport(location: Location, dimension: Dimension, xRotation: number, yRotation: number, keepVelocity?: boolean): void; public teleportFacing(location: Location, dimension: Dimension, facingLocation: Location, keepVelocity?: boolean): void; public triggerEvent(eventName: string): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityAddRiderComponent extends IEntityComponent{ public readonly entityType: string; public readonly spawnEvent: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityAgeableComponent extends IEntityComponent{ public readonly dropItems: string[]; public readonly duration: number; public readonly feedItems: EntityDefinitionFeedItem[]; public readonly growUp: Trigger; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityAttributeComponent extends IEntityComponent{ public readonly current: number; public readonly value: number; public resetToDefaultValue(): void; public resetToMaxValue(): void; public resetToMinValue(): void; public setCurrent(value: number): boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityBaseMovementComponent extends IEntityComponent{ public readonly maxTurn: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityCanClimbComponent extends IEntityComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityCanFlyComponent extends IEntityComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityCanPowerJumpComponent extends IEntityComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityColorComponent extends IEntityComponent{ public value: number; private constructor();};
export class EntityCreateEvent { public entity: Entity; private constructor();};
export class EntityCreateEventSignal { public subscribe(callback: (arg0: EntityCreateEvent)=>void): (arg0: EntityCreateEvent)=>void; public unsubscribe(callback: (arg0: EntityCreateEvent)=>void): void; private constructor();};
export class EntityDataDrivenTriggerEventOptions { public entities?: Entity[]; public entityTypes?: string[]; public eventTypes?: string[]; public constructor();};
export class EntityDefinitionFeedItem { public readonly growth: number; public readonly item: string; private constructor();};
export class EntityEventOptions { public entities?: Entity[]; public entityTypes?: string[]; public constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityFireImmuneComponent extends IEntityComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityFloatsInLiquidComponent extends IEntityComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityFlyingSpeedComponent extends IEntityComponent{ public value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityFrictionModifierComponent extends IEntityComponent{ public value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityGroundOffsetComponent extends IEntityComponent{ public value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityHealableComponent extends IEntityComponent{ public readonly forceUse: boolean; public readonly items: FeedItem[]; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityHealthComponent extends EntityAttributeComponent{ private constructor();};
export class EntityHitEvent { public readonly entity: Entity; public readonly hitBlock?: Block; public readonly hitEntity?: Entity; private constructor();};
export class EntityHitEventSignal { public subscribe(callback: (arg0: EntityHitEvent)=>void, options?: EntityEventOptions): (arg0: EntityHitEvent)=>void; public unsubscribe(callback: (arg0: EntityHitEvent)=>void): void; private constructor();};
export class EntityHurtEvent { public readonly cause: string; public readonly damage: number; public readonly damagingEntity?: Entity; public readonly hurtEntity: Entity; public readonly projectile?: Entity; private constructor();};
export class EntityHurtEventSignal { public subscribe(callback: (arg0: EntityHurtEvent)=>void, options?: EntityEventOptions): (arg0: EntityHurtEvent)=>void; public unsubscribe(callback: (arg0: EntityHurtEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityInventoryComponent extends IEntityComponent{ public readonly additionalSlotsPerStrength: number; public readonly canBeSiphonedFrom: boolean; public readonly container: InventoryComponentContainer; public readonly containerType: string; public readonly inventorySize: number; public readonly private: boolean; public readonly restrictToOwner: boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsBabyComponent extends IEntityComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsChargedComponent extends IEntityComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsChestedComponent extends IEntityComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsDyableComponent extends IEntityComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsHiddenWhenInvisibleComponent extends IEntityComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsIgnitedComponent extends IEntityComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsIllagerCaptainComponent extends IEntityComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsSaddledComponent extends IEntityComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsShakingComponent extends IEntityComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsShearedComponent extends IEntityComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsStackableComponent extends IEntityComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsStunnedComponent extends IEntityComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityIsTamedComponent extends IEntityComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityItemComponent extends IEntityComponent{ public readonly itemStack: ItemStack; private constructor();};
export class EntityIterator { public next(): IteratorResult<Entity>; public [Symbol.iterator](): this; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityLavaMovementComponent extends EntityAttributeComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMarkVariantComponent extends IEntityComponent{ public value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementAmphibiousComponent extends IEntityComponent{ public readonly maxTurn: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementBasicComponent extends IEntityComponent{ public readonly maxTurn: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementComponent extends EntityAttributeComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementFlyComponent extends EntityBaseMovementComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementGenericComponent extends EntityBaseMovementComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementGlideComponent extends EntityBaseMovementComponent{ public readonly speedWhenTurning: number; public readonly startSpeed: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementHoverComponent extends EntityBaseMovementComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementJumpComponent extends EntityBaseMovementComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementSkipComponent extends EntityBaseMovementComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementSwayComponent extends EntityBaseMovementComponent{ public readonly swayAmplitude: number; public readonly swayFrequency: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityNavigationClimbComponent extends EntityNavigationComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityNavigationComponent extends IEntityComponent{ public readonly avoidDamageBlocks: boolean; public readonly avoidPortals: boolean; public readonly avoidSun: boolean; public readonly avoidWater: boolean; public readonly canBreach: boolean; public readonly canBreakDoors: boolean; public readonly canFloat: boolean; public readonly canJump: boolean; public readonly canOpenDoors: boolean; public readonly canOpenIronDoors: boolean; public readonly canPassDoors: boolean; public readonly canPathFromAir: boolean; public readonly canPathOverLava: boolean; public readonly canPathOverWater: boolean; public readonly canSink: boolean; public readonly canSwim: boolean; public readonly canWalk: boolean; public readonly canWalkInLava: boolean; public readonly isAmphibious: boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityNavigationFloatComponent extends EntityNavigationComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityNavigationFlyComponent extends EntityNavigationComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityNavigationGenericComponent extends EntityNavigationComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityNavigationHoverComponent extends EntityNavigationComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityNavigationWalkComponent extends EntityNavigationComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityPushThroughComponent extends IEntityComponent{ public value: number; private constructor();};
export class EntityQueryOptions { public closest?: number; public excludeFamilies?: string[]; public excludeGameModes?: GameMode[]; public excludeNames?: string[]; public excludeTags?: string[]; public excludeTypes?: string[]; public families?: string[]; public farthest?: number; public gameMode?: GameMode; public location?: Location; public maxDistance?: number; public maxHorizontalRotation?: number; public maxLevel?: number; public maxVerticalRotation?: number; public minDistance?: number; public minHorizontalRotation?: number; public minLevel?: number; public minVerticalRotation?: number; public name?: string; public scoreOptions?: EntityQueryScoreOptions[]; public tags?: string[]; public type?: string; public volume?: BlockAreaSize; public constructor();};
export class EntityQueryScoreOptions { public exclude?: boolean; public maxScore?: number; public minScore?: number; public objective?: string; public constructor();};
export class EntityRaycastOptions { public maxDistance?: number; public constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityRideableComponent extends IEntityComponent{ public readonly controllingSeat: number; public readonly crouchingSkipInteract: boolean; public readonly familyTypes: string[]; public readonly interactText: string; public readonly pullInEntities: boolean; public readonly riderCanInteract: boolean; public readonly seatCount: number; public readonly seats: Seat[]; public addRider(rider: Entity): boolean; public ejectRider(rider: Entity): void; public ejectRiders(): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityScaleComponent extends IEntityComponent{ public value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntitySkinIdComponent extends IEntityComponent{ public value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityStrengthComponent extends IEntityComponent{ public readonly max: number; public readonly value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityTameableComponent extends IEntityComponent{ public readonly probability: number; public readonly tameItems: string[]; public tame(): boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityTameMountComponent extends IEntityComponent{ public tame(showParticles: boolean): void; private constructor();};
export class EntityType { public readonly id: string; private constructor();};
export class EntityTypeIterator { public next(): IteratorResult<EntityType>; public [Symbol.iterator](): this; private constructor();};
export class EntityTypes { public static get(identifier: string): (EntityType | undefined); public static getAll(): EntityTypeIterator; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityUnderwaterMovementComponent extends EntityAttributeComponent{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityVariantComponent extends IEntityComponent{ public readonly value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityWantsJockeyComponent extends IEntityComponent{ private constructor();};
export class Events { public readonly beforeChat: BeforeChatEventSignal; public readonly beforeItemUse: BeforeItemUseEventSignal; public readonly beforeItemUseOn: BeforeItemUseOnEventSignal; public readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerEventSignal; public readonly entityCreate: EntityCreateEventSignal; public readonly entityHit: EntityHitEventSignal; public readonly entityHurt: EntityHurtEventSignal; public readonly itemCompleteCharge: ItemCompleteChargeEventSignal; public readonly itemReleaseCharge: ItemReleaseChargeEventSignal; public readonly itemStartCharge: ItemStartChargeEventSignal; public readonly itemStopCharge: ItemStopChargeEventSignal; public readonly itemUseOn: ItemUseOnEventSignal; public readonly playerJoin: PlayerJoinEventSignal; public readonly playerLeave: PlayerLeaveEventSignal; public readonly tick: TickEventSignal; public readonly weatherChange: WeatherChangeEventSignal; public readonly worldInitialize: WorldInitializeEventSignal; private constructor();};
export class ExplosionOptions { public allowUnderwater?: boolean; public breaksBlocks?: boolean; public causesFire?: boolean; public source?: Entity; public constructor();};
export class FeedItem { public readonly effects: FeedItemEffect[]; public readonly healAmount: number; public readonly item: string; private constructor();};
export class FeedItemEffect { public readonly amplifier: number; public readonly chance: number; public readonly duration: number; public readonly name: string; private constructor();};
export class FluidContainer { public static readonly maxFillLevel = 6; public static readonly minFillLevel = 0; private constructor();};
export class IBlockProperty { public readonly name: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class IEntityComponent extends Component{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class IntBlockProperty extends IBlockProperty{ public readonly validValues: number[]; public value: number; private constructor();};
export class InventoryComponentContainer { public readonly emptySlotsCount: number; public readonly size: number; public addItem(itemStack: ItemStack): void; public getItem(slot: number): (ItemStack | undefined); public setItem(slot: number, itemStack: ItemStack): void; public swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean; public transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean; private constructor();};
export class ItemCompleteChargeEvent { public readonly itemStack: ItemStack; public readonly source: Player; public readonly useDuration: number; private constructor();};
export class ItemCompleteChargeEventSignal { public subscribe(callback: (arg0: ItemCompleteChargeEvent)=>void): (arg0: ItemCompleteChargeEvent)=>void; public unsubscribe(callback: (arg0: ItemCompleteChargeEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemComponent extends Component{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemCooldownComponent extends ItemComponent{ public readonly cooldownCategory: string; public readonly cooldownTicks: number; public startCooldown(player: Player): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemDurabilityComponent extends ItemComponent{ public damage: number; public readonly damageRange: NumberRange; public readonly maxDurability: number; public getDamageChance(unbreakingEnchantmentLevel?: number): number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemFoodComponent extends ItemComponent{ public readonly canAlwaysEat: boolean; public readonly nutrition: number; public readonly saturationModifier: number; public readonly usingConvertsTo: string; private constructor();};
export class ItemReleaseChargeEvent { public readonly itemStack?: ItemStack; public readonly source: Player; public readonly useDuration: number; private constructor();};
export class ItemReleaseChargeEventSignal { public subscribe(callback: (arg0: ItemReleaseChargeEvent)=>void): (arg0: ItemReleaseChargeEvent)=>void; public unsubscribe(callback: (arg0: ItemReleaseChargeEvent)=>void): void; private constructor();};
export class Items { public static get(itemId: string): (ItemType | undefined); private constructor();};
export class ItemStack { public amount: number; public data: number; public readonly id: string; public nameTag?: string; public constructor(itemType: ItemType | string, amount?: number, data?: number); public getComponent(componentId: string): (ItemComponent | undefined); public getComponents(): ItemComponent[]; public getLore(): string[]; public hasComponent(componentId: string): boolean; public setLore(loreList?: string[]): void;};
export class ItemStartChargeEvent { public readonly itemStack: ItemStack; public readonly source: Player; public readonly useDuration: number; private constructor();};
export class ItemStartChargeEventSignal { public subscribe(callback: (arg0: ItemStartChargeEvent)=>void): (arg0: ItemStartChargeEvent)=>void; public unsubscribe(callback: (arg0: ItemStartChargeEvent)=>void): void; private constructor();};
export class ItemStopChargeEvent { public readonly itemStack?: ItemStack; public readonly source: Player; public readonly useDuration: number; private constructor();};
export class ItemStopChargeEventSignal { public subscribe(callback: (arg0: ItemStopChargeEvent)=>void): (arg0: ItemStopChargeEvent)=>void; public unsubscribe(callback: (arg0: ItemStopChargeEvent)=>void): void; private constructor();};
export class ItemType { public readonly id: string; private constructor();};
export class ItemUseEvent { public item: ItemStack; public readonly source: Player; private constructor();};
export class ItemUseOnEvent { public readonly blockFace: Direction; public readonly blockLocation: BlockLocation; public item: ItemStack; public readonly source: Player; private constructor();};
export class ItemUseOnEventSignal { public subscribe(callback: (arg0: ItemUseOnEvent)=>void): (arg0: ItemUseOnEvent)=>void; public unsubscribe(callback: (arg0: ItemUseOnEvent)=>void): void; private constructor();};
export class Location { public x: number; public y: number; public z: number; public constructor(x: number, y: number, z: number); public equals(other: Location): boolean; public isNear(other: Location, epsilon: number): boolean;};
export class MinecraftBlockTypes { public static readonly air: BlockType; public static readonly barrier: BlockType; public static get(typeName: string): (BlockType | undefined); public static getAllBlockTypes(): BlockType[]; private constructor();};
export class MinecraftDimensionTypes { public static readonly nether = "minecraft:nether"; public static readonly overworld = "minecraft:overworld"; public static readonly theEnd = "minecraft:the_end"; private constructor();};
export class MinecraftEffectTypes { public static readonly healthBoost: EffectType; public static readonly jumpBoost: EffectType; public static readonly levitation: EffectType; public static readonly regeneration: EffectType; public static readonly saturation: EffectType; public static readonly slowFalling: EffectType; public static readonly slowness: EffectType; public static readonly speed: EffectType; private constructor();};
export class MinecraftItemTypes { public static readonly air: ItemType; private constructor();};
export class MolangVariableMap { public constructor(); public setColorRGB(variableName: string, color: Color): void; public setColorRGBA(variableName: string, color: Color): void; public setSpeedAndDirection(variableName: string, speed: number, direction: Vector): MolangVariableMap; public setVector3(variableName: string, vector: Vector): MolangVariableMap;};
export class MusicOptions { public fade?: number; public loop?: boolean; public volume?: number; public constructor();};
export class NumberRange { public max: number; public min: number; public next(): number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class Player extends Entity{ public readonly name: string; public selectedSlot: number; public getItemCooldown(cooldownCategory: string): number; public playSound(soundId: string, soundOptions?: SoundOptions): void; public postClientMessage(id: string, value: string): void; public startItemCooldown(cooldownCategory: string, tickDuration: number): void; private constructor();};
export class PlayerInventoryComponentContainer { public readonly emptySlotsCount: number; public readonly size: number; public addItem(itemStack: ItemStack): void; public getItem(slot: number): (ItemStack | undefined); public setItem(slot: number, itemStack: ItemStack): void; public swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean; public transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean; private constructor();};
export class PlayerIterator { public next(): IteratorResult<Player>; public [Symbol.iterator](): this; private constructor();};
export class PlayerJoinEvent { public player: Player; private constructor();};
export class PlayerJoinEventSignal { public subscribe(callback: (arg0: PlayerJoinEvent)=>void): (arg0: PlayerJoinEvent)=>void; public unsubscribe(callback: (arg0: PlayerJoinEvent)=>void): void; private constructor();};
export class PlayerLeaveEvent { public readonly playerName: string; private constructor();};
export class PlayerLeaveEventSignal { public subscribe(callback: (arg0: PlayerLeaveEvent)=>void): (arg0: PlayerLeaveEvent)=>void; public unsubscribe(callback: (arg0: PlayerLeaveEvent)=>void): void; private constructor();};
export class PropertyRegistry { public registerEntityTypeDynamicProperties(propertiesDefinition: DynamicPropertiesDefinition, entityTypeOrId: EntityType | string): void; public registerWorldDynamicProperties(propertiesDefinition: DynamicPropertiesDefinition): void; private constructor();};
export class Scoreboard { public getObjective(objectiveId: string): (ScoreboardObjective | undefined); public getObjectives(): ScoreboardObjective[]; public getParticipants(): ScoreboardIdentity[]; private constructor();};
export class ScoreboardIdentity { public readonly displayName: string; public readonly id: number; public readonly type: ScoreboardIdentityType; public getEntity(): (Entity | undefined); private constructor();};
export class ScoreboardObjective { public readonly displayName: string; public readonly id: string; public getParticipants(): ScoreboardIdentity[]; public getScore(participant: Entity | ScoreboardIdentity | string): (number | undefined); public getScores(): ScoreboardScoreInfo[]; private constructor();};
export class ScoreboardScoreInfo { public readonly participant: ScoreboardIdentity; public readonly score: number; private constructor();};
export class Seat { public readonly lockRiderRotation: number; public readonly maxRiderCount: number; public readonly minRiderCount: number; public readonly position: Location; private constructor();};
export class SoundOptions { public location?: Location; public pitch?: number; public volume?: number; public constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class StringBlockProperty extends IBlockProperty{ public readonly validValues: string[]; public value: string; private constructor();};
export class TickEvent { public readonly currentTick: number; public readonly deltaTime: number; private constructor();};
export class TickEventSignal { public subscribe(callback: (arg0: TickEvent)=>void): (arg0: TickEvent)=>void; public unsubscribe(callback: (arg0: TickEvent)=>void): void; private constructor();};
export class Trigger { public eventName: string; public constructor(eventName: string);};
export class Vector { public static readonly back: Vector; public static readonly down: Vector; public static readonly forward: Vector; public static readonly left: Vector; public static readonly one: Vector; public static readonly right: Vector; public static readonly up: Vector; public static readonly zero: Vector; public readonly x: number; public readonly y: number; public readonly z: number; public static add(a: Vector, b: Vector): Vector; public constructor(x: number, y: number, z: number); public static cross(a: Vector, b: Vector): Vector; public static distance(a: Vector, b: Vector): number; public static divide(a: Vector, b: number | Vector): Vector; public equals(other: Vector): boolean; public length(): number; public static lerp(a: Vector, b: Vector, t: number): Vector; public static max(a: Vector, b: Vector): Vector; public static min(a: Vector, b: Vector): Vector; public static multiply(a: Vector, b: number | Vector): Vector; public normalized(): Vector; public static slerp(a: Vector, b: Vector, t: number): Vector; public static subtract(a: Vector, b: Vector): Vector;};
export class WeatherChangeEvent { public readonly dimension: string; public readonly lightning: boolean; public readonly raining: boolean; private constructor();};
export class WeatherChangeEventSignal { public subscribe(callback: (arg0: WeatherChangeEvent)=>void): (arg0: WeatherChangeEvent)=>void; public unsubscribe(callback: (arg0: WeatherChangeEvent)=>void): void; private constructor();};
export class World { public readonly events: Events; public readonly scoreboard: Scoreboard; public broadcastClientMessage(id: string, value: string): void; public getDimension(dimensionId: string): Dimension; public getDynamicProperty(identifier: string): (boolean | number | number | Location | string | undefined); public getPlayers(options?: EntityQueryOptions): PlayerIterator; public playMusic(trackId: string, musicOptions?: MusicOptions): void; public playSound(soundID: string, soundOptions?: SoundOptions): void; public queueMusic(trackId: string, musicOptions?: MusicOptions): void; public removeDynamicProperty(identifier: string): boolean; public setDynamicProperty(identifier: string, value: boolean | number | number | Location | string): void; public stopMusic(): void; private constructor();};
export class WorldInitializeEvent { public readonly propertyRegistry: PropertyRegistry; private constructor();};
export class WorldInitializeEventSignal { public subscribe(callback: (arg0: WorldInitializeEvent)=>void): (arg0: WorldInitializeEvent)=>void; public unsubscribe(callback: (arg0: WorldInitializeEvent)=>void): void; private constructor();};
export class XYRotation { public x: number; public y: number; private constructor();};

// Constants & Objects - 2
export const TicksPerSecond = 20;

export const world: World;

// Functions - 0

// Errors - 0
