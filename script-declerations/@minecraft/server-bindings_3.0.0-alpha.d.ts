
// Enums - 61
export enum AimAssistTargetMode { Angle = "Angle", Distance = "Distance"};
export enum BlockComponentTypes { FluidContainer = "minecraft:fluid_container", Inventory = "minecraft:inventory", Piston = "minecraft:piston", RecordPlayer = "minecraft:record_player", Sign = "minecraft:sign"};
export enum BlockPistonState { Expanded = "Expanded", Expanding = "Expanding", Retracted = "Retracted", Retracting = "Retracting"};
export enum BlockVolumeIntersection { Contains = 1, Disjoint = 0, Intersects = 2};
export enum BookErrorReason { ExceedsMaxPageLength = "ExceedsMaxPageLength", ExceedsMaxPages = "ExceedsMaxPages", ExceedsTitleLength = "ExceedsTitleLength"};
export enum ButtonState { Pressed = "Pressed", Released = "Released"};
export enum CommandPermissionLevel { Admin = 2, Any = 0, GameDirectors = 1, Host = 3, Owner = 4};
export enum CompoundBlockVolumeAction { Add = 0, Subtract = 1};
export enum CompoundBlockVolumePositionRelativity { Absolute = 1, Relative = 0};
export enum ContainerRulesErrorReason { BannedItem = "BannedItem", NestedStorageItem = "NestedStorageItem", NotAllowedItem = "NotAllowedItem", OverWeightLimit = "OverWeightLimit", ZeroWeightItem = "ZeroWeightItem"};
export enum ControlScheme { CameraRelative = "CameraRelative", CameraRelativeStrafe = "CameraRelativeStrafe", LockedPlayerRelativeStrafe = "LockedPlayerRelativeStrafe", PlayerRelative = "PlayerRelative", PlayerRelativeStrafe = "PlayerRelativeStrafe"};
export enum CustomCommandErrorReason { AlreadyRegistered = "AlreadyRegistered", EnumDependencyMissing = "EnumDependencyMissing", NamespaceMismatch = "NamespaceMismatch", ParameterLimit = "ParameterLimit", RegistryInvalid = "RegistryInvalid", RegistryReadOnly = "RegistryReadOnly", UnexpectedEnumName = "UnexpectedEnumName"};
export enum CustomCommandParamType { BlockType = "BlockType", Boolean = "Boolean", EntitySelector = "EntitySelector", EntityType = "EntityType", Enum = "Enum", Float = "Float", Integer = "Integer", ItemType = "ItemType", Location = "Location", PlayerSelector = "PlayerSelector", String = "String"};
export enum CustomCommandSource { Block = "Block", Entity = "Entity", NPCDialogue = "NPCDialogue", Server = "Server"};
export enum CustomCommandStatus { Failure = 1, Success = 0};
export enum CustomComponentNameErrorReason { DisallowedNamespace = 2, NoNamespace = 1};
export enum Difficulty { Easy = "Easy", Hard = "Hard", Normal = "Normal", Peaceful = "Peaceful"};
export enum Direction { Down = "Down", East = "East", North = "North", South = "South", Up = "Up", West = "West"};
export enum DisplaySlotId { BelowName = "BelowName", List = "List", Sidebar = "Sidebar"};
export enum DyeColor { Black = "Black", Blue = "Blue", Brown = "Brown", Cyan = "Cyan", Gray = "Gray", Green = "Green", LightBlue = "LightBlue", Lime = "Lime", Magenta = "Magenta", Orange = "Orange", Pink = "Pink", Purple = "Purple", Red = "Red", Silver = "Silver", White = "White", Yellow = "Yellow"};
export enum EasingType { InBack = "InBack", InBounce = "InBounce", InCirc = "InCirc", InCubic = "InCubic", InElastic = "InElastic", InExpo = "InExpo", InOutBack = "InOutBack", InOutBounce = "InOutBounce", InOutCirc = "InOutCirc", InOutCubic = "InOutCubic", InOutElastic = "InOutElastic", InOutExpo = "InOutExpo", InOutQuad = "InOutQuad", InOutQuart = "InOutQuart", InOutQuint = "InOutQuint", InOutSine = "InOutSine", InQuad = "InQuad", InQuart = "InQuart", InQuint = "InQuint", InSine = "InSine", Linear = "Linear", OutBack = "OutBack", OutBounce = "OutBounce", OutCirc = "OutCirc", OutCubic = "OutCubic", OutElastic = "OutElastic", OutExpo = "OutExpo", OutQuad = "OutQuad", OutQuart = "OutQuart", OutQuint = "OutQuint", OutSine = "OutSine", Spring = "Spring"};
export enum EnchantmentSlot { ArmorFeet = "ArmorFeet", ArmorHead = "ArmorHead", ArmorLegs = "ArmorLegs", ArmorTorso = "ArmorTorso", Axe = "Axe", Bow = "Bow", CarrotStick = "CarrotStick", CosmeticHead = "CosmeticHead", Crossbow = "Crossbow", Elytra = "Elytra", FishingRod = "FishingRod", Flintsteel = "Flintsteel", Hoe = "Hoe", Pickaxe = "Pickaxe", Shears = "Shears", Shield = "Shield", Shovel = "Shovel", Spear = "Spear", Sword = "Sword"};
export enum EntityComponentTypes { AddRider = "minecraft:addrider", Ageable = "minecraft:ageable", Breathable = "minecraft:breathable", CanClimb = "minecraft:can_climb", CanFly = "minecraft:can_fly", CanPowerJump = "minecraft:can_power_jump", Color = "minecraft:color", Color2 = "minecraft:color2", CursorInventory = "minecraft:cursor_inventory", Equippable = "minecraft:equippable", Exhaustion = "minecraft:player.exhaustion", FireImmune = "minecraft:fire_immune", FloatsInLiquid = "minecraft:floats_in_liquid", FlyingSpeed = "minecraft:flying_speed", FrictionModifier = "minecraft:friction_modifier", Healable = "minecraft:healable", Health = "minecraft:health", Hunger = "minecraft:player.hunger", Inventory = "minecraft:inventory", IsBaby = "minecraft:is_baby", IsCharged = "minecraft:is_charged", IsChested = "minecraft:is_chested", IsDyeable = "minecraft:is_dyeable", IsHiddenWhenInvisible = "minecraft:is_hidden_when_invisible", IsIgnited = "minecraft:is_ignited", IsIllagerCaptain = "minecraft:is_illager_captain", IsSaddled = "minecraft:is_saddled", IsShaking = "minecraft:is_shaking", IsSheared = "minecraft:is_sheared", IsStackable = "minecraft:is_stackable", IsStunned = "minecraft:is_stunned", IsTamed = "minecraft:is_tamed", Item = "minecraft:item", LavaMovement = "minecraft:lava_movement", Leashable = "minecraft:leashable", MarkVariant = "minecraft:mark_variant", Movement = "minecraft:movement", MovementAmphibious = "minecraft:movement.amphibious", MovementBasic = "minecraft:movement.basic", MovementFly = "minecraft:movement.fly", MovementGeneric = "minecraft:movement.generic", MovementGlide = "minecraft:movement.glide", MovementHover = "minecraft:movement.hover", MovementJump = "minecraft:movement.jump", MovementSkip = "minecraft:movement.skip", MovementSway = "minecraft:movement.sway", NavigationClimb = "minecraft:navigation.climb", NavigationFloat = "minecraft:navigation.float", NavigationFly = "minecraft:navigation.fly", NavigationGeneric = "minecraft:navigation.generic", NavigationHover = "minecraft:navigation.hover", NavigationWalk = "minecraft:navigation.walk", Npc = "minecraft:npc", OnFire = "minecraft:onfire", Projectile = "minecraft:projectile", PushThrough = "minecraft:push_through", Rideable = "minecraft:rideable", Riding = "minecraft:riding", Saturation = "minecraft:player.saturation", Scale = "minecraft:scale", SkinId = "minecraft:skin_id", Strength = "minecraft:strength", Tameable = "minecraft:tameable", TameMount = "minecraft:tamemount", TypeFamily = "minecraft:type_family", UnderwaterMovement = "minecraft:underwater_movement", Variant = "minecraft:variant", WantsJockey = "minecraft:wants_jockey"};
export enum EntityDamageCause { anvil = "anvil", blockExplosion = "blockExplosion", campfire = "campfire", charging = "charging", contact = "contact", drowning = "drowning", entityAttack = "entityAttack", entityExplosion = "entityExplosion", fall = "fall", fallingBlock = "fallingBlock", fire = "fire", fireTick = "fireTick", fireworks = "fireworks", flyIntoWall = "flyIntoWall", freezing = "freezing", lava = "lava", lightning = "lightning", maceSmash = "maceSmash", magic = "magic", magma = "magma", none = "none", override = "override", piston = "piston", projectile = "projectile", ramAttack = "ramAttack", selfDestruct = "selfDestruct", sonicBoom = "sonicBoom", soulCampfire = "soulCampfire", stalactite = "stalactite", stalagmite = "stalagmite", starve = "starve", suffocation = "suffocation", temperature = "temperature", thorns = "thorns", void = "void", wither = "wither"};
export enum EntityInitializationCause { Born = "Born", Event = "Event", Loaded = "Loaded", Spawned = "Spawned", Transformed = "Transformed"};
export enum EquipmentSlot { Body = "Body", Chest = "Chest", Feet = "Feet", Head = "Head", Legs = "Legs", Mainhand = "Mainhand", Offhand = "Offhand"};
export enum FluidType { Lava = "Lava", Potion = "Potion", PowderSnow = "PowderSnow", Water = "Water"};
export enum GameMode { Adventure = "Adventure", Creative = "Creative", Spectator = "Spectator", Survival = "Survival"};
export enum GameRule { CommandBlockOutput = "commandBlockOutput", CommandBlocksEnabled = "commandBlocksEnabled", DoDayLightCycle = "doDayLightCycle", DoEntityDrops = "doEntityDrops", DoFireTick = "doFireTick", DoImmediateRespawn = "doImmediateRespawn", DoInsomnia = "doInsomnia", DoLimitedCrafting = "doLimitedCrafting", DoMobLoot = "doMobLoot", DoMobSpawning = "doMobSpawning", DoTileDrops = "doTileDrops", DoWeatherCycle = "doWeatherCycle", DrowningDamage = "drowningDamage", FallDamage = "fallDamage", FireDamage = "fireDamage", FreezeDamage = "freezeDamage", FunctionCommandLimit = "functionCommandLimit", KeepInventory = "keepInventory", LocatorBar = "locatorBar", MaxCommandChainLength = "maxCommandChainLength", MobGriefing = "mobGriefing", NaturalRegeneration = "naturalRegeneration", PlayersSleepingPercentage = "playersSleepingPercentage", ProjectilesCanBreakBlocks = "projectilesCanBreakBlocks", Pvp = "pvp", RandomTickSpeed = "randomTickSpeed", RecipesUnlock = "recipesUnlock", RespawnBlocksExplode = "respawnBlocksExplode", SendCommandFeedback = "sendCommandFeedback", ShowBorderEffect = "showBorderEffect", ShowCoordinates = "showCoordinates", ShowDaysPlayed = "showDaysPlayed", ShowDeathMessages = "showDeathMessages", ShowRecipeMessages = "showRecipeMessages", ShowTags = "showTags", SpawnRadius = "spawnRadius", TntExplodes = "tntExplodes", TntExplosionDropDecay = "tntExplosionDropDecay"};
export enum GraphicsMode { Deferred = "Deferred", Fancy = "Fancy", RayTraced = "RayTraced", Simple = "Simple"};
export enum HeldItemOption { AnyItem = "AnyItem", NoItem = "NoItem"};
export enum HudElement { AirBubbles = 9, Armor = 1, Crosshair = 4, Health = 6, HorseHealth = 10, Hotbar = 5, Hunger = 8, ItemText = 12, PaperDoll = 0, ProgressBar = 7, StatusEffects = 11, ToolTips = 2, TouchControls = 3};
export enum HudVisibility { Hide = 0, Reset = 1};
export enum InputButton { Jump = "Jump", Sneak = "Sneak"};
export enum InputMode { Gamepad = "Gamepad", KeyboardAndMouse = "KeyboardAndMouse", Touch = "Touch"};
export enum InputPermissionCategory { Camera = 1, Dismount = 8, Jump = 6, LateralMovement = 4, Mount = 7, MoveBackward = 10, MoveForward = 9, MoveLeft = 11, Movement = 2, MoveRight = 12, Sneak = 5};
export enum ItemComponentTypes { Book = "minecraft:book", Compostable = "minecraft:compostable", Cooldown = "minecraft:cooldown", Durability = "minecraft:durability", Dyeable = "minecraft:dyeable", Enchantable = "minecraft:enchantable", Food = "minecraft:food", Inventory = "minecraft:inventory", Potion = "minecraft:potion"};
export enum ItemLockMode { inventory = "inventory", none = "none", slot = "slot"};
export enum LiquidSettings { ApplyWaterlogging = "ApplyWaterlogging", IgnoreWaterlogging = "IgnoreWaterlogging"};
export enum LiquidType { Water = "Water"};
export enum MemoryTier { High = 3, Low = 1, Mid = 2, SuperHigh = 4, SuperLow = 0};
export enum MoonPhase { FirstQuarter = 2, FullMoon = 0, LastQuarter = 6, NewMoon = 4, WaningCrescent = 3, WaningGibbous = 1, WaxingCrescent = 5, WaxingGibbous = 7};
export enum MovementType { Immovable = "Immovable", Popped = "Popped", Push = "Push", PushPull = "PushPull"};
export enum NamespaceNameErrorReason { DisallowedNamespace = "DisallowedNamespace", NoNamespace = "NoNamespace"};
export enum ObjectiveSortOrder { Ascending = 0, Descending = 1};
export enum PaletteColor { Black = 15, Blue = 11, Brown = 12, Cyan = 9, Gray = 7, Green = 13, LightBlue = 3, Lime = 5, Magenta = 2, Orange = 1, Pink = 6, Purple = 10, Red = 14, Silver = 8, White = 0, Yellow = 4};
export enum PlatformType { Console = "Console", Desktop = "Desktop", Mobile = "Mobile"};
export enum PlayerInventoryType { Hotbar = "Hotbar", Inventory = "Inventory"};
export enum PlayerPermissionLevel { Custom = 3, Member = 1, Operator = 2, Visitor = 0};
export enum ScoreboardIdentityType { Entity = "Entity", FakePlayer = "FakePlayer", Player = "Player"};
export enum ScriptEventSource { Block = "Block", Entity = "Entity", NPCDialogue = "NPCDialogue", Server = "Server"};
export enum SignSide { Back = "Back", Front = "Front"};
export enum StickyType { None = "None", Same = "Same"};
export enum StructureAnimationMode { Blocks = "Blocks", Layers = "Layers", None = "None"};
export enum StructureMirrorAxis { None = "None", X = "X", XZ = "XZ", Z = "Z"};
export enum StructureRotation { None = "None", Rotate180 = "Rotate180", Rotate270 = "Rotate270", Rotate90 = "Rotate90"};
export enum StructureSaveMode { Memory = "Memory", World = "World"};
export enum TimeOfDay { Day = 1000, Midnight = 18000, Night = 13000, Noon = 6000, Sunrise = 23000, Sunset = 12000};
export enum TintMethod { BirchFoliage = "BirchFoliage", DefaultFoliage = "DefaultFoliage", DryFoliage = "DryFoliage", EvergreenFoliage = "EvergreenFoliage", Grass = "Grass", None = "None", Water = "Water"};
export enum WatchdogTerminateReason { Hang = "Hang", StackOverflow = "StackOverflow"};
export enum WeatherType { Clear = "Clear", Rain = "Rain", Thunder = "Thunder"};

// Interfaces - 78
export interface AABB { center: Vector3; extent: Vector3};
export interface BiomeSearchOptions { boundingSize?: Vector3};
export interface BlockBoundingBox { max: Vector3; min: Vector3};
export interface BlockCustomComponent { beforeOnPlayerPlace?: (arg0: BlockComponentPlayerPlaceBeforeEvent, arg1: CustomComponentParameters)=>void; onEntityFallOn?: (arg0: BlockComponentEntityFallOnEvent, arg1: CustomComponentParameters)=>void; onPlace?: (arg0: BlockComponentOnPlaceEvent, arg1: CustomComponentParameters)=>void; onPlayerBreak?: (arg0: BlockComponentPlayerBreakEvent, arg1: CustomComponentParameters)=>void; onPlayerInteract?: (arg0: BlockComponentPlayerInteractEvent, arg1: CustomComponentParameters)=>void; onRandomTick?: (arg0: BlockComponentRandomTickEvent, arg1: CustomComponentParameters)=>void; onStepOff?: (arg0: BlockComponentStepOffEvent, arg1: CustomComponentParameters)=>void; onStepOn?: (arg0: BlockComponentStepOnEvent, arg1: CustomComponentParameters)=>void; onTick?: (arg0: BlockComponentTickEvent, arg1: CustomComponentParameters)=>void};
export interface BlockEventOptions { blockTypes?: string[]; permutations?: BlockPermutation[]};
export interface BlockFillOptions { blockFilter?: BlockFilter; ignoreChunkBoundErrors?: boolean};
export interface BlockFilter { excludePermutations?: BlockPermutation[]; excludeTags?: string[]; excludeTypes?: string[]; includePermutations?: BlockPermutation[]; includeTags?: string[]; includeTypes?: string[]};
export interface BlockHitInformation { block: Block; face: Direction; faceLocation: Vector3};
export interface BlockRaycastHit { block: Block; face: Direction; faceLocation: Vector3};
export interface BlockRaycastOptions extends BlockFilter{ includeLiquidBlocks?: boolean; includePassableBlocks?: boolean; maxDistance?: number};
export interface CameraFadeOptions { fadeColor?: RGB; fadeTime?: CameraFadeTimeOptions};
export interface CameraFadeTimeOptions { fadeInTime: number; fadeOutTime: number; holdTime: number};
export interface CameraFixedBoomOptions { entityOffset?: Vector3; viewOffset?: Vector2};
export interface CameraFovOptions { easeOptions?: EaseOptions; fov?: number};
export interface CameraSetFacingOptions { easeOptions?: EaseOptions; facingEntity: Entity; location?: Vector3};
export interface CameraSetLocationOptions { easeOptions?: EaseOptions; location: Vector3};
export interface CameraSetPosOptions { easeOptions?: EaseOptions; facingLocation: Vector3; location?: Vector3};
export interface CameraSetRotOptions { easeOptions?: EaseOptions; location?: Vector3; rotation: Vector2};
export interface CameraTargetOptions { offsetFromTargetCenter?: Vector3; targetEntity: Entity};
export interface CompoundBlockVolumeItem { action?: CompoundBlockVolumeAction; locationRelativity?: CompoundBlockVolumePositionRelativity; volume: BlockVolume};
export interface ContainerRules { allowedItems: string[]; allowNestedStorageItems: boolean; bannedItems: string[]; weightLimit?: number};
export interface CustomCommand { cheatsRequired?: boolean; description: string; mandatoryParameters?: CustomCommandParameter[]; name: string; optionalParameters?: CustomCommandParameter[]; permissionLevel: CommandPermissionLevel};
export interface CustomCommandParameter { enumName?: string; name: string; type: CustomCommandParamType};
export interface CustomCommandResult { message?: string; status: CustomCommandStatus};
export interface DefinitionModifier { addedComponentGroups: string[]; removedComponentGroups: string[]; triggers: Trigger[]};
export interface DimensionLocation { dimension: Dimension; x: number; y: number; z: number};
export interface EaseOptions { easeTime?: number; easeType?: EasingType};
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
export interface GetBlocksStandingOnOptions { blockFilter?: BlockFilter; ignoreThinBlocks?: boolean};
export interface GreaterThanComparison { greaterThan: number};
export interface GreaterThanOrEqualsComparison { greaterThanOrEquals: number};
export interface HotbarEventOptions { allowedSlots?: number[]};
export interface InputEventOptions { buttons?: InputButton[]; state?: ButtonState};
export interface InventoryItemEventOptions { allowedSlots?: number[]; excludeItems?: string[]; excludeTags?: string[]; ignoreQuantityChange?: boolean; includeItems?: string[]; includeTags?: string[]; inventoryType?: PlayerInventoryType};
export interface ItemCustomComponent { onBeforeDurabilityDamage?: (arg0: ItemComponentBeforeDurabilityDamageEvent, arg1: CustomComponentParameters)=>void; onCompleteUse?: (arg0: ItemComponentCompleteUseEvent, arg1: CustomComponentParameters)=>void; onConsume?: (arg0: ItemComponentConsumeEvent, arg1: CustomComponentParameters)=>void; onHitEntity?: (arg0: ItemComponentHitEntityEvent, arg1: CustomComponentParameters)=>void; onMineBlock?: (arg0: ItemComponentMineBlockEvent, arg1: CustomComponentParameters)=>void; onUse?: (arg0: ItemComponentUseEvent, arg1: CustomComponentParameters)=>void; onUseOn?: (arg0: ItemComponentUseOnEvent, arg1: CustomComponentParameters)=>void};
export interface JigsawPlaceOptions { includeEntities?: boolean; keepJigsaws?: boolean; liquidSettings?: LiquidSettings};
export interface JigsawStructurePlaceOptions { ignoreStartHeight?: boolean; includeEntities?: boolean; keepJigsaws?: boolean; liquidSettings?: LiquidSettings};
export interface LessThanComparison { lessThan: number};
export interface LessThanOrEqualsComparison { lessThanOrEquals: number};
export interface MusicOptions { fade?: number; loop?: boolean; volume?: number};
export interface NotEqualsComparison { notEquals: boolean | number | string};
export interface PlayAnimationOptions { blendOutTime?: number; controller?: string; nextState?: string; players?: Player[]; stopExpression?: string};
export interface PlayerAimAssistSettings { distance?: number; presetId: string; targetMode?: AimAssistTargetMode; viewAngle?: Vector2};
export interface PlayerSoundOptions { location?: Vector3; pitch?: number; volume?: number};
export interface PlayerSwingEventOptions { heldItemOption?: HeldItemOption};
export interface ProjectileShootOptions { uncertainty?: number};
export interface RangeComparison { lowerBound: number; upperBound: number};
export interface RawMessage { rawtext?: RawMessage[]; score?: RawMessageScore; text?: string; translate?: string; with?: string[] | RawMessage};
export interface RawMessageScore { name?: string; objective?: string};
export interface RawText { rawtext?: RawMessage[]};
export interface RGB { blue: number; green: number; red: number};
export interface RGBA extends RGB{ alpha: number};
export interface ScoreboardObjectiveDisplayOptions { objective: ScoreboardObjective; sortOrder?: ObjectiveSortOrder};
export interface ScriptEventMessageFilterOptions { namespaces: string[]};
export interface SpawnEntityOptions { initialPersistence?: boolean; initialRotation?: number; spawnEvent?: string};
export interface StructureCreateOptions { includeBlocks?: boolean; includeEntities?: boolean; saveMode?: StructureSaveMode};
export interface StructurePlaceOptions { animationMode?: StructureAnimationMode; animationSeconds?: number; includeBlocks?: boolean; includeEntities?: boolean; integrity?: number; integritySeed?: string; mirror?: StructureMirrorAxis; rotation?: StructureRotation; waterlogged?: boolean};
export interface TeleportOptions { checkForBlocks?: boolean; dimension?: Dimension; facingLocation?: Vector3; keepVelocity?: boolean; rotation?: Vector2};
export interface TitleDisplayOptions { fadeInDuration: number; fadeOutDuration: number; stayDuration: number; subtitle?: (RawMessage | string)[] | RawMessage | string};
export interface Vector2 { x: number; y: number};
export interface Vector3 { x: number; y: number; z: number};
export interface VectorXZ { x: number; z: number};
export interface WorldSoundOptions { pitch?: number; volume?: number};

// Classes - 371
export class AimAssistCategory { public readonly defaultBlockPriority: number; public readonly defaultEntityPriority: number; public readonly identifier: string; public getBlockPriorities(): Record<string,number>; public getEntityPriorities(): Record<string,number>; private constructor();};
export class AimAssistCategorySettings { public defaultBlockPriority: number; public defaultEntityPriority: number; public readonly identifier: string; public constructor(identifier: string); public getBlockPriorities(): Record<string,number>; public getEntityPriorities(): Record<string,number>; public setBlockPriorities(blockPriorities: Record<string,number>): void; public setEntityPriorities(entityPriorities: Record<string,number>): void;};
export class AimAssistPreset { public readonly defaultItemSettings?: string; public readonly handSettings?: string; public readonly identifier: string; public getExcludedTargets(): string[]; public getItemSettings(): Record<string,string>; public getLiquidTargetingItems(): string[]; private constructor();};
export class AimAssistPresetSettings { public defaultItemSettings?: string; public handSettings?: string; public readonly identifier: string; public constructor(identifier: string); public getExcludedTargets(): (string[] | undefined); public getItemSettings(): Record<string,string>; public getLiquidTargetingItems(): (string[] | undefined); public setExcludedTargets(targets?: string[]): void; public setItemSettings(itemSettings: Record<string,string>): void; public setLiquidTargetingItems(items?: string[]): void;};
export class AimAssistRegistry { public static readonly DefaultCategoryId = "minecraft:default"; public static readonly DefaultPresetId = "minecraft:aim_assist_default"; public addCategory(category: AimAssistCategorySettings): AimAssistCategory; public addPreset(preset: AimAssistPresetSettings): AimAssistPreset; public getCategories(): AimAssistCategory[]; public getCategory(categoryId: string): (AimAssistCategory | undefined); public getPreset(presetId: string): (AimAssistPreset | undefined); public getPresets(): AimAssistPreset[]; private constructor();};
export class BiomeType { public readonly id: string; private constructor();};
export class BiomeTypes { public static get(typeName: string): (BiomeType | undefined); public static getAll(): BiomeType[]; private constructor();};
export class Block { public readonly dimension: Dimension; public readonly isAir: boolean; public readonly isLiquid: boolean; public readonly isSolid: boolean; public readonly isValid: boolean; public readonly isWaterlogged: boolean; public readonly localizationKey: string; public readonly location: Vector3; public readonly permutation: BlockPermutation; public readonly type: BlockType; public readonly typeId: string; public readonly x: number; public readonly y: number; public readonly z: number; public above(steps?: number): (Block | undefined); public below(steps?: number): (Block | undefined); public bottomCenter(): Vector3; public canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean; public canContainLiquid(liquidType: LiquidType): boolean; public canPlace(blockToPlace: BlockPermutation | BlockType | string, faceToPlaceOn?: Direction): boolean; public center(): Vector3; public east(steps?: number): (Block | undefined); public getComponent(componentId: string): (BlockComponent | undefined); public getItemStack(amount?: number, withData?: boolean): (ItemStack | undefined); public getLightLevel(): number; public getMapColor(): RGBA; public getRedstonePower(): (number | undefined); public getSkyLightLevel(): number; public getTags(): string[]; public hasTag(tag: string): boolean; public isLiquidBlocking(liquidType: LiquidType): boolean; public liquidCanFlowFromDirection(liquidType: LiquidType, flowDirection: Direction): boolean; public liquidSpreadCausesSpawn(liquidType: LiquidType): boolean; public matches(blockName: string, states?: Record<string,boolean | number | string>): boolean; public north(steps?: number): (Block | undefined); public offset(offset: Vector3): (Block | undefined); public setPermutation(permutation: BlockPermutation): void; public setType(blockType: BlockType | string): void; public setWaterlogged(isWaterlogged: boolean): void; public south(steps?: number): (Block | undefined); public trySetPermutation(permutation: BlockPermutation): boolean; public west(steps?: number): (Block | undefined); private constructor();};
export class BlockBoundingBoxUtils { public static createValid(min: Vector3, max: Vector3): BlockBoundingBox; public static dilate(box: BlockBoundingBox, size: Vector3): BlockBoundingBox; public static equals(box: BlockBoundingBox, other: BlockBoundingBox): boolean; public static expand(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox; public static getCenter(box: BlockBoundingBox): Vector3; public static getIntersection(box: BlockBoundingBox, other: BlockBoundingBox): (BlockBoundingBox | undefined); public static getSpan(box: BlockBoundingBox): Vector3; public static intersects(box: BlockBoundingBox, other: BlockBoundingBox): boolean; public static isInside(box: BlockBoundingBox, pos: Vector3): boolean; public static isValid(box: BlockBoundingBox): boolean; public static translate(box: BlockBoundingBox, delta: Vector3): BlockBoundingBox; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockComponent extends Component{ public readonly block: Block; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockComponentEntityFallOnEvent extends BlockEvent{ public readonly entity?: Entity; public readonly fallDistance: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockComponentOnPlaceEvent extends BlockEvent{ public readonly previousBlock: BlockPermutation; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockComponentPlayerBreakEvent extends BlockEvent{ public readonly brokenBlockPermutation: BlockPermutation; public readonly player?: Player; private constructor();};
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
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockCustomComponentInstance extends BlockComponent{ public readonly customComponentParameters: CustomComponentParameters; private constructor();};
export class BlockEvent { public readonly block: Block; public readonly dimension: Dimension; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockExplodeAfterEvent extends BlockEvent{ public readonly explodedBlockPermutation: BlockPermutation; public readonly source?: Entity; private constructor();};
export class BlockExplodeAfterEventSignal { public subscribe(callback: (arg0: BlockExplodeAfterEvent)=>void): (arg0: BlockExplodeAfterEvent)=>void; public unsubscribe(callback: (arg0: BlockExplodeAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockFluidContainerComponent extends BlockComponent{ public static readonly componentId = "minecraft:fluid_container"; public fillLevel: number; public fluidColor: RGBA; public addDye(dye: ItemType): void; public getFluidType(): FluidType; public setFluidType(fluidType: FluidType): void; public setPotion(itemStack: ItemStack): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockInventoryComponent extends BlockComponent{ public static readonly componentId = "minecraft:inventory"; public readonly container?: Container; private constructor();};
export class BlockLocationIterator { public isValid(): boolean; public next(): IteratorResult<Vector3>; public [Symbol.iterator](): this; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockMapColorComponent extends BlockComponent{ public static readonly componentId = "minecraft:map_color"; public readonly color: RGBA; public readonly tintedColor: RGBA; public readonly tintMethod: TintMethod; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockMovableComponent extends BlockComponent{ public static readonly componentId = "minecraft:movable"; public readonly movementType: MovementType; public readonly stickyType: StickyType; private constructor();};
export class BlockPermutation { public readonly type: BlockType; public canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean; public canContainLiquid(liquidType: LiquidType): boolean; public getAllStates(): Record<string,boolean | number | string>; public getItemStack(amount?: number): (ItemStack | undefined); public getState(stateName: string): (boolean | number | string | undefined); public getTags(): string[]; public hasTag(tag: string): boolean; public isLiquidBlocking(liquidType: LiquidType): boolean; public liquidSpreadCausesSpawn(liquidType: LiquidType): boolean; public matches(blockName: string, states?: Record<string,boolean | number | string>): boolean; public static resolve(blockName: string, states?: Record<string,boolean | number | string>): BlockPermutation; public withState(name: string, value: boolean | number | string): BlockPermutation; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockPistonComponent extends BlockComponent{ public static readonly componentId = "minecraft:piston"; public readonly isMoving: boolean; public readonly state: BlockPistonState; public getAttachedBlocks(): Block[]; public getAttachedBlocksLocations(): Vector3[]; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockPrecipitationInteractionsComponent extends BlockComponent{ public static readonly componentId = "minecraft:precipitation_interactions"; public accumulatesSnow(): boolean; public obstructsRain(): boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockRecordPlayerComponent extends BlockComponent{ public static readonly componentId = "minecraft:record_player"; public ejectRecord(): void; public getRecord(): (ItemStack | undefined); public isPlaying(): boolean; public pauseRecord(): void; public playRecord(): void; public setRecord(recordItemType?: ItemType | string, startPlaying?: boolean): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockRedstoneProducerComponent extends BlockComponent{ public static readonly componentId = "minecraft:redstone_producer"; public readonly power: number; public getConnectedFaces(): Direction[]; public getStronglyPoweredFace(): (Direction | undefined); private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockSignComponent extends BlockComponent{ public static readonly componentId = "minecraft:sign"; public readonly isWaxed: boolean; public getRawText(side?: SignSide): (RawText | undefined); public getText(side?: SignSide): (string | undefined); public getTextDyeColor(side?: SignSide): (DyeColor | undefined); public setText(message: RawMessage | string, side?: SignSide): void; public setTextDyeColor(color?: DyeColor, side?: SignSide): void; public setWaxed(waxed: boolean): void; private constructor();};
export class BlockStates { public static get(stateName: string): (BlockStateType | undefined); public static getAll(): BlockStateType[]; private constructor();};
export class BlockStateType { public readonly id: string; public readonly validValues: (boolean | number | string)[]; private constructor();};
export class BlockType { public readonly id: string; private constructor();};
export class BlockTypes { public static get(typeName: string): (BlockType | undefined); public static getAll(): BlockType[]; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class BlockVolume extends BlockVolumeBase{ public from: Vector3; public to: Vector3; public constructor(from: Vector3, to: Vector3); public doesLocationTouchFaces(pos: Vector3): boolean; public doesVolumeTouchFaces(other: BlockVolume): boolean; public intersects(other: BlockVolume): BlockVolumeIntersection;};
export class BlockVolumeBase { public getBlockLocationIterator(): BlockLocationIterator; public getBoundingBox(): BlockBoundingBox; public getCapacity(): number; public getMax(): Vector3; public getMin(): Vector3; public getSpan(): Vector3; public isInside(location: Vector3): boolean; public translate(delta: Vector3): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ButtonPushAfterEvent extends BlockEvent{ public readonly source: Entity; private constructor();};
export class ButtonPushAfterEventSignal { public subscribe(callback: (arg0: ButtonPushAfterEvent)=>void): (arg0: ButtonPushAfterEvent)=>void; public unsubscribe(callback: (arg0: ButtonPushAfterEvent)=>void): void; private constructor();};
export class Camera { public readonly isValid: boolean; public clear(): void; public fade(fadeCameraOptions?: CameraFadeOptions): void; public setCamera(cameraPreset: string, setOptions?: CameraFixedBoomOptions | CameraSetFacingOptions | CameraSetLocationOptions | CameraSetPosOptions | CameraSetRotOptions | CameraTargetOptions): void; public setCameraWithEase(cameraPreset: string, easeOptions: EaseOptions): void; public setDefaultCamera(cameraPreset: string, easeOptions?: EaseOptions): void; public setFov(fovCameraOptions?: CameraFovOptions): void; private constructor();};
export class ChatSendAfterEvent { public readonly message: string; public readonly sender: Player; public readonly targets?: Player[]; private constructor();};
export class ChatSendAfterEventSignal { public subscribe(callback: (arg0: ChatSendAfterEvent)=>void): (arg0: ChatSendAfterEvent)=>void; public unsubscribe(callback: (arg0: ChatSendAfterEvent)=>void): void; private constructor();};
export class ChatSendBeforeEvent { public cancel: boolean; public readonly message: string; public readonly sender: Player; public readonly targets?: Player[]; private constructor();};
export class ChatSendBeforeEventSignal { public subscribe(callback: (arg0: ChatSendBeforeEvent)=>void): (arg0: ChatSendBeforeEvent)=>void; public unsubscribe(callback: (arg0: ChatSendBeforeEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ClientSystemInfo extends SystemInfo{ public readonly maxRenderDistance: number; public readonly platformType: PlatformType; private constructor();};
export class CommandResult { public readonly successCount: number; private constructor();};
export class Component { public readonly isValid: boolean; public readonly typeId: string; private constructor();};
export class CompoundBlockVolume { public readonly capacity: number; public readonly items: CompoundBlockVolumeItem[]; public readonly itemsAbsolute: CompoundBlockVolumeItem[]; public readonly volumeCount: number; public clear(): void; public constructor(origin?: Vector3); public getBlockLocationIterator(): BlockLocationIterator; public getBoundingBox(): BlockBoundingBox; public getMax(): Vector3; public getMin(): Vector3; public getOrigin(): Vector3; public isEmpty(): boolean; public isInside(worldLocation: Vector3): boolean; public peekLastVolume(forceRelativity?: CompoundBlockVolumePositionRelativity): (CompoundBlockVolumeItem | undefined); public popVolume(): boolean; public pushVolume(item: CompoundBlockVolumeItem): void; public replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean; public setOrigin(position: Vector3, preserveExistingVolumes?: boolean): void; public translateOrigin(delta: Vector3, preserveExistingVolumes?: boolean): void;};
export class Container { public readonly containerRules?: ContainerRules; public readonly emptySlotsCount: number; public readonly isValid: boolean; public readonly size: number; public readonly weight: number; public addItem(itemStack: ItemStack): (ItemStack | undefined); public clearAll(): void; public contains(itemStack: ItemStack): boolean; public find(itemStack: ItemStack): (number | undefined); public findLast(itemStack: ItemStack): (number | undefined); public firstEmptySlot(): (number | undefined); public firstItem(): (number | undefined); public getItem(slot: number): (ItemStack | undefined); public getSlot(slot: number): ContainerSlot; public moveItem(fromSlot: number, toSlot: number, toContainer: Container): void; public setItem(slot: number, itemStack?: ItemStack): void; public swapItems(slot: number, otherSlot: number, otherContainer: Container): void; public transferItem(fromSlot: number, toContainer: Container): (ItemStack | undefined); private constructor();};
export class ContainerSlot { public amount: number; public readonly isStackable: boolean; public readonly isValid: boolean; public keepOnDeath: boolean; public lockMode: ItemLockMode; public readonly maxAmount: number; public nameTag?: string; public readonly type: ItemType; public readonly typeId: string; public clearDynamicProperties(): void; public getCanDestroy(): string[]; public getCanPlaceOn(): string[]; public getDynamicProperty(identifier: string): (boolean | number | number | string | Vector3 | undefined); public getDynamicPropertyIds(): string[]; public getDynamicPropertyTotalByteCount(): number; public getItem(): (ItemStack | undefined); public getLore(): string[]; public getRawLore(): RawMessage[]; public getTags(): string[]; public hasItem(): boolean; public hasTag(tag: string): boolean; public isStackableWith(itemStack: ItemStack): boolean; public setCanDestroy(blockIdentifiers?: string[]): void; public setCanPlaceOn(blockIdentifiers?: string[]): void; public setDynamicProperties(values: Record<string,boolean | number | number | string | Vector3 | undefined>): void; public setDynamicProperty(identifier: string, value?: boolean | number | number | string | Vector3): void; public setItem(itemStack?: ItemStack): void; public setLore(loreList?: (RawMessage | string)[]): void; private constructor();};
export class CustomCommandOrigin { public readonly initiator?: Entity; public readonly sourceBlock?: Block; public readonly sourceEntity?: Entity; public readonly sourceType: CustomCommandSource; private constructor();};
export class CustomCommandRegistry { public registerCommand(customCommand: CustomCommand, callback: ()=>(CustomCommandResult | undefined)): void; public registerEnum(name: string, values: string[]): void; private constructor();};
export class CustomComponentParameters { public readonly params: unknown; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class DamagedByEntityCondition extends LootItemCondition{ public readonly entityType: string; private constructor();};
export class DataDrivenEntityTriggerAfterEvent { public readonly entity: Entity; public readonly eventId: string; public getModifiers(): DefinitionModifier[]; private constructor();};
export class DataDrivenEntityTriggerAfterEventSignal { public subscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent)=>void, options?: EntityDataDrivenTriggerEventOptions): (arg0: DataDrivenEntityTriggerAfterEvent)=>void; public unsubscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent)=>void): void; private constructor();};
export class Dimension { public readonly heightRange: _1e.NumberRange; public readonly id: string; public readonly localizationKey: string; public containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean; public createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): boolean; public fillBlocks(volume: BlockVolumeBase, block: BlockPermutation | BlockType | string, options?: BlockFillOptions): ListBlockVolume; public findClosestBiome(pos: Vector3, biomeToFind: BiomeType | string, options?: BiomeSearchOptions): (Vector3 | undefined); public getBiome(location: Vector3): BiomeType; public getBlock(location: Vector3): (Block | undefined); public getBlockAbove(location: Vector3, options?: BlockRaycastOptions): (Block | undefined); public getBlockBelow(location: Vector3, options?: BlockRaycastOptions): (Block | undefined); public getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): (BlockRaycastHit | undefined); public getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume; public getEntities(options?: EntityQueryOptions): Entity[]; public getEntitiesAtBlockLocation(location: Vector3): Entity[]; public getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[]; public getGeneratedStructures(location: Vector3): string[]; public getLightLevel(location: Vector3): number; public getPlayers(options?: EntityQueryOptions): Player[]; public getSkyLightLevel(location: Vector3): number; public getTopmostBlock(locationXZ: VectorXZ, minHeight?: number): (Block | undefined); public getWeather(): WeatherType; public isChunkLoaded(location: Vector3): boolean; public placeFeature(featureName: string, location: Vector3, shouldThrow?: boolean): boolean; public placeFeatureRule(featureRuleName: string, location: Vector3): boolean; public playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void; public runCommand(commandString: string): CommandResult; public setBlockPermutation(location: Vector3, permutation: BlockPermutation): void; public setBlockType(location: Vector3, blockType: BlockType | string): void; public setWeather(weatherType: WeatherType, duration?: number): void; public spawnEntity(identifier: EntityType | string, location: Vector3, options?: SpawnEntityOptions): Entity; public spawnItem(itemStack: ItemStack, location: Vector3): Entity; public spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void; public stopAllSounds(): void; public stopSound(soundId: string): void; private constructor();};
export class DimensionType { public readonly typeId: string; private constructor();};
export class DimensionTypes { public static get(dimensionTypeId: string): (DimensionType | undefined); public static getAll(): DimensionType[]; private constructor();};
export class Effect { public readonly amplifier: number; public readonly displayName: string; public readonly duration: number; public readonly isValid: boolean; public readonly typeId: string; private constructor();};
export class EffectAddAfterEvent { public readonly effect: Effect; public readonly entity: Entity; private constructor();};
export class EffectAddAfterEventSignal { public subscribe(callback: (arg0: EffectAddAfterEvent)=>void, options?: EntityEventOptions): (arg0: EffectAddAfterEvent)=>void; public unsubscribe(callback: (arg0: EffectAddAfterEvent)=>void): void; private constructor();};
export class EffectAddBeforeEvent { public cancel: boolean; public duration: number; public readonly effectType: string; public readonly entity: Entity; private constructor();};
export class EffectAddBeforeEventSignal { public subscribe(callback: (arg0: EffectAddBeforeEvent)=>void): (arg0: EffectAddBeforeEvent)=>void; public unsubscribe(callback: (arg0: EffectAddBeforeEvent)=>void): void; private constructor();};
export class EffectType { public getName(): string; private constructor();};
export class EffectTypes { public static get(identifier: string): (EffectType | undefined); public static getAll(): EffectType[]; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EmptyLootItem extends LootPoolEntry{ private constructor();};
export class EnchantInfo { public readonly enchantment: string; public readonly range: _1e.NumberRange; private constructor();};
export class EnchantmentType { public readonly id: string; public readonly maxLevel: number; public constructor(enchantmentType: string);};
export class EnchantmentTypes { public static get(enchantmentId: string): (EnchantmentType | undefined); public static getAll(): EnchantmentType[]; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EnchantRandomEquipmentFunction extends LootItemFunction{ public readonly chance: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EnchantRandomlyFunction extends LootItemFunction{ public readonly treasure: boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EnchantWithLevelsFunction extends LootItemFunction{ public readonly levels: _1e.NumberRange; public readonly treasure: boolean; private constructor();};
export class Entity { public readonly dimension: Dimension; public readonly id: string; public readonly isClimbing: boolean; public readonly isFalling: boolean; public readonly isInWater: boolean; public readonly isOnGround: boolean; public readonly isSleeping: boolean; public isSneaking: boolean; public readonly isSprinting: boolean; public readonly isSwimming: boolean; public readonly isValid: boolean; public readonly localizationKey: string; public readonly location: Vector3; public nameTag: string; public readonly scoreboardIdentity?: ScoreboardIdentity; public readonly target?: Entity; public readonly typeId: string; public addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): (Effect | undefined); public addTag(tag: string): boolean; public applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean; public applyImpulse(vector: Vector3): void; public applyKnockback(horizontalForce: VectorXZ, verticalStrength: number): void; public clearDynamicProperties(): void; public clearVelocity(): void; public extinguishFire(useEffects?: boolean): boolean; public getAABB(): AABB; public getAllBlocksStandingOn(options?: GetBlocksStandingOnOptions): Block[]; public getBlockFromViewDirection(options?: BlockRaycastOptions): (BlockRaycastHit | undefined); public getBlockStandingOn(options?: GetBlocksStandingOnOptions): (Block | undefined); public getComponent(componentId: string): (EntityComponent | undefined); public getComponents(): EntityComponent[]; public getDynamicProperty(identifier: string): (boolean | number | number | string | Vector3 | undefined); public getDynamicPropertyIds(): string[]; public getDynamicPropertyTotalByteCount(): number; public getEffect(effectType: EffectType | string): (Effect | undefined); public getEffects(): Effect[]; public getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[]; public getHeadLocation(): Vector3; public getProperty(identifier: string): (boolean | number | string | undefined); public getRotation(): Vector2; public getTags(): string[]; public getVelocity(): Vector3; public getViewDirection(): Vector3; public hasComponent(componentId: string): boolean; public hasTag(tag: string): boolean; public kill(): boolean; public lookAt(targetLocation: Vector3): void; public matches(options: EntityQueryOptions): boolean; public playAnimation(animationName: string, options?: PlayAnimationOptions): void; public remove(): void; public removeEffect(effectType: EffectType | string): boolean; public removeTag(tag: string): boolean; public resetProperty(identifier: string): (boolean | number | string); public runCommand(commandString: string): CommandResult; public setDynamicProperties(values: Record<string,boolean | number | number | string | Vector3 | undefined>): void; public setDynamicProperty(identifier: string, value?: boolean | number | number | string | Vector3): void; public setOnFire(seconds: number, useEffects?: boolean): boolean; public setProperty(identifier: string, value: boolean | number | string): void; public setRotation(rotation: Vector2): void; public teleport(location: Vector3, teleportOptions?: TeleportOptions): void; public triggerEvent(eventName: string): void; public tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityAddRiderComponent extends EntityComponent{ public static readonly componentId = "minecraft:addrider"; public readonly entityType: string; public readonly spawnEvent: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityAgeableComponent extends EntityComponent{ public static readonly componentId = "minecraft:ageable"; public readonly duration: number; public readonly growUp: Trigger; public readonly transformToItem: string; public getDropItems(): string[]; public getFeedItems(): EntityDefinitionFeedItem[]; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityAttributeComponent extends EntityComponent{ public readonly currentValue: number; public readonly defaultValue: number; public readonly effectiveMax: number; public readonly effectiveMin: number; public resetToDefaultValue(): void; public resetToMaxValue(): void; public resetToMinValue(): void; public setCurrentValue(value: number): boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityBaseMovementComponent extends EntityComponent{ public readonly maxTurn: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityBreathableComponent extends EntityComponent{ public static readonly componentId = "minecraft:breathable"; public airSupply: number; public readonly breathesAir: boolean; public readonly breathesLava: boolean; public readonly breathesSolids: boolean; public readonly breathesWater: boolean; public readonly canBreathe: boolean; public readonly generatesBubbles: boolean; public readonly inhaleTime: number; public readonly suffocateTime: number; public readonly totalSupply: number; public getBreatheBlocks(): BlockPermutation[]; public getNonBreatheBlocks(): BlockPermutation[]; private constructor();};
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
export class EntityEquippableComponent extends EntityComponent{ public static readonly componentId = "minecraft:equippable"; public readonly totalArmor: number; public readonly totalToughness: number; public getEquipment(equipmentSlot: EquipmentSlot): (ItemStack | undefined); public getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot; public setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityExhaustionComponent extends EntityAttributeComponent{ public static readonly componentId = "minecraft:player.exhaustion"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityFireImmuneComponent extends EntityComponent{ public static readonly componentId = "minecraft:fire_immune"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityFloatsInLiquidComponent extends EntityComponent{ public static readonly componentId = "minecraft:floats_in_liquid"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityFlyingSpeedComponent extends EntityComponent{ public static readonly componentId = "minecraft:flying_speed"; public value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityFrictionModifierComponent extends EntityComponent{ public static readonly componentId = "minecraft:friction_modifier"; public readonly value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityHasMarkVariantCondition extends LootItemCondition{ public readonly value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityHasVariantCondition extends LootItemCondition{ public readonly value: number; private constructor();};
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
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityHungerComponent extends EntityAttributeComponent{ public static readonly componentId = "minecraft:player.hunger"; private constructor();};
export class EntityHurtAfterEvent { public readonly damage: number; public readonly damageSource: EntityDamageSource; public readonly hurtEntity: Entity; private constructor();};
export class EntityHurtAfterEventSignal { public subscribe(callback: (arg0: EntityHurtAfterEvent)=>void, options?: EntityEventOptions): (arg0: EntityHurtAfterEvent)=>void; public unsubscribe(callback: (arg0: EntityHurtAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityInventoryComponent extends EntityComponent{ public static readonly componentId = "minecraft:inventory"; public readonly additionalSlotsPerStrength: number; public readonly canBeSiphonedFrom: boolean; public readonly container: Container; public readonly containerType: string; public readonly inventorySize: number; public readonly private: boolean; public readonly restrictToOwner: boolean; private constructor();};
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
export class EntityKilledCondition extends LootItemCondition{ public readonly entityType: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityLavaMovementComponent extends EntityAttributeComponent{ public static readonly componentId = "minecraft:lava_movement"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityLeashableComponent extends EntityComponent{ public static readonly componentId = "minecraft:leashable"; public readonly canBeStolen: boolean; public readonly hardDistance: number; public readonly isLeashed: boolean; public readonly leashHolder?: Entity; public readonly leashHolderEntityId?: string; public readonly maxDistance: number; public readonly softDistance: number; public leashTo(leashHolder: Entity): void; public unleash(): void; private constructor();};
export class EntityLoadAfterEvent { public entity: Entity; private constructor();};
export class EntityLoadAfterEventSignal { public subscribe(callback: (arg0: EntityLoadAfterEvent)=>void): (arg0: EntityLoadAfterEvent)=>void; public unsubscribe(callback: (arg0: EntityLoadAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityMarkVariantComponent extends EntityComponent{ public static readonly componentId = "minecraft:mark_variant"; public readonly value: number; private constructor();};
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
export class EntityNpcComponent extends EntityComponent{ public static readonly componentId = "minecraft:npc"; public defaultScene: string; public name: string; public skinIndex: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityOnFireComponent extends EntityComponent{ public static readonly componentId = "minecraft:onfire"; public readonly onFireTicksRemaining: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityProjectileComponent extends EntityComponent{ public static readonly componentId = "minecraft:projectile"; public airInertia: number; public catchFireOnHurt: boolean; public critParticlesOnProjectileHurt: boolean; public destroyOnProjectileHurt: boolean; public gravity: number; public hitEntitySound?: string; public hitGroundSound?: string; public hitParticle?: string; public lightningStrikeOnHit: boolean; public liquidInertia: number; public onFireTime: number; public owner?: Entity; public shouldBounceOnHit: boolean; public stopOnHit: boolean; public shoot(velocity: Vector3, options?: ProjectileShootOptions): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityPushThroughComponent extends EntityComponent{ public static readonly componentId = "minecraft:push_through"; public readonly value: number; private constructor();};
export class EntityRemoveAfterEvent { public readonly removedEntityId: string; public readonly typeId: string; private constructor();};
export class EntityRemoveAfterEventSignal { public subscribe(callback: (arg0: EntityRemoveAfterEvent)=>void, options?: EntityEventOptions): (arg0: EntityRemoveAfterEvent)=>void; public unsubscribe(callback: (arg0: EntityRemoveAfterEvent)=>void): void; private constructor();};
export class EntityRemoveBeforeEvent { public readonly removedEntity: Entity; private constructor();};
export class EntityRemoveBeforeEventSignal { public subscribe(callback: (arg0: EntityRemoveBeforeEvent)=>void): (arg0: EntityRemoveBeforeEvent)=>void; public unsubscribe(callback: (arg0: EntityRemoveBeforeEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityRideableComponent extends EntityComponent{ public static readonly componentId = "minecraft:rideable"; public readonly controllingSeat: number; public readonly crouchingSkipInteract: boolean; public readonly interactText: string; public readonly passengerMaxWidth: number; public readonly pullInEntities: boolean; public readonly riderCanInteract: boolean; public readonly seatCount: number; public addRider(rider: Entity): boolean; public ejectRider(rider: Entity): void; public ejectRiders(): void; public getFamilyTypes(): string[]; public getRiders(): Entity[]; public getSeats(): Seat[]; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityRidingComponent extends EntityComponent{ public static readonly componentId = "minecraft:riding"; public readonly entityRidingOn: Entity; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntitySaturationComponent extends EntityAttributeComponent{ public static readonly componentId = "minecraft:player.saturation"; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntityScaleComponent extends EntityComponent{ public static readonly componentId = "minecraft:scale"; public readonly value: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class EntitySkinIdComponent extends EntityComponent{ public static readonly componentId = "minecraft:skin_id"; public readonly value: number; private constructor();};
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
//@ts-ignore extending for classes with private constructor is possible with native API
export class ExplorationMapFunction extends LootItemFunction{ public readonly destination: string; private constructor();};
export class ExplosionAfterEvent { public readonly dimension: Dimension; public readonly source?: Entity; public getImpactedBlocks(): Block[]; private constructor();};
export class ExplosionAfterEventSignal { public subscribe(callback: (arg0: ExplosionAfterEvent)=>void): (arg0: ExplosionAfterEvent)=>void; public unsubscribe(callback: (arg0: ExplosionAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ExplosionBeforeEvent extends ExplosionAfterEvent{ public cancel: boolean; public setImpactedBlocks(blocks: Block[]): void; private constructor();};
export class ExplosionBeforeEventSignal { public subscribe(callback: (arg0: ExplosionBeforeEvent)=>void): (arg0: ExplosionBeforeEvent)=>void; public unsubscribe(callback: (arg0: ExplosionBeforeEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ExplosionDecayFunction extends LootItemFunction{ private constructor();};
export class FeedItem { public readonly healAmount: number; public readonly item: string; public getEffects(): FeedItemEffect[]; private constructor();};
export class FeedItemEffect { public readonly amplifier: number; public readonly chance: number; public readonly duration: number; public readonly name: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class FillContainerFunction extends LootItemFunction{ public readonly lootTable: string; private constructor();};
export class FluidContainer { public static readonly maxFillLevel = 6; public static readonly minFillLevel = 0; private constructor();};
export class GameRuleChangeAfterEvent { public readonly rule: GameRule; public readonly value: boolean | number; private constructor();};
export class GameRuleChangeAfterEventSignal { public subscribe(callback: (arg0: GameRuleChangeAfterEvent)=>void): (arg0: GameRuleChangeAfterEvent)=>void; public unsubscribe(callback: (arg0: GameRuleChangeAfterEvent)=>void): void; private constructor();};
export class GameRules { public commandBlockOutput: boolean; public commandBlocksEnabled: boolean; public doDayLightCycle: boolean; public doEntityDrops: boolean; public doFireTick: boolean; public doImmediateRespawn: boolean; public doInsomnia: boolean; public doLimitedCrafting: boolean; public doMobLoot: boolean; public doMobSpawning: boolean; public doTileDrops: boolean; public doWeatherCycle: boolean; public drowningDamage: boolean; public fallDamage: boolean; public fireDamage: boolean; public freezeDamage: boolean; public functionCommandLimit: number; public keepInventory: boolean; public locatorBar: boolean; public maxCommandChainLength: number; public mobGriefing: boolean; public naturalRegeneration: boolean; public playersSleepingPercentage: number; public projectilesCanBreakBlocks: boolean; public pvp: boolean; public randomTickSpeed: number; public recipesUnlock: boolean; public respawnBlocksExplode: boolean; public sendCommandFeedback: boolean; public showBorderEffect: boolean; public showCoordinates: boolean; public showDaysPlayed: boolean; public showDeathMessages: boolean; public showRecipeMessages: boolean; public showTags: boolean; public spawnRadius: number; public tntExplodes: boolean; public tntExplosionDropDecay: boolean; private constructor();};
export class InputInfo { public readonly lastInputModeUsed: InputMode; public readonly touchOnlyAffectsHotbar: boolean; public getButtonState(button: InputButton): ButtonState; public getMovementVector(): Vector2; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class IsBabyCondition extends LootItemCondition{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemBookComponent extends ItemComponent{ public static readonly componentId = "minecraft:book"; public readonly author?: string; public readonly contents: (string | undefined)[]; public readonly isSigned: boolean; public readonly pageCount: number; public readonly rawContents: (RawMessage | undefined)[]; public readonly title?: string; public getPageContent(pageIndex: number): (string | undefined); public getRawPageContent(pageIndex: number): (RawMessage | undefined); public insertPage(pageIndex: number, content: (RawMessage | string)[] | RawMessage | string): void; public removePage(pageIndex: number): void; public setContents(contents: ((RawMessage | string)[] | RawMessage | string)[]): void; public setPageContent(pageIndex: number, content: (RawMessage | string)[] | RawMessage | string): void; public signBook(title: string, author: string): void; private constructor();};
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
export class ItemCompostableComponent extends ItemComponent{ public static readonly componentId = "minecraft:compostable"; public readonly compostingChance: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemCooldownComponent extends ItemComponent{ public static readonly componentId = "minecraft:cooldown"; public readonly cooldownCategory: string; public readonly cooldownTicks: number; public getCooldownTicksRemaining(player: Player): number; public isCooldownCategory(cooldownCategory: string): boolean; public startCooldown(player: Player): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemCustomComponentInstance extends ItemComponent{ public readonly customComponentParameters: CustomComponentParameters; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemDurabilityComponent extends ItemComponent{ public static readonly componentId = "minecraft:durability"; public damage: number; public readonly maxDurability: number; public unbreakable: boolean; public getDamageChance(unbreakingEnchantmentLevel?: number): number; public getDamageChanceRange(): _1e.NumberRange; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemDyeableComponent extends ItemComponent{ public static readonly componentId = "minecraft:dyeable"; public color?: RGB; public readonly defaultColor?: RGB; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemEnchantableComponent extends ItemComponent{ public static readonly componentId = "minecraft:enchantable"; public readonly slots: EnchantmentSlot[]; public addEnchantment(enchantment: Enchantment): void; public addEnchantments(enchantments: Enchantment[]): void; public canAddEnchantment(enchantment: Enchantment): boolean; public getEnchantment(enchantmentType: EnchantmentType | string): (Enchantment | undefined); public getEnchantments(): Enchantment[]; public hasEnchantment(enchantmentType: EnchantmentType | string): boolean; public removeAllEnchantments(): void; public removeEnchantment(enchantmentType: EnchantmentType | string): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemFoodComponent extends ItemComponent{ public static readonly componentId = "minecraft:food"; public readonly canAlwaysEat: boolean; public readonly nutrition: number; public readonly saturationModifier: number; public readonly usingConvertsTo: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemInventoryComponent extends ItemComponent{ public static readonly componentId = "minecraft:inventory"; public readonly container: Container; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ItemPotionComponent extends ItemComponent{ public static readonly componentId = "minecraft:potion"; public readonly potionDeliveryType: PotionDeliveryType; public readonly potionEffectType: PotionEffectType; private constructor();};
export class ItemReleaseUseAfterEvent { public readonly itemStack?: ItemStack; public readonly source: Player; public readonly useDuration: number; private constructor();};
export class ItemReleaseUseAfterEventSignal { public subscribe(callback: (arg0: ItemReleaseUseAfterEvent)=>void): (arg0: ItemReleaseUseAfterEvent)=>void; public unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent)=>void): void; private constructor();};
export class ItemStack { public amount: number; public readonly isStackable: boolean; public keepOnDeath: boolean; public readonly localizationKey: string; public lockMode: ItemLockMode; public readonly maxAmount: number; public nameTag?: string; public readonly type: ItemType; public readonly typeId: string; public readonly weight: number; public clearDynamicProperties(): void; public clone(): ItemStack; public constructor(itemType: ItemType | string, amount?: number); public getCanDestroy(): string[]; public getCanPlaceOn(): string[]; public getComponent(componentId: string): (ItemComponent | undefined); public getComponents(): ItemComponent[]; public getDynamicProperty(identifier: string): (boolean | number | number | string | Vector3 | undefined); public getDynamicPropertyIds(): string[]; public getDynamicPropertyTotalByteCount(): number; public getLore(): string[]; public getRawLore(): RawMessage[]; public getTags(): string[]; public hasComponent(componentId: string): boolean; public hasTag(tag: string): boolean; public isStackableWith(itemStack: ItemStack): boolean; public matches(itemName: string, states?: Record<string,boolean | number | string>): boolean; public setCanDestroy(blockIdentifiers?: string[]): void; public setCanPlaceOn(blockIdentifiers?: string[]): void; public setDynamicProperties(values: Record<string,boolean | number | number | string | Vector3 | undefined>): void; public setDynamicProperty(identifier: string, value?: boolean | number | number | string | Vector3): void; public setLore(loreList?: (RawMessage | string)[]): void;};
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
export class ItemUseOnEvent { public readonly block: Block; public readonly blockFace: Direction; public readonly faceLocation: Vector3; public readonly itemStack: ItemStack; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class KilledByEntityCondition extends LootItemCondition{ public readonly entityType: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class KilledByPlayerCondition extends LootItemCondition{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class KilledByPlayerOrPetsCondition extends LootItemCondition{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class LeverActionAfterEvent extends BlockEvent{ public readonly isPowered: boolean; public readonly player: Player; private constructor();};
export class LeverActionAfterEventSignal { public subscribe(callback: (arg0: LeverActionAfterEvent)=>void): (arg0: LeverActionAfterEvent)=>void; public unsubscribe(callback: (arg0: LeverActionAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ListBlockVolume extends BlockVolumeBase{ public add(locations: Vector3[]): void; public constructor(locations: Vector3[]); public remove(locations: Vector3[]): void;};
//@ts-ignore extending for classes with private constructor is possible with native API
export class LootingEnchantFunction extends LootItemFunction{ public readonly count: _1e.NumberRange; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class LootItem extends LootPoolEntry{ public readonly functions: LootItemFunction[]; public readonly name?: ItemType; private constructor();};
export class LootItemCondition { private constructor();};
export class LootItemFunction { public readonly conditions: LootItemCondition[]; private constructor();};
export class LootPool { public readonly bonusRolls: _1e.NumberRange; public readonly conditions: LootItemCondition[]; public readonly entries: LootPoolEntry[]; public readonly rolls: _1e.NumberRange; public readonly tiers?: LootPoolTiers; private constructor();};
export class LootPoolEntry { public readonly quality: number; public readonly subTable?: LootPoolEntry; public readonly weight: number; private constructor();};
export class LootPoolTiers { public readonly bonusChance: number; public readonly bonusRolls: number; public readonly initialRange: number; private constructor();};
export class LootTable { public readonly path: string; public readonly pools: LootPool[]; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class LootTableEntry extends LootPoolEntry{ public readonly lootTable: LootTable; private constructor();};
export class LootTableManager { public generateLootFromBlock(block: Block, tool?: ItemStack): (ItemStack[] | undefined); public generateLootFromBlockPermutation(blockPermutation: BlockPermutation, tool?: ItemStack): (ItemStack[] | undefined); public generateLootFromBlockType(scriptBlockType: BlockType, tool?: ItemStack): (ItemStack[] | undefined); public generateLootFromEntity(entity: Entity, tool?: ItemStack): (ItemStack[] | undefined); public generateLootFromEntityType(entityType: EntityType, tool?: ItemStack): (ItemStack[] | undefined); public generateLootFromTable(lootTable: LootTable, tool?: ItemStack): (ItemStack[] | undefined); public getLootTable(path: string): (LootTable | undefined); private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class LootTableReference extends LootPoolEntry{ public readonly path: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class MatchToolCondition extends LootItemCondition{ public readonly count: _1e.NumberRange; public readonly durability: _1e.NumberRange; public readonly enchantments: EnchantInfo[]; public readonly itemName: string; public readonly itemTagsAll: string[]; public readonly itemTagsAny: string[]; public readonly itemTagsNone: string[]; private constructor();};
export class MessageReceiveAfterEvent { public readonly id: string; public readonly message: string; public readonly player: Player; private constructor();};
export class MolangVariableMap { public constructor(); public setColorRGB(variableName: string, color: RGB): void; public setColorRGBA(variableName: string, color: RGBA): void; public setFloat(variableName: string, number: number): void; public setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void; public setVector3(variableName: string, vector: Vector3): void;};
export class PackSettingChangeAfterEvent { public readonly settingName: string; public readonly settingValue: boolean | number | string; private constructor();};
export class PackSettingChangeAfterEventSignal { public subscribe(callback: (arg0: PackSettingChangeAfterEvent)=>void): (arg0: PackSettingChangeAfterEvent)=>void; public unsubscribe(callback: (arg0: PackSettingChangeAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PassengerOfEntityCondition extends LootItemCondition{ public readonly entityType: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PistonActivateAfterEvent extends BlockEvent{ public readonly isExpanding: boolean; public readonly piston: BlockPistonComponent; private constructor();};
export class PistonActivateAfterEventSignal { public subscribe(callback: (arg0: PistonActivateAfterEvent)=>void): (arg0: PistonActivateAfterEvent)=>void; public unsubscribe(callback: (arg0: PistonActivateAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class Player extends Entity{ public readonly camera: Camera; public readonly clientSystemInfo: ClientSystemInfo; public commandPermissionLevel: CommandPermissionLevel; public readonly graphicsMode: GraphicsMode; public readonly inputInfo: InputInfo; public readonly inputPermissions: PlayerInputPermissions; public readonly isEmoting: boolean; public readonly isFlying: boolean; public readonly isGliding: boolean; public readonly isJumping: boolean; public readonly level: number; public readonly name: string; public readonly onScreenDisplay: ScreenDisplay; public readonly playerPermissionLevel: PlayerPermissionLevel; public selectedSlotIndex: number; public readonly totalXpNeededForNextLevel: number; public readonly xpEarnedAtCurrentLevel: number; public addExperience(amount: number): number; public addLevels(amount: number): number; public clearPropertyOverridesForEntity(targetEntity: Entity | string): void; public eatItem(itemStack: ItemStack): void; public getAimAssist(): PlayerAimAssist; public getControlScheme(): ControlScheme; public getGameMode(): GameMode; public getItemCooldown(cooldownCategory: string): number; public getSpawnPoint(): (DimensionLocation | undefined); public getTotalXp(): number; public playMusic(trackId: string, musicOptions?: MusicOptions): void; public playSound(soundId: string, soundOptions?: PlayerSoundOptions): void; public postClientMessage(id: string, value: string): void; public queueMusic(trackId: string, musicOptions?: MusicOptions): void; public removePropertyOverrideForEntity(targetEntity: Entity, identifier: string): void; public resetLevel(): void; public sendMessage(message: (RawMessage | string)[] | RawMessage | string): void; public setControlScheme(controlScheme?: ControlScheme): void; public setGameMode(gameMode?: GameMode): void; public setPropertyOverrideForEntity(targetEntity: Entity, identifier: string, value: boolean | number | string): void; public setSpawnPoint(spawnPoint?: DimensionLocation): void; public spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void; public startItemCooldown(cooldownCategory: string, tickDuration: number): void; public stopAllSounds(): void; public stopMusic(): void; public stopSound(soundId: string): void; private constructor();};
export class PlayerAimAssist { public readonly settings?: PlayerAimAssistSettings; public set(settings?: PlayerAimAssistSettings): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PlayerBreakBlockAfterEvent extends BlockEvent{ public readonly brokenBlockPermutation: BlockPermutation; public readonly itemStackAfterBreak?: ItemStack; public readonly itemStackBeforeBreak?: ItemStack; public readonly player: Player; private constructor();};
export class PlayerBreakBlockAfterEventSignal { public subscribe(callback: (arg0: PlayerBreakBlockAfterEvent)=>void, options?: BlockEventOptions): (arg0: PlayerBreakBlockAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PlayerBreakBlockBeforeEvent extends BlockEvent{ public cancel: boolean; public itemStack?: ItemStack; public readonly player: Player; private constructor();};
export class PlayerBreakBlockBeforeEventSignal { public subscribe(callback: (arg0: PlayerBreakBlockBeforeEvent)=>void, options?: BlockEventOptions): (arg0: PlayerBreakBlockBeforeEvent)=>void; public unsubscribe(callback: (arg0: PlayerBreakBlockBeforeEvent)=>void): void; private constructor();};
export class PlayerButtonInputAfterEvent { public readonly button: InputButton; public readonly newButtonState: ButtonState; public readonly player: Player; private constructor();};
export class PlayerButtonInputAfterEventSignal { public subscribe(callback: (arg0: PlayerButtonInputAfterEvent)=>void, options?: InputEventOptions): (arg0: PlayerButtonInputAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerButtonInputAfterEvent)=>void): void; private constructor();};
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
export class PlayerHotbarSelectedSlotChangeAfterEvent { public readonly itemStack?: ItemStack; public readonly newSlotSelected: number; public readonly player: Player; public readonly previousSlotSelected: number; private constructor();};
export class PlayerHotbarSelectedSlotChangeAfterEventSignal { public subscribe(callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent)=>void, options?: HotbarEventOptions): (arg0: PlayerHotbarSelectedSlotChangeAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent)=>void): void; private constructor();};
export class PlayerInputModeChangeAfterEvent { public readonly newInputModeUsed: InputMode; public readonly player: Player; public readonly previousInputModeUsed: InputMode; private constructor();};
export class PlayerInputModeChangeAfterEventSignal { public subscribe(callback: (arg0: PlayerInputModeChangeAfterEvent)=>void): (arg0: PlayerInputModeChangeAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerInputModeChangeAfterEvent)=>void): void; private constructor();};
export class PlayerInputPermissionCategoryChangeAfterEvent { public readonly category: InputPermissionCategory; public readonly enabled: boolean; public readonly player: Player; private constructor();};
export class PlayerInputPermissionCategoryChangeAfterEventSignal { public subscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent)=>void): (arg0: PlayerInputPermissionCategoryChangeAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent)=>void): void; private constructor();};
export class PlayerInputPermissions { public isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean; public setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void; private constructor();};
export class PlayerInteractWithBlockAfterEvent { public readonly beforeItemStack?: ItemStack; public readonly block: Block; public readonly blockFace: Direction; public readonly faceLocation: Vector3; public readonly isFirstEvent: boolean; public readonly itemStack?: ItemStack; public readonly player: Player; private constructor();};
export class PlayerInteractWithBlockAfterEventSignal { public subscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent)=>void): (arg0: PlayerInteractWithBlockAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent)=>void): void; private constructor();};
export class PlayerInteractWithBlockBeforeEvent { public readonly block: Block; public readonly blockFace: Direction; public cancel: boolean; public readonly faceLocation: Vector3; public readonly isFirstEvent: boolean; public readonly itemStack?: ItemStack; public readonly player: Player; private constructor();};
export class PlayerInteractWithBlockBeforeEventSignal { public subscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent)=>void): (arg0: PlayerInteractWithBlockBeforeEvent)=>void; public unsubscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent)=>void): void; private constructor();};
export class PlayerInteractWithEntityAfterEvent { public readonly beforeItemStack?: ItemStack; public readonly itemStack?: ItemStack; public readonly player: Player; public readonly target: Entity; private constructor();};
export class PlayerInteractWithEntityAfterEventSignal { public subscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent)=>void): (arg0: PlayerInteractWithEntityAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent)=>void): void; private constructor();};
export class PlayerInteractWithEntityBeforeEvent { public cancel: boolean; public readonly itemStack?: ItemStack; public readonly player: Player; public readonly target: Entity; private constructor();};
export class PlayerInteractWithEntityBeforeEventSignal { public subscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent)=>void): (arg0: PlayerInteractWithEntityBeforeEvent)=>void; public unsubscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent)=>void): void; private constructor();};
export class PlayerInventoryItemChangeAfterEvent { public readonly beforeItemStack?: ItemStack; public readonly inventoryType: PlayerInventoryType; public readonly itemStack?: ItemStack; public readonly player: Player; public readonly slot: number; private constructor();};
export class PlayerInventoryItemChangeAfterEventSignal { public subscribe(callback: (arg0: PlayerInventoryItemChangeAfterEvent)=>void, options?: InventoryItemEventOptions): (arg0: PlayerInventoryItemChangeAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerInventoryItemChangeAfterEvent)=>void): void; private constructor();};
export class PlayerJoinAfterEvent { public readonly playerId: string; public readonly playerName: string; private constructor();};
export class PlayerJoinAfterEventSignal { public subscribe(callback: (arg0: PlayerJoinAfterEvent)=>void): (arg0: PlayerJoinAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerJoinAfterEvent)=>void): void; private constructor();};
export class PlayerLeaveAfterEvent { public readonly playerId: string; public readonly playerName: string; private constructor();};
export class PlayerLeaveAfterEventSignal { public subscribe(callback: (arg0: PlayerLeaveAfterEvent)=>void): (arg0: PlayerLeaveAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerLeaveAfterEvent)=>void): void; private constructor();};
export class PlayerLeaveBeforeEvent { public readonly player: Player; private constructor();};
export class PlayerLeaveBeforeEventSignal { public subscribe(callback: (arg0: PlayerLeaveBeforeEvent)=>void): (arg0: PlayerLeaveBeforeEvent)=>void; public unsubscribe(callback: (arg0: PlayerLeaveBeforeEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PlayerPlaceBlockAfterEvent extends BlockEvent{ public readonly player: Player; private constructor();};
export class PlayerPlaceBlockAfterEventSignal { public subscribe(callback: (arg0: PlayerPlaceBlockAfterEvent)=>void, options?: BlockEventOptions): (arg0: PlayerPlaceBlockAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerPlaceBlockAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class PlayerPlaceBlockBeforeEvent extends BlockEvent{ public cancel: boolean; public readonly face: Direction; public readonly faceLocation: Vector3; public readonly permutationToPlace: BlockPermutation; public readonly player: Player; private constructor();};
export class PlayerPlaceBlockBeforeEventSignal { public subscribe(callback: (arg0: PlayerPlaceBlockBeforeEvent)=>void, options?: BlockEventOptions): (arg0: PlayerPlaceBlockBeforeEvent)=>void; public unsubscribe(callback: (arg0: PlayerPlaceBlockBeforeEvent)=>void): void; private constructor();};
export class PlayerSpawnAfterEvent { public initialSpawn: boolean; public player: Player; private constructor();};
export class PlayerSpawnAfterEventSignal { public subscribe(callback: (arg0: PlayerSpawnAfterEvent)=>void): (arg0: PlayerSpawnAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerSpawnAfterEvent)=>void): void; private constructor();};
export class PlayerSwingStartAfterEvent { public readonly heldItemStack?: ItemStack; public readonly player: Player; private constructor();};
export class PlayerSwingStartAfterEventSignal { public subscribe(callback: (arg0: PlayerSwingStartAfterEvent)=>void, options?: PlayerSwingEventOptions): (arg0: PlayerSwingStartAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerSwingStartAfterEvent)=>void): void; private constructor();};
export class PlayerUseNameTagAfterEvent { public entityNamed: Entity; public newName: string; public player: Player; public previousName?: string; private constructor();};
export class PlayerUseNameTagAfterEventSignal { public subscribe(callback: (arg0: PlayerUseNameTagAfterEvent)=>void): (arg0: PlayerUseNameTagAfterEvent)=>void; public unsubscribe(callback: (arg0: PlayerUseNameTagAfterEvent)=>void): void; private constructor();};
export class PotionDeliveryType { public readonly id: string; private constructor();};
export class PotionEffectType { public readonly durationTicks?: number; public readonly id: string; private constructor();};
export class Potions { public static getAllDeliveryTypes(): PotionDeliveryType[]; public static getAllEffectTypes(): PotionEffectType[]; public static getDeliveryType(potionDeliveryId: string): (PotionDeliveryType | undefined); public static getEffectType(potionEffectId: string): (PotionEffectType | undefined); public static resolve(potionEffectType: PotionEffectType | string, potionDeliveryType: PotionDeliveryType | string): ItemStack; private constructor();};
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
//@ts-ignore extending for classes with private constructor is possible with native API
export class RandomAuxValueFunction extends LootItemFunction{ public readonly values: _1e.NumberRange; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class RandomBlockStateFunction extends LootItemFunction{ public readonly blockState: string; public readonly values: _1e.NumberRange; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class RandomChanceCondition extends LootItemCondition{ public readonly chance: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class RandomChanceWithLootingCondition extends LootItemCondition{ public readonly chance: number; public readonly lootingMultiplier: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class RandomDifficultyChanceCondition extends LootItemCondition{ public readonly chances: number[]; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class RandomDyeFunction extends LootItemFunction{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class RandomRegionalDifficultyChanceCondition extends LootItemCondition{ public readonly maxChance: number; private constructor();};
export class Scoreboard { public addObjective(objectiveId: string, displayName?: string): ScoreboardObjective; public clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): (ScoreboardObjective | undefined); public getObjective(objectiveId: string): (ScoreboardObjective | undefined); public getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): (ScoreboardObjectiveDisplayOptions | undefined); public getObjectives(): ScoreboardObjective[]; public getParticipants(): ScoreboardIdentity[]; public removeObjective(objectiveId: ScoreboardObjective | string): boolean; public setObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId, objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions): (ScoreboardObjective | undefined); private constructor();};
export class ScoreboardIdentity { public readonly displayName: string; public readonly id: number; public readonly isValid: boolean; public readonly type: ScoreboardIdentityType; public getEntity(): (Entity | undefined); private constructor();};
export class ScoreboardObjective { public readonly displayName: string; public readonly id: string; public readonly isValid: boolean; public addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number; public getParticipants(): ScoreboardIdentity[]; public getScore(participant: Entity | ScoreboardIdentity | string): (number | undefined); public getScores(): ScoreboardScoreInfo[]; public hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean; public removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean; public setScore(participant: Entity | ScoreboardIdentity | string, score: number): void; private constructor();};
export class ScoreboardScoreInfo { public readonly participant: ScoreboardIdentity; public readonly score: number; private constructor();};
export class ScreenDisplay { public readonly isValid: boolean; public getHiddenHudElements(): HudElement[]; public hideAllExcept(hudElements?: HudElement[]): void; public isForcedHidden(hudElement: HudElement): boolean; public resetHudElementsVisibility(): void; public setActionBar(text: (RawMessage | string)[] | RawMessage | string): void; public setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void; public setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void; public updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void; private constructor();};
export class ScriptEventCommandMessageAfterEvent { public readonly id: string; public readonly initiator?: Entity; public readonly message: string; public readonly sourceBlock?: Block; public readonly sourceEntity?: Entity; public readonly sourceType: ScriptEventSource; private constructor();};
export class ScriptEventCommandMessageAfterEventSignal { public subscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent)=>void, options?: ScriptEventMessageFilterOptions): (arg0: ScriptEventCommandMessageAfterEvent)=>void; public unsubscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent)=>void): void; private constructor();};
export class Seat { public readonly lockRiderRotation: number; public readonly maxRiderCount: number; public readonly minRiderCount: number; public readonly position: Vector3; public readonly seatRotation: number; private constructor();};
export class ServerMessageAfterEventSignal { public subscribe(callback: (arg0: MessageReceiveAfterEvent)=>void): (arg0: MessageReceiveAfterEvent)=>void; public unsubscribe(callback: (arg0: MessageReceiveAfterEvent)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class SetArmorTrimFunction extends LootItemFunction{ public readonly material: string; public readonly pattern: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class SetBannerDetailsFunction extends LootItemFunction{ public readonly type: number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class SetBookContentsFunction extends LootItemFunction{ public readonly author: string; public readonly pages: string[]; public readonly title: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class SetDataFromColorIndexFunction extends LootItemFunction{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class SetItemCountFunction extends LootItemFunction{ public readonly count: _1e.NumberRange; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class SetItemDamageFunction extends LootItemFunction{ public readonly damage: _1e.NumberRange; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class SetItemDataFunction extends LootItemFunction{ public readonly data: _1e.NumberRange; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class SetItemLoreFunction extends LootItemFunction{ public readonly lore: string[]; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class SetItemNameFunction extends LootItemFunction{ public readonly name: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class SetOminousBottleFunction extends LootItemFunction{ public readonly amplifier: _1e.NumberRange; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class SetPotionFunction extends LootItemFunction{ public readonly id: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class SetSpawnEggFunction extends LootItemFunction{ public readonly id: string; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class SetStewEffectFunction extends LootItemFunction{ public readonly effects: number[]; private constructor();};
export class ShutdownBeforeEventSignal { public subscribe(callback: (arg0: ShutdownEvent)=>void): (arg0: ShutdownEvent)=>void; public unsubscribe(callback: (arg0: ShutdownEvent)=>void): void; private constructor();};
export class ShutdownEvent { private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class SmeltItemFunction extends LootItemFunction{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class SpecificEnchantFunction extends LootItemFunction{ public readonly enchantments: EnchantInfo[]; private constructor();};
export class StartupBeforeEventSignal { public subscribe(callback: (arg0: StartupEvent)=>void): (arg0: StartupEvent)=>void; public unsubscribe(callback: (arg0: StartupEvent)=>void): void; private constructor();};
export class StartupEvent { public readonly blockComponentRegistry: BlockComponentRegistry; public readonly customCommandRegistry: CustomCommandRegistry; public readonly itemComponentRegistry: ItemComponentRegistry; private constructor();};
export class Structure { public readonly id: string; public readonly isValid: boolean; public readonly size: Vector3; public getBlockPermutation(location: Vector3): (BlockPermutation | undefined); public getIsWaterlogged(location: Vector3): boolean; public saveAs(identifier: string, saveMode?: StructureSaveMode): Structure; public saveToWorld(): void; public setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void; private constructor();};
export class StructureManager { public createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): Structure; public createFromWorld(identifier: string, dimension: Dimension, from: Vector3, to: Vector3, options?: StructureCreateOptions): Structure; public delete(structure: string | Structure): boolean; public get(identifier: string): (Structure | undefined); public getWorldStructureIds(): string[]; public place(structure: string | Structure, dimension: Dimension, location: Vector3, options?: StructurePlaceOptions): void; public placeJigsaw(pool: string, targetJigsaw: string, maxDepth: number, dimension: Dimension, location: Vector3, options?: JigsawPlaceOptions): BlockBoundingBox; public placeJigsawStructure(identifier: string, dimension: Dimension, location: Vector3, options?: JigsawStructurePlaceOptions): BlockBoundingBox; private constructor();};
export class System { public readonly afterEvents: SystemAfterEvents; public readonly beforeEvents: SystemBeforeEvents; public readonly currentTick: number; public readonly isEditorWorld: boolean; public readonly serverSystemInfo: SystemInfo; public clearJob(jobId: number): void; public clearRun(runId: number): void; public run(callback: ()=>void): number; public runInterval(callback: ()=>void, tickInterval?: number): number; public runJob(generator: Generator<undefined>): number; public runTimeout(callback: ()=>void, tickDelay?: number): number; public sendScriptEvent(id: string, message: string): void; public waitTicks(ticks: number): Promise<void>; private constructor();};
export class SystemAfterEvents { public readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal; private constructor();};
export class SystemBeforeEvents { public readonly shutdown: ShutdownBeforeEventSignal; public readonly startup: StartupBeforeEventSignal; public readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal; private constructor();};
export class SystemInfo { public readonly memoryTier: MemoryTier; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class TargetBlockHitAfterEvent extends BlockEvent{ public readonly hitVector: Vector3; public readonly previousRedstonePower: number; public readonly redstonePower: number; public readonly source: Entity; private constructor();};
export class TargetBlockHitAfterEventSignal { public subscribe(callback: (arg0: TargetBlockHitAfterEvent)=>void): (arg0: TargetBlockHitAfterEvent)=>void; public unsubscribe(callback: (arg0: TargetBlockHitAfterEvent)=>void): void; private constructor();};
export class Trigger { public eventName: string; public constructor(eventName: string);};
//@ts-ignore extending for classes with private constructor is possible with native API
export class TripWireTripAfterEvent extends BlockEvent{ public readonly isPowered: boolean; public readonly sources: Entity[]; private constructor();};
export class TripWireTripAfterEventSignal { public subscribe(callback: (arg0: TripWireTripAfterEvent)=>void): (arg0: TripWireTripAfterEvent)=>void; public unsubscribe(callback: (arg0: TripWireTripAfterEvent)=>void): void; private constructor();};
export class WatchdogTerminateBeforeEvent { public cancel: boolean; public readonly terminateReason: WatchdogTerminateReason; private constructor();};
export class WatchdogTerminateBeforeEventSignal { public subscribe(callback: (arg0: WatchdogTerminateBeforeEvent)=>void): (arg0: WatchdogTerminateBeforeEvent)=>void; public unsubscribe(callback: (arg0: WatchdogTerminateBeforeEvent)=>void): void; private constructor();};
export class WeatherChangeAfterEvent { public readonly dimension: string; public readonly newWeather: WeatherType; public readonly previousWeather: WeatherType; private constructor();};
export class WeatherChangeAfterEventSignal { public subscribe(callback: (arg0: WeatherChangeAfterEvent)=>void): (arg0: WeatherChangeAfterEvent)=>void; public unsubscribe(callback: (arg0: WeatherChangeAfterEvent)=>void): void; private constructor();};
export class WeatherChangeBeforeEvent { public cancel: boolean; public duration: number; public newWeather: WeatherType; public readonly previousWeather: WeatherType; private constructor();};
export class WeatherChangeBeforeEventSignal { public subscribe(callback: (arg0: WeatherChangeBeforeEvent)=>void): (arg0: WeatherChangeBeforeEvent)=>void; public unsubscribe(callback: (arg0: WeatherChangeBeforeEvent)=>void): void; private constructor();};
export class World { public readonly afterEvents: WorldAfterEvents; public readonly beforeEvents: WorldBeforeEvents; public readonly gameRules: GameRules; public readonly isHardcore: boolean; public readonly scoreboard: Scoreboard; public readonly structureManager: StructureManager; public broadcastClientMessage(id: string, value: string): void; public clearDynamicProperties(): void; public getAbsoluteTime(): number; public getAimAssist(): AimAssistRegistry; public getAllPlayers(): Player[]; public getDay(): number; public getDefaultSpawnLocation(): Vector3; public getDifficulty(): Difficulty; public getDimension(dimensionId: string): Dimension; public getDynamicProperty(identifier: string): (boolean | number | number | string | Vector3 | undefined); public getDynamicPropertyIds(): string[]; public getDynamicPropertyTotalByteCount(): number; public getEntity(id: string): (Entity | undefined); public getLootTableManager(): LootTableManager; public getMoonPhase(): MoonPhase; public getPackSettings(): Record<string,boolean | number | string>; public getPlayers(options?: EntityQueryOptions): Player[]; public getTimeOfDay(): number; public playMusic(trackId: string, musicOptions?: MusicOptions): void; public queueMusic(trackId: string, musicOptions?: MusicOptions): void; public sendMessage(message: (RawMessage | string)[] | RawMessage | string): void; public setAbsoluteTime(absoluteTime: number): void; public setDefaultSpawnLocation(spawnLocation: Vector3): void; public setDifficulty(difficulty: Difficulty): void; public setDynamicProperties(values: Record<string,boolean | number | number | string | Vector3 | undefined>): void; public setDynamicProperty(identifier: string, value?: boolean | number | number | string | Vector3): void; public setTimeOfDay(timeOfDay: number | TimeOfDay): void; public stopMusic(): void; private constructor();};
export class WorldAfterEvents { public readonly blockExplode: BlockExplodeAfterEventSignal; public readonly buttonPush: ButtonPushAfterEventSignal; public readonly chatSend: ChatSendAfterEventSignal; public readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal; public readonly effectAdd: EffectAddAfterEventSignal; public readonly entityDie: EntityDieAfterEventSignal; public readonly entityHealthChanged: EntityHealthChangedAfterEventSignal; public readonly entityHitBlock: EntityHitBlockAfterEventSignal; public readonly entityHitEntity: EntityHitEntityAfterEventSignal; public readonly entityHurt: EntityHurtAfterEventSignal; public readonly entityLoad: EntityLoadAfterEventSignal; public readonly entityRemove: EntityRemoveAfterEventSignal; public readonly entitySpawn: EntitySpawnAfterEventSignal; public readonly explosion: ExplosionAfterEventSignal; public readonly gameRuleChange: GameRuleChangeAfterEventSignal; public readonly itemCompleteUse: ItemCompleteUseAfterEventSignal; public readonly itemReleaseUse: ItemReleaseUseAfterEventSignal; public readonly itemStartUse: ItemStartUseAfterEventSignal; public readonly itemStartUseOn: ItemStartUseOnAfterEventSignal; public readonly itemStopUse: ItemStopUseAfterEventSignal; public readonly itemStopUseOn: ItemStopUseOnAfterEventSignal; public readonly itemUse: ItemUseAfterEventSignal; public readonly leverAction: LeverActionAfterEventSignal; public readonly messageReceive: ServerMessageAfterEventSignal; public readonly packSettingChange: PackSettingChangeAfterEventSignal; public readonly pistonActivate: PistonActivateAfterEventSignal; public readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal; public readonly playerButtonInput: PlayerButtonInputAfterEventSignal; public readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal; public readonly playerEmote: PlayerEmoteAfterEventSignal; public readonly playerGameModeChange: PlayerGameModeChangeAfterEventSignal; public readonly playerHotbarSelectedSlotChange: PlayerHotbarSelectedSlotChangeAfterEventSignal; public readonly playerInputModeChange: PlayerInputModeChangeAfterEventSignal; public readonly playerInputPermissionCategoryChange: PlayerInputPermissionCategoryChangeAfterEventSignal; public readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal; public readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal; public readonly playerInventoryItemChange: PlayerInventoryItemChangeAfterEventSignal; public readonly playerJoin: PlayerJoinAfterEventSignal; public readonly playerLeave: PlayerLeaveAfterEventSignal; public readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal; public readonly playerSpawn: PlayerSpawnAfterEventSignal; public readonly playerSwingStart: PlayerSwingStartAfterEventSignal; public readonly playerUseNameTag: PlayerUseNameTagAfterEventSignal; public readonly pressurePlatePop: PressurePlatePopAfterEventSignal; public readonly pressurePlatePush: PressurePlatePushAfterEventSignal; public readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal; public readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal; public readonly targetBlockHit: TargetBlockHitAfterEventSignal; public readonly tripWireTrip: TripWireTripAfterEventSignal; public readonly weatherChange: WeatherChangeAfterEventSignal; public readonly worldLoad: WorldLoadAfterEventSignal; private constructor();};
export class WorldBeforeEvents { public readonly chatSend: ChatSendBeforeEventSignal; public readonly effectAdd: EffectAddBeforeEventSignal; public readonly entityRemove: EntityRemoveBeforeEventSignal; public readonly explosion: ExplosionBeforeEventSignal; public readonly itemUse: ItemUseBeforeEventSignal; public readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal; public readonly playerGameModeChange: PlayerGameModeChangeBeforeEventSignal; public readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal; public readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal; public readonly playerLeave: PlayerLeaveBeforeEventSignal; public readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal; public readonly weatherChange: WeatherChangeBeforeEventSignal; private constructor();};
export class WorldLoadAfterEvent { private constructor();};
export class WorldLoadAfterEventSignal { public subscribe(callback: (arg0: WorldLoadAfterEvent)=>void): (arg0: WorldLoadAfterEvent)=>void; public unsubscribe(callback: (arg0: WorldLoadAfterEvent)=>void): void; private constructor();};

// Constants & Objects - 9
export const HudElementsCount = 13;
export const HudVisibilityCount = 2;
export const isAlpha = true;
export const isInternal = true;
export const MoonPhaseCount = 8;
export const TicksPerDay = 24000;
export const TicksPerSecond = 20;

export const system: System;
export const world: World;

// Functions - 0

// Errors - 34
export class BlockCustomComponentAlreadyRegisteredError extends Error{ private constructor();};
export class BlockCustomComponentReloadNewComponentError extends Error{ private constructor();};
export class BlockCustomComponentReloadNewEventError extends Error{ private constructor();};
export class BlockCustomComponentReloadVersionError extends Error{ private constructor();};
export class BookError extends Error{ public readonly reason: BookErrorReason; private constructor();};
export class BookPageContentError extends Error{ public readonly pageIndex: number; public readonly reason: BookErrorReason; private constructor();};
export class CommandError extends Error{ private constructor();};
export class ContainerRulesError extends Error{ public readonly reason: ContainerRulesErrorReason; private constructor();};
export class CustomCommandError extends Error{ public readonly reason: CustomCommandErrorReason; private constructor();};
export class CustomComponentInvalidRegistryError extends Error{ private constructor();};
export class CustomComponentNameError extends Error{ public readonly reason: CustomComponentNameErrorReason; private constructor();};
export class EnchantmentLevelOutOfBoundsError extends Error{ private constructor();};
export class EnchantmentTypeNotCompatibleError extends Error{ private constructor();};
export class EnchantmentTypeUnknownIdError extends Error{ private constructor();};
export class EntitySpawnError extends Error{ private constructor();};
export class InvalidBlockComponentError extends Error{ private constructor();};
export class InvalidContainerError extends Error{ private constructor();};
export class InvalidContainerSlotError extends Error{ private constructor();};
export class InvalidEntityError extends Error{ public readonly id: string; public readonly type: string; private constructor();};
export class InvalidItemStackError extends Error{ public readonly itemType: ItemType; private constructor();};
export class InvalidIteratorError extends Error{ private constructor();};
export class InvalidPotionDeliveryTypeError extends Error{ private constructor();};
export class InvalidPotionEffectTypeError extends Error{ private constructor();};
export class InvalidStructureError extends Error{ private constructor();};
export class ItemCustomComponentAlreadyRegisteredError extends Error{ private constructor();};
export class ItemCustomComponentReloadNewComponentError extends Error{ private constructor();};
export class ItemCustomComponentReloadNewEventError extends Error{ private constructor();};
export class ItemCustomComponentReloadVersionError extends Error{ private constructor();};
export class LocationInUnloadedChunkError extends Error{ private constructor();};
export class LocationOutOfWorldBoundariesError extends Error{ private constructor();};
export class NamespaceNameError extends Error{ public readonly reason: NamespaceNameErrorReason; private constructor();};
export class PlaceJigsawError extends Error{ private constructor();};
export class RawMessageError extends Error{ private constructor();};
export class UnloadedChunksError extends Error{ private constructor();};
