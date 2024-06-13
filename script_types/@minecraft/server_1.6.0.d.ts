import * as _00 from '@minecraft/common';
export enum Direction {Down = "Down", East = "East", North = "North", South = "South", Up = "Up", West = "West"}
export enum DisplaySlotId {BelowName = "BelowName", List = "List", Sidebar = "Sidebar"}
export enum EasingType {InBack = "InBack", InBounce = "InBounce", InCirc = "InCirc", InCubic = "InCubic", InElastic = "InElastic", InExpo = "InExpo", InOutBack = "InOutBack", InOutBounce = "InOutBounce", InOutCirc = "InOutCirc", InOutCubic = "InOutCubic", InOutElastic = "InOutElastic", InOutExpo = "InOutExpo", InOutQuad = "InOutQuad", InOutQuart = "InOutQuart", InOutQuint = "InOutQuint", InOutSine = "InOutSine", InQuad = "InQuad", InQuart = "InQuart", InQuint = "InQuint", InSine = "InSine", Linear = "Linear", OutBack = "OutBack", OutBounce = "OutBounce", OutCirc = "OutCirc", OutCubic = "OutCubic", OutElastic = "OutElastic", OutExpo = "OutExpo", OutQuad = "OutQuad", OutQuart = "OutQuart", OutQuint = "OutQuint", OutSine = "OutSine", Spring = "Spring"}
export enum EntityDamageCause {anvil = "anvil", blockExplosion = "blockExplosion", campfire = "campfire", charging = "charging", contact = "contact", drowning = "drowning", entityAttack = "entityAttack", entityExplosion = "entityExplosion", fall = "fall", fallingBlock = "fallingBlock", fire = "fire", fireTick = "fireTick", fireworks = "fireworks", flyIntoWall = "flyIntoWall", freezing = "freezing", lava = "lava", lightning = "lightning", magic = "magic", magma = "magma", none = "none", override = "override", piston = "piston", projectile = "projectile", ramAttack = "ramAttack", selfDestruct = "selfDestruct", sonicBoom = "sonicBoom", soulCampfire = "soulCampfire", stalactite = "stalactite", stalagmite = "stalagmite", starve = "starve", suffocation = "suffocation", suicide = "suicide", temperature = "temperature", thorns = "thorns", void = "void", wither = "wither"}
export enum EntityInitializationCause {Born = "Born", Event = "Event", Loaded = "Loaded", Spawned = "Spawned", Transformed = "Transformed"}
export enum EquipmentSlot {Chest = "Chest", Feet = "Feet", Head = "Head", Legs = "Legs", Mainhand = "Mainhand", Offhand = "Offhand"}
export enum GameMode {adventure = "adventure", creative = "creative", spectator = "spectator", survival = "survival"}
export enum ItemLockMode {inventory = "inventory", none = "none", slot = "slot"}
export enum MoonPhase {FirstQuarter = 2, FullMoon = 0, LastQuarter = 6, NewMoon = 4, WaningCrescent = 3, WaningGibbous = 1, WaxingCrescent = 5, WaxingGibbous = 7}
export enum ObjectiveSortOrder {Ascending = 0, Descending = 1}
export enum ScoreboardIdentityType {Entity = "Entity", FakePlayer = "FakePlayer", Player = "Player"}
export enum ScriptEventSource {Block = "Block", Entity = "Entity", NPCDialogue = "NPCDialogue", Server = "Server"}
export enum TimeOfDay {Day = 1000, Midnight = 18000, Night = 13000, Noon = 6000, Sunrise = 23000, Sunset = 12000}
export enum WeatherType {Clear = "Clear", Rain = "Rain", Thunder = "Thunder"}
export class Block { private constructor(); readonly dimension: Dimension; readonly isAir: boolean; readonly isLiquid: boolean; readonly location: Vector3; readonly permutation: BlockPermutation; readonly x: number; readonly y: number; readonly z: number; getComponent(componentId: string): BlockComponent; isValid(): boolean; setPermutation(permutation: BlockPermutation): void}
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
export class Camera { private constructor(); clear(): void; fade(fadeCameraOptions?: CameraFadeOptions): void; setCamera(cameraPreset: string, setOptions?: CameraDefaultOptions | CameraSetFacingOptions | CameraSetLocationOptions | CameraSetPosOptions | CameraSetRotOptions): void}
export class CommandResult { private constructor(); readonly successCount: number}
export class Component { private constructor(); readonly typeId: string; isValid(): boolean}
export class Container { private constructor(); readonly emptySlotsCount: number; readonly size: number; addItem(itemStack: ItemStack): ItemStack; clearAll(): void; getItem(slot: number): ItemStack; isValid(): boolean; moveItem(fromSlot: number, toSlot: number, toContainer: Container): void; setItem(slot: number, itemStack?: ItemStack): void; swapItems(slot: number, otherSlot: number, otherContainer: Container): void; transferItem(fromSlot: number, toContainer: Container): ItemStack}
export class Dimension { private constructor(); readonly id: string; getBlock(location: Vector3): Block; getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit; getEntities(options?: EntityQueryOptions): Entity[]; getEntitiesAtBlockLocation(location: Vector3): Entity[]; getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[]; getPlayers(options?: EntityQueryOptions): Player[]; runCommand(commandString: string): CommandResult; runCommandAsync(commandString: string): Promise<CommandResult>; setWeather(weatherType: WeatherType, duration?: number): void; spawnEntity(identifier: string, location: Vector3): Entity; spawnItem(itemStack: ItemStack, location: Vector3): Entity; spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void}
export class Effect { private constructor(); readonly amplifier: number; readonly displayName: string; readonly duration: number; readonly typeId: string; isValid(): boolean}
export class EffectType { private constructor(); getName(): string}
export class Entity { private constructor(); readonly dimension: Dimension; readonly id: string; readonly isClimbing: boolean; readonly isFalling: boolean; readonly isInWater: boolean; readonly isOnGround: boolean; readonly isSleeping: boolean; isSneaking: boolean; readonly isSprinting: boolean; readonly isSwimming: boolean; readonly location: Vector3; nameTag: string; readonly scoreboardIdentity?: ScoreboardIdentity; readonly typeId: string; addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): void; addTag(tag: string): boolean; applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean; applyImpulse(vector: Vector3): void; applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void; clearVelocity(): void; getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit; getComponent(componentId: string): EntityComponent; getComponents(): EntityComponent[]; getEffect(effectType: EffectType | string): Effect; getEffects(): Effect[]; getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[]; getHeadLocation(): Vector3; getProperty(identifier: string): boolean | number | string; getRotation(): Vector2; getTags(): string[]; getVelocity(): Vector3; getViewDirection(): Vector3; hasComponent(componentId: string): boolean; hasTag(tag: string): boolean; isValid(): boolean; kill(): boolean; removeEffect(effectType: EffectType | string): boolean; removeTag(tag: string): boolean; resetProperty(identifier: string): boolean | number | string; runCommand(commandString: string): CommandResult; runCommandAsync(commandString: string): Promise<CommandResult>; setProperty(identifier: string, value: boolean | number | string): void; setRotation(rotation: Vector2): void; teleport(location: Vector3, teleportOptions?: TeleportOptions): void; triggerEvent(eventName: string): void; tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean}
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
export class EntityDieAfterEvent { private constructor(); readonly damageSource: EntityDamageSource; readonly deadEntity: Entity}
export class EntityDieAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityDieAfterEvent)=>undefined, options?: EntityEventOptions): (arg0: EntityDieAfterEvent)=>undefined; unsubscribe(callback: (arg0: EntityDieAfterEvent)=>undefined): void}
//@ts-ignore allow class inheritance for native classes
export class EntityEquippableComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:equippable"; getEquipment(equipmentSlot: EquipmentSlot): ItemStack; setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean}
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
export class EntityHealthChangedAfterEvent { private constructor(); readonly entity: Entity; readonly newValue: number; readonly oldValue: number}
export class EntityHealthChangedAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityHealthChangedAfterEvent)=>undefined, options?: EntityEventOptions): (arg0: EntityHealthChangedAfterEvent)=>undefined; unsubscribe(callback: (arg0: EntityHealthChangedAfterEvent)=>undefined): void}
//@ts-ignore allow class inheritance for native classes
export class EntityHealthComponent extends EntityAttributeComponent{ private constructor(); static readonly componentId: "minecraft:health"}
export class EntityHitBlockAfterEvent { private constructor(); readonly blockFace: Direction; readonly damagingEntity: Entity; readonly hitBlock: Block}
export class EntityHitBlockAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityHitBlockAfterEvent)=>undefined, options?: EntityEventOptions): (arg0: EntityHitBlockAfterEvent)=>undefined; unsubscribe(callback: (arg0: EntityHitBlockAfterEvent)=>undefined): void}
export class EntityHitEntityAfterEvent { private constructor(); readonly damagingEntity: Entity; readonly hitEntity: Entity}
export class EntityHitEntityAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityHitEntityAfterEvent)=>undefined, options?: EntityEventOptions): (arg0: EntityHitEntityAfterEvent)=>undefined; unsubscribe(callback: (arg0: EntityHitEntityAfterEvent)=>undefined): void}
export class EntityHurtAfterEvent { private constructor(); readonly damage: number; readonly damageSource: EntityDamageSource; readonly hurtEntity: Entity}
export class EntityHurtAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityHurtAfterEvent)=>undefined, options?: EntityEventOptions): (arg0: EntityHurtAfterEvent)=>undefined; unsubscribe(callback: (arg0: EntityHurtAfterEvent)=>undefined): void}
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
export class EntityLoadAfterEvent { private constructor(); entity: Entity}
export class EntityLoadAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityLoadAfterEvent)=>undefined): (arg0: EntityLoadAfterEvent)=>undefined; unsubscribe(callback: (arg0: EntityLoadAfterEvent)=>undefined): void}
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
export class EntityRemoveAfterEvent { private constructor(); readonly removedEntityId: string; readonly typeId: string}
export class EntityRemoveAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityRemoveAfterEvent)=>undefined, options?: EntityEventOptions): (arg0: EntityRemoveAfterEvent)=>undefined; unsubscribe(callback: (arg0: EntityRemoveAfterEvent)=>undefined): void}
export class EntityRemoveBeforeEvent { private constructor(); readonly removedEntity: Entity}
export class EntityRemoveBeforeEventSignal { private constructor(); subscribe(callback: (arg0: EntityRemoveBeforeEvent)=>undefined): (arg0: EntityRemoveBeforeEvent)=>undefined; unsubscribe(callback: (arg0: EntityRemoveBeforeEvent)=>undefined): void}
//@ts-ignore allow class inheritance for native classes
export class EntityScaleComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:scale"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntitySkinIdComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:skin_id"; value: number}
export class EntitySpawnAfterEvent { private constructor(); readonly cause: EntityInitializationCause; entity: Entity}
export class EntitySpawnAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntitySpawnAfterEvent)=>undefined): (arg0: EntitySpawnAfterEvent)=>undefined; unsubscribe(callback: (arg0: EntitySpawnAfterEvent)=>undefined): void}
//@ts-ignore allow class inheritance for native classes
export class EntityVariantComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:variant"; readonly value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityWantsJockeyComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:wants_jockey"}
export class FeedItem { private constructor(); readonly healAmount: number; readonly item: string; getEffects(): FeedItemEffect[]}
export class FeedItemEffect { private constructor(); readonly amplifier: number; readonly chance: number; readonly duration: number; readonly name: string}
export class IButtonPushAfterEventSignal { private constructor(); subscribe(callback: (arg0: ButtonPushAfterEvent)=>undefined): (arg0: ButtonPushAfterEvent)=>undefined; unsubscribe(callback: (arg0: ButtonPushAfterEvent)=>undefined): void}
export class ILeverActionAfterEventSignal { private constructor(); subscribe(callback: (arg0: LeverActionAfterEvent)=>undefined): (arg0: LeverActionAfterEvent)=>undefined; unsubscribe(callback: (arg0: LeverActionAfterEvent)=>undefined): void}
export class IPlayerJoinAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerJoinAfterEvent)=>undefined): (arg0: PlayerJoinAfterEvent)=>undefined; unsubscribe(callback: (arg0: PlayerJoinAfterEvent)=>undefined): void}
export class IPlayerLeaveAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerLeaveAfterEvent)=>undefined): (arg0: PlayerLeaveAfterEvent)=>undefined; unsubscribe(callback: (arg0: PlayerLeaveAfterEvent)=>undefined): void}
export class IPlayerSpawnAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerSpawnAfterEvent)=>undefined): (arg0: PlayerSpawnAfterEvent)=>undefined; unsubscribe(callback: (arg0: PlayerSpawnAfterEvent)=>undefined): void}
export class ItemCompleteUseAfterEvent { private constructor(); readonly itemStack: ItemStack; readonly source: Player; readonly useDuration: number}
export class ItemCompleteUseAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemCompleteUseAfterEvent)=>undefined): (arg0: ItemCompleteUseAfterEvent)=>undefined; unsubscribe(callback: (arg0: ItemCompleteUseAfterEvent)=>undefined): void}
//@ts-ignore allow class inheritance for native classes
export class ItemComponent extends Component{ private constructor()}
export class ItemReleaseUseAfterEvent { private constructor(); readonly itemStack?: ItemStack; readonly source: Player; readonly useDuration: number}
export class ItemReleaseUseAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemReleaseUseAfterEvent)=>undefined): (arg0: ItemReleaseUseAfterEvent)=>undefined; unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent)=>undefined): void}
export class ItemStack { constructor(itemType: ItemType | string, amount?: number); amount: number; readonly isStackable: boolean; keepOnDeath: boolean; lockMode: ItemLockMode; readonly maxAmount: number; nameTag?: string; readonly 'type': ItemType; readonly typeId: string; clone(): ItemStack; getCanDestroy(): string[]; getCanPlaceOn(): string[]; getComponent(componentId: string): ItemComponent; getComponents(): ItemComponent[]; getLore(): string[]; getTags(): string[]; hasComponent(componentId: string): boolean; hasTag(tag: string): boolean; isStackableWith(itemStack: ItemStack): boolean; setCanDestroy(blockIdentifiers?: string[]): void; setCanPlaceOn(blockIdentifiers?: string[]): void; setLore(loreList?: string[]): void}
export class ItemStartUseAfterEvent { private constructor(); readonly itemStack: ItemStack; readonly source: Player; readonly useDuration: number}
export class ItemStartUseAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemStartUseAfterEvent)=>undefined): (arg0: ItemStartUseAfterEvent)=>undefined; unsubscribe(callback: (arg0: ItemStartUseAfterEvent)=>undefined): void}
export class ItemStartUseOnAfterEvent { private constructor(); readonly block: Block; readonly blockFace: Direction; readonly itemStack?: ItemStack; readonly source: Player}
export class ItemStartUseOnAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemStartUseOnAfterEvent)=>undefined): (arg0: ItemStartUseOnAfterEvent)=>undefined; unsubscribe(callback: (arg0: ItemStartUseOnAfterEvent)=>undefined): void}
export class ItemStopUseAfterEvent { private constructor(); readonly itemStack?: ItemStack; readonly source: Player; readonly useDuration: number}
export class ItemStopUseAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemStopUseAfterEvent)=>undefined): (arg0: ItemStopUseAfterEvent)=>undefined; unsubscribe(callback: (arg0: ItemStopUseAfterEvent)=>undefined): void}
export class ItemStopUseOnAfterEvent { private constructor(); readonly block: Block; readonly itemStack?: ItemStack; readonly source: Player}
export class ItemStopUseOnAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemStopUseOnAfterEvent)=>undefined): (arg0: ItemStopUseOnAfterEvent)=>undefined; unsubscribe(callback: (arg0: ItemStopUseOnAfterEvent)=>undefined): void}
export class ItemType { private constructor(); readonly id: string}
export class ItemUseAfterEvent { private constructor(); itemStack: ItemStack; readonly source: Player}
export class ItemUseAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemUseAfterEvent)=>undefined): (arg0: ItemUseAfterEvent)=>undefined; unsubscribe(callback: (arg0: ItemUseAfterEvent)=>undefined): void}
//@ts-ignore allow class inheritance for native classes
export class ItemUseBeforeEvent extends ItemUseAfterEvent{ private constructor(); cancel: boolean}
export class ItemUseBeforeEventSignal { private constructor(); subscribe(callback: (arg0: ItemUseBeforeEvent)=>undefined): (arg0: ItemUseBeforeEvent)=>undefined; unsubscribe(callback: (arg0: ItemUseBeforeEvent)=>undefined): void}
export class ItemUseOnAfterEvent { private constructor(); readonly block: Block; readonly blockFace: Direction; readonly faceLocation: Vector3; readonly itemStack: ItemStack; readonly source: Player}
export class ItemUseOnAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemUseOnAfterEvent)=>undefined): (arg0: ItemUseOnAfterEvent)=>undefined; unsubscribe(callback: (arg0: ItemUseOnAfterEvent)=>undefined): void}
//@ts-ignore allow class inheritance for native classes
export class ItemUseOnBeforeEvent extends ItemUseOnAfterEvent{ private constructor(); cancel: boolean}
export class ItemUseOnBeforeEventSignal { private constructor(); subscribe(callback: (arg0: ItemUseOnBeforeEvent)=>undefined): (arg0: ItemUseOnBeforeEvent)=>undefined; unsubscribe(callback: (arg0: ItemUseOnBeforeEvent)=>undefined): void}
//@ts-ignore allow class inheritance for native classes
export class LeverActionAfterEvent extends BlockEvent{ private constructor(); readonly isPowered: boolean; readonly player: Player}
//@ts-ignore allow class inheritance for native classes
export class LeverActionAfterEventSignal extends ILeverActionAfterEventSignal{ private constructor()}
export class MinecraftDimensionTypes { private constructor(); static readonly nether: "minecraft:nether"; static readonly overworld: "minecraft:overworld"; static readonly theEnd: "minecraft:the_end"}
export class MolangVariableMap { constructor(); setColorRGB(variableName: string, color: RGB): void; setColorRGBA(variableName: string, color: RGBA): void; setFloat(variableName: string, number: number): void; setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void; setVector3(variableName: string, vector: Vector3): void}
//@ts-ignore allow class inheritance for native classes
export class Player extends Entity{ private constructor(); readonly camera: Camera; readonly isEmoting: boolean; readonly isFlying: boolean; readonly isGliding: boolean; readonly isJumping: boolean; readonly level: number; readonly name: string; readonly onScreenDisplay: ScreenDisplay; readonly totalXpNeededForNextLevel: number; readonly xpEarnedAtCurrentLevel: number; addExperience(amount: number): number; addLevels(amount: number): number; getSpawnPoint(): DimensionLocation; getTotalXp(): number; playSound(soundId: string, soundOptions?: PlayerSoundOptions): void; resetLevel(): void; sendMessage(message: RawMessage | string[] | RawMessage | string): void; setSpawnPoint(spawnPoint?: DimensionLocation): void}
//@ts-ignore allow class inheritance for native classes
export class PlayerBreakBlockAfterEvent extends BlockEvent{ private constructor(); readonly brokenBlockPermutation: BlockPermutation; readonly itemStackAfterBreak?: ItemStack; readonly itemStackBeforeBreak?: ItemStack; readonly player: Player}
export class PlayerBreakBlockAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerBreakBlockAfterEvent)=>undefined, options?: BlockEventOptions): (arg0: PlayerBreakBlockAfterEvent)=>undefined; unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent)=>undefined): void}
//@ts-ignore allow class inheritance for native classes
export class PlayerBreakBlockBeforeEvent extends BlockEvent{ private constructor(); cancel: boolean; itemStack?: ItemStack; readonly player: Player}
export class PlayerBreakBlockBeforeEventSignal { private constructor(); subscribe(callback: (arg0: PlayerBreakBlockBeforeEvent)=>undefined, options?: BlockEventOptions): (arg0: PlayerBreakBlockBeforeEvent)=>undefined; unsubscribe(callback: (arg0: PlayerBreakBlockBeforeEvent)=>undefined): void}
export class PlayerDimensionChangeAfterEvent { private constructor(); readonly fromDimension: Dimension; readonly fromLocation: Vector3; readonly player: Player; readonly toDimension: Dimension; readonly toLocation: Vector3}
export class PlayerDimensionChangeAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerDimensionChangeAfterEvent)=>undefined): (arg0: PlayerDimensionChangeAfterEvent)=>undefined; unsubscribe(callback: (arg0: PlayerDimensionChangeAfterEvent)=>undefined): void}
export class PlayerJoinAfterEvent { private constructor(); readonly playerId: string; readonly playerName: string}
//@ts-ignore allow class inheritance for native classes
export class PlayerJoinAfterEventSignal extends IPlayerJoinAfterEventSignal{ private constructor()}
export class PlayerLeaveAfterEvent { private constructor(); readonly playerId: string; readonly playerName: string}
//@ts-ignore allow class inheritance for native classes
export class PlayerLeaveAfterEventSignal extends IPlayerLeaveAfterEventSignal{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class PlayerPlaceBlockAfterEvent extends BlockEvent{ private constructor(); readonly player: Player}
export class PlayerPlaceBlockAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerPlaceBlockAfterEvent)=>undefined, options?: BlockEventOptions): (arg0: PlayerPlaceBlockAfterEvent)=>undefined; unsubscribe(callback: (arg0: PlayerPlaceBlockAfterEvent)=>undefined): void}
export class PlayerSpawnAfterEvent { private constructor(); initialSpawn: boolean; player: Player}
//@ts-ignore allow class inheritance for native classes
export class PlayerSpawnAfterEventSignal extends IPlayerSpawnAfterEventSignal{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class PressurePlatePopAfterEvent extends BlockEvent{ private constructor(); readonly previousRedstonePower: number; readonly redstonePower: number}
export class PressurePlatePopAfterEventSignal { private constructor(); subscribe(callback: (arg0: PressurePlatePopAfterEvent)=>undefined): (arg0: PressurePlatePopAfterEvent)=>undefined; unsubscribe(callback: (arg0: PressurePlatePopAfterEvent)=>undefined): void}
//@ts-ignore allow class inheritance for native classes
export class PressurePlatePushAfterEvent extends BlockEvent{ private constructor(); readonly previousRedstonePower: number; readonly redstonePower: number; readonly source: Entity}
export class PressurePlatePushAfterEventSignal { private constructor(); subscribe(callback: (arg0: PressurePlatePushAfterEvent)=>undefined): (arg0: PressurePlatePushAfterEvent)=>undefined; unsubscribe(callback: (arg0: PressurePlatePushAfterEvent)=>undefined): void}
export class ProjectileHitBlockAfterEvent { private constructor(); readonly dimension: Dimension; readonly hitVector: Vector3; readonly location: Vector3; readonly projectile: Entity; readonly source?: Entity; getBlockHit(): BlockHitInformation}
export class ProjectileHitBlockAfterEventSignal { private constructor(); subscribe(callback: (arg0: ProjectileHitBlockAfterEvent)=>undefined): (arg0: ProjectileHitBlockAfterEvent)=>undefined; unsubscribe(callback: (arg0: ProjectileHitBlockAfterEvent)=>undefined): void}
export class ProjectileHitEntityAfterEvent { private constructor(); readonly dimension: Dimension; readonly hitVector: Vector3; readonly location: Vector3; readonly projectile: Entity; readonly source?: Entity; getEntityHit(): EntityHitInformation}
export class ProjectileHitEntityAfterEventSignal { private constructor(); subscribe(callback: (arg0: ProjectileHitEntityAfterEvent)=>undefined): (arg0: ProjectileHitEntityAfterEvent)=>undefined; unsubscribe(callback: (arg0: ProjectileHitEntityAfterEvent)=>undefined): void}
export class Scoreboard { private constructor(); addObjective(objectiveId: string, displayName?: string): ScoreboardObjective; clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective; getObjective(objectiveId: string): ScoreboardObjective; getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions; getObjectives(): ScoreboardObjective[]; getParticipants(): ScoreboardIdentity[]; removeObjective(objectiveId: ScoreboardObjective | string): boolean; setObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId, objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions): ScoreboardObjective}
export class ScoreboardIdentity { private constructor(); readonly displayName: string; readonly id: number; readonly 'type': ScoreboardIdentityType; getEntity(): Entity; isValid(): boolean}
export class ScoreboardObjective { private constructor(); readonly displayName: string; readonly id: string; addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number; getParticipants(): ScoreboardIdentity[]; getScore(participant: Entity | ScoreboardIdentity | string): number; getScores(): ScoreboardScoreInfo[]; hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean; isValid(): boolean; removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean; setScore(participant: Entity | ScoreboardIdentity | string, score: number): void}
export class ScoreboardScoreInfo { private constructor(); readonly participant: ScoreboardIdentity; readonly score: number}
export class ScreenDisplay { private constructor(); isValid(): boolean; setActionBar(text: RawMessage | string[] | RawMessage | string): void; setTitle(title: RawMessage | string[] | RawMessage | string, options?: TitleDisplayOptions): void; updateSubtitle(subtitle: RawMessage | string[] | RawMessage | string): void}
export class ScriptEventCommandMessageAfterEvent { private constructor(); readonly id: string; readonly initiator?: Entity; readonly message: string; readonly sourceBlock?: Block; readonly sourceEntity?: Entity; readonly sourceType: ScriptEventSource}
export class ScriptEventCommandMessageAfterEventSignal { private constructor(); subscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent)=>undefined, options?: ScriptEventMessageFilterOptions): (arg0: ScriptEventCommandMessageAfterEvent)=>undefined; unsubscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent)=>undefined): void}
export class System { private constructor(); readonly afterEvents: SystemAfterEvents; readonly currentTick: number; clearRun(runId: number): void; run(callback: ()=>undefined): number; runInterval(callback: ()=>undefined, tickInterval?: number): number; runTimeout(callback: ()=>undefined, tickDelay?: number): number}
export class SystemAfterEvents { private constructor(); readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal}
//@ts-ignore allow class inheritance for native classes
export class TargetBlockHitAfterEvent extends BlockEvent{ private constructor(); readonly hitVector: Vector3; readonly previousRedstonePower: number; readonly redstonePower: number; readonly source: Entity}
export class TargetBlockHitAfterEventSignal { private constructor(); subscribe(callback: (arg0: TargetBlockHitAfterEvent)=>undefined): (arg0: TargetBlockHitAfterEvent)=>undefined; unsubscribe(callback: (arg0: TargetBlockHitAfterEvent)=>undefined): void}
//@ts-ignore allow class inheritance for native classes
export class TripWireTripAfterEvent extends BlockEvent{ private constructor(); readonly isPowered: boolean; readonly sources: Entity[]}
export class TripWireTripAfterEventSignal { private constructor(); subscribe(callback: (arg0: TripWireTripAfterEvent)=>undefined): (arg0: TripWireTripAfterEvent)=>undefined; unsubscribe(callback: (arg0: TripWireTripAfterEvent)=>undefined): void}
export class World { private constructor(); readonly afterEvents: WorldAfterEvents; readonly beforeEvents: WorldBeforeEvents; readonly scoreboard: Scoreboard; getAbsoluteTime(): number; getAllPlayers(): Player[]; getDay(): number; getDefaultSpawnLocation(): Vector3; getDimension(dimensionId: string): Dimension; getMoonPhase(): MoonPhase; getPlayers(options?: EntityQueryOptions): Player[]; getTimeOfDay(): number; playMusic(trackId: string, musicOptions?: MusicOptions): void; playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void; queueMusic(trackId: string, musicOptions?: MusicOptions): void; sendMessage(message: RawMessage | string[] | RawMessage | string): void; setAbsoluteTime(absoluteTime: number): void; setDefaultSpawnLocation(spawnLocation: Vector3): void; setTimeOfDay(timeOfDay: number | TimeOfDay): void; stopMusic(): void}
export class WorldAfterEvents { private constructor(); readonly buttonPush: ButtonPushAfterEventSignal; readonly entityDie: EntityDieAfterEventSignal; readonly entityHealthChanged: EntityHealthChangedAfterEventSignal; readonly entityHitBlock: EntityHitBlockAfterEventSignal; readonly entityHitEntity: EntityHitEntityAfterEventSignal; readonly entityHurt: EntityHurtAfterEventSignal; readonly entityLoad: EntityLoadAfterEventSignal; readonly entityRemove: EntityRemoveAfterEventSignal; readonly entitySpawn: EntitySpawnAfterEventSignal; readonly itemCompleteUse: ItemCompleteUseAfterEventSignal; readonly itemReleaseUse: ItemReleaseUseAfterEventSignal; readonly itemStartUse: ItemStartUseAfterEventSignal; readonly itemStartUseOn: ItemStartUseOnAfterEventSignal; readonly itemStopUse: ItemStopUseAfterEventSignal; readonly itemStopUseOn: ItemStopUseOnAfterEventSignal; readonly itemUse: ItemUseAfterEventSignal; readonly itemUseOn: ItemUseOnAfterEventSignal; readonly leverAction: LeverActionAfterEventSignal; readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal; readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal; readonly playerJoin: PlayerJoinAfterEventSignal; readonly playerLeave: PlayerLeaveAfterEventSignal; readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal; readonly playerSpawn: PlayerSpawnAfterEventSignal; readonly pressurePlatePop: PressurePlatePopAfterEventSignal; readonly pressurePlatePush: PressurePlatePushAfterEventSignal; readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal; readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal; readonly targetBlockHit: TargetBlockHitAfterEventSignal; readonly tripWireTrip: TripWireTripAfterEventSignal}
export class WorldBeforeEvents { private constructor(); readonly entityRemove: EntityRemoveBeforeEventSignal; readonly itemUse: ItemUseBeforeEventSignal; readonly itemUseOn: ItemUseOnBeforeEventSignal; readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal}
export interface BlockEventOptions {blockTypes?: string[], permutations?: BlockPermutation[]}
export interface BlockFilter {excludePermutations?: BlockPermutation[], excludeTags?: string[], excludeTypes?: string[], includePermutations?: BlockPermutation[], includeTags?: string[], includeTypes?: string[]}
export interface BlockHitInformation {block: Block, face: Direction, faceLocation: Vector3}
export interface BlockRaycastHit {block: Block, face: Direction, faceLocation: Vector3}
export interface BlockRaycastOptions {includeLiquidBlocks?: boolean, includePassableBlocks?: boolean, maxDistance?: number}
export interface CameraDefaultOptions {easeOptions: CameraEaseOptions}
export interface CameraEaseOptions {easeTime?: number, easeType?: EasingType}
export interface CameraFadeOptions {fadeColor?: RGB, fadeTime?: CameraFadeTimeOptions}
export interface CameraFadeTimeOptions {fadeInTime: number, fadeOutTime: number, holdTime: number}
export interface CameraSetFacingOptions {easeOptions?: CameraEaseOptions, facingEntity: Entity, location?: Vector3}
export interface CameraSetLocationOptions {easeOptions?: CameraEaseOptions, location: Vector3}
export interface CameraSetPosOptions {easeOptions?: CameraEaseOptions, facingLocation: Vector3, location?: Vector3}
export interface CameraSetRotOptions {easeOptions?: CameraEaseOptions, location?: Vector3, rotation: Vector2}
export interface DimensionLocation {dimension: Dimension, x: number, y: number, z: number}
export interface EntityApplyDamageByProjectileOptions {damagingEntity?: Entity, damagingProjectile: Entity}
export interface EntityApplyDamageOptions {cause: EntityDamageCause, damagingEntity?: Entity}
export interface EntityDamageSource {cause: EntityDamageCause, damagingEntity?: Entity, damagingProjectile?: Entity}
export interface EntityEffectOptions {amplifier?: number, showParticles?: boolean}
export interface EntityEventOptions {entities?: Entity[], entityTypes?: string[]}
export interface EntityFilter {excludeFamilies?: string[], excludeGameModes?: GameMode[], excludeNames?: string[], excludeTags?: string[], excludeTypes?: string[], families?: string[], gameMode?: GameMode, maxHorizontalRotation?: number, maxLevel?: number, maxVerticalRotation?: number, minHorizontalRotation?: number, minLevel?: number, minVerticalRotation?: number, name?: string, scoreOptions?: EntityQueryScoreOptions[], tags?: string[], 'type'?: string}
export interface EntityHitInformation {entity?: Entity}
export interface EntityQueryOptions {closest?: number, farthest?: number, location?: Vector3, maxDistance?: number, minDistance?: number}
export interface EntityQueryScoreOptions {exclude?: boolean, maxScore?: number, minScore?: number, objective?: string}
export interface EntityRaycastHit {distance: number, entity: Entity}
export interface EntityRaycastOptions {maxDistance?: number}
export interface MusicOptions {fade?: number, loop?: boolean, volume?: number}
export interface PlayerSoundOptions {location?: Vector3, pitch?: number, volume?: number}
export interface RawMessage {rawtext?: RawMessage[], score?: RawMessageScore, text?: string, translate?: string, with?: string[] | RawMessage}
export interface RawMessageScore {name?: string, objective?: string}
export interface RGB {blue: number, green: number, red: number}
export interface RGBA {alpha: number}
export interface ScoreboardObjectiveDisplayOptions {objective: ScoreboardObjective, sortOrder?: ObjectiveSortOrder}
export interface ScriptEventMessageFilterOptions {namespaces: string[]}
export interface TeleportOptions {checkForBlocks?: boolean, dimension?: Dimension, facingLocation?: Vector3, keepVelocity?: boolean, rotation?: Vector2}
export interface TitleDisplayOptions {fadeInDuration: number, fadeOutDuration: number, stayDuration: number, subtitle?: RawMessage | string[] | RawMessage | string}
export interface Vector2 {x: number, y: number}
export interface Vector3 {x: number, y: number, z: number}
export interface WorldSoundOptions {pitch?: number, volume?: number}
export class CommandError extends Error { private constructor() }
export class LocationInUnloadedChunkError extends Error { private constructor() }
export class LocationOutOfWorldBoundariesError extends Error { private constructor() }
export const MoonPhaseCount = 8;
export const system: System;
export const world: World;