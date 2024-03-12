import * as _00 from '@minecraft/common';
export enum Direction {down = 0, east = 5, north = 2, south = 3, up = 1, west = 4}
export enum EntityDamageCause {anvil = "anvil", blockExplosion = "block_explosion", campfire = "campfire", charging = "charging", contact = "contact", drowning = "drowning", entityAttack = "entity_attack", entityExplosion = "entity_explosion", fall = "fall", fallingBlock = "falling_block", fire = "fire", fireTick = "fire_tick", fireworks = "fireworks", flyIntoWall = "fly_into_wall", freezing = "freezing", lava = "lava", lightning = "lightning", magic = "magic", magma = "magma", none = "none", override = "override", piston = "piston", projectile = "projectile", ramAttack = "ram_attack", selfDestruct = "self_destruct", sonicBoom = "sonic_boom", soulCampfire = "soul_campfire", stalactite = "stalactite", stalagmite = "stalagmite", starve = "starve", suffocation = "suffocation", temperature = "temperature", thorns = "thorns", void = "void", wither = "wither"}
export enum GameMode {adventure = 2, creative = 1, spectator = 6, survival = 0}
export enum ScoreboardIdentityType {entity = 2, fakePlayer = 3, player = 1}
//@ts-ignore allow class inheritance for native classes
export class BeforeChatEvent extends ChatEvent{ private constructor(); cancel: boolean; targets: Player[]}
export class BeforeChatEventSignal { private constructor(); subscribe(callback: (arg0: BeforeChatEvent)=>undefined): (arg0: BeforeChatEvent)=>undefined; unsubscribe(callback: (arg0: BeforeChatEvent)=>undefined): void}
//@ts-ignore allow class inheritance for native classes
export class BeforeItemUseEvent extends ItemUseEvent{ private constructor(); cancel: boolean}
export class BeforeItemUseEventSignal { private constructor(); subscribe(callback: (arg0: BeforeItemUseEvent)=>undefined): (arg0: BeforeItemUseEvent)=>undefined; unsubscribe(callback: (arg0: BeforeItemUseEvent)=>undefined): void}
//@ts-ignore allow class inheritance for native classes
export class BeforeItemUseOnEvent extends ItemUseOnEvent{ private constructor(); cancel: boolean}
export class BeforeItemUseOnEventSignal { private constructor(); subscribe(callback: (arg0: BeforeItemUseOnEvent)=>undefined): (arg0: BeforeItemUseOnEvent)=>undefined; unsubscribe(callback: (arg0: BeforeItemUseOnEvent)=>undefined): void}
export class Block { private constructor(); readonly dimension: Dimension; readonly id: string; readonly isEmpty: boolean; isWaterlogged: boolean; readonly location: BlockLocation; readonly permutation: BlockPermutation; readonly 'type': BlockType; readonly x: number; readonly y: number; readonly z: number; getComponent(componentName: string): BlockComponent; getTags(): string[]; hasTag(tag: string): boolean; setPermutation(permutation: BlockPermutation): void; setType(blockType: BlockType): void}
export class BlockAreaSize { constructor(x: number, y: number, z: number); x: number; y: number; z: number; equals(other: BlockAreaSize): boolean}
//@ts-ignore allow class inheritance for native classes
export class BlockComponent extends Component{ private constructor(); readonly location: BlockLocation}
export class BlockEvent { private constructor(); readonly block: Block; readonly dimension: Dimension}
//@ts-ignore allow class inheritance for native classes
export class BlockInventoryComponent extends BlockComponent{ private constructor(); readonly container?: BlockInventoryComponentContainer}
export class BlockInventoryComponentContainer { private constructor(); readonly emptySlotsCount: number; readonly size: number; addItem(itemStack: ItemStack): void; getItem(slot: number): ItemStack; setItem(slot: number, itemStack: ItemStack): void; swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean; transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean}
//@ts-ignore allow class inheritance for native classes
export class BlockLavaContainerComponent extends BlockLiquidContainerComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class BlockLiquidContainerComponent extends BlockComponent{ private constructor(); fillLevel: number}
export class BlockLocation { constructor(x: number, y: number, z: number); x: number; y: number; z: number; above(): BlockLocation; blocksBetween(other: BlockLocation): BlockLocation[]; equals(other: BlockLocation): boolean; offset(x: number, y: number, z: number): BlockLocation}
export class BlockPermutation { private constructor(); readonly 'type': BlockType; clone(): BlockPermutation; getAllProperties(): IBlockProperty[]; getProperty(propertyName: string): IBlockProperty; getTags(): string[]; hasTag(tag: string): boolean}
//@ts-ignore allow class inheritance for native classes
export class BlockPistonComponent extends BlockComponent{ private constructor(); readonly attachedBlocks: BlockLocation[]; readonly isExpanded: boolean; readonly isExpanding: boolean; readonly isMoving: boolean; readonly isRetracted: boolean; readonly isRetracting: boolean}
//@ts-ignore allow class inheritance for native classes
export class BlockPotionContainerComponent extends BlockLiquidContainerComponent{ private constructor(); setPotionType(item: ItemStack): void}
export class BlockRaycastOptions { constructor(); includeLiquidBlocks?: boolean; includePassableBlocks?: boolean; maxDistance?: number}
export class BlockRecordPlayerComponent { private constructor(); clearRecord(): void; isPlaying(): boolean; setRecord(recordItemType: ItemType): void}
//@ts-ignore allow class inheritance for native classes
export class BlockSnowContainerComponent extends BlockLiquidContainerComponent{ private constructor()}
export class BlockType { private constructor(); readonly canBeWaterlogged: boolean; readonly id: string; createDefaultBlockPermutation(): BlockPermutation}
//@ts-ignore allow class inheritance for native classes
export class BlockWaterContainerComponent extends BlockLiquidContainerComponent{ private constructor(); addDye(itemType: ItemType): void}
//@ts-ignore allow class inheritance for native classes
export class BoolBlockProperty extends IBlockProperty{ private constructor(); readonly validValues: boolean[]; value: boolean}
export class ChatEvent { private constructor(); message: string; sender: Player; sendToTargets: boolean; targets: Player[]}
export class Color { constructor(red: number, green: number, blue: number, alpha: number); alpha: number; blue: number; green: number; red: number}
export class Component { private constructor(); readonly id: string}
export class Container { private constructor(); readonly emptySlotsCount: number; readonly size: number; addItem(itemStack: ItemStack): void; getItem(slot: number): ItemStack; setItem(slot: number, itemStack: ItemStack): void; swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean; transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean}
export class DataDrivenEntityTriggerEvent { private constructor(); readonly entity: Entity; readonly id: string; readonly modifiers: DefinitionModifier[]}
export class DataDrivenEntityTriggerEventSignal { private constructor(); subscribe(callback: (arg0: DataDrivenEntityTriggerEvent)=>undefined, options?: EntityDataDrivenTriggerEventOptions): (arg0: DataDrivenEntityTriggerEvent)=>undefined; unsubscribe(callback: (arg0: DataDrivenEntityTriggerEvent)=>undefined): void}
export class DefinitionModifier { constructor(); readonly componentGroupsToAdd: string[]; readonly componentGroupsToRemove: string[]; triggers: Trigger[]}
export class Dimension { private constructor(); readonly id: string; createExplosion(location: Location, radius: number, explosionOptions: ExplosionOptions): void; getBlock(location: BlockLocation): Block; getBlockFromRay(location: Location, direction: Vector, options?: BlockRaycastOptions): Block; getEntities(options?: EntityQueryOptions): EntityIterator; getEntitiesAtBlockLocation(location: BlockLocation): Entity[]; getEntitiesFromRay(location: Location, direction: Vector, options?: EntityRaycastOptions): Entity[]; getPlayers(options?: EntityQueryOptions): PlayerIterator; isEmpty(location: BlockLocation): boolean; runCommand(commandString: string): any; spawnEntity(identifier: string, location: BlockLocation | Location): Entity; spawnItem(item: ItemStack, location: BlockLocation | Location): Entity; spawnParticle(effectName: string, location: Location, molangVariables: MolangVariableMap): void}
export class DynamicPropertiesDefinition { constructor(); defineBoolean(identifier: string, defaultValue?: boolean): DynamicPropertiesDefinition; defineNumber(identifier: string, defaultValue?: number): DynamicPropertiesDefinition; defineString(identifier: string, maxLength: number, defaultValue?: string): DynamicPropertiesDefinition}
export class Effect { private constructor(); readonly amplifier: number; readonly displayName: string; readonly duration: number}
export class EffectType { private constructor(); getName(): string}
export class Entity { private constructor(); readonly dimension: Dimension; readonly headLocation: Location; readonly id: string; isSneaking: boolean; readonly location: Location; nameTag: string; readonly rotation: XYRotation; target: Entity; readonly velocity: Vector; readonly viewVector: Vector; addEffect(effectType: EffectType, duration: number, amplifier: number, showParticles?: boolean): void; addTag(tag: string): boolean; getBlockFromViewVector(options?: BlockRaycastOptions): Block; getComponent(componentId: string): IEntityComponent; getComponents(): IEntityComponent[]; getDynamicProperty(identifier: string): boolean | number | number | Location | string; getEffect(effectType: EffectType): Effect; getEntitiesFromViewVector(options?: EntityRaycastOptions): Entity[]; getTags(): string[]; hasComponent(componentId: string): boolean; hasTag(tag: string): boolean; kill(): void; removeDynamicProperty(identifier: string): boolean; removeTag(tag: string): boolean; runCommand(commandString: string): any; setDynamicProperty(identifier: string, value: boolean | number | number | Location | string): void; setRotation(degreesX: number, degreesY: number): void; setVelocity(velocity: Vector): void; teleport(location: Location, dimension: Dimension, xRotation: number, yRotation: number, keepVelocity: boolean): void; teleportFacing(location: Location, dimension: Dimension, facingLocation: Location, keepVelocity: boolean): void; triggerEvent(eventName: string): void}
//@ts-ignore allow class inheritance for native classes
export class EntityAddRiderComponent extends IEntityComponent{ private constructor(); readonly entityType: string; readonly spawnEvent: string}
//@ts-ignore allow class inheritance for native classes
export class EntityAgeableComponent extends IEntityComponent{ private constructor(); readonly dropItems: string[]; readonly duration: number; readonly feedItems: EntityDefinitionFeedItem[]; readonly growUp: Trigger}
//@ts-ignore allow class inheritance for native classes
export class EntityAttributeComponent extends IEntityComponent{ private constructor(); readonly current: number; readonly value: number; resetToDefaultValue(): void; resetToMaxValue(): void; resetToMinValue(): void; setCurrent(value: number): boolean}
//@ts-ignore allow class inheritance for native classes
export class EntityBaseMovementComponent extends IEntityComponent{ private constructor(); readonly maxTurn: number}
//@ts-ignore allow class inheritance for native classes
export class EntityBreathableComponent extends IEntityComponent{ private constructor(); readonly breatheBlocks: BlockPermutation[]; readonly breathesAir: boolean; readonly breathesLava: boolean; readonly breathesSolids: boolean; readonly breathesWater: boolean; readonly generatesBubbles: boolean; readonly inhaleTime: number; readonly nonBreatheBlocks: BlockPermutation[]; readonly suffocateTime: number; readonly totalSupply: number; setAirSupply(value: number): void}
//@ts-ignore allow class inheritance for native classes
export class EntityCanClimbComponent extends IEntityComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityCanFlyComponent extends IEntityComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityCanPowerJumpComponent extends IEntityComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityColorComponent extends IEntityComponent{ private constructor(); value: number}
export class EntityCreateEvent { private constructor(); entity: Entity}
export class EntityCreateEventSignal { private constructor(); subscribe(callback: (arg0: EntityCreateEvent)=>undefined): (arg0: EntityCreateEvent)=>undefined; unsubscribe(callback: (arg0: EntityCreateEvent)=>undefined): void}
export class EntityDataDrivenTriggerEventOptions { constructor(); entities?: Entity[]; entityTypes?: string[]; eventTypes?: string[]}
export class EntityDefinitionFeedItem { private constructor(); readonly growth: number; readonly item: string}
export class EntityEventOptions { constructor(); entities?: Entity[]; entityTypes?: string[]}
//@ts-ignore allow class inheritance for native classes
export class EntityFireImmuneComponent extends IEntityComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityFloatsInLiquidComponent extends IEntityComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityFlyingSpeedComponent extends IEntityComponent{ private constructor(); value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityFrictionModifierComponent extends IEntityComponent{ private constructor(); value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityGroundOffsetComponent extends IEntityComponent{ private constructor(); value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityHealableComponent extends IEntityComponent{ private constructor(); readonly filters: FilterGroup; readonly forceUse: boolean; readonly items: FeedItem[]}
//@ts-ignore allow class inheritance for native classes
export class EntityHealthComponent extends EntityAttributeComponent{ private constructor()}
export class EntityHitEvent { private constructor(); readonly entity: Entity; readonly hitBlock?: Block; readonly hitEntity?: Entity}
export class EntityHitEventSignal { private constructor(); subscribe(callback: (arg0: EntityHitEvent)=>undefined, options?: EntityEventOptions): (arg0: EntityHitEvent)=>undefined; unsubscribe(callback: (arg0: EntityHitEvent)=>undefined): void}
export class EntityHurtEvent { private constructor(); readonly cause: string; readonly damage: number; readonly damagingEntity?: Entity; readonly hurtEntity: Entity; readonly projectile?: Entity}
export class EntityHurtEventSignal { private constructor(); subscribe(callback: (arg0: EntityHurtEvent)=>undefined, options?: EntityEventOptions): (arg0: EntityHurtEvent)=>undefined; unsubscribe(callback: (arg0: EntityHurtEvent)=>undefined): void}
//@ts-ignore allow class inheritance for native classes
export class EntityInventoryComponent extends IEntityComponent{ private constructor(); readonly additionalSlotsPerStrength: number; readonly canBeSiphonedFrom: boolean; readonly container: InventoryComponentContainer; readonly containerType: string; readonly inventorySize: number; readonly private: boolean; readonly restrictToOwner: boolean}
//@ts-ignore allow class inheritance for native classes
export class EntityIsBabyComponent extends IEntityComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityIsChargedComponent extends IEntityComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityIsChestedComponent extends IEntityComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityIsDyableComponent extends IEntityComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityIsHiddenWhenInvisibleComponent extends IEntityComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityIsIgnitedComponent extends IEntityComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityIsIllagerCaptainComponent extends IEntityComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityIsSaddledComponent extends IEntityComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityIsShakingComponent extends IEntityComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityIsShearedComponent extends IEntityComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityIsStackableComponent extends IEntityComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityIsStunnedComponent extends IEntityComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityIsTamedComponent extends IEntityComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityItemComponent extends IEntityComponent{ private constructor(); readonly itemStack: ItemStack}
export class EntityIterator { private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityLavaMovementComponent extends EntityAttributeComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityLeashableComponent extends IEntityComponent{ private constructor(); readonly softDistance: number; leash(leashHolder: Entity): void; unleash(): void}
//@ts-ignore allow class inheritance for native classes
export class EntityMarkVariantComponent extends IEntityComponent{ private constructor(); value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityMountTamingComponent extends IEntityComponent{ private constructor(); setTamed(showParticles: boolean): void}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementAmphibiousComponent extends IEntityComponent{ private constructor(); readonly maxTurn: number}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementBasicComponent extends IEntityComponent{ private constructor(); readonly maxTurn: number}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementComponent extends EntityAttributeComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementFlyComponent extends EntityBaseMovementComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementGenericComponent extends EntityBaseMovementComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementGlideComponent extends EntityBaseMovementComponent{ private constructor(); readonly speedWhenTurning: number; readonly startSpeed: number}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementHoverComponent extends EntityBaseMovementComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementJumpComponent extends EntityBaseMovementComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementSkipComponent extends EntityBaseMovementComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementSwayComponent extends EntityBaseMovementComponent{ private constructor(); readonly swayAmplitude: number; readonly swayFrequency: number}
//@ts-ignore allow class inheritance for native classes
export class EntityNavigationClimbComponent extends EntityNavigationComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityNavigationComponent extends IEntityComponent{ private constructor(); readonly avoidDamageBlocks: boolean; readonly avoidPortals: boolean; readonly avoidSun: boolean; readonly avoidWater: boolean; readonly canBreach: boolean; readonly canBreakDoors: boolean; readonly canFloat: boolean; readonly canJump: boolean; readonly canOpenDoors: boolean; readonly canOpenIronDoors: boolean; readonly canPassDoors: boolean; readonly canPathFromAir: boolean; readonly canPathOverLava: boolean; readonly canPathOverWater: boolean; readonly canSink: boolean; readonly canSwim: boolean; readonly canWalk: boolean; readonly canWalkInLava: boolean; readonly isAmphibious: boolean}
//@ts-ignore allow class inheritance for native classes
export class EntityNavigationFloatComponent extends EntityNavigationComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityNavigationFlyComponent extends EntityNavigationComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityNavigationGenericComponent extends EntityNavigationComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityNavigationHoverComponent extends EntityNavigationComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityNavigationWalkComponent extends EntityNavigationComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityPushThroughComponent extends IEntityComponent{ private constructor(); value: number}
export class EntityQueryOptions { constructor(); closest?: number; excludeFamilies?: string[]; excludeGameModes?: GameMode[]; excludeNames?: string[]; excludeTags?: string[]; excludeTypes?: string[]; families?: string[]; farthest?: number; gameMode?: GameMode; location?: Location; maxDistance?: number; maxHorizontalRotation?: number; maxLevel?: number; maxVerticalRotation?: number; minDistance?: number; minHorizontalRotation?: number; minLevel?: number; minVerticalRotation?: number; name?: string; scoreOptions?: EntityQueryScoreOptions[]; tags?: string[]; 'type'?: string; volume?: BlockAreaSize}
export class EntityQueryScoreOptions { constructor(); exclude?: boolean; maxScore?: number; minScore?: number; objective?: string}
export class EntityRaycastOptions { constructor(); maxDistance?: number}
//@ts-ignore allow class inheritance for native classes
export class EntityRideableComponent extends IEntityComponent{ private constructor(); readonly controllingSeat: number; readonly crouchingSkipInteract: boolean; readonly familyTypes: string[]; readonly interactText: string; readonly pullInEntities: boolean; readonly riderCanInteract: boolean; readonly seatCount: number; readonly seats: Seat[]; addRider(rider: Entity): boolean; ejectRider(rider: Entity): void; ejectRiders(): void}
//@ts-ignore allow class inheritance for native classes
export class EntityScaleComponent extends IEntityComponent{ private constructor(); value: number}
//@ts-ignore allow class inheritance for native classes
export class EntitySkinIdComponent extends IEntityComponent{ private constructor(); value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityStrengthComponent extends IEntityComponent{ private constructor(); readonly max: number; readonly value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityTameableComponent extends IEntityComponent{ private constructor(); readonly probability: number; readonly tameItems: string[]; tame(): boolean}
export class EntityType { private constructor(); readonly id: string}
export class EntityTypeIterator { private constructor()}
export class EntityTypes { private constructor(); static get(identifier: string): EntityType; static getAll(): EntityTypeIterator}
//@ts-ignore allow class inheritance for native classes
export class EntityUnderwaterMovementComponent extends EntityAttributeComponent{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityVariantComponent extends IEntityComponent{ private constructor(); readonly value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityWantsJockeyComponent extends IEntityComponent{ private constructor()}
export class Events { private constructor(); readonly beforeChat: BeforeChatEventSignal; readonly beforeItemUse: BeforeItemUseEventSignal; readonly beforeItemUseOn: BeforeItemUseOnEventSignal; readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerEventSignal; readonly entityCreate: EntityCreateEventSignal; readonly entityHit: EntityHitEventSignal; readonly entityHurt: EntityHurtEventSignal; readonly itemCompleteCharge: ItemCompleteChargeEventSignal; readonly itemReleaseCharge: ItemReleaseChargeEventSignal; readonly itemStartCharge: ItemStartChargeEventSignal; readonly itemStopCharge: ItemStopChargeEventSignal; readonly itemUseOn: ItemUseOnEventSignal; readonly playerJoin: PlayerJoinEventSignal; readonly playerLeave: PlayerLeaveEventSignal; readonly tick: TickEventSignal; readonly weatherChange: WeatherChangeEventSignal; readonly worldInitialize: WorldInitializeEventSignal}
export class ExplosionOptions { constructor(); allowUnderwater?: boolean; breaksBlocks?: boolean; causesFire?: boolean; source?: Entity}
export class FeedItem { private constructor(); readonly effects: FeedItemEffect[]; readonly healAmount: number; readonly item: string}
export class FeedItemEffect { private constructor(); readonly amplifier: number; readonly chance: number; readonly duration: number; readonly name: string}
export class FilterGroup { private constructor()}
export class FluidContainer { private constructor(); static readonly maxFillLevel: 6; static readonly minFillLevel: 0}
export class IBlockProperty { private constructor(); readonly name: string}
//@ts-ignore allow class inheritance for native classes
export class IEntityComponent extends Component{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class IntBlockProperty extends IBlockProperty{ private constructor(); readonly validValues: number[]; value: number}
export class InventoryComponentContainer { private constructor(); readonly emptySlotsCount: number; readonly size: number; addItem(itemStack: ItemStack): void; getItem(slot: number): ItemStack; setItem(slot: number, itemStack: ItemStack): void; swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean; transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean}
export class ItemCompleteChargeEvent { private constructor(); readonly itemStack: ItemStack; readonly source: Player; readonly useDuration: number}
export class ItemCompleteChargeEventSignal { private constructor(); subscribe(callback: (arg0: ItemCompleteChargeEvent)=>undefined): (arg0: ItemCompleteChargeEvent)=>undefined; unsubscribe(callback: (arg0: ItemCompleteChargeEvent)=>undefined): void}
//@ts-ignore allow class inheritance for native classes
export class ItemComponent extends Component{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class ItemCooldownComponent extends ItemComponent{ private constructor(); readonly cooldownCategory: string; readonly cooldownTicks: number; startCooldown(player: Player): void}
//@ts-ignore allow class inheritance for native classes
export class ItemDurabilityComponent extends ItemComponent{ private constructor(); damage: number; readonly damageRange: NumberRange; readonly maxDurability: number; getDamageChance(unbreakingEnchantmentLevel: number): number}
//@ts-ignore allow class inheritance for native classes
export class ItemFoodComponent extends ItemComponent{ private constructor(); readonly canAlwaysEat: boolean; readonly nutrition: number; readonly saturationModifier: number; readonly usingConvertsTo: string}
export class ItemReleaseChargeEvent { private constructor(); readonly itemStack?: ItemStack; readonly source: Player; readonly useDuration: number}
export class ItemReleaseChargeEventSignal { private constructor(); subscribe(callback: (arg0: ItemReleaseChargeEvent)=>undefined): (arg0: ItemReleaseChargeEvent)=>undefined; unsubscribe(callback: (arg0: ItemReleaseChargeEvent)=>undefined): void}
export class Items { private constructor(); static get(itemId: string): ItemType}
export class ItemStack { constructor(itemType: ItemType | string, amount?: number, data?: number); amount: number; data: number; readonly id: string; nameTag?: string; getComponent(componentId: string): ItemComponent; getComponents(): ItemComponent[]; getLore(): string[]; hasComponent(componentId: string): boolean; setLore(loreList?: string[]): void}
export class ItemStartChargeEvent { private constructor(); readonly itemStack: ItemStack; readonly source: Player; readonly useDuration: number}
export class ItemStartChargeEventSignal { private constructor(); subscribe(callback: (arg0: ItemStartChargeEvent)=>undefined): (arg0: ItemStartChargeEvent)=>undefined; unsubscribe(callback: (arg0: ItemStartChargeEvent)=>undefined): void}
export class ItemStopChargeEvent { private constructor(); readonly itemStack?: ItemStack; readonly source: Player; readonly useDuration: number}
export class ItemStopChargeEventSignal { private constructor(); subscribe(callback: (arg0: ItemStopChargeEvent)=>undefined): (arg0: ItemStopChargeEvent)=>undefined; unsubscribe(callback: (arg0: ItemStopChargeEvent)=>undefined): void}
export class ItemType { private constructor(); readonly id: string}
export class ItemUseEvent { private constructor(); item: ItemStack; readonly source: Player}
export class ItemUseOnEvent { private constructor(); readonly blockFace: Direction; readonly blockLocation: BlockLocation; item: ItemStack; readonly source: Player}
export class ItemUseOnEventSignal { private constructor(); subscribe(callback: (arg0: ItemUseOnEvent)=>undefined): (arg0: ItemUseOnEvent)=>undefined; unsubscribe(callback: (arg0: ItemUseOnEvent)=>undefined): void}
export class Location { constructor(x: number, y: number, z: number); x: number; y: number; z: number; equals(other: Location): boolean; isNear(other: Location, epsilon: number): boolean}
export class MinecraftBlockTypes { private constructor(); static readonly air: undefined; static readonly barrier: undefined; static get(typeName: string): BlockType; static getAllBlockTypes(): BlockType[]}
export class MinecraftDimensionTypes { private constructor(); static readonly nether: "minecraft:nether"; static readonly overworld: "minecraft:overworld"; static readonly theEnd: "minecraft:the_end"}
export class MinecraftEffectTypes { private constructor(); static readonly healthBoost: undefined; static readonly jumpBoost: undefined; static readonly levitation: undefined; static readonly regeneration: undefined; static readonly saturation: undefined; static readonly slowFalling: undefined; static readonly slowness: undefined; static readonly speed: undefined}
export class MinecraftItemTypes { private constructor(); static readonly air: undefined}
export class MolangVariableMap { constructor(); setColorRGB(variableName: string, color: Color): void; setColorRGBA(variableName: string, color: Color): void; setSpeedAndDirection(variableName: string, speed: number, direction: Vector): MolangVariableMap; setVector3(variableName: string, vector: Vector): MolangVariableMap}
export class MusicOptions { constructor(); fade?: number; loop?: boolean; volume?: number}
export class NumberRange { private constructor(); max: number; min: number; next(): number}
//@ts-ignore allow class inheritance for native classes
export class Player extends Entity{ private constructor(); readonly name: string; selectedSlot: number; getItemCooldown(itemCategory: string): number; playSound(soundId: string, soundOptions?: SoundOptions): void; postClientMessage(id: string, value: string): void; startItemCooldown(itemCategory: string, tickDuration: number): void}
export class PlayerInventoryComponentContainer { private constructor(); readonly emptySlotsCount: number; readonly size: number; addItem(itemStack: ItemStack): void; getItem(slot: number): ItemStack; setItem(slot: number, itemStack: ItemStack): void; swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean; transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean}
export class PlayerIterator { private constructor()}
export class PlayerJoinEvent { private constructor(); player: Player}
export class PlayerJoinEventSignal { private constructor(); subscribe(callback: (arg0: PlayerJoinEvent)=>undefined): (arg0: PlayerJoinEvent)=>undefined; unsubscribe(callback: (arg0: PlayerJoinEvent)=>undefined): void}
export class PlayerLeaveEvent { private constructor(); readonly playerName: string}
export class PlayerLeaveEventSignal { private constructor(); subscribe(callback: (arg0: PlayerLeaveEvent)=>undefined): (arg0: PlayerLeaveEvent)=>undefined; unsubscribe(callback: (arg0: PlayerLeaveEvent)=>undefined): void}
export class PropertyRegistry { private constructor(); registerEntityTypeDynamicProperties(propertiesDefinition: DynamicPropertiesDefinition, entityTypeOrId: EntityType | string): void; registerWorldDynamicProperties(propertiesDefinition: DynamicPropertiesDefinition): void}
export class Scoreboard { private constructor(); getObjective(objectiveId: string): ScoreboardObjective; getObjectives(): ScoreboardObjective[]; getParticipants(): ScoreboardIdentity[]}
export class ScoreboardIdentity { private constructor(); readonly displayName: string; readonly id: number; readonly 'type': ScoreboardIdentityType; getEntity(): Entity}
export class ScoreboardObjective { private constructor(); readonly displayName: string; readonly id: string; getParticipants(): ScoreboardIdentity[]; getScore(participant: Entity | ScoreboardIdentity | string): number; getScores(): ScoreboardScoreInfo[]}
export class ScoreboardScoreInfo { private constructor(); readonly participant: ScoreboardIdentity; readonly score: number}
export class Seat { private constructor(); readonly lockRiderRotation: number; readonly maxRiderCount: number; readonly minRiderCount: number; readonly position: Location}
export class SoundOptions { constructor(); location?: Location; pitch?: number; volume?: number}
//@ts-ignore allow class inheritance for native classes
export class StringBlockProperty extends IBlockProperty{ private constructor(); readonly validValues: string[]; value: string}
export class TickEvent { private constructor(); readonly currentTick: number; readonly deltaTime: number}
export class TickEventSignal { private constructor(); subscribe(callback: (arg0: TickEvent)=>undefined): (arg0: TickEvent)=>undefined; unsubscribe(callback: (arg0: TickEvent)=>undefined): void}
export class Trigger { constructor(eventName: string); eventName: string}
export class Vector { constructor(x: number, y: number, z: number); static readonly back: undefined; static readonly down: undefined; static readonly forward: undefined; static readonly left: undefined; static readonly one: undefined; static readonly right: undefined; static readonly up: undefined; static readonly zero: undefined; static add(a: Vector, b: Vector): Vector; static cross(a: Vector, b: Vector): Vector; static distance(a: Vector, b: Vector): number; static divide(a: Vector, b: number | Vector): Vector; static lerp(a: Vector, b: Vector, t: number): Vector; static max(a: Vector, b: Vector): Vector; static min(a: Vector, b: Vector): Vector; static multiply(a: Vector, b: number | Vector): Vector; static slerp(a: Vector, b: Vector, t: number): Vector; static subtract(a: Vector, b: Vector): Vector; x: number; y: number; z: number; equals(other: Vector): boolean; length(): number; normalized(): Vector}
export class WeatherChangeEvent { private constructor(); readonly dimension: string; readonly lightning: boolean; readonly raining: boolean}
export class WeatherChangeEventSignal { private constructor(); subscribe(callback: (arg0: WeatherChangeEvent)=>undefined): (arg0: WeatherChangeEvent)=>undefined; unsubscribe(callback: (arg0: WeatherChangeEvent)=>undefined): void}
export class World { private constructor(); readonly events: Events; readonly scoreboard: Scoreboard; broadcastClientMessage(id: string, value: string): void; getDimension(dimensionId: string): Dimension; getDynamicProperty(identifier: string): boolean | number | number | Location | string; getPlayers(options?: EntityQueryOptions): PlayerIterator; playMusic(trackId: string, musicOptions?: MusicOptions): void; playSound(soundID: string, soundOptions?: SoundOptions): void; queueMusic(trackId: string, musicOptions?: MusicOptions): void; removeDynamicProperty(identifier: string): boolean; setDynamicProperty(identifier: string, value: boolean | number | number | Location | string): void; stopMusic(): void}
export class WorldInitializeEvent { private constructor(); readonly propertyRegistry: PropertyRegistry}
export class WorldInitializeEventSignal { private constructor(); subscribe(callback: (arg0: WorldInitializeEvent)=>undefined): (arg0: WorldInitializeEvent)=>undefined; unsubscribe(callback: (arg0: WorldInitializeEvent)=>undefined): void}
export class XYRotation { private constructor(); x: number; y: number}
export const TicksPerSecond = 20;
export const world: World;