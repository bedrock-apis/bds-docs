import * as _00 from '@minecraft/common';
export enum BlockComponentTypes {Inventory = "minecraft:inventory", Piston = "minecraft:piston", Sign = "minecraft:sign"}
export enum BlockPistonState {Expanded = "Expanded", Expanding = "Expanding", Retracted = "Retracted", Retracting = "Retracting"}
export enum Direction {Down = "Down", East = "East", North = "North", South = "South", Up = "Up", West = "West"}
export enum DisplaySlotId {BelowName = "BelowName", List = "List", Sidebar = "Sidebar"}
export enum DyeColor {Black = "Black", Blue = "Blue", Brown = "Brown", Cyan = "Cyan", Gray = "Gray", Green = "Green", LightBlue = "LightBlue", Lime = "Lime", Magenta = "Magenta", Orange = "Orange", Pink = "Pink", Purple = "Purple", Red = "Red", Silver = "Silver", White = "White", Yellow = "Yellow"}
export enum EasingType {InBack = "InBack", InBounce = "InBounce", InCirc = "InCirc", InCubic = "InCubic", InElastic = "InElastic", InExpo = "InExpo", InOutBack = "InOutBack", InOutBounce = "InOutBounce", InOutCirc = "InOutCirc", InOutCubic = "InOutCubic", InOutElastic = "InOutElastic", InOutExpo = "InOutExpo", InOutQuad = "InOutQuad", InOutQuart = "InOutQuart", InOutQuint = "InOutQuint", InOutSine = "InOutSine", InQuad = "InQuad", InQuart = "InQuart", InQuint = "InQuint", InSine = "InSine", Linear = "Linear", OutBack = "OutBack", OutBounce = "OutBounce", OutCirc = "OutCirc", OutCubic = "OutCubic", OutElastic = "OutElastic", OutExpo = "OutExpo", OutQuad = "OutQuad", OutQuart = "OutQuart", OutQuint = "OutQuint", OutSine = "OutSine", Spring = "Spring"}
export enum EntityComponentTypes {CanClimb = "minecraft:can_climb", CanFly = "minecraft:can_fly", CanPowerJump = "minecraft:can_power_jump", Color = "minecraft:color", Equippable = "minecraft:equippable", FireImmune = "minecraft:fire_immune", FloatsInLiquid = "minecraft:floats_in_liquid", FlyingSpeed = "minecraft:flying_speed", FrictionModifier = "minecraft:friction_modifier", GroundOffset = "minecraft:ground_offset", Healable = "minecraft:healable", Health = "minecraft:health", Inventory = "minecraft:inventory", IsBaby = "minecraft:is_baby", IsCharged = "minecraft:is_charged", IsChested = "minecraft:is_chested", IsDyeable = "minecraft:is_dyeable", IsHiddenWhenInvisible = "minecraft:is_hidden_when_invisible", IsIgnited = "minecraft:is_ignited", IsIllagerCaptain = "minecraft:is_illager_captain", IsSaddled = "minecraft:is_saddled", IsShaking = "minecraft:is_shaking", IsSheared = "minecraft:is_sheared", IsStackable = "minecraft:is_stackable", IsStunned = "minecraft:is_stunned", IsTamed = "minecraft:is_tamed", Item = "minecraft:item", MarkVariant = "minecraft:mark_variant", MovementAmphibious = "minecraft:movement.amphibious", MovementBasic = "minecraft:movement.basic", MovementFly = "minecraft:movement.fly", MovementGeneric = "minecraft:movement.generic", MovementHover = "minecraft:movement.hover", MovementJump = "minecraft:movement.jump", MovementSkip = "minecraft:movement.skip", OnFire = "minecraft:onfire", Projectile = "minecraft:projectile", PushThrough = "minecraft:push_through", Scale = "minecraft:scale", SkinId = "minecraft:skin_id", TypeFamily = "minecraft:type_family", Variant = "minecraft:variant", WantsJockey = "minecraft:wants_jockey"}
export enum EntityDamageCause {anvil = "anvil", blockExplosion = "blockExplosion", campfire = "campfire", charging = "charging", contact = "contact", drowning = "drowning", entityAttack = "entityAttack", entityExplosion = "entityExplosion", fall = "fall", fallingBlock = "fallingBlock", fire = "fire", fireTick = "fireTick", fireworks = "fireworks", flyIntoWall = "flyIntoWall", freezing = "freezing", lava = "lava", lightning = "lightning", magic = "magic", magma = "magma", none = "none", override = "override", piston = "piston", projectile = "projectile", ramAttack = "ramAttack", selfDestruct = "selfDestruct", sonicBoom = "sonicBoom", soulCampfire = "soulCampfire", stalactite = "stalactite", stalagmite = "stalagmite", starve = "starve", suffocation = "suffocation", suicide = "suicide", temperature = "temperature", thorns = "thorns", void = "void", wither = "wither"}
export enum EntityInitializationCause {Born = "Born", Event = "Event", Loaded = "Loaded", Spawned = "Spawned", Transformed = "Transformed"}
export enum EquipmentSlot {Chest = "Chest", Feet = "Feet", Head = "Head", Legs = "Legs", Mainhand = "Mainhand", Offhand = "Offhand"}
export enum FluidType {Lava = "Lava", Potion = "Potion", PowderSnow = "PowderSnow", Water = "Water"}
export enum GameMode {adventure = "adventure", creative = "creative", spectator = "spectator", survival = "survival"}
export enum ItemComponentTypes {Cooldown = "minecraft:cooldown", Durability = "minecraft:durability", Food = "minecraft:food"}
export enum ItemLockMode {inventory = "inventory", none = "none", slot = "slot"}
export enum MoonPhase {FirstQuarter = 2, FullMoon = 0, LastQuarter = 6, NewMoon = 4, WaningCrescent = 3, WaningGibbous = 1, WaxingCrescent = 5, WaxingGibbous = 7}
export enum ObjectiveSortOrder {Ascending = 0, Descending = 1}
export enum ScoreboardIdentityType {Entity = "Entity", FakePlayer = "FakePlayer", Player = "Player"}
export enum ScriptEventSource {Block = "Block", Entity = "Entity", NPCDialogue = "NPCDialogue", Server = "Server"}
export enum SignSide {Back = "Back", Front = "Front"}
export enum StructureAnimationMode {Blocks = "Blocks", Layers = "Layers", None = "None"}
export enum StructureMirrorAxis {None = "None", X = "X", XZ = "XZ", Z = "Z"}
export enum StructureRotation {None = "None", Rotate180 = "Rotate180", Rotate270 = "Rotate270", Rotate90 = "Rotate90"}
export enum StructureSaveMode {Memory = "Memory", World = "World"}
export enum TimeOfDay {Day = 1000, Midnight = 18000, Night = 13000, Noon = 6000, Sunrise = 23000, Sunset = 12000}
export enum WeatherType {Clear = "Clear", Rain = "Rain", Thunder = "Thunder"}
export class Block { private constructor(); readonly dimension: Dimension; readonly isAir: boolean; readonly isLiquid: boolean; readonly location: Vector3; readonly permutation: BlockPermutation; readonly x: number; readonly y: number; readonly z: number; above(steps?: number): Block; below(steps?: number): Block; bottomCenter(): Vector3; center(): Vector3; east(steps?: number): Block; getComponent(componentId: string): BlockComponent; getItemStack(amount?: number, withData?: boolean): ItemStack; getTags(): string[]; hasTag(tag: string): boolean; isValid(): boolean; north(steps?: number): Block; offset(offset: Vector3): Block; setPermutation(permutation: BlockPermutation): void; south(steps?: number): Block; west(steps?: number): Block;}
//@ts-ignore allow class inheritance for native classes
export class BlockComponent extends Component{ private constructor(); readonly block: Block;}
export class BlockEvent { private constructor(); readonly block: Block; readonly dimension: Dimension;}
//@ts-ignore allow class inheritance for native classes
export class BlockInventoryComponent extends BlockComponent{ private constructor(); static readonly componentId: "minecraft:inventory"; readonly container?: Container;}
export class BlockPermutation { private constructor(); static resolve(blockName: string, states?: Record<string,(boolean | number | string)>): BlockPermutation; getAllStates(): Record<string,(boolean | number | string)>; getItemStack(amount?: number): ItemStack; getState(stateName: string): (boolean | number | string); matches(blockName: string, states?: Record<string,(boolean | number | string)>): boolean; withState(name: string, value: (boolean | number | string)): BlockPermutation;}
//@ts-ignore allow class inheritance for native classes
export class BlockPistonComponent extends BlockComponent{ private constructor(); static readonly componentId: "minecraft:piston"; readonly isMoving: boolean; readonly state: BlockPistonState; getAttachedBlocks(): Block[]; getAttachedBlocksLocations(): Vector3[];}
//@ts-ignore allow class inheritance for native classes
export class BlockSignComponent extends BlockComponent{ private constructor(); static readonly componentId: "minecraft:sign"; readonly isWaxed: boolean; getRawText(side: SignSide): RawText; getText(side: SignSide): string; getTextDyeColor(side: SignSide): DyeColor; setText(message: (RawMessage | RawText | string), side: SignSide): void; setTextDyeColor(color?: DyeColor, side?: SignSide): void; setWaxed(waxed: boolean): void;}
export class BlockStates { private constructor(); static get(stateName: string): BlockStateType; static getAll(): BlockStateType[];}
export class BlockStateType { private constructor(); readonly id: string; readonly validValues: (boolean | number | string)[];}
export class BlockType { private constructor();}
//@ts-ignore allow class inheritance for native classes
export class ButtonPushAfterEvent extends BlockEvent{ private constructor(); readonly source: Entity;}
//@ts-ignore allow class inheritance for native classes
export class ButtonPushAfterEventSignal extends IButtonPushAfterEventSignal{ private constructor();}
export class Camera { private constructor(); clear(): void; fade(fadeCameraOptions?: CameraFadeOptions): void; setCamera(cameraPreset: string, setOptions?: (CameraDefaultOptions | CameraSetFacingOptions | CameraSetLocationOptions | CameraSetPosOptions | CameraSetRotOptions)): void;}
export class CommandResult { private constructor(); readonly successCount: number;}
export class Component { private constructor(); readonly typeId: string; isValid(): boolean;}
export class Container { private constructor(); readonly emptySlotsCount: number; readonly size: number; addItem(itemStack: ItemStack): ItemStack; clearAll(): void; getItem(slot: number): ItemStack; getSlot(slot: number): ContainerSlot; isValid(): boolean; moveItem(fromSlot: number, toSlot: number, toContainer: Container): void; setItem(slot: number, itemStack?: ItemStack): void; swapItems(slot: number, otherSlot: number, otherContainer: Container): void; transferItem(fromSlot: number, toContainer: Container): ItemStack;}
export class ContainerSlot { private constructor(); amount: number; readonly isStackable: boolean; keepOnDeath: boolean; lockMode: ItemLockMode; readonly maxAmount: number; nameTag?: string; readonly 'type': ItemType; readonly typeId: string; clearDynamicProperties(): void; getCanDestroy(): string[]; getCanPlaceOn(): string[]; getDynamicProperty(identifier: string): (boolean | number | number | string | Vector3); getDynamicPropertyIds(): string[]; getDynamicPropertyTotalByteCount(): number; getItem(): ItemStack; getLore(): string[]; getTags(): string[]; hasItem(): boolean; hasTag(tag: string): boolean; isStackableWith(itemStack: ItemStack): boolean; isValid(): boolean; setCanDestroy(blockIdentifiers?: string[]): void; setCanPlaceOn(blockIdentifiers?: string[]): void; setDynamicProperty(identifier: string, value?: (boolean | number | number | string | Vector3)): void; setItem(itemStack?: ItemStack): void; setLore(loreList?: string[]): void;}
export class DataDrivenEntityTriggerAfterEvent { private constructor(); readonly entity: Entity; readonly eventId: string; getModifiers(): DefinitionModifier[];}
export class DataDrivenEntityTriggerAfterEventSignal { private constructor(); subscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent)=>undefined, options?: EntityDataDrivenTriggerEventOptions): (arg0: DataDrivenEntityTriggerAfterEvent)=>undefined; unsubscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent)=>undefined): void;}
export class Dimension { private constructor(); readonly heightRange: _00.NumberRange; readonly id: string; createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): boolean; getBlock(location: Vector3): Block; getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit; getEntities(options?: EntityQueryOptions): Entity[]; getEntitiesAtBlockLocation(location: Vector3): Entity[]; getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[]; getPlayers(options?: EntityQueryOptions): Player[]; runCommand(commandString: string): CommandResult; runCommandAsync(commandString: string): Promise<CommandResult>; setWeather(weatherType: WeatherType, duration?: number): void; spawnEntity(identifier: string, location: Vector3): Entity; spawnItem(itemStack: ItemStack, location: Vector3): Entity; spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;}
export class DimensionType { private constructor(); readonly typeId: string;}
export class DimensionTypes { private constructor(); static get(dimensionTypeId: string): DimensionType; static getAll(): DimensionType[];}
export class Effect { private constructor(); readonly amplifier: number; readonly displayName: string; readonly duration: number; readonly typeId: string; isValid(): boolean;}
export class EffectAddAfterEvent { private constructor(); readonly effect: Effect; readonly entity: Entity;}
export class EffectAddAfterEventSignal { private constructor(); subscribe(callback: (arg0: EffectAddAfterEvent)=>undefined, options?: EntityEventOptions): (arg0: EffectAddAfterEvent)=>undefined; unsubscribe(callback: (arg0: EffectAddAfterEvent)=>undefined): void;}
export class EffectAddBeforeEvent { private constructor(); cancel: boolean; duration: number; readonly effectType: string; readonly entity: Entity;}
export class EffectAddBeforeEventSignal { private constructor(); subscribe(callback: (arg0: EffectAddBeforeEvent)=>undefined): (arg0: EffectAddBeforeEvent)=>undefined; unsubscribe(callback: (arg0: EffectAddBeforeEvent)=>undefined): void;}
export class EffectType { private constructor(); getName(): string;}
export class EffectTypes { private constructor(); static get(identifier: string): EffectType; static getAll(): EffectType[];}
export class Entity { private constructor(); readonly dimension: Dimension; readonly id: string; readonly isClimbing: boolean; readonly isFalling: boolean; readonly isInWater: boolean; readonly isOnGround: boolean; readonly isSleeping: boolean; isSneaking: boolean; readonly isSprinting: boolean; readonly isSwimming: boolean; readonly location: Vector3; nameTag: string; readonly scoreboardIdentity?: ScoreboardIdentity; readonly typeId: string; addEffect(effectType: (EffectType | string), duration: number, options?: EntityEffectOptions): Effect; addTag(tag: string): boolean; applyDamage(amount: number, options?: (EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions)): boolean; applyImpulse(vector: Vector3): void; applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void; clearDynamicProperties(): void; clearVelocity(): void; extinguishFire(useEffects?: boolean): boolean; getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit; getComponent(componentId: string): EntityComponent; getComponents(): EntityComponent[]; getDynamicProperty(identifier: string): (boolean | number | number | string | Vector3); getDynamicPropertyIds(): string[]; getDynamicPropertyTotalByteCount(): number; getEffect(effectType: (EffectType | string)): Effect; getEffects(): Effect[]; getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[]; getHeadLocation(): Vector3; getProperty(identifier: string): (boolean | number | string); getRotation(): Vector2; getTags(): string[]; getVelocity(): Vector3; getViewDirection(): Vector3; hasComponent(componentId: string): boolean; hasTag(tag: string): boolean; isValid(): boolean; kill(): boolean; matches(options: EntityQueryOptions): boolean; playAnimation(animationName: string, options?: PlayAnimationOptions): void; remove(): void; removeEffect(effectType: (EffectType | string)): boolean; removeTag(tag: string): boolean; resetProperty(identifier: string): (boolean | number | string); runCommand(commandString: string): CommandResult; runCommandAsync(commandString: string): Promise<CommandResult>; setDynamicProperty(identifier: string, value?: (boolean | number | number | string | Vector3)): void; setOnFire(seconds: number, useEffects?: boolean): boolean; setProperty(identifier: string, value: (boolean | number | string)): void; setRotation(rotation: Vector2): void; teleport(location: Vector3, teleportOptions?: TeleportOptions): void; triggerEvent(eventName: string): void; tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean;}
//@ts-ignore allow class inheritance for native classes
export class EntityAttributeComponent extends EntityComponent{ private constructor(); readonly currentValue: number; readonly defaultValue: number; readonly effectiveMax: number; readonly effectiveMin: number; resetToDefaultValue(): void; resetToMaxValue(): void; resetToMinValue(): void; setCurrentValue(value: number): boolean;}
//@ts-ignore allow class inheritance for native classes
export class EntityBaseMovementComponent extends EntityComponent{ private constructor(); readonly maxTurn: number;}
//@ts-ignore allow class inheritance for native classes
export class EntityCanClimbComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:can_climb";}
//@ts-ignore allow class inheritance for native classes
export class EntityCanFlyComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:can_fly";}
//@ts-ignore allow class inheritance for native classes
export class EntityCanPowerJumpComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:can_power_jump";}
//@ts-ignore allow class inheritance for native classes
export class EntityColorComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:color"; value: number;}
//@ts-ignore allow class inheritance for native classes
export class EntityComponent extends Component{ private constructor();}
export class EntityDieAfterEvent { private constructor(); readonly damageSource: EntityDamageSource; readonly deadEntity: Entity;}
export class EntityDieAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityDieAfterEvent)=>undefined, options?: EntityEventOptions): (arg0: EntityDieAfterEvent)=>undefined; unsubscribe(callback: (arg0: EntityDieAfterEvent)=>undefined): void;}
//@ts-ignore allow class inheritance for native classes
export class EntityEquippableComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:equippable"; getEquipment(equipmentSlot: EquipmentSlot): ItemStack; getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot; setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean;}
//@ts-ignore allow class inheritance for native classes
export class EntityFireImmuneComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:fire_immune";}
//@ts-ignore allow class inheritance for native classes
export class EntityFloatsInLiquidComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:floats_in_liquid";}
//@ts-ignore allow class inheritance for native classes
export class EntityFlyingSpeedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:flying_speed"; value: number;}
//@ts-ignore allow class inheritance for native classes
export class EntityFrictionModifierComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:friction_modifier"; value: number;}
//@ts-ignore allow class inheritance for native classes
export class EntityGroundOffsetComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:ground_offset"; value: number;}
//@ts-ignore allow class inheritance for native classes
export class EntityHealableComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:healable"; readonly forceUse: boolean; getFeedItems(): FeedItem[];}
export class EntityHealthChangedAfterEvent { private constructor(); readonly entity: Entity; readonly newValue: number; readonly oldValue: number;}
export class EntityHealthChangedAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityHealthChangedAfterEvent)=>undefined, options?: EntityEventOptions): (arg0: EntityHealthChangedAfterEvent)=>undefined; unsubscribe(callback: (arg0: EntityHealthChangedAfterEvent)=>undefined): void;}
//@ts-ignore allow class inheritance for native classes
export class EntityHealthComponent extends EntityAttributeComponent{ private constructor(); static readonly componentId: "minecraft:health";}
export class EntityHitBlockAfterEvent { private constructor(); readonly blockFace: Direction; readonly damagingEntity: Entity; readonly hitBlock: Block;}
export class EntityHitBlockAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityHitBlockAfterEvent)=>undefined, options?: EntityEventOptions): (arg0: EntityHitBlockAfterEvent)=>undefined; unsubscribe(callback: (arg0: EntityHitBlockAfterEvent)=>undefined): void;}
export class EntityHitEntityAfterEvent { private constructor(); readonly damagingEntity: Entity; readonly hitEntity: Entity;}
export class EntityHitEntityAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityHitEntityAfterEvent)=>undefined, options?: EntityEventOptions): (arg0: EntityHitEntityAfterEvent)=>undefined; unsubscribe(callback: (arg0: EntityHitEntityAfterEvent)=>undefined): void;}
export class EntityHurtAfterEvent { private constructor(); readonly damage: number; readonly damageSource: EntityDamageSource; readonly hurtEntity: Entity;}
export class EntityHurtAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityHurtAfterEvent)=>undefined, options?: EntityEventOptions): (arg0: EntityHurtAfterEvent)=>undefined; unsubscribe(callback: (arg0: EntityHurtAfterEvent)=>undefined): void;}
//@ts-ignore allow class inheritance for native classes
export class EntityInventoryComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:inventory"; readonly additionalSlotsPerStrength: number; readonly canBeSiphonedFrom: boolean; readonly container?: Container; readonly containerType: string; readonly inventorySize: number; readonly private: boolean; readonly restrictToOwner: boolean;}
//@ts-ignore allow class inheritance for native classes
export class EntityIsBabyComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_baby";}
//@ts-ignore allow class inheritance for native classes
export class EntityIsChargedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_charged";}
//@ts-ignore allow class inheritance for native classes
export class EntityIsChestedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_chested";}
//@ts-ignore allow class inheritance for native classes
export class EntityIsDyeableComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_dyeable";}
//@ts-ignore allow class inheritance for native classes
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_hidden_when_invisible";}
//@ts-ignore allow class inheritance for native classes
export class EntityIsIgnitedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_ignited";}
//@ts-ignore allow class inheritance for native classes
export class EntityIsIllagerCaptainComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_illager_captain";}
//@ts-ignore allow class inheritance for native classes
export class EntityIsSaddledComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_saddled";}
//@ts-ignore allow class inheritance for native classes
export class EntityIsShakingComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_shaking";}
//@ts-ignore allow class inheritance for native classes
export class EntityIsShearedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_sheared";}
//@ts-ignore allow class inheritance for native classes
export class EntityIsStackableComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_stackable";}
//@ts-ignore allow class inheritance for native classes
export class EntityIsStunnedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_stunned";}
//@ts-ignore allow class inheritance for native classes
export class EntityIsTamedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_tamed";}
//@ts-ignore allow class inheritance for native classes
export class EntityItemComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:item"; readonly itemStack: ItemStack;}
export class EntityLoadAfterEvent { private constructor(); entity: Entity;}
export class EntityLoadAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityLoadAfterEvent)=>undefined): (arg0: EntityLoadAfterEvent)=>undefined; unsubscribe(callback: (arg0: EntityLoadAfterEvent)=>undefined): void;}
//@ts-ignore allow class inheritance for native classes
export class EntityMarkVariantComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:mark_variant"; value: number;}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.amphibious";}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementBasicComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.basic";}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementFlyComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.fly";}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementGenericComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.generic";}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementHoverComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.hover";}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementJumpComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.jump";}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementSkipComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.skip";}
//@ts-ignore allow class inheritance for native classes
export class EntityOnFireComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:onfire"; readonly onFireTicksRemaining: number;}
//@ts-ignore allow class inheritance for native classes
export class EntityProjectileComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:projectile"; airInertia: number; catchFireOnHurt: boolean; critParticlesOnProjectileHurt: boolean; destroyOnProjectileHurt: boolean; gravity: number; hitEntitySound?: string; hitGroundSound?: string; hitParticle?: string; lightningStrikeOnHit: boolean; liquidInertia: number; onFireTime: number; owner?: Entity; shouldBounceOnHit: boolean; stopOnHit: boolean; shoot(velocity: Vector3, options?: ProjectileShootOptions): void;}
//@ts-ignore allow class inheritance for native classes
export class EntityPushThroughComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:push_through"; value: number;}
export class EntityRemoveAfterEvent { private constructor(); readonly removedEntityId: string; readonly typeId: string;}
export class EntityRemoveAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityRemoveAfterEvent)=>undefined, options?: EntityEventOptions): (arg0: EntityRemoveAfterEvent)=>undefined; unsubscribe(callback: (arg0: EntityRemoveAfterEvent)=>undefined): void;}
export class EntityRemoveBeforeEvent { private constructor(); readonly removedEntity: Entity;}
export class EntityRemoveBeforeEventSignal { private constructor(); subscribe(callback: (arg0: EntityRemoveBeforeEvent)=>undefined): (arg0: EntityRemoveBeforeEvent)=>undefined; unsubscribe(callback: (arg0: EntityRemoveBeforeEvent)=>undefined): void;}
//@ts-ignore allow class inheritance for native classes
export class EntityScaleComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:scale"; value: number;}
//@ts-ignore allow class inheritance for native classes
export class EntitySkinIdComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:skin_id"; value: number;}
export class EntitySpawnAfterEvent { private constructor(); readonly cause: EntityInitializationCause; entity: Entity;}
export class EntitySpawnAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntitySpawnAfterEvent)=>undefined): (arg0: EntitySpawnAfterEvent)=>undefined; unsubscribe(callback: (arg0: EntitySpawnAfterEvent)=>undefined): void;}
export class EntityType { private constructor(); readonly id: string;}
//@ts-ignore allow class inheritance for native classes
export class EntityTypeFamilyComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:type_family"; getTypeFamilies(): string[]; hasTypeFamily(typeFamily: string): boolean;}
export class EntityTypes { private constructor(); static get(identifier: string): EntityType; static getAll(): EntityType[];}
//@ts-ignore allow class inheritance for native classes
export class EntityVariantComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:variant"; readonly value: number;}
//@ts-ignore allow class inheritance for native classes
export class EntityWantsJockeyComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:wants_jockey";}
export class ExplosionAfterEvent { private constructor(); readonly dimension: Dimension; readonly source?: Entity; getImpactedBlocks(): Block[];}
export class ExplosionAfterEventSignal { private constructor(); subscribe(callback: (arg0: ExplosionAfterEvent)=>undefined): (arg0: ExplosionAfterEvent)=>undefined; unsubscribe(callback: (arg0: ExplosionAfterEvent)=>undefined): void;}
//@ts-ignore allow class inheritance for native classes
export class ExplosionBeforeEvent extends ExplosionAfterEvent{ private constructor(); cancel: boolean; setImpactedBlocks(blocks: Block[]): void;}
export class ExplosionBeforeEventSignal { private constructor(); subscribe(callback: (arg0: ExplosionBeforeEvent)=>undefined): (arg0: ExplosionBeforeEvent)=>undefined; unsubscribe(callback: (arg0: ExplosionBeforeEvent)=>undefined): void;}
export class FeedItem { private constructor(); readonly healAmount: number; readonly item: string; getEffects(): FeedItemEffect[];}
export class FeedItemEffect { private constructor(); readonly amplifier: number; readonly chance: number; readonly duration: number; readonly name: string;}
export class IButtonPushAfterEventSignal { private constructor(); subscribe(callback: (arg0: ButtonPushAfterEvent)=>undefined): (arg0: ButtonPushAfterEvent)=>undefined; unsubscribe(callback: (arg0: ButtonPushAfterEvent)=>undefined): void;}
export class ILeverActionAfterEventSignal { private constructor(); subscribe(callback: (arg0: LeverActionAfterEvent)=>undefined): (arg0: LeverActionAfterEvent)=>undefined; unsubscribe(callback: (arg0: LeverActionAfterEvent)=>undefined): void;}
export class IPlayerJoinAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerJoinAfterEvent)=>undefined): (arg0: PlayerJoinAfterEvent)=>undefined; unsubscribe(callback: (arg0: PlayerJoinAfterEvent)=>undefined): void;}
export class IPlayerLeaveAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerLeaveAfterEvent)=>undefined): (arg0: PlayerLeaveAfterEvent)=>undefined; unsubscribe(callback: (arg0: PlayerLeaveAfterEvent)=>undefined): void;}
export class IPlayerSpawnAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerSpawnAfterEvent)=>undefined): (arg0: PlayerSpawnAfterEvent)=>undefined; unsubscribe(callback: (arg0: PlayerSpawnAfterEvent)=>undefined): void;}
export class ItemCompleteUseAfterEvent { private constructor(); readonly itemStack: ItemStack; readonly source: Player; readonly useDuration: number;}
export class ItemCompleteUseAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemCompleteUseAfterEvent)=>undefined): (arg0: ItemCompleteUseAfterEvent)=>undefined; unsubscribe(callback: (arg0: ItemCompleteUseAfterEvent)=>undefined): void;}
//@ts-ignore allow class inheritance for native classes
export class ItemComponent extends Component{ private constructor();}
//@ts-ignore allow class inheritance for native classes
export class ItemCooldownComponent extends ItemComponent{ private constructor(); static readonly componentId: "minecraft:cooldown"; readonly cooldownCategory: string; readonly cooldownTicks: number; getCooldownTicksRemaining(player: Player): number; isCooldownCategory(cooldownCategory: string): boolean; startCooldown(player: Player): void;}
//@ts-ignore allow class inheritance for native classes
export class ItemDurabilityComponent extends ItemComponent{ private constructor(); static readonly componentId: "minecraft:durability"; damage: number; readonly maxDurability: number; getDamageChance(unbreakingEnchantmentLevel: number): number; getDamageChanceRange(): _00.NumberRange;}
//@ts-ignore allow class inheritance for native classes
export class ItemFoodComponent extends ItemComponent{ private constructor(); static readonly componentId: "minecraft:food"; readonly canAlwaysEat: boolean; readonly nutrition: number; readonly saturationModifier: number; readonly usingConvertsTo: string;}
export class ItemReleaseUseAfterEvent { private constructor(); readonly itemStack?: ItemStack; readonly source: Player; readonly useDuration: number;}
export class ItemReleaseUseAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemReleaseUseAfterEvent)=>undefined): (arg0: ItemReleaseUseAfterEvent)=>undefined; unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent)=>undefined): void;}
export class ItemStack { constructor(itemType: (ItemType | string), amount?: number); amount: number; readonly isStackable: boolean; keepOnDeath: boolean; lockMode: ItemLockMode; readonly maxAmount: number; nameTag?: string; readonly 'type': ItemType; readonly typeId: string; clearDynamicProperties(): void; clone(): ItemStack; getCanDestroy(): string[]; getCanPlaceOn(): string[]; getComponent(componentId: string): ItemComponent; getComponents(): ItemComponent[]; getDynamicProperty(identifier: string): (boolean | number | number | string | Vector3); getDynamicPropertyIds(): string[]; getDynamicPropertyTotalByteCount(): number; getLore(): string[]; getTags(): string[]; hasComponent(componentId: string): boolean; hasTag(tag: string): boolean; isStackableWith(itemStack: ItemStack): boolean; setCanDestroy(blockIdentifiers?: string[]): void; setCanPlaceOn(blockIdentifiers?: string[]): void; setDynamicProperty(identifier: string, value?: (boolean | number | number | string | Vector3)): void; setLore(loreList?: string[]): void;}
export class ItemStartUseAfterEvent { private constructor(); readonly itemStack: ItemStack; readonly source: Player; readonly useDuration: number;}
export class ItemStartUseAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemStartUseAfterEvent)=>undefined): (arg0: ItemStartUseAfterEvent)=>undefined; unsubscribe(callback: (arg0: ItemStartUseAfterEvent)=>undefined): void;}
export class ItemStartUseOnAfterEvent { private constructor(); readonly block: Block; readonly blockFace: Direction; readonly itemStack?: ItemStack; readonly source: Player;}
export class ItemStartUseOnAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemStartUseOnAfterEvent)=>undefined): (arg0: ItemStartUseOnAfterEvent)=>undefined; unsubscribe(callback: (arg0: ItemStartUseOnAfterEvent)=>undefined): void;}
export class ItemStopUseAfterEvent { private constructor(); readonly itemStack?: ItemStack; readonly source: Player; readonly useDuration: number;}
export class ItemStopUseAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemStopUseAfterEvent)=>undefined): (arg0: ItemStopUseAfterEvent)=>undefined; unsubscribe(callback: (arg0: ItemStopUseAfterEvent)=>undefined): void;}
export class ItemStopUseOnAfterEvent { private constructor(); readonly block: Block; readonly itemStack?: ItemStack; readonly source: Player;}
export class ItemStopUseOnAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemStopUseOnAfterEvent)=>undefined): (arg0: ItemStopUseOnAfterEvent)=>undefined; unsubscribe(callback: (arg0: ItemStopUseOnAfterEvent)=>undefined): void;}
export class ItemType { private constructor(); readonly id: string;}
export class ItemUseAfterEvent { private constructor(); itemStack: ItemStack; readonly source: Player;}
export class ItemUseAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemUseAfterEvent)=>undefined): (arg0: ItemUseAfterEvent)=>undefined; unsubscribe(callback: (arg0: ItemUseAfterEvent)=>undefined): void;}
//@ts-ignore allow class inheritance for native classes
export class ItemUseBeforeEvent extends ItemUseAfterEvent{ private constructor(); cancel: boolean;}
export class ItemUseBeforeEventSignal { private constructor(); subscribe(callback: (arg0: ItemUseBeforeEvent)=>undefined): (arg0: ItemUseBeforeEvent)=>undefined; unsubscribe(callback: (arg0: ItemUseBeforeEvent)=>undefined): void;}
export class ItemUseOnAfterEvent { private constructor(); readonly block: Block; readonly blockFace: Direction; readonly faceLocation: Vector3; readonly itemStack: ItemStack; readonly source: Player;}
export class ItemUseOnAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemUseOnAfterEvent)=>undefined): (arg0: ItemUseOnAfterEvent)=>undefined; unsubscribe(callback: (arg0: ItemUseOnAfterEvent)=>undefined): void;}
//@ts-ignore allow class inheritance for native classes
export class ItemUseOnBeforeEvent extends ItemUseOnAfterEvent{ private constructor(); cancel: boolean;}
export class ItemUseOnBeforeEventSignal { private constructor(); subscribe(callback: (arg0: ItemUseOnBeforeEvent)=>undefined): (arg0: ItemUseOnBeforeEvent)=>undefined; unsubscribe(callback: (arg0: ItemUseOnBeforeEvent)=>undefined): void;}
//@ts-ignore allow class inheritance for native classes
export class LeverActionAfterEvent extends BlockEvent{ private constructor(); readonly isPowered: boolean; readonly player: Player;}
//@ts-ignore allow class inheritance for native classes
export class LeverActionAfterEventSignal extends ILeverActionAfterEventSignal{ private constructor();}
export class MinecraftDimensionTypes { private constructor(); static readonly nether: "minecraft:nether"; static readonly overworld: "minecraft:overworld"; static readonly theEnd: "minecraft:the_end";}
export class MolangVariableMap { constructor(); setColorRGB(variableName: string, color: RGB): void; setColorRGBA(variableName: string, color: RGBA): void; setFloat(variableName: string, number: number): void; setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void; setVector3(variableName: string, vector: Vector3): void;}
//@ts-ignore allow class inheritance for native classes
export class PistonActivateAfterEvent extends BlockEvent{ private constructor(); readonly isExpanding: boolean; readonly piston: BlockPistonComponent;}
export class PistonActivateAfterEventSignal { private constructor(); subscribe(callback: (arg0: PistonActivateAfterEvent)=>undefined): (arg0: PistonActivateAfterEvent)=>undefined; unsubscribe(callback: (arg0: PistonActivateAfterEvent)=>undefined): void;}
//@ts-ignore allow class inheritance for native classes
export class Player extends Entity{ private constructor(); readonly camera: Camera; readonly isEmoting: boolean; readonly isFlying: boolean; readonly isGliding: boolean; readonly isJumping: boolean; readonly level: number; readonly name: string; readonly onScreenDisplay: ScreenDisplay; readonly totalXpNeededForNextLevel: number; readonly xpEarnedAtCurrentLevel: number; addExperience(amount: number): number; addLevels(amount: number): number; getSpawnPoint(): DimensionLocation; getTotalXp(): number; playMusic(trackId: string, musicOptions?: MusicOptions): void; playSound(soundId: string, soundOptions?: PlayerSoundOptions): void; queueMusic(trackId: string, musicOptions?: MusicOptions): void; resetLevel(): void; sendMessage(message: ((RawMessage | string)[] | RawMessage | string)): void; setSpawnPoint(spawnPoint?: DimensionLocation): void; stopMusic(): void;}
//@ts-ignore allow class inheritance for native classes
export class PlayerBreakBlockAfterEvent extends BlockEvent{ private constructor(); readonly brokenBlockPermutation: BlockPermutation; readonly itemStackAfterBreak?: ItemStack; readonly itemStackBeforeBreak?: ItemStack; readonly player: Player;}
export class PlayerBreakBlockAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerBreakBlockAfterEvent)=>undefined, options?: BlockEventOptions): (arg0: PlayerBreakBlockAfterEvent)=>undefined; unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent)=>undefined): void;}
//@ts-ignore allow class inheritance for native classes
export class PlayerBreakBlockBeforeEvent extends BlockEvent{ private constructor(); cancel: boolean; itemStack?: ItemStack; readonly player: Player;}
export class PlayerBreakBlockBeforeEventSignal { private constructor(); subscribe(callback: (arg0: PlayerBreakBlockBeforeEvent)=>undefined, options?: BlockEventOptions): (arg0: PlayerBreakBlockBeforeEvent)=>undefined; unsubscribe(callback: (arg0: PlayerBreakBlockBeforeEvent)=>undefined): void;}
export class PlayerDimensionChangeAfterEvent { private constructor(); readonly fromDimension: Dimension; readonly fromLocation: Vector3; readonly player: Player; readonly toDimension: Dimension; readonly toLocation: Vector3;}
export class PlayerDimensionChangeAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerDimensionChangeAfterEvent)=>undefined): (arg0: PlayerDimensionChangeAfterEvent)=>undefined; unsubscribe(callback: (arg0: PlayerDimensionChangeAfterEvent)=>undefined): void;}
export class PlayerInteractWithBlockAfterEvent { private constructor(); readonly block: Block; readonly blockFace: Direction; readonly faceLocation: Vector3; readonly itemStack?: ItemStack; readonly player: Player;}
export class PlayerInteractWithBlockAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent)=>undefined): (arg0: PlayerInteractWithBlockAfterEvent)=>undefined; unsubscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent)=>undefined): void;}
export class PlayerInteractWithBlockBeforeEvent { private constructor(); readonly block: Block; readonly blockFace: Direction; cancel: boolean; readonly faceLocation: Vector3; readonly itemStack?: ItemStack; readonly player: Player;}
export class PlayerInteractWithBlockBeforeEventSignal { private constructor(); subscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent)=>undefined): (arg0: PlayerInteractWithBlockBeforeEvent)=>undefined; unsubscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent)=>undefined): void;}
export class PlayerInteractWithEntityAfterEvent { private constructor(); readonly itemStack?: ItemStack; readonly player: Player; readonly target: Entity;}
export class PlayerInteractWithEntityAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent)=>undefined): (arg0: PlayerInteractWithEntityAfterEvent)=>undefined; unsubscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent)=>undefined): void;}
export class PlayerInteractWithEntityBeforeEvent { private constructor(); cancel: boolean; readonly itemStack?: ItemStack; readonly player: Player; readonly target: Entity;}
export class PlayerInteractWithEntityBeforeEventSignal { private constructor(); subscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent)=>undefined): (arg0: PlayerInteractWithEntityBeforeEvent)=>undefined; unsubscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent)=>undefined): void;}
export class PlayerJoinAfterEvent { private constructor(); readonly playerId: string; readonly playerName: string;}
//@ts-ignore allow class inheritance for native classes
export class PlayerJoinAfterEventSignal extends IPlayerJoinAfterEventSignal{ private constructor();}
export class PlayerLeaveAfterEvent { private constructor(); readonly playerId: string; readonly playerName: string;}
//@ts-ignore allow class inheritance for native classes
export class PlayerLeaveAfterEventSignal extends IPlayerLeaveAfterEventSignal{ private constructor();}
export class PlayerLeaveBeforeEvent { private constructor(); readonly player: Player;}
export class PlayerLeaveBeforeEventSignal { private constructor(); subscribe(callback: (arg0: PlayerLeaveBeforeEvent)=>undefined): (arg0: PlayerLeaveBeforeEvent)=>undefined; unsubscribe(callback: (arg0: PlayerLeaveBeforeEvent)=>undefined): void;}
//@ts-ignore allow class inheritance for native classes
export class PlayerPlaceBlockAfterEvent extends BlockEvent{ private constructor(); readonly player: Player;}
export class PlayerPlaceBlockAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerPlaceBlockAfterEvent)=>undefined, options?: BlockEventOptions): (arg0: PlayerPlaceBlockAfterEvent)=>undefined; unsubscribe(callback: (arg0: PlayerPlaceBlockAfterEvent)=>undefined): void;}
export class PlayerSpawnAfterEvent { private constructor(); initialSpawn: boolean; player: Player;}
//@ts-ignore allow class inheritance for native classes
export class PlayerSpawnAfterEventSignal extends IPlayerSpawnAfterEventSignal{ private constructor();}
//@ts-ignore allow class inheritance for native classes
export class PressurePlatePopAfterEvent extends BlockEvent{ private constructor(); readonly previousRedstonePower: number; readonly redstonePower: number;}
export class PressurePlatePopAfterEventSignal { private constructor(); subscribe(callback: (arg0: PressurePlatePopAfterEvent)=>undefined): (arg0: PressurePlatePopAfterEvent)=>undefined; unsubscribe(callback: (arg0: PressurePlatePopAfterEvent)=>undefined): void;}
//@ts-ignore allow class inheritance for native classes
export class PressurePlatePushAfterEvent extends BlockEvent{ private constructor(); readonly previousRedstonePower: number; readonly redstonePower: number; readonly source: Entity;}
export class PressurePlatePushAfterEventSignal { private constructor(); subscribe(callback: (arg0: PressurePlatePushAfterEvent)=>undefined): (arg0: PressurePlatePushAfterEvent)=>undefined; unsubscribe(callback: (arg0: PressurePlatePushAfterEvent)=>undefined): void;}
export class ProjectileHitBlockAfterEvent { private constructor(); readonly dimension: Dimension; readonly hitVector: Vector3; readonly location: Vector3; readonly projectile: Entity; readonly source?: Entity; getBlockHit(): BlockHitInformation;}
export class ProjectileHitBlockAfterEventSignal { private constructor(); subscribe(callback: (arg0: ProjectileHitBlockAfterEvent)=>undefined): (arg0: ProjectileHitBlockAfterEvent)=>undefined; unsubscribe(callback: (arg0: ProjectileHitBlockAfterEvent)=>undefined): void;}
export class ProjectileHitEntityAfterEvent { private constructor(); readonly dimension: Dimension; readonly hitVector: Vector3; readonly location: Vector3; readonly projectile: Entity; readonly source?: Entity; getEntityHit(): EntityHitInformation;}
export class ProjectileHitEntityAfterEventSignal { private constructor(); subscribe(callback: (arg0: ProjectileHitEntityAfterEvent)=>undefined): (arg0: ProjectileHitEntityAfterEvent)=>undefined; unsubscribe(callback: (arg0: ProjectileHitEntityAfterEvent)=>undefined): void;}
export class Scoreboard { private constructor(); addObjective(objectiveId: string, displayName?: string): ScoreboardObjective; clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective; getObjective(objectiveId: string): ScoreboardObjective; getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions; getObjectives(): ScoreboardObjective[]; getParticipants(): ScoreboardIdentity[]; removeObjective(objectiveId: (ScoreboardObjective | string)): boolean; setObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId, objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions): ScoreboardObjective;}
export class ScoreboardIdentity { private constructor(); readonly displayName: string; readonly id: number; readonly 'type': ScoreboardIdentityType; getEntity(): Entity; isValid(): boolean;}
export class ScoreboardObjective { private constructor(); readonly displayName: string; readonly id: string; addScore(participant: (Entity | ScoreboardIdentity | string), scoreToAdd: number): number; getParticipants(): ScoreboardIdentity[]; getScore(participant: (Entity | ScoreboardIdentity | string)): number; getScores(): ScoreboardScoreInfo[]; hasParticipant(participant: (Entity | ScoreboardIdentity | string)): boolean; isValid(): boolean; removeParticipant(participant: (Entity | ScoreboardIdentity | string)): boolean; setScore(participant: (Entity | ScoreboardIdentity | string), score: number): void;}
export class ScoreboardScoreInfo { private constructor(); readonly participant: ScoreboardIdentity; readonly score: number;}
export class ScreenDisplay { private constructor(); isValid(): boolean; setActionBar(text: ((RawMessage | string)[] | RawMessage | string)): void; setTitle(title: ((RawMessage | string)[] | RawMessage | string), options?: TitleDisplayOptions): void; updateSubtitle(subtitle: ((RawMessage | string)[] | RawMessage | string)): void;}
export class ScriptEventCommandMessageAfterEvent { private constructor(); readonly id: string; readonly initiator?: Entity; readonly message: string; readonly sourceBlock?: Block; readonly sourceEntity?: Entity; readonly sourceType: ScriptEventSource;}
export class ScriptEventCommandMessageAfterEventSignal { private constructor(); subscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent)=>undefined, options?: ScriptEventMessageFilterOptions): (arg0: ScriptEventCommandMessageAfterEvent)=>undefined; unsubscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent)=>undefined): void;}
export class Structure { private constructor(); readonly id: string; readonly size: Vector3; getBlockPermutation(location: Vector3): BlockPermutation; getIsWaterlogged(location: Vector3): boolean; isValid(): boolean;}
export class StructureManager { private constructor(); createEmpty(identifier: string, size: Vector3, saveMode: StructureSaveMode): Structure; delete(structure: (string | Structure)): boolean; get(identifier: string): Structure; place(structure: (string | Structure), dimension: Dimension, location: Vector3, options?: StructurePlaceOptions): void;}
export class System { private constructor(); readonly afterEvents: SystemAfterEvents; readonly currentTick: number; clearRun(runId: number): void; run(callback: ()=>undefined): number; runInterval(callback: ()=>undefined, tickInterval?: number): number; runTimeout(callback: ()=>undefined, tickDelay?: number): number;}
export class SystemAfterEvents { private constructor(); readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;}
//@ts-ignore allow class inheritance for native classes
export class TargetBlockHitAfterEvent extends BlockEvent{ private constructor(); readonly hitVector: Vector3; readonly previousRedstonePower: number; readonly redstonePower: number; readonly source: Entity;}
export class TargetBlockHitAfterEventSignal { private constructor(); subscribe(callback: (arg0: TargetBlockHitAfterEvent)=>undefined): (arg0: TargetBlockHitAfterEvent)=>undefined; unsubscribe(callback: (arg0: TargetBlockHitAfterEvent)=>undefined): void;}
//@ts-ignore allow class inheritance for native classes
export class TripWireTripAfterEvent extends BlockEvent{ private constructor(); readonly isPowered: boolean; readonly sources: Entity[];}
export class TripWireTripAfterEventSignal { private constructor(); subscribe(callback: (arg0: TripWireTripAfterEvent)=>undefined): (arg0: TripWireTripAfterEvent)=>undefined; unsubscribe(callback: (arg0: TripWireTripAfterEvent)=>undefined): void;}
export class WeatherChangeAfterEvent { private constructor(); readonly dimension: string; readonly newWeather: WeatherType; readonly previousWeather: WeatherType;}
export class WeatherChangeAfterEventSignal { private constructor(); subscribe(callback: (arg0: WeatherChangeAfterEvent)=>undefined): (arg0: WeatherChangeAfterEvent)=>undefined; unsubscribe(callback: (arg0: WeatherChangeAfterEvent)=>undefined): void;}
export class World { private constructor(); readonly afterEvents: WorldAfterEvents; readonly beforeEvents: WorldBeforeEvents; readonly scoreboard: Scoreboard; readonly structureManager: StructureManager; clearDynamicProperties(): void; getAbsoluteTime(): number; getAllPlayers(): Player[]; getDay(): number; getDefaultSpawnLocation(): Vector3; getDimension(dimensionId: string): Dimension; getDynamicProperty(identifier: string): (boolean | number | number | string | Vector3); getDynamicPropertyIds(): string[]; getDynamicPropertyTotalByteCount(): number; getEntity(id: string): Entity; getMoonPhase(): MoonPhase; getPlayers(options?: EntityQueryOptions): Player[]; getTimeOfDay(): number; playMusic(trackId: string, musicOptions?: MusicOptions): void; playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void; queueMusic(trackId: string, musicOptions?: MusicOptions): void; sendMessage(message: ((RawMessage | string)[] | RawMessage | string)): void; setAbsoluteTime(absoluteTime: number): void; setDefaultSpawnLocation(spawnLocation: Vector3): void; setDynamicProperty(identifier: string, value?: (boolean | number | number | string | Vector3)): void; setTimeOfDay(timeOfDay: (number | TimeOfDay)): void; stopMusic(): void;}
export class WorldAfterEvents { private constructor(); readonly buttonPush: ButtonPushAfterEventSignal; readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal; readonly effectAdd: EffectAddAfterEventSignal; readonly entityDie: EntityDieAfterEventSignal; readonly entityHealthChanged: EntityHealthChangedAfterEventSignal; readonly entityHitBlock: EntityHitBlockAfterEventSignal; readonly entityHitEntity: EntityHitEntityAfterEventSignal; readonly entityHurt: EntityHurtAfterEventSignal; readonly entityLoad: EntityLoadAfterEventSignal; readonly entityRemove: EntityRemoveAfterEventSignal; readonly entitySpawn: EntitySpawnAfterEventSignal; readonly explosion: ExplosionAfterEventSignal; readonly itemCompleteUse: ItemCompleteUseAfterEventSignal; readonly itemReleaseUse: ItemReleaseUseAfterEventSignal; readonly itemStartUse: ItemStartUseAfterEventSignal; readonly itemStartUseOn: ItemStartUseOnAfterEventSignal; readonly itemStopUse: ItemStopUseAfterEventSignal; readonly itemStopUseOn: ItemStopUseOnAfterEventSignal; readonly itemUse: ItemUseAfterEventSignal; readonly itemUseOn: ItemUseOnAfterEventSignal; readonly leverAction: LeverActionAfterEventSignal; readonly pistonActivate: PistonActivateAfterEventSignal; readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal; readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal; readonly playerJoin: PlayerJoinAfterEventSignal; readonly playerLeave: PlayerLeaveAfterEventSignal; readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal; readonly playerSpawn: PlayerSpawnAfterEventSignal; readonly pressurePlatePop: PressurePlatePopAfterEventSignal; readonly pressurePlatePush: PressurePlatePushAfterEventSignal; readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal; readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal; readonly targetBlockHit: TargetBlockHitAfterEventSignal; readonly tripWireTrip: TripWireTripAfterEventSignal; readonly weatherChange: WeatherChangeAfterEventSignal; readonly worldInitialize: WorldInitializeAfterEventSignal;}
export class WorldBeforeEvents { private constructor(); readonly effectAdd: EffectAddBeforeEventSignal; readonly entityRemove: EntityRemoveBeforeEventSignal; readonly explosion: ExplosionBeforeEventSignal; readonly itemUse: ItemUseBeforeEventSignal; readonly itemUseOn: ItemUseOnBeforeEventSignal; readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal; readonly playerLeave: PlayerLeaveBeforeEventSignal;}
export class WorldInitializeAfterEvent { private constructor();}
export class WorldInitializeAfterEventSignal { private constructor(); subscribe(callback: (arg0: WorldInitializeAfterEvent)=>undefined): (arg0: WorldInitializeAfterEvent)=>undefined; unsubscribe(callback: (arg0: WorldInitializeAfterEvent)=>undefined): void;}
export interface BlockEventOptions {blockTypes?: string[]; permutations?: BlockPermutation[];}
export interface BlockFilter {excludePermutations?: BlockPermutation[]; excludeTags?: string[]; excludeTypes?: string[]; includePermutations?: BlockPermutation[]; includeTags?: string[]; includeTypes?: string[];}
export interface BlockHitInformation {block: Block; face: Direction; faceLocation: Vector3;}
export interface BlockRaycastHit {block: Block; face: Direction; faceLocation: Vector3;}
export interface BlockRaycastOptions {includeLiquidBlocks?: boolean; includePassableBlocks?: boolean; maxDistance?: number;}
export interface CameraDefaultOptions {easeOptions: CameraEaseOptions;}
export interface CameraEaseOptions {easeTime?: number; easeType?: EasingType;}
export interface CameraFadeOptions {fadeColor?: RGB; fadeTime?: CameraFadeTimeOptions;}
export interface CameraFadeTimeOptions {fadeInTime: number; fadeOutTime: number; holdTime: number;}
export interface CameraSetFacingOptions {easeOptions?: CameraEaseOptions; facingEntity: Entity; location?: Vector3;}
export interface CameraSetLocationOptions {easeOptions?: CameraEaseOptions; location: Vector3;}
export interface CameraSetPosOptions {easeOptions?: CameraEaseOptions; facingLocation: Vector3; location?: Vector3;}
export interface CameraSetRotOptions {easeOptions?: CameraEaseOptions; location?: Vector3; rotation: Vector2;}
export interface DefinitionModifier {addedComponentGroups: string[]; removedComponentGroups: string[];}
export interface DimensionLocation {dimension: Dimension; x: number; y: number; z: number;}
export interface EntityApplyDamageByProjectileOptions {damagingEntity?: Entity; damagingProjectile: Entity;}
export interface EntityApplyDamageOptions {cause: EntityDamageCause; damagingEntity?: Entity;}
export interface EntityDamageSource {cause: EntityDamageCause; damagingEntity?: Entity; damagingProjectile?: Entity;}
export interface EntityDataDrivenTriggerEventOptions {entities?: Entity[]; entityTypes?: string[]; eventTypes?: string[];}
export interface EntityEffectOptions {amplifier?: number; showParticles?: boolean;}
export interface EntityEventOptions {entities?: Entity[]; entityTypes?: string[];}
export interface EntityFilter {excludeFamilies?: string[]; excludeGameModes?: GameMode[]; excludeNames?: string[]; excludeTags?: string[]; excludeTypes?: string[]; families?: string[]; gameMode?: GameMode; maxHorizontalRotation?: number; maxLevel?: number; maxVerticalRotation?: number; minHorizontalRotation?: number; minLevel?: number; minVerticalRotation?: number; name?: string; scoreOptions?: EntityQueryScoreOptions[]; tags?: string[]; 'type'?: string;}
export interface EntityHitInformation {entity?: Entity;}
export interface EntityQueryOptions {closest?: number; farthest?: number; location?: Vector3; maxDistance?: number; minDistance?: number;}
export interface EntityQueryScoreOptions {exclude?: boolean; maxScore?: number; minScore?: number; objective?: string;}
export interface EntityRaycastHit {distance: number; entity: Entity;}
export interface EntityRaycastOptions {maxDistance?: number;}
export interface ExplosionOptions {allowUnderwater?: boolean; breaksBlocks?: boolean; causesFire?: boolean; source?: Entity;}
export interface MusicOptions {fade?: number; loop?: boolean; volume?: number;}
export interface PlayAnimationOptions {blendOutTime?: number; controller?: string; nextState?: string; players?: string[]; stopExpression?: string;}
export interface PlayerSoundOptions {location?: Vector3; pitch?: number; volume?: number;}
export interface ProjectileShootOptions {uncertainty?: number;}
export interface RawMessage {rawtext?: RawMessage[]; score?: RawMessageScore; text?: string; translate?: string; with?: (string[] | RawMessage);}
export interface RawMessageScore {name?: string; objective?: string;}
export interface RawText {rawtext?: RawMessage[];}
export interface RGB {blue: number; green: number; red: number;}
export interface RGBA {alpha: number;}
export interface ScoreboardObjectiveDisplayOptions {objective: ScoreboardObjective; sortOrder?: ObjectiveSortOrder;}
export interface ScriptEventMessageFilterOptions {namespaces: string[];}
export interface StructureCreateOptions {includeBlocks?: boolean; includeEntities?: boolean; saveMode?: StructureSaveMode;}
export interface StructurePlaceOptions {animationMode?: StructureAnimationMode; animationSeconds?: number; includeBlocks?: boolean; includeEntities?: boolean; integrity?: number; integritySeed?: string; mirror?: StructureMirrorAxis; rotation?: StructureRotation; waterlogged?: boolean;}
export interface TeleportOptions {checkForBlocks?: boolean; dimension?: Dimension; facingLocation?: Vector3; keepVelocity?: boolean; rotation?: Vector2;}
export interface TitleDisplayOptions {fadeInDuration: number; fadeOutDuration: number; stayDuration: number; subtitle?: ((RawMessage | string)[] | RawMessage | string);}
export interface Vector2 {x: number; y: number;}
export interface Vector3 {x: number; y: number; z: number;}
export interface WorldSoundOptions {pitch?: number; volume?: number;}
export class CommandError extends Error { private constructor() }
export class InvalidContainerSlotError extends Error { private constructor() }
export class InvalidStructureError extends Error { private constructor() }
export class LocationInUnloadedChunkError extends Error { private constructor() }
export class LocationOutOfWorldBoundariesError extends Error { private constructor() }
export const MoonPhaseCount = 8;
export const TicksPerSecond = 20;
export const system: System;
export const world: World;