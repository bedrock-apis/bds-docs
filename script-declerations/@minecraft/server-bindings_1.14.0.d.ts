
// Enums - 32
export enum BlockComponentTypes { Inventory = "minecraft:inventory", Piston = "minecraft:piston", RecordPlayer = "minecraft:record_player", Sign = "minecraft:sign"};
export enum BlockPistonState { Expanded = "Expanded", Expanding = "Expanding", Retracted = "Retracted", Retracting = "Retracting"};
export enum CustomComponentNameErrorReason { DisallowedNamespace = 2, NoNamespace = 1};
export enum Direction { Down = "Down", East = "East", North = "North", South = "South", Up = "Up", West = "West"};
export enum DisplaySlotId { BelowName = "BelowName", List = "List", Sidebar = "Sidebar"};
export enum DyeColor { Black = "Black", Blue = "Blue", Brown = "Brown", Cyan = "Cyan", Gray = "Gray", Green = "Green", LightBlue = "LightBlue", Lime = "Lime", Magenta = "Magenta", Orange = "Orange", Pink = "Pink", Purple = "Purple", Red = "Red", Silver = "Silver", White = "White", Yellow = "Yellow"};
export enum EasingType { InBack = "InBack", InBounce = "InBounce", InCirc = "InCirc", InCubic = "InCubic", InElastic = "InElastic", InExpo = "InExpo", InOutBack = "InOutBack", InOutBounce = "InOutBounce", InOutCirc = "InOutCirc", InOutCubic = "InOutCubic", InOutElastic = "InOutElastic", InOutExpo = "InOutExpo", InOutQuad = "InOutQuad", InOutQuart = "InOutQuart", InOutQuint = "InOutQuint", InOutSine = "InOutSine", InQuad = "InQuad", InQuart = "InQuart", InQuint = "InQuint", InSine = "InSine", Linear = "Linear", OutBack = "OutBack", OutBounce = "OutBounce", OutCirc = "OutCirc", OutCubic = "OutCubic", OutElastic = "OutElastic", OutExpo = "OutExpo", OutQuad = "OutQuad", OutQuart = "OutQuart", OutQuint = "OutQuint", OutSine = "OutSine", Spring = "Spring"};
export enum EnchantmentSlot { ArmorFeet = "ArmorFeet", ArmorHead = "ArmorHead", ArmorLegs = "ArmorLegs", ArmorTorso = "ArmorTorso", Axe = "Axe", Bow = "Bow", CarrotStick = "CarrotStick", CosmeticHead = "CosmeticHead", Crossbow = "Crossbow", Elytra = "Elytra", FishingRod = "FishingRod", Flintsteel = "Flintsteel", Hoe = "Hoe", Pickaxe = "Pickaxe", Shears = "Shears", Shield = "Shield", Shovel = "Shovel", Spear = "Spear", Sword = "Sword"};
export enum EntityComponentTypes { AddRider = "minecraft:addrider", Ageable = "minecraft:ageable", CanClimb = "minecraft:can_climb", CanFly = "minecraft:can_fly", CanPowerJump = "minecraft:can_power_jump", Color = "minecraft:color", Color2 = "minecraft:color2", CursorInventory = "minecraft:cursor_inventory", Equippable = "minecraft:equippable", FireImmune = "minecraft:fire_immune", FloatsInLiquid = "minecraft:floats_in_liquid", FlyingSpeed = "minecraft:flying_speed", FrictionModifier = "minecraft:friction_modifier", GroundOffset = "minecraft:ground_offset", Healable = "minecraft:healable", Health = "minecraft:health", Inventory = "minecraft:inventory", IsBaby = "minecraft:is_baby", IsCharged = "minecraft:is_charged", IsChested = "minecraft:is_chested", IsDyeable = "minecraft:is_dyeable", IsHiddenWhenInvisible = "minecraft:is_hidden_when_invisible", IsIgnited = "minecraft:is_ignited", IsIllagerCaptain = "minecraft:is_illager_captain", IsSaddled = "minecraft:is_saddled", IsShaking = "minecraft:is_shaking", IsSheared = "minecraft:is_sheared", IsStackable = "minecraft:is_stackable", IsStunned = "minecraft:is_stunned", IsTamed = "minecraft:is_tamed", Item = "minecraft:item", LavaMovement = "minecraft:lava_movement", Leashable = "minecraft:leashable", MarkVariant = "minecraft:mark_variant", Movement = "minecraft:movement", MovementAmphibious = "minecraft:movement.amphibious", MovementBasic = "minecraft:movement.basic", MovementFly = "minecraft:movement.fly", MovementGeneric = "minecraft:movement.generic", MovementGlide = "minecraft:movement.glide", MovementHover = "minecraft:movement.hover", MovementJump = "minecraft:movement.jump", MovementSkip = "minecraft:movement.skip", MovementSway = "minecraft:movement.sway", NavigationClimb = "minecraft:navigation.climb", NavigationFloat = "minecraft:navigation.float", NavigationFly = "minecraft:navigation.fly", NavigationGeneric = "minecraft:navigation.generic", NavigationHover = "minecraft:navigation.hover", NavigationWalk = "minecraft:navigation.walk", OnFire = "minecraft:onfire", Projectile = "minecraft:projectile", PushThrough = "minecraft:push_through", Rideable = "minecraft:rideable", Riding = "minecraft:riding", Scale = "minecraft:scale", SkinId = "minecraft:skin_id", Strength = "minecraft:strength", Tameable = "minecraft:tameable", TameMount = "minecraft:tamemount", TypeFamily = "minecraft:type_family", UnderwaterMovement = "minecraft:underwater_movement", Variant = "minecraft:variant", WantsJockey = "minecraft:wants_jockey"};
export enum EntityDamageCause { anvil = "anvil", blockExplosion = "blockExplosion", campfire = "campfire", charging = "charging", contact = "contact", drowning = "drowning", entityAttack = "entityAttack", entityExplosion = "entityExplosion", fall = "fall", fallingBlock = "fallingBlock", fire = "fire", fireTick = "fireTick", fireworks = "fireworks", flyIntoWall = "flyIntoWall", freezing = "freezing", lava = "lava", lightning = "lightning", maceSmash = "maceSmash", magic = "magic", magma = "magma", none = "none", override = "override", piston = "piston", projectile = "projectile", ramAttack = "ramAttack", selfDestruct = "selfDestruct", sonicBoom = "sonicBoom", soulCampfire = "soulCampfire", stalactite = "stalactite", stalagmite = "stalagmite", starve = "starve", suffocation = "suffocation", suicide = "suicide", temperature = "temperature", thorns = "thorns", void = "void", wither = "wither"};
export enum EntityInitializationCause { Born = "Born", Event = "Event", Loaded = "Loaded", Spawned = "Spawned", Transformed = "Transformed"};
export enum EquipmentSlot { Chest = "Chest", Feet = "Feet", Head = "Head", Legs = "Legs", Mainhand = "Mainhand", Offhand = "Offhand"};
export enum FluidType { Lava = "Lava", Potion = "Potion", PowderSnow = "PowderSnow", Water = "Water"};
export enum GameMode { adventure = "adventure", creative = "creative", spectator = "spectator", survival = "survival"};
export enum GameRule { CommandBlockOutput = "commandBlockOutput", CommandBlocksEnabled = "commandBlocksEnabled", DoDayLightCycle = "doDayLightCycle", DoEntityDrops = "doEntityDrops", DoFireTick = "doFireTick", DoImmediateRespawn = "doImmediateRespawn", DoInsomnia = "doInsomnia", DoLimitedCrafting = "doLimitedCrafting", DoMobLoot = "doMobLoot", DoMobSpawning = "doMobSpawning", DoTileDrops = "doTileDrops", DoWeatherCycle = "doWeatherCycle", DrowningDamage = "drowningDamage", FallDamage = "fallDamage", FireDamage = "fireDamage", FreezeDamage = "freezeDamage", FunctionCommandLimit = "functionCommandLimit", KeepInventory = "keepInventory", MaxCommandChainLength = "maxCommandChainLength", MobGriefing = "mobGriefing", NaturalRegeneration = "naturalRegeneration", PlayersSleepingPercentage = "playersSleepingPercentage", ProjectilesCanBreakBlocks = "projectilesCanBreakBlocks", Pvp = "pvp", RandomTickSpeed = "randomTickSpeed", RecipesUnlock = "recipesUnlock", RespawnBlocksExplode = "respawnBlocksExplode", SendCommandFeedback = "sendCommandFeedback", ShowBorderEffect = "showBorderEffect", ShowCoordinates = "showCoordinates", ShowDaysPlayed = "showDaysPlayed", ShowDeathMessages = "showDeathMessages", ShowRecipeMessages = "showRecipeMessages", ShowTags = "showTags", SpawnRadius = "spawnRadius", TntExplodes = "tntExplodes", TntExplosionDropDecay = "tntExplosionDropDecay"};
export enum HudElement { AirBubbles = 9, Armor = 1, Crosshair = 4, Health = 6, HorseHealth = 10, Hotbar = 5, Hunger = 8, ItemText = 12, PaperDoll = 0, ProgressBar = 7, StatusEffects = 11, ToolTips = 2, TouchControls = 3};
export enum HudVisibility { Hide = 0, Reset = 1};
export enum InputPermissionCategory { Camera = 1, Movement = 2};
export enum ItemComponentTypes { Cooldown = "minecraft:cooldown", Durability = "minecraft:durability", Enchantable = "minecraft:enchantable", Food = "minecraft:food"};
export enum ItemLockMode { inventory = "inventory", none = "none", slot = "slot"};
export enum MoonPhase { FirstQuarter = 2, FullMoon = 0, LastQuarter = 6, NewMoon = 4, WaningCrescent = 3, WaningGibbous = 1, WaxingCrescent = 5, WaxingGibbous = 7};
export enum ObjectiveSortOrder { Ascending = 0, Descending = 1};
export enum PaletteColor { Black = 15, Blue = 11, Brown = 12, Cyan = 9, Gray = 7, Green = 13, LightBlue = 3, Lime = 5, Magenta = 2, Orange = 1, Pink = 6, Purple = 10, Red = 14, Silver = 8, White = 0, Yellow = 4};
export enum ScoreboardIdentityType { Entity = "Entity", FakePlayer = "FakePlayer", Player = "Player"};
export enum ScriptEventSource { Block = "Block", Entity = "Entity", NPCDialogue = "NPCDialogue", Server = "Server"};
export enum SignSide { Back = "Back", Front = "Front"};
export enum StructureAnimationMode { Blocks = "Blocks", Layers = "Layers", None = "None"};
export enum StructureMirrorAxis { None = "None", X = "X", XZ = "XZ", Z = "Z"};
export enum StructureRotation { None = "None", Rotate180 = "Rotate180", Rotate270 = "Rotate270", Rotate90 = "Rotate90"};
export enum StructureSaveMode { Memory = "Memory", World = "World"};
export enum TimeOfDay { Day = 1000, Midnight = 18000, Night = 13000, Noon = 6000, Sunrise = 23000, Sunset = 12000};
export enum WeatherType { Clear = "Clear", Rain = "Rain", Thunder = "Thunder"};

// Interfaces - 60
export interface BlockCustomComponent { beforeOnPlayerPlace?: (arg0: BlockComponentPlayerPlaceBeforeEvent)=>void; onEntityFallOn?: (arg0: BlockComponentEntityFallOnEvent)=>void; onPlace?: (arg0: BlockComponentOnPlaceEvent)=>void; onPlayerDestroy?: (arg0: BlockComponentPlayerDestroyEvent)=>void; onPlayerInteract?: (arg0: BlockComponentPlayerInteractEvent)=>void; onRandomTick?: (arg0: BlockComponentRandomTickEvent)=>void; onStepOff?: (arg0: BlockComponentStepOffEvent)=>void; onStepOn?: (arg0: BlockComponentStepOnEvent)=>void; onTick?: (arg0: BlockComponentTickEvent)=>void};
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
export interface Enchantment { level: number; type: EnchantmentType};
export interface EntityApplyDamageByProjectileOptions { damagingEntity?: Entity; damagingProjectile: Entity};
export interface EntityApplyDamageOptions { cause: EntityDamageCause; damagingEntity?: Entity};
export interface EntityDamageSource { cause: EntityDamageCause; damagingEntity?: Entity; damagingProjectile?: Entity};
export interface EntityDataDrivenTriggerEventOptions { entities?: Entity[]; entityTypes?: string[]; eventTypes?: string[]};
export interface EntityEffectOptions { amplifier?: number; showParticles?: boolean};
export interface EntityEventOptions { entities?: Entity[]; entityTypes?: string[]};
export interface EntityFilter { excludeFamilies?: string[]; excludeGameModes?: GameMode[]; excludeNames?: string[]; excludeTags?: string[]; excludeTypes?: string[]; families?: string[]; gameMode?: GameMode; maxHorizontalRotation?: number; maxLevel?: number; maxVerticalRotation?: number; minHorizontalRotation?: number; minLevel?: number; minVerticalRotation?: number; name?: string; propertyOptions?: EntityQueryPropertyOptions[]; scoreOptions?: EntityQueryScoreOptions[]; tags?: string[]; type?: string};
export interface EntityHitInformation { entity?: Entity};
export interface EntityQueryOptions extends EntityFilter{ closest?: number; farthest?: number; location?: Vector3; maxDistance?: number; minDistance?: number; volume?: Vector3};
export interface EntityQueryPropertyOptions { exclude?: boolean; propertyId: string; value?: boolean | string | EqualsComparison | GreaterThanComparison | GreaterThanOrEqualsComparison | LessThanComparison | LessThanOrEqualsComparison | NotEqualsComparison | RangeComparison};
export interface EntityQueryScoreOptions { exclude?: boolean; maxScore?: number; minScore?: number; objective?: string};
export interface EntityRaycastHit { distance: number; entity: Entity};
export interface EntityRaycastOptions extends EntityFilter{ ignoreBlockCollision?: boolean; includeLiquidBlocks?: boolean; includePassableBlocks?: boolean; maxDistance?: number};
export interface EqualsComparison { equals: boolean | number | string};
export interface ExplosionOptions { allowUnderwater?: boolean; breaksBlocks?: boolean; causesFire?: boolean; source?: Entity};
export interface GreaterThanComparison { greaterThan: number};
export interface GreaterThanOrEqualsComparison { greaterThanOrEquals: number};
export interface ItemCustomComponent { onBeforeDurabilityDamage?: (arg0: ItemComponentBeforeDurabilityDamageEvent)=>void; onCompleteUse?: (arg0: ItemComponentCompleteUseEvent)=>void; onConsume?: (arg0: ItemComponentConsumeEvent)=>void; onHitEntity?: (arg0: ItemComponentHitEntityEvent)=>void; onMineBlock?: (arg0: ItemComponentMineBlockEvent)=>void; onUse?: (arg0: ItemComponentUseEvent)=>void; onUseOn?: (arg0: ItemComponentUseOnEvent)=>void};
export interface LessThanComparison { lessThan: number};
export interface LessThanOrEqualsComparison { lessThanOrEquals: number};
export interface MusicOptions { fade?: number; loop?: boolean; volume?: number};
export interface NotEqualsComparison { notEquals: boolean | number | string};
export interface PlayAnimationOptions { blendOutTime?: number; controller?: string; nextState?: string; players?: string[]; stopExpression?: string};
export interface PlayerSoundOptions { location?: Vector3; pitch?: number; volume?: number};
export interface ProjectileShootOptions { uncertainty?: number};
export interface RangeComparison { lowerBound: number; upperBound: number};
export interface RawMessage { rawtext?: RawMessage[]; score?: RawMessageScore; text?: string; translate?: string; with?: string[] | RawMessage};
export interface RawMessageScore { name?: string; objective?: string};
export interface RawText { rawtext?: RawMessage[]};
export interface RGB { blue: number; green: number; red: number};
export interface RGBA extends RGB{ alpha: number};
export interface ScoreboardObjectiveDisplayOptions { objective: ScoreboardObjective; sortOrder?: ObjectiveSortOrder};
export interface ScriptEventMessageFilterOptions { namespaces: string[]};
export interface StructureCreateOptions { includeBlocks?: boolean; includeEntities?: boolean; saveMode?: StructureSaveMode};
export interface StructurePlaceOptions { animationMode?: StructureAnimationMode; animationSeconds?: number; includeBlocks?: boolean; includeEntities?: boolean; integrity?: number; integritySeed?: string; mirror?: StructureMirrorAxis; rotation?: StructureRotation; waterlogged?: boolean};
export interface TeleportOptions { checkForBlocks?: boolean; dimension?: Dimension; facingLocation?: Vector3; keepVelocity?: boolean; rotation?: Vector2};
export interface TitleDisplayOptions { fadeInDuration: number; fadeOutDuration: number; stayDuration: number; subtitle?: (RawMessage | string)[] | RawMessage | string};
export interface Vector2 { x: number; y: number};
export interface Vector3 { x: number; y: number; z: number};
export interface VectorXZ { x: number; z: number};
export interface WorldSoundOptions { pitch?: number; volume?: number};

// Classes - 265
export class Block { public readonly dimension: Dimension; public readonly isAir: boolean; public readonly isLiquid: boolean; public readonly location: Vector3; public readonly permutation: BlockPermutation; public readonly type: BlockType; public readonly typeId: string; public readonly x: number; public readonly y: number; public readonly z: number; public above(steps?: number): (Block | undefined); public below(steps?: number): (Block | undefined); public bottomCenter(): Vector3; public center(): Vector3; public east(steps?: number): (Block | undefined); public getComponent(componentId: string): (BlockComponent | undefined); public getItemStack(amount?: number, withData?: boolean): (ItemStack | undefined); public getTags(): string[]; public hasTag(tag: string): boolean; public isValid(): boolean; public matches(blockName: string, states?: Record<string,boolean | number | string>): boolean; public north(steps?: number): (Block | undefined); public offset(offset: Vector3): (Block | undefined); public setPermutation(permutation: BlockPermutation): void; public setType(blockType: BlockType | string): void; public south(steps?: number): (Block | undefined); public west(steps?: number): (Block | undefined); private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockComponent extends Component{ public readonly block: Block; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockComponentEntityFallOnEvent extends BlockEvent{ public readonly entity?: Entity; public readonly fallDistance: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockComponentOnPlaceEvent extends BlockEvent{ public readonly previousBlock: BlockPermutation; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockComponentPlayerDestroyEvent extends BlockEvent{ public readonly destroyedBlockPermutation: BlockPermutation; public readonly player?: Player; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockComponentPlayerInteractEvent extends BlockEvent{ public readonly face: Direction; public readonly faceLocation?: Vector3; public readonly player?: Player; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockComponentPlayerPlaceBeforeEvent extends BlockEvent{ public cancel: boolean; public readonly face: Direction; public permutationToPlace: BlockPermutation; public readonly player?: Player; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockComponentRandomTickEvent extends BlockEvent{ private constructor();};
export class BlockComponentRegistry { public registerCustomComponent(name: string, customComponent: BlockCustomComponent): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockComponentStepOffEvent extends BlockEvent{ public readonly entity?: Entity; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockComponentStepOnEvent extends BlockEvent{ public readonly entity?: Entity; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockComponentTickEvent extends BlockEvent{ private constructor();};
export class BlockEvent { public readonly block: Block; public readonly dimension: Dimension; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockExplodeAfterEvent extends BlockEvent{ public readonly explodedBlockPermutation: BlockPermutation; public readonly source?: Entity; private constructor();};
export class BlockExplodeAfterEventSignal { public subscribe(callback: (arg0: BlockExplodeAfterEvent)=>void): (arg0: BlockExplodeAfterEvent)=>void; public unsubscribe(callback: (arg0: BlockExplodeAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockInventoryComponent extends BlockComponent{ public static readonly componentId = "minecraft:inventory"; public readonly container?: Container; private constructor();};
export class BlockPermutation { public readonly type: BlockType; public getAllStates(): Record<string,boolean | number | string>; public getItemStack(amount?: number): (ItemStack | undefined); public getState(stateName: string): (boolean | number | string | undefined); public getTags(): string[]; public hasTag(tag: string): boolean; public matches(blockName: string, states?: Record<string,boolean | number | string>): boolean; public static resolve(blockName: string, states?: Record<string,boolean | number | string>): BlockPermutation; public withState(name: string, value: boolean | number | string): BlockPermutation; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockPistonComponent extends BlockComponent{ public static readonly componentId = "minecraft:piston"; public readonly isMoving: boolean; public readonly state: BlockPistonState; public getAttachedBlocks(): Block[]; public getAttachedBlocksLocations(): Vector3[]; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockRecordPlayerComponent extends BlockComponent{ public static readonly componentId = "minecraft:record_player"; public ejectRecord(): void; public getRecord(): (ItemStack | undefined); public isPlaying(): boolean; public pauseRecord(): void; public playRecord(): void; public setRecord(recordItemType?: ItemType | string, startPlaying?: boolean): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockSignComponent extends BlockComponent{ public static readonly componentId = "minecraft:sign"; public readonly isWaxed: boolean; public getRawText(side?: SignSide): (RawText | undefined); public getText(side?: SignSide): (string | undefined); public getTextDyeColor(side?: SignSide): (DyeColor | undefined); public setText(message: RawMessage | string, side?: SignSide): void; public setTextDyeColor(color?: DyeColor, side?: SignSide): void; public setWaxed(waxed: boolean): void; private constructor();};
export class BlockStates { public static get(stateName: string): (BlockStateType | undefined); public static getAll(): BlockStateType[]; private constructor();};
export class BlockStateType { public readonly id: string; public readonly validValues: (boolean | number | string)[]; private constructor();};
export class BlockType { public readonly id: string; private constructor();};
export class BlockTypes { public static get(typeName: string): (BlockType | undefined); public static getAll(): BlockType[]; private constructor();};
export class BlockVolumeBase { public getCapacity(): number; public getMax(): Vector3; public getMin(): Vector3; public getSpan(): Vector3; public isInside(location: Vector3): boolean; public translate(delta: Vector3): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ButtonPushAfterEvent extends BlockEvent{ public readonly source: Entity; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ButtonPushAfterEventSignal extends IButtonPushAfterEventSignal{ private constructor();};
export class Camera { public clear(): void; public fade(fadeCameraOptions?: CameraFadeOptions): void; public setCamera(cameraPreset: string, setOptions?: CameraDefaultOptions | CameraFixedBoomOptions | CameraSetFacingOptions | CameraSetLocationOptions | CameraSetPosOptions | CameraSetRotOptions | CameraTargetOptions): void; private constructor();};
export class CommandResult { public readonly successCount: number; private constructor();};
export class Component { public readonly typeId: string; public isValid(): boolean; private constructor();};
export class Container { public readonly emptySlotsCount: number; public readonly size: number; public addItem(itemStack: ItemStack): (ItemStack | undefined); public clearAll(): void; public getItem(slot: number): (ItemStack | undefined); public getSlot(slot: number): ContainerSlot; public isValid(): boolean; public moveItem(fromSlot: number, toSlot: number, toContainer: Container): void; public setItem(slot: number, itemStack?: ItemStack): void; public swapItems(slot: number, otherSlot: number, otherContainer: Container): void; public transferItem(fromSlot: number, toContainer: Container): (ItemStack | undefined); private constructor();};
export class ContainerSlot { public amount: number; public readonly isStackable: boolean; public keepOnDeath: boolean; public lockMode: ItemLockMode; public readonly maxAmount: number; public nameTag?: string; public readonly type: ItemType; public readonly typeId: string; public clearDynamicProperties(): void; public getCanDestroy(): string[]; public getCanPlaceOn(): string[]; public getDynamicProperty(identifier: string): (boolean | number | number | string | Vector3 | undefined); public getDynamicPropertyIds(): string[]; public getDynamicPropertyTotalByteCount(): number; public getItem(): (ItemStack | undefined); public getLore(): string[]; public getTags(): string[]; public hasItem(): boolean; public hasTag(tag: string): boolean; public isStackableWith(itemStack: ItemStack): boolean; public isValid(): boolean; public setCanDestroy(blockIdentifiers?: string[]): void; public setCanPlaceOn(blockIdentifiers?: string[]): void; public setDynamicProperty(identifier: string, value?: boolean | number | number | string | Vector3): void; public setItem(itemStack?: ItemStack): void; public setLore(loreList?: (RawMessage | string)[]): void; private constructor();};
export class DataDrivenEntityTriggerAfterEvent { public readonly entity: Entity; public readonly eventId: string; public getModifiers(): DefinitionModifier[]; private constructor();};
export class DataDrivenEntityTriggerAfterEventSignal { public subscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent)=>void, options?: EntityDataDrivenTriggerEventOptions): (arg0: DataDrivenEntityTriggerAfterEvent)=>void; public unsubscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent)=>void): void; private constructor();};
export class Dimension { public readonly heightRange: _1e.NumberRange; public readonly id: string; public createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): boolean; public getBlock(location: Vector3): (Block | undefined); public getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): (BlockRaycastHit | undefined); public getEntities(options?: EntityQueryOptions): Entity[]; public getEntitiesAtBlockLocation(location: Vector3): Entity[]; public getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[]; public getPlayers(options?: EntityQueryOptions): Player[]; public getTopmostBlock(locationXZ: VectorXZ, minHeight?: number): (Block | undefined); public playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void; public runCommand(commandString: string): CommandResult; public runCommandAsync(commandString: string): Promise<CommandResult>; public setBlockPermutation(location: Vector3, permutation: BlockPermutation): void; public setBlockType(location: Vector3, blockType: BlockType | string): void; public setWeather(weatherType: WeatherType, duration?: number): void; public spawnEntity(identifier: string, location: Vector3): Entity; public spawnItem(itemStack: ItemStack, location: Vector3): Entity; public spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void; private constructor();};
export class DimensionType { public readonly typeId: string; private constructor();};
export class DimensionTypes { public static get(dimensionTypeId: string): (DimensionType | undefined); public static getAll(): DimensionType[]; private constructor();};
export class Effect { public readonly amplifier: number; public readonly displayName: string; public readonly duration: number; public readonly typeId: string; public isValid(): boolean; private constructor();};
export class EffectAddAfterEvent { public readonly effect: Effect; public readonly entity: Entity; private constructor();};
export class EffectAddAfterEventSignal { public subscribe(callback: (arg0: EffectAddAfterEvent)=>void, options?: EntityEventOptions): (arg0: EffectAddAfterEvent)=>void; public unsubscribe(callback: (arg0: EffectAddAfterEvent)=>void): void; private constructor();};
export class EffectAddBeforeEvent { public cancel: boolean; public duration: number; public readonly effectType: string; public readonly entity: Entity; private constructor();};
export class EffectAddBeforeEventSignal { public subscribe(callback: (arg0: EffectAddBeforeEvent)=>void): (arg0: EffectAddBeforeEvent)=>void; public unsubscribe(callback: (arg0: EffectAddBeforeEvent)=>void): void; private constructor();};
export class EffectType { public getName(): string; private constructor();};
export class EffectTypes { public static get(identifier: string): (EffectType | undefined); public static getAll(): EffectType[]; private constructor();};
export class EnchantmentType { public readonly id: string; public readonly maxLevel: number; public constructor(enchantmentType: string);};
export class EnchantmentTypes { public static get(enchantmentId: string): (EnchantmentType | undefined); public static getAll(): EnchantmentType[]; private constructor();};
export class Entity { public readonly dimension: Dimension; public readonly id: string; public readonly isClimbing: boolean; public readonly isFalling: boolean; public readonly isInWater: boolean; public readonly isOnGround: boolean; public readonly isSleeping: boolean; public isSneaking: boolean; public readonly isSprinting: boolean; public readonly isSwimming: boolean; public readonly location: Vector3; public nameTag: string; public readonly scoreboardIdentity?: ScoreboardIdentity; public readonly typeId: string; public addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): (Effect | undefined); public addTag(tag: string): boolean; public applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean; public applyImpulse(vector: Vector3): void; public applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void; public clearDynamicProperties(): void; public clearVelocity(): void; public extinguishFire(useEffects?: boolean): boolean; public getBlockFromViewDirection(options?: BlockRaycastOptions): (BlockRaycastHit | undefined); public getComponent(componentId: string): (EntityComponent | undefined); public getComponents(): EntityComponent[]; public getDynamicProperty(identifier: string): (boolean | number | number | string | Vector3 | undefined); public getDynamicPropertyIds(): string[]; public getDynamicPropertyTotalByteCount(): number; public getEffect(effectType: EffectType | string): (Effect | undefined); public getEffects(): Effect[]; public getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[]; public getHeadLocation(): Vector3; public getProperty(identifier: string): (boolean | number | string | undefined); public getRotation(): Vector2; public getTags(): string[]; public getVelocity(): Vector3; public getViewDirection(): Vector3; public hasComponent(componentId: string): boolean; public hasTag(tag: string): boolean; public isValid(): boolean; public kill(): boolean; public matches(options: EntityQueryOptions): boolean; public playAnimation(animationName: string, options?: PlayAnimationOptions): void; public remove(): void; public removeEffect(effectType: EffectType | string): boolean; public removeTag(tag: string): boolean; public resetProperty(identifier: string): (boolean | number | string); public runCommand(commandString: string): CommandResult; public runCommandAsync(commandString: string): Promise<CommandResult>; public setDynamicProperty(identifier: string, value?: boolean | number | number | string | Vector3): void; public setOnFire(seconds: number, useEffects?: boolean): boolean; public setProperty(identifier: string, value: boolean | number | string): void; public setRotation(rotation: Vector2): void; public teleport(location: Vector3, teleportOptions?: TeleportOptions): void; public triggerEvent(eventName: string): void; public tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityAddRiderComponent extends EntityComponent{ public static readonly componentId = "minecraft:addrider"; public readonly entityType: string; public readonly spawnEvent: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityAgeableComponent extends EntityComponent{ public static readonly componentId = "minecraft:ageable"; public readonly duration: number; public readonly growUp: Trigger; public readonly transformToItem: string; public getDropItems(): string[]; public getFeedItems(): EntityDefinitionFeedItem[]; private constructor();};
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
export class EntityColor2Component extends EntityComponent{ public static readonly componentId = "minecraft:color2"; public readonly value: PaletteColor; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityColorComponent extends EntityComponent{ public static readonly componentId = "minecraft:color"; public value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityComponent extends Component{ public readonly entity: Entity; private constructor();};
export class EntityDefinitionFeedItem { public readonly growth: number; public readonly item: string; private constructor();};
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
export class EntityHitBlockAfterEvent { public readonly blockFace: Direction; public readonly damagingEntity: Entity; public readonly hitBlock: Block; public readonly hitBlockPermutation: BlockPermutation; private constructor();};
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
export class EntityLavaMovementComponent extends EntityAttributeComponent{ public static readonly componentId = "minecraft:lava_movement"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityLeashableComponent extends EntityComponent{ public static readonly componentId = "minecraft:leashable"; public readonly canBeStolen: boolean; public readonly hardDistance: number; public readonly isLeashed: boolean; public readonly leashHolder?: Entity; public readonly leashHolderEntityId?: string; public readonly maxDistance: number; public readonly softDistance: number; public leashTo(leashHolder: Entity): void; public unleash(): void; private constructor();};
export class EntityLoadAfterEvent { public entity: Entity; private constructor();};
export class EntityLoadAfterEventSignal { public subscribe(callback: (arg0: EntityLoadAfterEvent)=>void): (arg0: EntityLoadAfterEvent)=>void; public unsubscribe(callback: (arg0: EntityLoadAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMarkVariantComponent extends EntityComponent{ public static readonly componentId = "minecraft:mark_variant"; public value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent{ public static readonly componentId = "minecraft:movement.amphibious"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementBasicComponent extends EntityBaseMovementComponent{ public static readonly componentId = "minecraft:movement.basic"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementComponent extends EntityAttributeComponent{ public static readonly componentId = "minecraft:movement"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementFlyComponent extends EntityBaseMovementComponent{ public static readonly componentId = "minecraft:movement.fly"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementGenericComponent extends EntityBaseMovementComponent{ public static readonly componentId = "minecraft:movement.generic"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementGlideComponent extends EntityBaseMovementComponent{ public static readonly componentId = "minecraft:movement.glide"; public readonly speedWhenTurning: number; public readonly startSpeed: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementHoverComponent extends EntityBaseMovementComponent{ public static readonly componentId = "minecraft:movement.hover"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementJumpComponent extends EntityBaseMovementComponent{ public static readonly componentId = "minecraft:movement.jump"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementSkipComponent extends EntityBaseMovementComponent{ public static readonly componentId = "minecraft:movement.skip"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMovementSwayComponent extends EntityBaseMovementComponent{ public static readonly componentId = "minecraft:movement.sway"; public readonly swayAmplitude: number; public readonly swayFrequency: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityNavigationClimbComponent extends EntityNavigationComponent{ public static readonly componentId = "minecraft:navigation.climb"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityNavigationComponent extends EntityComponent{ public readonly avoidDamageBlocks: boolean; public readonly avoidPortals: boolean; public readonly avoidSun: boolean; public readonly avoidWater: boolean; public readonly canBreach: boolean; public readonly canBreakDoors: boolean; public readonly canFloat: boolean; public readonly canJump: boolean; public readonly canOpenDoors: boolean; public readonly canOpenIronDoors: boolean; public readonly canPassDoors: boolean; public readonly canPathFromAir: boolean; public readonly canPathOverLava: boolean; public readonly canPathOverWater: boolean; public readonly canSink: boolean; public readonly canSwim: boolean; public readonly canWalk: boolean; public readonly canWalkInLava: boolean; public readonly isAmphibious: boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityNavigationFloatComponent extends EntityNavigationComponent{ public static readonly componentId = "minecraft:navigation.float"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityNavigationFlyComponent extends EntityNavigationComponent{ public static readonly componentId = "minecraft:navigation.fly"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityNavigationGenericComponent extends EntityNavigationComponent{ public static readonly componentId = "minecraft:navigation.generic"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityNavigationHoverComponent extends EntityNavigationComponent{ public static readonly componentId = "minecraft:navigation.hover"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityNavigationWalkComponent extends EntityNavigationComponent{ public static readonly componentId = "minecraft:navigation.walk"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityOnFireComponent extends EntityComponent{ public static readonly componentId = "minecraft:onfire"; public readonly onFireTicksRemaining: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityProjectileComponent extends EntityComponent{ public static readonly componentId = "minecraft:projectile"; public airInertia: number; public catchFireOnHurt: boolean; public critParticlesOnProjectileHurt: boolean; public destroyOnProjectileHurt: boolean; public gravity: number; public hitEntitySound?: string; public hitGroundSound?: string; public hitParticle?: string; public lightningStrikeOnHit: boolean; public liquidInertia: number; public onFireTime: number; public owner?: Entity; public shouldBounceOnHit: boolean; public stopOnHit: boolean; public shoot(velocity: Vector3, options?: ProjectileShootOptions): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityPushThroughComponent extends EntityComponent{ public static readonly componentId = "minecraft:push_through"; public value: number; private constructor();};
export class EntityRemoveAfterEvent { public readonly removedEntityId: string; public readonly typeId: string; private constructor();};
export class EntityRemoveAfterEventSignal { public subscribe(callback: (arg0: EntityRemoveAfterEvent)=>void, options?: EntityEventOptions): (arg0: EntityRemoveAfterEvent)=>void; public unsubscribe(callback: (arg0: EntityRemoveAfterEvent)=>void): void; private constructor();};
export class EntityRemoveBeforeEvent { public readonly removedEntity: Entity; private constructor();};
export class EntityRemoveBeforeEventSignal { public subscribe(callback: (arg0: EntityRemoveBeforeEvent)=>void): (arg0: EntityRemoveBeforeEvent)=>void; public unsubscribe(callback: (arg0: EntityRemoveBeforeEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityRideableComponent extends EntityComponent{ public static readonly componentId = "minecraft:rideable"; public readonly controllingSeat: number; public readonly crouchingSkipInteract: boolean; public readonly interactText: string; public readonly passengerMaxWidth: number; public readonly pullInEntities: boolean; public readonly riderCanInteract: boolean; public readonly seatCount: number; public addRider(rider: Entity): boolean; public ejectRider(rider: Entity): void; public ejectRiders(): void; public getFamilyTypes(): string[]; public getRiders(): Entity[]; public getSeats(): Seat[]; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityRidingComponent extends EntityComponent{ public static readonly componentId = "minecraft:riding"; public readonly entityRidingOn: Entity; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityScaleComponent extends EntityComponent{ public static readonly componentId = "minecraft:scale"; public value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntitySkinIdComponent extends EntityComponent{ public static readonly componentId = "minecraft:skin_id"; public value: number; private constructor();};
export class EntitySpawnAfterEvent { public readonly cause: EntityInitializationCause; public entity: Entity; private constructor();};
export class EntitySpawnAfterEventSignal { public subscribe(callback: (arg0: EntitySpawnAfterEvent)=>void): (arg0: EntitySpawnAfterEvent)=>void; public unsubscribe(callback: (arg0: EntitySpawnAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityStrengthComponent extends EntityComponent{ public static readonly componentId = "minecraft:strength"; public readonly max: number; public readonly value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityTameableComponent extends EntityComponent{ public static readonly componentId = "minecraft:tameable"; public readonly getTameItems: ItemStack[]; public readonly isTamed: boolean; public readonly probability: number; public readonly tamedToPlayer?: Player; public readonly tamedToPlayerId?: string; public tame(player: Player): boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityTameMountComponent extends EntityComponent{ public static readonly componentId = "minecraft:tamemount"; public readonly isTamed: boolean; public readonly isTamedToPlayer: boolean; public readonly tamedToPlayer?: Player; public readonly tamedToPlayerId?: string; public tame(showParticles: boolean): void; public tameToPlayer(showParticles: boolean, player: Player): boolean; private constructor();};
export class EntityType { public readonly id: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityTypeFamilyComponent extends EntityComponent{ public static readonly componentId = "minecraft:type_family"; public getTypeFamilies(): string[]; public hasTypeFamily(typeFamily: string): boolean; private constructor();};
export class EntityTypes { public static get(identifier: string): (EntityType | undefined); public static getAll(): EntityType[]; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityUnderwaterMovementComponent extends EntityAttributeComponent{ public static readonly componentId = "minecraft:underwater_movement"; private constructor();};
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
export class GameRuleChangeAfterEvent { public readonly rule: GameRule; public readonly value: boolean | number; private constructor();};
export class GameRuleChangeAfterEventSignal { public subscribe(callback: (arg0: GameRuleChangeAfterEvent)=>void): (arg0: GameRuleChangeAfterEvent)=>void; public unsubscribe(callback: (arg0: GameRuleChangeAfterEvent)=>void): void; private constructor();};
export class GameRules { public commandBlockOutput: boolean; public commandBlocksEnabled: boolean; public doDayLightCycle: boolean; public doEntityDrops: boolean; public doFireTick: boolean; public doImmediateRespawn: boolean; public doInsomnia: boolean; public doLimitedCrafting: boolean; public doMobLoot: boolean; public doMobSpawning: boolean; public doTileDrops: boolean; public doWeatherCycle: boolean; public drowningDamage: boolean; public fallDamage: boolean; public fireDamage: boolean; public freezeDamage: boolean; public functionCommandLimit: number; public keepInventory: boolean; public maxCommandChainLength: number; public mobGriefing: boolean; public naturalRegeneration: boolean; public playersSleepingPercentage: number; public projectilesCanBreakBlocks: boolean; public pvp: boolean; public randomTickSpeed: number; public recipesUnlock: boolean; public respawnBlocksExplode: boolean; public sendCommandFeedback: boolean; public showBorderEffect: boolean; public showCoordinates: boolean; public showDaysPlayed: boolean; public showDeathMessages: boolean; public showRecipeMessages: boolean; public showTags: boolean; public spawnRadius: number; public tntExplodes: boolean; public tntExplosionDropDecay: boolean; private constructor();};
export class IButtonPushAfterEventSignal { public subscribe(callback: (arg0: ButtonPushAfterEvent)=>void): (arg0: ButtonPushAfterEvent)=>void; public unsubscribe(callback: (arg0: ButtonPushAfterEvent)=>void): void; private constructor();};
export class ILeverActionAfterEventSignal { public subscribe(callback: (arg0: LeverActionAfterEvent)=>void): (arg0: LeverActionAfterEvent)=>void; public unsubscribe(callback: (arg0: LeverActionAfterEvent)=>void): void; private constructor();};
export class IPlayerJoinAfterEventSignal { public subscribe(callback: (arg0: PlayerJoinAfterEvent)=>void): (arg0: PlayerJoinAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerJoinAfterEvent)=>void): void; private constructor();};
export class IPlayerLeaveAfterEventSignal { public subscribe(callback: (arg0: PlayerLeaveAfterEvent)=>void): (arg0: PlayerLeaveAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerLeaveAfterEvent)=>void): void; private constructor();};
export class IPlayerSpawnAfterEventSignal { public subscribe(callback: (arg0: PlayerSpawnAfterEvent)=>void): (arg0: PlayerSpawnAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerSpawnAfterEvent)=>void): void; private constructor();};
export class ItemCompleteUseAfterEvent { public readonly itemStack: ItemStack; public readonly source: Player; public readonly useDuration: number; private constructor();};
export class ItemCompleteUseAfterEventSignal { public subscribe(callback: (arg0: ItemCompleteUseAfterEvent)=>void): (arg0: ItemCompleteUseAfterEvent)=>void; public unsubscribe(callback: (arg0: ItemCompleteUseAfterEvent)=>void): void; private constructor();};
export class ItemCompleteUseEvent { public readonly itemStack: ItemStack; public readonly source: Player; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemComponent extends Component{ private constructor();};
export class ItemComponentBeforeDurabilityDamageEvent { public readonly attackingEntity: Entity; public durabilityDamage: number; public readonly hitEntity: Entity; public itemStack?: ItemStack; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemComponentCompleteUseEvent extends ItemCompleteUseEvent{ private constructor();};
export class ItemComponentConsumeEvent { public readonly itemStack: ItemStack; public readonly source: Entity; private constructor();};
export class ItemComponentHitEntityEvent { public readonly attackingEntity: Entity; public readonly hadEffect: boolean; public readonly hitEntity: Entity; public readonly itemStack?: ItemStack; private constructor();};
export class ItemComponentMineBlockEvent { public readonly block: Block; public readonly itemStack?: ItemStack; public readonly minedBlockPermutation: BlockPermutation; public readonly source: Entity; private constructor();};
export class ItemComponentRegistry { public registerCustomComponent(name: string, itemCustomComponent: ItemCustomComponent): void; private constructor();};
export class ItemComponentUseEvent { public readonly itemStack?: ItemStack; public readonly source: Player; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemComponentUseOnEvent extends ItemUseOnEvent{ public readonly source: Entity; public readonly usedOnBlockPermutation: BlockPermutation; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemCooldownComponent extends ItemComponent{ public static readonly componentId = "minecraft:cooldown"; public readonly cooldownCategory: string; public readonly cooldownTicks: number; public getCooldownTicksRemaining(player: Player): number; public isCooldownCategory(cooldownCategory: string): boolean; public startCooldown(player: Player): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemDurabilityComponent extends ItemComponent{ public static readonly componentId = "minecraft:durability"; public damage: number; public readonly maxDurability: number; public getDamageChance(unbreakingEnchantmentLevel?: number): number; public getDamageChanceRange(): _1e.NumberRange; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemEnchantableComponent extends ItemComponent{ public static readonly componentId = "minecraft:enchantable"; public readonly slots: EnchantmentSlot[]; public addEnchantment(enchantment: Enchantment): void; public addEnchantments(enchantments: Enchantment[]): void; public canAddEnchantment(enchantment: Enchantment): boolean; public getEnchantment(enchantmentType: EnchantmentType | string): (Enchantment | undefined); public getEnchantments(): Enchantment[]; public hasEnchantment(enchantmentType: EnchantmentType | string): boolean; public removeAllEnchantments(): void; public removeEnchantment(enchantmentType: EnchantmentType | string): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemFoodComponent extends ItemComponent{ public static readonly componentId = "minecraft:food"; public readonly canAlwaysEat: boolean; public readonly nutrition: number; public readonly saturationModifier: number; public readonly usingConvertsTo: string; private constructor();};
export class ItemReleaseUseAfterEvent { public readonly itemStack?: ItemStack; public readonly source: Player; public readonly useDuration: number; private constructor();};
export class ItemReleaseUseAfterEventSignal { public subscribe(callback: (arg0: ItemReleaseUseAfterEvent)=>void): (arg0: ItemReleaseUseAfterEvent)=>void; public unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent)=>void): void; private constructor();};
export class ItemStack { public amount: number; public readonly isStackable: boolean; public keepOnDeath: boolean; public lockMode: ItemLockMode; public readonly maxAmount: number; public nameTag?: string; public readonly type: ItemType; public readonly typeId: string; public clearDynamicProperties(): void; public clone(): ItemStack; public constructor(itemType: ItemType | string, amount?: number); public getCanDestroy(): string[]; public getCanPlaceOn(): string[]; public getComponent(componentId: string): (ItemComponent | undefined); public getComponents(): ItemComponent[]; public getDynamicProperty(identifier: string): (boolean | number | number | string | Vector3 | undefined); public getDynamicPropertyIds(): string[]; public getDynamicPropertyTotalByteCount(): number; public getLore(): string[]; public getTags(): string[]; public hasComponent(componentId: string): boolean; public hasTag(tag: string): boolean; public isStackableWith(itemStack: ItemStack): boolean; public matches(itemName: string, states?: Record<string,boolean | number | string>): boolean; public setCanDestroy(blockIdentifiers?: string[]): void; public setCanPlaceOn(blockIdentifiers?: string[]): void; public setDynamicProperty(identifier: string, value?: boolean | number | number | string | Vector3): void; public setLore(loreList?: (RawMessage | string)[]): void;};
export class ItemStartUseAfterEvent { public readonly itemStack: ItemStack; public readonly source: Player; public readonly useDuration: number; private constructor();};
export class ItemStartUseAfterEventSignal { public subscribe(callback: (arg0: ItemStartUseAfterEvent)=>void): (arg0: ItemStartUseAfterEvent)=>void; public unsubscribe(callback: (arg0: ItemStartUseAfterEvent)=>void): void; private constructor();};
export class ItemStartUseOnAfterEvent { public readonly block: Block; public readonly blockFace: Direction; public readonly itemStack?: ItemStack; public readonly source: Player; private constructor();};
export class ItemStartUseOnAfterEventSignal { public subscribe(callback: (arg0: ItemStartUseOnAfterEvent)=>void): (arg0: ItemStartUseOnAfterEvent)=>void; public unsubscribe(callback: (arg0: ItemStartUseOnAfterEvent)=>void): void; private constructor();};
export class ItemStopUseAfterEvent { public readonly itemStack?: ItemStack; public readonly source: Player; public readonly useDuration: number; private constructor();};
export class ItemStopUseAfterEventSignal { public subscribe(callback: (arg0: ItemStopUseAfterEvent)=>void): (arg0: ItemStopUseAfterEvent)=>void; public unsubscribe(callback: (arg0: ItemStopUseAfterEvent)=>void): void; private constructor();};
export class ItemStopUseOnAfterEvent { public readonly block: Block; public readonly itemStack?: ItemStack; public readonly source: Player; private constructor();};
export class ItemStopUseOnAfterEventSignal { public subscribe(callback: (arg0: ItemStopUseOnAfterEvent)=>void): (arg0: ItemStopUseOnAfterEvent)=>void; public unsubscribe(callback: (arg0: ItemStopUseOnAfterEvent)=>void): void; private constructor();};
export class ItemType { public readonly id: string; private constructor();};
export class ItemTypes { public static get(itemId: string): (ItemType | undefined); public static getAll(): ItemType[]; private constructor();};
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
export class ItemUseOnEvent { public readonly block: Block; public readonly blockFace: Direction; public readonly faceLocation: Vector3; public readonly itemStack: ItemStack; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class LeverActionAfterEvent extends BlockEvent{ public readonly isPowered: boolean; public readonly player: Player; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class LeverActionAfterEventSignal extends ILeverActionAfterEventSignal{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ListBlockVolume extends BlockVolumeBase{ public add(locations: Vector3[]): void; public constructor(locations: Vector3[]); public remove(locations: Vector3[]): void;};
export class MinecraftDimensionTypes { public static readonly nether = "minecraft:nether"; public static readonly overworld = "minecraft:overworld"; public static readonly theEnd = "minecraft:the_end"; private constructor();};
export class MolangVariableMap { public constructor(); public setColorRGB(variableName: string, color: RGB): void; public setColorRGBA(variableName: string, color: RGBA): void; public setFloat(variableName: string, number: number): void; public setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void; public setVector3(variableName: string, vector: Vector3): void;};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PistonActivateAfterEvent extends BlockEvent{ public readonly isExpanding: boolean; public readonly piston: BlockPistonComponent; private constructor();};
export class PistonActivateAfterEventSignal { public subscribe(callback: (arg0: PistonActivateAfterEvent)=>void): (arg0: PistonActivateAfterEvent)=>void; public unsubscribe(callback: (arg0: PistonActivateAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class Player extends Entity{ public readonly camera: Camera; public readonly inputPermissions: PlayerInputPermissions; public readonly isEmoting: boolean; public readonly isFlying: boolean; public readonly isGliding: boolean; public readonly isJumping: boolean; public readonly level: number; public readonly name: string; public readonly onScreenDisplay: ScreenDisplay; public selectedSlotIndex: number; public readonly totalXpNeededForNextLevel: number; public readonly xpEarnedAtCurrentLevel: number; public addExperience(amount: number): number; public addLevels(amount: number): number; public getGameMode(): GameMode; public getItemCooldown(cooldownCategory: string): number; public getSpawnPoint(): (DimensionLocation | undefined); public getTotalXp(): number; public playMusic(trackId: string, musicOptions?: MusicOptions): void; public playSound(soundId: string, soundOptions?: PlayerSoundOptions): void; public queueMusic(trackId: string, musicOptions?: MusicOptions): void; public resetLevel(): void; public sendMessage(message: (RawMessage | string)[] | RawMessage | string): void; public setGameMode(gameMode?: GameMode): void; public setSpawnPoint(spawnPoint?: DimensionLocation): void; public startItemCooldown(cooldownCategory: string, tickDuration: number): void; public stopMusic(): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PlayerBreakBlockAfterEvent extends BlockEvent{ public readonly brokenBlockPermutation: BlockPermutation; public readonly itemStackAfterBreak?: ItemStack; public readonly itemStackBeforeBreak?: ItemStack; public readonly player: Player; private constructor();};
export class PlayerBreakBlockAfterEventSignal { public subscribe(callback: (arg0: PlayerBreakBlockAfterEvent)=>void, options?: BlockEventOptions): (arg0: PlayerBreakBlockAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PlayerBreakBlockBeforeEvent extends BlockEvent{ public cancel: boolean; public itemStack?: ItemStack; public readonly player: Player; private constructor();};
export class PlayerBreakBlockBeforeEventSignal { public subscribe(callback: (arg0: PlayerBreakBlockBeforeEvent)=>void, options?: BlockEventOptions): (arg0: PlayerBreakBlockBeforeEvent)=>void; public unsubscribe(callback: (arg0: PlayerBreakBlockBeforeEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PlayerCursorInventoryComponent extends EntityComponent{ public static readonly componentId = "minecraft:cursor_inventory"; public readonly item?: ItemStack; public clear(): void; private constructor();};
export class PlayerDimensionChangeAfterEvent { public readonly fromDimension: Dimension; public readonly fromLocation: Vector3; public readonly player: Player; public readonly toDimension: Dimension; public readonly toLocation: Vector3; private constructor();};
export class PlayerDimensionChangeAfterEventSignal { public subscribe(callback: (arg0: PlayerDimensionChangeAfterEvent)=>void): (arg0: PlayerDimensionChangeAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerDimensionChangeAfterEvent)=>void): void; private constructor();};
export class PlayerEmoteAfterEvent { public readonly personaPieceId: string; public readonly player: Player; private constructor();};
export class PlayerEmoteAfterEventSignal { public subscribe(callback: (arg0: PlayerEmoteAfterEvent)=>void): (arg0: PlayerEmoteAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerEmoteAfterEvent)=>void): void; private constructor();};
export class PlayerGameModeChangeAfterEvent { public readonly fromGameMode: GameMode; public readonly player: Player; public readonly toGameMode: GameMode; private constructor();};
export class PlayerGameModeChangeAfterEventSignal { public subscribe(callback: (arg0: PlayerGameModeChangeAfterEvent)=>void): (arg0: PlayerGameModeChangeAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerGameModeChangeAfterEvent)=>void): void; private constructor();};
export class PlayerGameModeChangeBeforeEvent { public cancel: boolean; public readonly fromGameMode: GameMode; public readonly player: Player; public toGameMode: GameMode; private constructor();};
export class PlayerGameModeChangeBeforeEventSignal { public subscribe(callback: (arg0: PlayerGameModeChangeBeforeEvent)=>void): (arg0: PlayerGameModeChangeBeforeEvent)=>void; public unsubscribe(callback: (arg0: PlayerGameModeChangeBeforeEvent)=>void): void; private constructor();};
export class PlayerInputPermissionCategoryChangeAfterEvent { public readonly category: InputPermissionCategory; public readonly enabled: boolean; public readonly player: Player; private constructor();};
export class PlayerInputPermissionCategoryChangeAfterEventSignal { public subscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent)=>void): (arg0: PlayerInputPermissionCategoryChangeAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent)=>void): void; private constructor();};
export class PlayerInputPermissions { public cameraEnabled: boolean; public movementEnabled: boolean; private constructor();};
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
export class ScreenDisplay { public getHiddenHudElements(): HudElement[]; public hideAllExcept(hudElements?: HudElement[]): void; public isForcedHidden(hudElement: HudElement): boolean; public isValid(): boolean; public resetHudElements(): void; public setActionBar(text: (RawMessage | string)[] | RawMessage | string): void; public setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void; public setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void; public updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void; private constructor();};
export class ScriptEventCommandMessageAfterEvent { public readonly id: string; public readonly initiator?: Entity; public readonly message: string; public readonly sourceBlock?: Block; public readonly sourceEntity?: Entity; public readonly sourceType: ScriptEventSource; private constructor();};
export class ScriptEventCommandMessageAfterEventSignal { public subscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent)=>void, options?: ScriptEventMessageFilterOptions): (arg0: ScriptEventCommandMessageAfterEvent)=>void; public unsubscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent)=>void): void; private constructor();};
export class Seat { public readonly lockRiderRotation: number; public readonly maxRiderCount: number; public readonly minRiderCount: number; public readonly position: Vector3; public readonly seatRotation: number; private constructor();};
export class Structure { public readonly id: string; public readonly size: Vector3; public getBlockPermutation(location: Vector3): (BlockPermutation | undefined); public getIsWaterlogged(location: Vector3): boolean; public isValid(): boolean; public saveAs(identifier: string, saveMode?: StructureSaveMode): Structure; public saveToWorld(): void; public setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void; private constructor();};
export class StructureManager { public createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): Structure; public createFromWorld(identifier: string, dimension: Dimension, from: Vector3, to: Vector3, options?: StructureCreateOptions): Structure; public delete(structure: string | Structure): boolean; public get(identifier: string): (Structure | undefined); public getWorldStructureIds(): string[]; public place(structure: string | Structure, dimension: Dimension, location: Vector3, options?: StructurePlaceOptions): void; private constructor();};
export class System { public readonly afterEvents: SystemAfterEvents; public readonly currentTick: number; public clearJob(jobId: number): void; public clearRun(runId: number): void; public run(callback: ()=>void): number; public runInterval(callback: ()=>void, tickInterval?: number): number; public runJob(generator: Generator<undefined>): number; public runTimeout(callback: ()=>void, tickDelay?: number): number; public waitTicks(ticks: number): Promise<void>; private constructor();};
export class SystemAfterEvents { public readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class TargetBlockHitAfterEvent extends BlockEvent{ public readonly hitVector: Vector3; public readonly previousRedstonePower: number; public readonly redstonePower: number; public readonly source: Entity; private constructor();};
export class TargetBlockHitAfterEventSignal { public subscribe(callback: (arg0: TargetBlockHitAfterEvent)=>void): (arg0: TargetBlockHitAfterEvent)=>void; public unsubscribe(callback: (arg0: TargetBlockHitAfterEvent)=>void): void; private constructor();};
export class Trigger { public eventName: string; public constructor(eventName: string);};
//@ts-ignore extending for classes with private constructor is possible with native API
export class TripWireTripAfterEvent extends BlockEvent{ public readonly isPowered: boolean; public readonly sources: Entity[]; private constructor();};
export class TripWireTripAfterEventSignal { public subscribe(callback: (arg0: TripWireTripAfterEvent)=>void): (arg0: TripWireTripAfterEvent)=>void; public unsubscribe(callback: (arg0: TripWireTripAfterEvent)=>void): void; private constructor();};
export class WeatherChangeAfterEvent { public readonly dimension: string; public readonly newWeather: WeatherType; public readonly previousWeather: WeatherType; private constructor();};
export class WeatherChangeAfterEventSignal { public subscribe(callback: (arg0: WeatherChangeAfterEvent)=>void): (arg0: WeatherChangeAfterEvent)=>void; public unsubscribe(callback: (arg0: WeatherChangeAfterEvent)=>void): void; private constructor();};
export class WeatherChangeBeforeEvent { public cancel: boolean; public duration: number; public newWeather: WeatherType; public readonly previousWeather: WeatherType; private constructor();};
export class WeatherChangeBeforeEventSignal { public subscribe(callback: (arg0: WeatherChangeBeforeEvent)=>void): (arg0: WeatherChangeBeforeEvent)=>void; public unsubscribe(callback: (arg0: WeatherChangeBeforeEvent)=>void): void; private constructor();};
export class World { public readonly afterEvents: WorldAfterEvents; public readonly beforeEvents: WorldBeforeEvents; public readonly gameRules: GameRules; public readonly scoreboard: Scoreboard; public readonly structureManager: StructureManager; public clearDynamicProperties(): void; public getAbsoluteTime(): number; public getAllPlayers(): Player[]; public getDay(): number; public getDefaultSpawnLocation(): Vector3; public getDimension(dimensionId: string): Dimension; public getDynamicProperty(identifier: string): (boolean | number | number | string | Vector3 | undefined); public getDynamicPropertyIds(): string[]; public getDynamicPropertyTotalByteCount(): number; public getEntity(id: string): (Entity | undefined); public getMoonPhase(): MoonPhase; public getPlayers(options?: EntityQueryOptions): Player[]; public getTimeOfDay(): number; public playMusic(trackId: string, musicOptions?: MusicOptions): void; public playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void; public queueMusic(trackId: string, musicOptions?: MusicOptions): void; public sendMessage(message: (RawMessage | string)[] | RawMessage | string): void; public setAbsoluteTime(absoluteTime: number): void; public setDefaultSpawnLocation(spawnLocation: Vector3): void; public setDynamicProperty(identifier: string, value?: boolean | number | number | string | Vector3): void; public setTimeOfDay(timeOfDay: number | TimeOfDay): void; public stopMusic(): void; private constructor();};
export class WorldAfterEvents { public readonly blockExplode: BlockExplodeAfterEventSignal; public readonly buttonPush: ButtonPushAfterEventSignal; public readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal; public readonly effectAdd: EffectAddAfterEventSignal; public readonly entityDie: EntityDieAfterEventSignal; public readonly entityHealthChanged: EntityHealthChangedAfterEventSignal; public readonly entityHitBlock: EntityHitBlockAfterEventSignal; public readonly entityHitEntity: EntityHitEntityAfterEventSignal; public readonly entityHurt: EntityHurtAfterEventSignal; public readonly entityLoad: EntityLoadAfterEventSignal; public readonly entityRemove: EntityRemoveAfterEventSignal; public readonly entitySpawn: EntitySpawnAfterEventSignal; public readonly explosion: ExplosionAfterEventSignal; public readonly gameRuleChange: GameRuleChangeAfterEventSignal; public readonly itemCompleteUse: ItemCompleteUseAfterEventSignal; public readonly itemReleaseUse: ItemReleaseUseAfterEventSignal; public readonly itemStartUse: ItemStartUseAfterEventSignal; public readonly itemStartUseOn: ItemStartUseOnAfterEventSignal; public readonly itemStopUse: ItemStopUseAfterEventSignal; public readonly itemStopUseOn: ItemStopUseOnAfterEventSignal; public readonly itemUse: ItemUseAfterEventSignal; public readonly itemUseOn: ItemUseOnAfterEventSignal; public readonly leverAction: LeverActionAfterEventSignal; public readonly pistonActivate: PistonActivateAfterEventSignal; public readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal; public readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal; public readonly playerEmote: PlayerEmoteAfterEventSignal; public readonly playerGameModeChange: PlayerGameModeChangeAfterEventSignal; public readonly playerInputPermissionCategoryChange: PlayerInputPermissionCategoryChangeAfterEventSignal; public readonly playerJoin: PlayerJoinAfterEventSignal; public readonly playerLeave: PlayerLeaveAfterEventSignal; public readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal; public readonly playerSpawn: PlayerSpawnAfterEventSignal; public readonly pressurePlatePop: PressurePlatePopAfterEventSignal; public readonly pressurePlatePush: PressurePlatePushAfterEventSignal; public readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal; public readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal; public readonly targetBlockHit: TargetBlockHitAfterEventSignal; public readonly tripWireTrip: TripWireTripAfterEventSignal; public readonly weatherChange: WeatherChangeAfterEventSignal; public readonly worldInitialize: WorldInitializeAfterEventSignal; private constructor();};
export class WorldBeforeEvents { public readonly effectAdd: EffectAddBeforeEventSignal; public readonly entityRemove: EntityRemoveBeforeEventSignal; public readonly explosion: ExplosionBeforeEventSignal; public readonly itemUse: ItemUseBeforeEventSignal; public readonly itemUseOn: ItemUseOnBeforeEventSignal; public readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal; public readonly playerGameModeChange: PlayerGameModeChangeBeforeEventSignal; public readonly playerLeave: PlayerLeaveBeforeEventSignal; public readonly weatherChange: WeatherChangeBeforeEventSignal; public readonly worldInitialize: WorldInitializeBeforeEventSignal; private constructor();};
export class WorldInitializeAfterEvent { private constructor();};
export class WorldInitializeAfterEventSignal { public subscribe(callback: (arg0: WorldInitializeAfterEvent)=>void): (arg0: WorldInitializeAfterEvent)=>void; public unsubscribe(callback: (arg0: WorldInitializeAfterEvent)=>void): void; private constructor();};
export class WorldInitializeBeforeEvent { public readonly blockComponentRegistry: BlockComponentRegistry; public readonly itemComponentRegistry: ItemComponentRegistry; private constructor();};
export class WorldInitializeBeforeEventSignal { public subscribe(callback: (arg0: WorldInitializeBeforeEvent)=>void): (arg0: WorldInitializeBeforeEvent)=>void; public unsubscribe(callback: (arg0: WorldInitializeBeforeEvent)=>void): void; private constructor();};

// Constants & Objects - 6
export const HudElementsCount = 13;
export const HudVisibilityCount = 2;
export const MoonPhaseCount = 8;
export const TicksPerSecond = 20;

export const system: System;
export const world: World;

// Functions - 0

// Errors - 22
export class BlockCustomComponentAlreadyRegisteredError extends Error{ private constructor();};
export class BlockCustomComponentReloadNewComponentError extends Error{ private constructor();};
export class BlockCustomComponentReloadNewEventError extends Error{ private constructor();};
export class BlockCustomComponentReloadVersionError extends Error{ private constructor();};
export class CommandError extends Error{ private constructor();};
export class ContainerRulesError extends Error{ private constructor();};
export class CustomComponentInvalidRegistryError extends Error{ private constructor();};
export class CustomComponentNameError extends Error{ public readonly reason: CustomComponentNameErrorReason; private constructor();};
export class EnchantmentLevelOutOfBoundsError extends Error{ private constructor();};
export class EnchantmentTypeNotCompatibleError extends Error{ private constructor();};
export class EnchantmentTypeUnknownIdError extends Error{ private constructor();};
export class EntitySpawnError extends Error{ private constructor();};
export class InvalidContainerSlotError extends Error{ private constructor();};
export class InvalidEntityError extends Error{ public readonly id: string; public readonly type: string; private constructor();};
export class InvalidStructureError extends Error{ private constructor();};
export class ItemCustomComponentAlreadyRegisteredError extends Error{ private constructor();};
export class ItemCustomComponentReloadNewComponentError extends Error{ private constructor();};
export class ItemCustomComponentReloadNewEventError extends Error{ private constructor();};
export class ItemCustomComponentReloadVersionError extends Error{ private constructor();};
export class LocationInUnloadedChunkError extends Error{ private constructor();};
export class LocationOutOfWorldBoundariesError extends Error{ private constructor();};
export class RawMessageError extends Error{ private constructor();};
