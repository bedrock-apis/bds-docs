import * as common from "@minecraft/common";
import * as server from "@minecraft/server";

export enum AudioSettingsProperty {
   AreSoundsMuted = "AreSoundsMuted",
   IsMusicMuted = "IsMusicMuted",
}
export enum Axis {
   None = 0,
   X = 1,
   Y = 2,
   Z = 4,
}
export enum BlockMaskListType {
   Disabled = "Disabled",
   Mask = "Mask",
   Replace = "Replace",
}
export enum BlockPaletteItemType {
   Probability = 1,
   Simple = 0,
}
export enum BrushDirectionalPlacementMode {
   CameraFromAbove = 5,
   CameraFromBelow = 6,
   CameraLeft = 3,
   CameraRight = 4,
   FrontFaceNegX = 8,
   FrontFaceNegY = 12,
   FrontFaceNegZ = 10,
   FrontFacePosX = 7,
   FrontFacePosY = 11,
   FrontFacePosZ = 9,
   IgnoreCamera = 0,
   NormalCamera = 1,
   OppositeCamera = 2,
   Random2Axes = 13,
   Random3Axes = 14,
}
export enum ContiguousSelectionType {
   AllBlocks = 3,
   Custom = 4,
   SameBlock = 0,
   SameBlockAndStates = 1,
   SolidBlocks = 2,
}
export enum CursorControlMode {
   Fixed = 3,
   Keyboard = 0,
   KeyboardAndMouse = 2,
   Mouse = 1,
}
export enum CursorTargetMode {
   Block = 0,
   Face = 1,
}
export enum DaylightCycle {
   AlwaysDay = 1,
   LockTime = 2,
   Normal = 0,
}
export enum EditorMode {
   Crosshair = "Crosshair",
   Tool = "Tool",
}
export enum EntityOperationType {
   Create = 0,
   Delete = 1,
}
export enum ExportResult {
   EditorSystemFailure = 7,
   FileArchiverFetchFailed = 2,
   LevelFetchFailed = 1,
   PlayerNotFound = 4,
   ProjectConverterFetchFailed = 3,
   ValidWorldExport = 0,
   WorldExportBusy = 6,
   WorldExportFailed = 5,
}
export enum FlattenMode {
   Both = 0,
   Down = 1,
   Up = 2,
}
export enum GamePublishSetting {
   FriendsOfFriends = 3,
   FriendsOnly = 2,
   InviteOnly = 1,
   NoMultiPlay = 0,
   Public = 4,
}
export enum GraphicsSettingsProperty {
   DisableBlockEntityRendering = "DisableBlockEntityRendering",
   DisableEntityRendering = "DisableEntityRendering",
   DisableParticleRendering = "DisableParticleRendering",
   DisableTerrainRendering = "DisableTerrainRendering",
   DisableWeatherRendering = "DisableWeatherRendering",
   GraphicsMode = "GraphicsMode",
   NightVision = "NightVision",
   ShowChunkBoundaries = "ShowChunkBoundaries",
   ShowCompass = "ShowCompass",
   ShowInvisibleBlocks = "ShowInvisibleBlocks",
   ShowToastNotifications = "ShowToastNotifications",
}
export enum InputModifier {
   Alt = 2,
   Any = 15,
   Control = 4,
   None = 1,
   Shift = 8,
   Unused = 0,
}
export enum LogChannel {
   All = 3,
   Message = 1,
   Toast = 2,
}
export enum MouseActionCategory {
   Button = 1,
   Drag = 3,
   Wheel = 2,
}
export enum PaintCompletionState {
   Canceled = 1,
   Failed = 2,
   Success = 0,
}
export enum PaintMode {
   BlockPaint = 0,
   Flatten = 4,
   FreehandSelect = 1,
   Roughen = 3,
   Smooth = 2,
}
export enum Plane {
   None = 0,
   XY = 1,
   XZ = 2,
   YZ = 4,
}
export enum PlaytestSessionResult {
   EditorSystemFailure = 7,
   InvalidLevelId = 8,
   InvalidSessionHandle = 1,
   OK = 0,
   PlayerNotFound = 9,
   ResponseTimeout = 10,
   SessionInfoNotFound = 2,
   TooManyPlayers = 3,
   UnspecifiedError = 11,
   UnsupportedScenario = 6,
   WorldExportBusy = 5,
   WorldExportFailed = 4,
}
export enum PrimitiveType {
   AxialSphere = 5,
   Box = 1,
   Disc = 4,
   Line = 2,
   Text = 0,
}
export enum ProjectExportType {
   PlayableWorld = 0,
   ProjectBackup = 1,
   WorldTemplate = 2,
}
export enum SelectionVolumeEventType {
   Add = 2,
   Clear = 6,
   Move = 5,
   Remove = 3,
   Set = 1,
   Translate = 4,
}
export enum SpeedSettingsProperty {
   FlySpeedMultiplier = "FlySpeedMultiplier",
}
export enum SplineType {
   Hermite = 1,
   Line = 0,
}
export enum StructureSource {
   BehaviorPack = 0,
   EditorProject = 1,
   File = 2,
   Level = 3,
}
export enum ThemeSettingsColorKey {
   Caret = "Caret",
   Confirm1 = "Confirm1",
   Confirm2 = "Confirm2",
   Confirm3 = "Confirm3",
   ConfirmFill = "ConfirmFill",
   ControlsGeneralFill = "ControlsGeneralFill",
   ControlsGeneralHighlight = "ControlsGeneralHighlight",
   Coordinate1 = "Coordinate1",
   Coordinate2 = "Coordinate2",
   Coordinate3 = "Coordinate3",
   CoordinateControlX = "CoordinateControlX",
   CoordinateControlY = "CoordinateControlY",
   CoordinateControlZ = "CoordinateControlZ",
   CursorVolumeBorder = "CursorVolumeBorder",
   CursorVolumeFill = "CursorVolumeFill",
   Destroy1 = "Destroy1",
   Destroy2 = "Destroy2",
   Destroy3 = "Destroy3",
   DestroyFill = "DestroyFill",
   DisableBackground = "DisableBackground",
   DisableFill = "DisableFill",
   DisableOutline = "DisableOutline",
   DisableText = "DisableText",
   DropDown1 = "DropDown1",
   DropDown2 = "DropDown2",
   DropDown3 = "DropDown3",
   ElementBorder = "ElementBorder",
   Error = "Error",
   FocusErrorOutline = "FocusErrorOutline",
   FocusOutline = "FocusOutline",
   HeaderBackground = "HeaderBackground",
   HotbarOutline = "HotbarOutline",
   Info1 = "Info1",
   Info2 = "Info2",
   Info3 = "Info3",
   InfoFill = "InfoFill",
   PanelBackground = "PanelBackground",
   PanelBorder = "PanelBorder",
   PlacementVolumeBorder = "PlacementVolumeBorder",
   PlacementVolumeFill = "PlacementVolumeFill",
   PrefillVolumeBorder = "PrefillVolumeBorder",
   PrefillVolumeFill = "PrefillVolumeFill",
   PrimaryActive = "PrimaryActive",
   PrimaryBackground1 = "PrimaryBackground1",
   PrimaryBackground2 = "PrimaryBackground2",
   PrimaryBackground3 = "PrimaryBackground3",
   PrimaryBackground4 = "PrimaryBackground4",
   PrimaryDefault = "PrimaryDefault",
   PrimaryDisable = "PrimaryDisable",
   PrimaryMute = "PrimaryMute",
   ScrollBar = "ScrollBar",
   SecondaryActive = "SecondaryActive",
   SecondaryBackground1 = "SecondaryBackground1",
   SecondaryBackground2 = "SecondaryBackground2",
   SecondaryBackground3 = "SecondaryBackground3",
   SecondaryDefault = "SecondaryDefault",
   SecondaryDisable = "SecondaryDisable",
   SecondaryMute = "SecondaryMute",
   SelectionVolumeBorder = "SelectionVolumeBorder",
   SelectionVolumeFill = "SelectionVolumeFill",
   SelectionVolumeOutlineBorder = "SelectionVolumeOutlineBorder",
   SelectionVolumeOutlineFill = "SelectionVolumeOutlineFill",
   TitleBarBackground = "TitleBarBackground",
   ViewportOutline = "ViewportOutline",
   Warning = "Warning",
}
export enum WidgetCollisionType {
   Bounds = 2,
   None = 0,
   Radius = 1,
}
export enum WidgetComponentType {
   BoundingBox = "BoundingBox",
   Clipboard = "Clipboard",
   Entity = "Entity",
   Gizmo = "Gizmo",
   Grid = "Grid",
   Guide = "Guide",
   RenderPrim = "RenderPrim",
   Spline = "Spline",
   Text = "Text",
   VolumeOutline = "VolumeOutline",
}
export enum WidgetGizmoEventType {
   CornerGrabbed = "CornerGrabbed",
   CornerMoved = "CornerMoved",
   CornerReleased = "CornerReleased",
   OriginActivated = "OriginActivated",
   OriginDeactivated = "OriginDeactivated",
   OriginGrabbed = "OriginGrabbed",
   OriginMoved = "OriginMoved",
   OriginReleased = "OriginReleased",
}
export enum WidgetGroupSelectionMode {
   Multiple = "Multiple",
   None = "None",
   Single = "Single",
}
export enum WidgetMouseButtonActionType {
   Drag = 2,
   Pressed = 0,
   Released = 1,
}
export enum WorldGeneratorType {
   Flat = "Flat",
   Nether = "Nether",
   Overworld = "Overworld",
   TheEnd = "TheEnd",
   Void = "Void",
}

export interface BlockMaskList {
   blockList: Array<server.BlockPermutation | server.BlockType | string>;
   maskType: BlockMaskListType;
}
export interface ClipboardWriteOptions {
   mirror?: server.StructureMirrorAxis;
   normalizedOrigin?: server.Vector3;
   offset?: server.Vector3;
   rotation?: server.StructureRotation;
}
export interface ContiguousSelectionProperties {
   checkForAdjacentFace?: boolean;
   contiguousSelectionBlockList?: Array<string>;
   contiguousSelectionType?: ContiguousSelectionType;
   fullSelectionToleranceLevel?: number;
   isFace?: boolean;
   selectionDirection?: number;
   size?: number;
   startingLocation?: server.Vector3;
}
export interface CursorPosition {
   FaceDirection: number;
   Position: server.Vector3;
}
export interface CursorProperties {
   controlMode?: CursorControlMode;
   fillColor?: server.RGBA;
   fixedModeDistance?: number;
   outlineColor?: server.RGBA;
   projectThroughLiquid?: boolean;
   targetMode?: CursorTargetMode;
   visible?: boolean;
}
export interface CursorRay {
   end: server.Vector3;
   hit: boolean;
   start: server.Vector3;
}
export interface EditorStructureSearchOptions {
   displayName?: string;
   id?: string;
   sources?: Array<StructureSource>;
   structureName?: string;
   structureNamespace?: string;
   tags?: Array<string>;
}
export interface ExtensionOptionalParameters {
   description?: string;
   notes?: string;
   toolGroupId?: string;
}
export interface GameOptions {
   bedsWork?: boolean;
   bonusChest?: boolean;
   cheats?: boolean;
   commandBlockEnabled?: boolean;
   commandBlockOutput?: boolean;
   daylightCycle?: DaylightCycle;
   difficulty?: server.Difficulty;
   dimensionId?: string;
   disableWeather?: boolean;
   drowningDamage?: boolean;
   educationEdition?: boolean;
   entitiesDropLoot?: boolean;
   exportType?: ProjectExportType;
   fallDamage?: boolean;
   fireDamage?: boolean;
   fireSpreads?: boolean;
   freezeDamage?: boolean;
   friendlyFire?: boolean;
   functionCommandLimit?: number;
   gameMode?: server.GameMode;
   hardcore?: boolean;
   immediateRespawn?: boolean;
   insomnia?: boolean;
   keepInventory?: boolean;
   lanVisibility?: boolean;
   limitedCrafting?: boolean;
   locatorBar?: boolean;
   maxCommandChainLength?: number;
   mobGriefing?: boolean;
   mobLoot?: boolean;
   mobSpawning?: boolean;
   multiplayerGame?: boolean;
   naturalRegeneration?: boolean;
   playerAccess?: GamePublishSetting;
   playerPermissions?: server.PlayerPermissionLevel;
   randomTickSpeed?: number;
   recipeUnlocking?: boolean;
   respawnBlocksExplode?: boolean;
   respawnRadius?: number;
   sendCommandFeedback?: boolean;
   showBorderEffect?: boolean;
   showCoordinates?: boolean;
   showDaysPlayed?: boolean;
   showDeathMessage?: boolean;
   showItemTags?: boolean;
   simulationDistance?: number;
   sleepSkipPercent?: number;
   spawnPosition?: server.Vector3;
   startingMap?: boolean;
   tileDrops?: boolean;
   timeOfDay?: number;
   tntExplodes?: boolean;
   weather?: number;
   worldName?: string;
}
export interface LogProperties {
   channelMask?: LogChannel;
   player?: server.Player;
   subMessage?: string;
   tags?: Array<string>;
}
export interface ProjectExportOptions {
   alwaysDay?: boolean;
   difficulty?: server.Difficulty;
   disableWeather?: boolean;
   exportName?: string;
   exportType: ProjectExportType;
   gameMode?: server.GameMode;
   initialTimOfDay?: number;
}
export interface QuickExtrudeProperties {
   checkForAdjacentFace?: boolean;
   contiguousSelectionBlockList?: Array<string>;
   contiguousSelectionType?: ContiguousSelectionType;
   isShrink?: boolean;
   layerCount?: number;
   selectionDirection?: number;
   size?: number;
   startingLocation?: server.Vector3;
}
export interface WeightedBlock {
   block: server.BlockType;
   weight: number;
}
export interface WidgetComponentBaseOptions {
   lockToSurface?: boolean;
   offset?: server.Vector3;
   visible?: boolean;
}
//@ts-ignore
export interface WidgetComponentBoundingBoxOptions extends WidgetComponentBaseOptions {
   boundsOffset?: server.Vector3;
   enableResizeHandles?: Axis;
   hullColor?: server.RGBA;
   maxSize?: server.Vector3;
   minSize?: server.Vector3;
   mirror?: server.StructureMirrorAxis;
   normalizedOrigin?: server.Vector3;
   outlineColor?: server.RGBA;
   rotation?: server.StructureRotation;
   showWorldIntersections?: boolean;
   stateChangeEvent?: (arg0: WidgetComponentBoundingBoxStateChangeEventParameters)=>void;
   visibleHull?: boolean;
}
//@ts-ignore
export interface WidgetComponentClipboardOptions extends WidgetComponentBaseOptions {
   clipboardOffset?: server.Vector3;
   highlightHullColor?: server.RGBA;
   highlightOutlineColor?: server.RGBA;
   hullColor?: server.RGBA;
   mirror?: server.StructureMirrorAxis;
   normalizedOrigin?: server.Vector3;
   outlineColor?: server.RGBA;
   rotation?: server.StructureRotation;
   showOutline?: boolean;
}
//@ts-ignore
export interface WidgetComponentEntityOptions extends WidgetComponentBaseOptions {
   deselectedAnimation?: string;
   isClickable?: boolean;
   selectedAnimation?: string;
}
//@ts-ignore
export interface WidgetComponentGizmoOptions extends WidgetComponentBaseOptions {
   axes?: Axis;
   enablePlanes?: boolean;
   normalizedAutoOffset?: server.Vector3;
   stateChangeEvent?: (arg0: WidgetComponentGizmoStateChangeEventParameters)=>void;
}
//@ts-ignore
export interface WidgetComponentGridOptions extends WidgetComponentBaseOptions {
   color?: server.RGBA;
   gridCount?: server.Vector2;
   gridSize?: server.Vector2;
   plane?: Plane;
}
//@ts-ignore
export interface WidgetComponentGuideOptions extends WidgetComponentBaseOptions {
}
//@ts-ignore
export interface WidgetComponentRenderPrimitiveOptions extends WidgetComponentBaseOptions {
}
//@ts-ignore
export interface WidgetComponentSplineOptions extends WidgetComponentBaseOptions {
   controlPoints: Array<Widget>;
   splineType?: SplineType;
}
//@ts-ignore
export interface WidgetComponentTextOptions extends WidgetComponentBaseOptions {
   color?: server.RGBA;
}
//@ts-ignore
export interface WidgetComponentVolumeOutlineOptions extends WidgetComponentBaseOptions {
   highlightHullColor?: server.RGBA;
   highlightOutlineColor?: server.RGBA;
   hullColor?: server.RGBA;
   mirror?: server.StructureMirrorAxis;
   normalizedOrigin?: server.Vector3;
   outlineColor?: server.RGBA;
   rotation?: server.StructureRotation;
   showHighlightOutline?: boolean;
   showOutline?: boolean;
   volumeOffset?: server.Vector3;
}
export interface WidgetCreateOptions {
   bindPositionToBlockCursor?: boolean;
   collisionOffset?: server.Vector3;
   collisionRadius?: number;
   collisionType?: WidgetCollisionType;
   lockToSurface?: boolean;
   selectable?: boolean;
   snapToBlockLocation?: boolean;
   stateChangeEvent?: (arg0: WidgetStateChangeEventData)=>void;
   visible?: boolean;
   widgetName?: string;
   worldBoundsMax?: server.Vector3;
   worldBoundsMin?: server.Vector3;
}
export interface WidgetGroupCreateOptions {
   groupSelectionMode?: WidgetGroupSelectionMode;
   showBounds?: boolean;
   visible?: boolean;
}

export class AudioSettings {
   public get(property: AudioSettingsProperty): (boolean | number | undefined);
   public getAll(): Record<string,boolean | number | undefined>;
   public set(property: AudioSettingsProperty, value: boolean | number): void;
   public setAll(properties: Record<string,boolean | number | undefined>): void;
   private constructor();
}
export class BlockPalette {
   public constructor();
   public getItem(index: number): IBlockPaletteItem;
   public removeItemAt(index: number): void;
   public removeItems(): void;
   public setItem(blockPaletteItem: IBlockPaletteItem, index: number): void;
}
export class BlockPaletteManager {
   public addOrReplacePalette(paletteId: string, palette: BlockPalette): void;
   public getPalette(paletteId: string): (BlockPalette | undefined);
   public getPaletteIdList(): Array<string>;
   public getPaletteItem(paletteId: string, index: number): IBlockPaletteItem;
   public getPrimaryPalette(): BlockPalette;
   public getSelectedBlockType(): server.BlockType;
   public getSelectedItem(): IBlockPaletteItem;
   public removePalette(paletteId: string): void;
   public setPaletteItem(paletteId: string, index: number, item: IBlockPaletteItem): void;
   public setPrimaryPalette(paletteId: string): void;
   public setSelectedItem(item: IBlockPaletteItem): void;
   private constructor();
}
export class BlockPaletteSelectedItemChangeAfterEvent {
   public readonly selectedPaletteItem: IBlockPaletteItem;
   private constructor();
}
export class BlockPaletteSelectedItemChangeAfterEventSignal {
   public subscribe(callback: (arg0: BlockPaletteSelectedItemChangeAfterEvent)=>void): (arg0: BlockPaletteSelectedItemChangeAfterEvent)=>void;
   public unsubscribe(callback: (arg0: BlockPaletteSelectedItemChangeAfterEvent)=>void): void;
   private constructor();
}
export class BlockUtilities {
   public fillVolume(volume: server.BlockVolumeBase | server.CompoundBlockVolume | RelativeVolumeListBlockVolume, block?: server.BlockPermutation | server.BlockType | string): void;
   public findObscuredBlocksWithinVolume(volume: server.BlockVolumeBase | RelativeVolumeListBlockVolume): RelativeVolumeListBlockVolume;
   public getContiguousSelection(properties?: ContiguousSelectionProperties): server.CompoundBlockVolume;
   public getDimensionLocationBoundingBox(): server.BlockBoundingBox;
   public getDimensionMaxLocation(): server.Vector3;
   public getDimensionMinLocation(): server.Vector3;
   public getFacePreviewSelection(properties?: QuickExtrudeProperties): server.ListBlockVolume;
   public isLocationInsideCurrentDimensionBounds(locationOrVolumeOrBounds: server.BlockBoundingBox | server.BlockVolumeBase | RelativeVolumeListBlockVolume | server.Vector3): boolean;
   public quickExtrude(properties?: QuickExtrudeProperties): void;
   public shrinkWrapVolume(volume: server.BlockVolumeBase | RelativeVolumeListBlockVolume): RelativeVolumeListBlockVolume;
   public trimVolumeToFitContents(volume: server.BlockVolumeBase | RelativeVolumeListBlockVolume, retainMarqueeAfterTrimming: boolean, ignoreLiquid: boolean, ignoreNoCollision: boolean, blockMask?: BlockMaskList): RelativeVolumeListBlockVolume;
   private constructor();
}
export class BrushShapeManager {
   public readonly activeBrushVolume?: RelativeVolumeListBlockVolume;
   public activateBrushTool(): void;
   public beginPainting(onComplete: (arg0: PaintCompletionState)=>void): void;
   public clearBlockStateOverrides(): void;
   public deactivateBrushTool(): void;
   public disableItemPlacement(): void;
   public enableItemPlacement(itemType: server.ItemType, data?: number): void;
   public endPainting(cancelled: boolean): void;
   public getBrushShapeOffset(): server.Vector3;
   public getDirectionalPlacementMode(): BrushDirectionalPlacementMode;
   public getInverseEraseMode(): boolean;
   public isBrushPaintBusy(): boolean;
   public pushBlockStateOverride(stateName: string, stateValue: boolean | number | string): void;
   public setBlockFacePlacementBasedOnCamera(enabled: boolean): void;
   public setBrushMask(mask: BlockMaskList): void;
   public setBrushShape(shape: Array<server.Vector3> | RelativeVolumeListBlockVolume): void;
   public setBrushShapeOffset(offset: server.Vector3): void;
   public setBrushShapeVisible(visible: boolean): void;
   public setDirectionalPlacementMode(directionalPlacementMode: BrushDirectionalPlacementMode): void;
   public setFlattenMode(flattenMode: FlattenMode): void;
   public setFlattenSmoothing(flattenSmoothing: number): void;
   public setFloorBlockOverride(floorBlockOverride: boolean): void;
   public setInverseEraseMode(inverseEraseMode: boolean): void;
   public setTerrainStrength(terrainStrength: number): void;
   public singlePaint(onComplete: (arg0: PaintCompletionState)=>void): void;
   public switchBrushPaintMode(paintMode: PaintMode): void;
   private constructor();
}
export class ClipboardChangeAfterEvent {
   public readonly isPrimary: boolean;
   public readonly itemId: string;
   private constructor();
}
export class ClipboardChangeAfterEventSignal {
   public subscribe(callback: (arg0: ClipboardChangeAfterEvent)=>void): (arg0: ClipboardChangeAfterEvent)=>void;
   public unsubscribe(callback: (arg0: ClipboardChangeAfterEvent)=>void): void;
   private constructor();
}
export class ClipboardItem {
   public readonly id: string;
   public readonly isEmpty: boolean;
   public readonly normalizedOrigin: server.Vector3;
   public readonly originalWorldLocation: server.Vector3;
   public readonly size: server.Vector3;
   public clear(): void;
   public getPredictedWriteVolume(location: server.Vector3, options?: ClipboardWriteOptions): RelativeVolumeListBlockVolume;
   public readFromStructure(structure: EditorStructure): void;
   public readFromWorld(source: server.BlockVolumeBase | RelativeVolumeListBlockVolume): void;
   public writeToWorld(location: server.Vector3, options?: ClipboardWriteOptions): boolean;
   private constructor();
}
export class ClipboardManager {
   public readonly clipboard: ClipboardItem;
   public create(): ClipboardItem;
   private constructor();
}
export class CurrentThemeChangeAfterEvent {
   public readonly id: string;
   private constructor();
}
export class CurrentThemeChangeAfterEventSignal {
   public subscribe(callback: (arg0: CurrentThemeChangeAfterEvent)=>void): (arg0: CurrentThemeChangeAfterEvent)=>void;
   public unsubscribe(callback: (arg0: CurrentThemeChangeAfterEvent)=>void): void;
   private constructor();
}
export class CurrentThemeColorChangeAfterEvent {
   public readonly color: server.RGBA;
   public readonly colorKey: string;
   private constructor();
}
export class CurrentThemeColorChangeAfterEventSignal {
   public subscribe(callback: (arg0: CurrentThemeColorChangeAfterEvent)=>void): (arg0: CurrentThemeColorChangeAfterEvent)=>void;
   public unsubscribe(callback: (arg0: CurrentThemeColorChangeAfterEvent)=>void): void;
   private constructor();
}
export class Cursor {
   public readonly faceDirection: number;
   public readonly isVisible: boolean;
   public getPosition(): server.Vector3;
   public getProperties(): CursorProperties;
   public getRay(): CursorRay;
   public hide(): void;
   public moveBy(offset: server.Vector3): server.Vector3;
   public resetToDefaultState(): void;
   public setProperties(properties: CursorProperties): void;
   public show(): void;
   private constructor();
}
export class CursorPropertiesChangeAfterEvent {
   public readonly position?: CursorPosition;
   public readonly properties: CursorProperties;
   private constructor();
}
export class CursorPropertyChangeAfterEventSignal {
   public subscribe(callback: (arg0: CursorPropertiesChangeAfterEvent)=>void): (arg0: CursorPropertiesChangeAfterEvent)=>void;
   public unsubscribe(callback: (arg0: CursorPropertiesChangeAfterEvent)=>void): void;
   private constructor();
}
export class EditorConstants {
   public readonly maxSelectionSize: server.Vector3;
   public readonly maxStructureOffset: server.Vector3;
   public readonly minStructureOffset: server.Vector3;
   private constructor();
}
export class EditorStructure {
   public readonly description: string;
   public readonly displayName: string;
   public readonly id: string;
   public readonly isValid: boolean;
   public readonly normalizedOrigin: server.Vector3;
   public readonly notes: string;
   public readonly offset: server.Vector3;
   public readonly originalWorldLocation: server.Vector3;
   public readonly size: server.Vector3;
   public readonly structureFullName: string;
   public readonly structureName: string;
   public readonly structureNamespace: string;
   public getBlockPermutation(location: server.Vector3): (server.BlockPermutation | undefined);
   public getIsWaterlogged(location: server.Vector3): boolean;
   public getTags(): Array<string>;
   public setBlockPermutation(location: server.Vector3, blockPermutation: server.BlockPermutation, waterlogged?: boolean): void;
   public setTags(tags: Array<string>): void;
   private constructor();
}
export class EditorStructureManager {
   public createEmpty(fullName: string, size: server.Vector3): EditorStructure;
   public createFromClipboardItem(item: ClipboardItem, fullName: string): EditorStructure;
   public deleteStructure(id: string): void;
   public getExistingTags(): Array<string>;
   public getStructure(id: string): EditorStructure;
   public searchStructures(options?: EditorStructureSearchOptions): Array<EditorStructure>;
   private constructor();
}
export class ExportManager {
   public beginExportProject(options: GameOptions): Promise<ExportResult>;
   public canExportProject(): boolean;
   public getGameOptions(useDefault?: boolean): GameOptions;
   public getGameVersion(): string;
   private constructor();
}
export class Extension {
   public readonly defaultToolGroupId: string;
   public readonly description: string;
   public readonly name: string;
   public readonly notes: string;
   private constructor();
}
export class ExtensionContext {
   public readonly afterEvents: ExtensionContextAfterEvents;
   public readonly blockPalette: BlockPaletteManager;
   public readonly blockUtilities: BlockUtilities;
   public readonly brushShapeManager: BrushShapeManager;
   public readonly clipboardManager: ClipboardManager;
   public readonly cursor: Cursor;
   public readonly exportManager: ExportManager;
   public readonly extensionInfo: Extension;
   public readonly player: server.Player;
   public readonly playtest: PlaytestManager;
   public readonly selectionManager: SelectionManager;
   public readonly settings: SettingsManager;
   public readonly structureManager: EditorStructureManager;
   public readonly transactionManager: TransactionManager;
   public readonly widgetManager: WidgetManager;
   private constructor();
}
export class ExtensionContextAfterEvents {
   public readonly blockPaletteSelectedItemChange: BlockPaletteSelectedItemChangeAfterEventSignal;
   public readonly clipboardChange: ClipboardChangeAfterEventSignal;
   public readonly currentThemeChange: CurrentThemeChangeAfterEventSignal;
   public readonly currentThemeColorChange: CurrentThemeColorChangeAfterEventSignal;
   public readonly cursorPropertyChange: CursorPropertyChangeAfterEventSignal;
   public readonly modeChange: ModeChangeAfterEventSignal;
   public readonly SelectionChange: SelectionChangeAfterEventSignal;
   private constructor();
}
export class GraphicsSettings {
   public get(property: GraphicsSettingsProperty): (boolean | number | string | undefined);
   public getAll(): Record<string,boolean | number | string | undefined>;
   public set(property: GraphicsSettingsProperty, value: boolean | number | string): void;
   public setAll(properties: Record<string,boolean | number | string | undefined>): void;
   private constructor();
}
export class IBlockPaletteItem {
   public getBlock(): (server.BlockType | undefined);
   public getDisplayName(): (string | undefined);
   public getType(): BlockPaletteItemType;
   public setBlock(block: server.BlockPermutation | server.BlockType | string): void;
   private constructor();
}
export class Logger {
   public debug(message: string, properties?: LogProperties): void;
   public error(message: string, properties?: LogProperties): void;
   public info(message: string, properties?: LogProperties): void;
   public warning(message: string, properties?: LogProperties): void;
   private constructor();
}
export class MinecraftEditor {
   public readonly afterEvents: ProjectAfterEvents;
   public readonly constants: EditorConstants;
   public readonly log: Logger;
   public readonly simulation: SimulationState;
   public readonly worldGeneratorType?: WorldGeneratorType;
   private constructor();
}
export class ModeChangeAfterEvent {
   public readonly mode: EditorMode;
   private constructor();
}
export class ModeChangeAfterEventSignal {
   public subscribe(callback: (arg0: ModeChangeAfterEvent)=>void): (arg0: ModeChangeAfterEvent)=>void;
   public unsubscribe(callback: (arg0: ModeChangeAfterEvent)=>void): void;
   private constructor();
}
export class PlaytestManager {
   public beginPlaytest(options: GameOptions): Promise<PlaytestSessionResult>;
   public getPlaytestSessionAvailability(): PlaytestSessionResult;
   private constructor();
}
//@ts-ignore
export class ProbabilityBlockPaletteItem extends IBlockPaletteItem {
   public addBlock(block: server.BlockPermutation | server.BlockType | string, weight: number): void;
   public constructor(displayName?: string);
   public getBlocks(): Array<WeightedBlock>;
   public removeBlockAt(index: number): void;
}
export class ProjectAfterEvents {
   public readonly simulationStateChange: SimulationStateChangeAfterEventSignal;
   private constructor();
}
//@ts-ignore
export class RelativeVolumeListBlockVolume extends server.BlockVolumeBase {
   public readonly isEmpty: boolean;
   public origin?: server.Vector3;
   public readonly volumeCount: number;
   public add(toAdd: Array<server.Vector3> | server.BlockVolume | server.BlockVolumeBase | RelativeVolumeListBlockVolume | server.Vector3): void;
   public clear(): void;
   public constructor(origin?: server.Vector3);
   public getVolumeList(): Array<server.BlockVolume>;
   public hasAdjacent(location: server.Vector3, normalizedOffset: server.Vector3): boolean;
   public moveTo(location: server.Vector3): void;
   public remove(toRemove: Array<server.Vector3> | server.BlockVolume | server.BlockVolumeBase | RelativeVolumeListBlockVolume | server.Vector3): void;
   public set(toSet: Array<server.Vector3> | server.BlockVolume | server.BlockVolumeBase | RelativeVolumeListBlockVolume | server.Vector3): void;
   public translate(offset: server.Vector3): void;
}
export class SelectionChangeAfterEventSignal {
   public subscribe(callback: (arg0: SelectionEventAfterEvent)=>void): (arg0: SelectionEventAfterEvent)=>void;
   public unsubscribe(callback: (arg0: SelectionEventAfterEvent)=>void): void;
   private constructor();
}
export class SelectionContainerBase {
   private constructor();
}
//@ts-ignore
export class SelectionContainerEntity extends SelectionContainerBase {
   private constructor();
}
//@ts-ignore
export class SelectionContainerVolume extends SelectionContainerBase {
   public readonly isEmpty: boolean;
   public readonly volumeCount: number;
   public add(volume: Array<server.Vector3> | server.BlockVolume | server.BlockVolumeBase | RelativeVolumeListBlockVolume | server.Vector3): void;
   public clear(): void;
   public get(): RelativeVolumeListBlockVolume;
   public getBoundingBox(): server.BlockBoundingBox;
   public moveTo(location: server.Vector3): void;
   public remove(volume: Array<server.Vector3> | server.BlockVolume | server.BlockVolumeBase | RelativeVolumeListBlockVolume | server.Vector3): void;
   public set(volume: Array<server.Vector3> | server.BlockVolume | server.BlockVolumeBase | RelativeVolumeListBlockVolume | server.Vector3): void;
   public translate(offset: server.Vector3): void;
   private constructor();
}
export class SelectionContainerVolumeEvent {
   public readonly type: SelectionVolumeEventType;
   private constructor();
}
export class SelectionEventAfterEvent {
   public readonly volumeEventData?: SelectionContainerVolumeEvent;
   private constructor();
}
export class SelectionManager {
   public readonly entity: SelectionContainerEntity;
   public readonly volume: SelectionContainerVolume;
   private constructor();
}
export class SettingsManager {
   public readonly audio: AudioSettings;
   public readonly graphics: GraphicsSettings;
   public readonly speed: SpeedSettings;
   public readonly theme: ThemeSettings;
   private constructor();
}
//@ts-ignore
export class SimpleBlockPaletteItem extends IBlockPaletteItem {
   public constructor(displayName?: string);
}
export class SimulationState {
   public isPaused(): boolean;
   public setPaused(isPaused: boolean): void;
   private constructor();
}
export class SimulationStateAfterEvent {
   public readonly paused: boolean;
   private constructor();
}
export class SimulationStateChangeAfterEventSignal {
   public subscribe(callback: (arg0: SimulationStateAfterEvent)=>void): (arg0: SimulationStateAfterEvent)=>void;
   public unsubscribe(callback: (arg0: SimulationStateAfterEvent)=>void): void;
   private constructor();
}
export class SpeedSettings {
   public get(property: SpeedSettingsProperty): (number | undefined);
   public getAll(): Record<string,number | undefined>;
   public set(property: SpeedSettingsProperty, value: number): void;
   public setAll(properties: Record<string,number | undefined>): void;
   private constructor();
}
export class ThemeSettings {
   public addNewTheme(id: string, name?: string, sourceThemeId?: string): void;
   public canThemeBeModified(id: string): boolean;
   public deleteTheme(id: string): void;
   public getCurrentTheme(): string;
   public getThemeColors(id: string): (Record<string,server.RGBA> | undefined);
   public getThemeIdList(): Array<string>;
   public getThemeName(id: string): string;
   public resolveColorKey(key: ThemeSettingsColorKey): server.RGBA;
   public setCurrentTheme(id: string): void;
   public setThemeName(id: string, name: string): void;
   public updateThemeColor(id: string, key: ThemeSettingsColorKey, newColor: server.RGBA): void;
   private constructor();
}
export class TransactionManager {
   public addEntityOperation(entity: server.Entity, type: EntityOperationType): boolean;
   public addUserDefinedOperation(transactionHandlerId: UserDefinedTransactionHandlerId, operationData: string, operationName?: string): void;
   public commitOpenTransaction(): boolean;
   public commitTrackedChanges(): number;
   public createUserDefinedTransactionHandler(undoClosure: (arg0: string)=>void, redoClosure: (arg0: string)=>void): UserDefinedTransactionHandlerId;
   public discardOpenTransaction(): boolean;
   public discardTrackedChanges(): number;
   public isBusy(): boolean;
   public openTransaction(name: string): boolean;
   public redo(): void;
   public redoSize(): number;
   public trackBlockChangeArea(from: server.Vector3, to: server.Vector3): boolean;
   public trackBlockChangeList(locations: Array<server.Vector3>): boolean;
   public trackBlockChangeVolume(blockVolume: server.BlockVolumeBase): boolean;
   public undo(): void;
   public undoSize(): number;
   private constructor();
}
export class UserDefinedTransactionHandlerId {
   private constructor();
}
export class Widget {
   public bindPositionToBlockCursor: boolean;
   public collisionOffset: server.Vector3;
   public collisionRadius: number;
   public collisionType: WidgetCollisionType;
   public readonly group: WidgetGroup;
   public location: server.Vector3;
   public lockPositionToSurface: boolean;
   public readonly selectable: boolean;
   public selected: boolean;
   public showBoundingBox: boolean;
   public showCollisionRadius: boolean;
   public snapToBlockLocation: boolean;
   public visible: boolean;
   public readonly widgetName: string;
   public addBoundingBox(componentName: string, size: server.Vector3, options?: WidgetComponentBoundingBoxOptions): WidgetComponentBoundingBox;
   public addClipboardComponent(componentName: string, clipboardItem?: ClipboardItem, options?: WidgetComponentClipboardOptions): WidgetComponentClipboard;
   public addEntityComponent(componentName: string, actorNameId: string, options?: WidgetComponentEntityOptions): WidgetComponentEntity;
   public addGizmoComponent(componentName: string, options?: WidgetComponentGizmoOptions): WidgetComponentGizmo;
   public addGridComponent(componentName: string, options?: WidgetComponentGridOptions): WidgetComponentGrid;
   public addGuideComponent(componentName: string, options?: WidgetComponentGuideOptions): WidgetComponentGuide;
   public addRenderPrimitiveComponent(componentName: string, primitiveType: WidgetComponentRenderPrimitiveTypeAxialSphere | WidgetComponentRenderPrimitiveTypeBox | WidgetComponentRenderPrimitiveTypeDisc | WidgetComponentRenderPrimitiveTypeLine, options?: WidgetComponentRenderPrimitiveOptions): WidgetComponentRenderPrimitive;
   public addSplineComponent(componentName: string, options?: WidgetComponentSplineOptions): WidgetComponentSpline;
   public addTextComponent(componentName: string, label: string, options?: WidgetComponentTextOptions): WidgetComponentText;
   public addVolumeOutline(componentName: string, volume?: server.BlockVolumeBase | RelativeVolumeListBlockVolume, options?: WidgetComponentVolumeOutlineOptions): WidgetComponentVolumeOutline;
   public delete(): void;
   public deleteComponent(componentOrName: string | WidgetComponentBase): void;
   public getComponent(componentName: string): WidgetComponentBase;
   public getComponents(): Array<WidgetComponentBase>;
   public setStateChangeEvent(eventFunction?: (arg0: WidgetStateChangeEventData)=>void): void;
   private constructor();
}
export class WidgetComponentBase {
   public readonly componentType: WidgetComponentType;
   public readonly location: server.Vector3;
   public lockToSurface: boolean;
   public readonly name: string;
   public offset: server.Vector3;
   public readonly valid: boolean;
   public visible: boolean;
   public readonly widget: Widget;
   public delete(): void;
   private constructor();
}
//@ts-ignore
export class WidgetComponentBoundingBox extends WidgetComponentBase {
   public boundsOffset: server.Vector3;
   public enableResizeHandles: Axis;
   public hullColor: server.RGBA;
   public mirror: server.StructureMirrorAxis;
   public normalizedOrigin: server.Vector3;
   public outlineColor: server.RGBA;
   public rotation: server.StructureRotation;
   public showWorldIntersections: boolean;
   public size: server.Vector3;
   public readonly transformedWorldVolume: server.BlockVolume;
   public visibleHull: boolean;
   public deactivateHandles(): void;
   public setStateChangeEvent(eventFunction?: (arg0: WidgetComponentBoundingBoxStateChangeEventParameters)=>void): void;
   private constructor();
}
export class WidgetComponentBoundingBoxStateChangeEventParameters {
   public readonly boundsOffset?: server.Vector3;
   public readonly boundsSize?: server.Vector3;
   public readonly component: WidgetComponentBoundingBox;
   public readonly eventType: WidgetGizmoEventType;
   public readonly widget: Widget;
   private constructor();
}
//@ts-ignore
export class WidgetComponentClipboard extends WidgetComponentBase {
   public clipboardOffset: server.Vector3;
   public highlightHullColor: server.RGBA;
   public highlightOutlineColor: server.RGBA;
   public hullColor: server.RGBA;
   public mirror: server.StructureMirrorAxis;
   public normalizedOrigin: server.Vector3;
   public outlineColor: server.RGBA;
   public rotation: server.StructureRotation;
   public showOutline: boolean;
   private constructor();
}
//@ts-ignore
export class WidgetComponentEntity extends WidgetComponentBase {
   public clickable: boolean;
   public playAnimation(animationName: string): void;
   private constructor();
}
//@ts-ignore
export class WidgetComponentGizmo extends WidgetComponentBase {
   public activated: boolean;
   public enabledAxes: Axis;
   public normalizedOffsetOverride?: server.Vector3;
   public setStateChangeEvent(eventFunction?: (arg0: WidgetComponentGizmoStateChangeEventParameters)=>void): void;
   private constructor();
}
export class WidgetComponentGizmoStateChangeEventParameters {
   public readonly component: WidgetComponentGizmo;
   public readonly eventType?: WidgetGizmoEventType;
   public readonly widget: Widget;
   private constructor();
}
//@ts-ignore
export class WidgetComponentGrid extends WidgetComponentBase {
   public gridColor: server.RGBA;
   public gridCount: server.Vector2;
   public gridSize: server.Vector2;
   public plane: Plane;
   private constructor();
}
//@ts-ignore
export class WidgetComponentGuide extends WidgetComponentBase {
   private constructor();
}
//@ts-ignore
export class WidgetComponentRenderPrimitive extends WidgetComponentBase {
   public readonly primitiveType: PrimitiveType;
   public setPrimitive(primitive: WidgetComponentRenderPrimitiveTypeAxialSphere | WidgetComponentRenderPrimitiveTypeBox | WidgetComponentRenderPrimitiveTypeDisc | WidgetComponentRenderPrimitiveTypeLine): void;
   private constructor();
}
//@ts-ignore
export class WidgetComponentRenderPrimitiveTypeAxialSphere extends WidgetComponentRenderPrimitiveTypeBase {
   public center: server.Vector3;
   public color?: server.RGBA;
   public radius: number;
   public constructor(center: server.Vector3, radius: number, color?: server.RGBA);
}
export class WidgetComponentRenderPrimitiveTypeBase {
   public readonly primitiveType: PrimitiveType;
   public renderPriority: number;
   private constructor();
}
//@ts-ignore
export class WidgetComponentRenderPrimitiveTypeBox extends WidgetComponentRenderPrimitiveTypeBase {
   public center: server.Vector3;
   public color: server.RGBA;
   public size?: server.Vector3;
   public constructor(center: server.Vector3, color: server.RGBA, size?: server.Vector3);
}
//@ts-ignore
export class WidgetComponentRenderPrimitiveTypeDisc extends WidgetComponentRenderPrimitiveTypeBase {
   public center: server.Vector3;
   public color: server.RGBA;
   public radius: number;
   public constructor(center: server.Vector3, radius: number, color: server.RGBA);
}
//@ts-ignore
export class WidgetComponentRenderPrimitiveTypeLine extends WidgetComponentRenderPrimitiveTypeBase {
   public color: server.RGBA;
   public end: server.Vector3;
   public start: server.Vector3;
   public constructor(start: server.Vector3, end: server.Vector3, color: server.RGBA);
}
//@ts-ignore
export class WidgetComponentSpline extends WidgetComponentBase {
   public splineType: SplineType;
   public getControlPoints(): Array<Widget>;
   public getInterpolatedPoints(maxPointsPerControlSegment?: number): Array<server.Vector3>;
   public setControlPoints(widgetList: Array<Widget>): void;
   private constructor();
}
//@ts-ignore
export class WidgetComponentText extends WidgetComponentBase {
   public color: server.RGBA;
   public label: string;
   private constructor();
}
//@ts-ignore
export class WidgetComponentVolumeOutline extends WidgetComponentBase {
   public highlightHullColor: server.RGBA;
   public highlightOutlineColor: server.RGBA;
   public hullColor: server.RGBA;
   public mirror: server.StructureMirrorAxis;
   public normalizedOrigin: server.Vector3;
   public outlineColor: server.RGBA;
   public rotation: server.StructureRotation;
   public showHighlightOutline: boolean;
   public showOutline: boolean;
   public readonly transformedWorldVolume: server.BlockVolume;
   public volumeOffset: server.Vector3;
   public getVolume(): (RelativeVolumeListBlockVolume | undefined);
   public setVolume(volumeToSet?: Array<server.Vector3> | server.BlockVolume | server.BlockVolumeBase | RelativeVolumeListBlockVolume | server.Vector3): void;
   private constructor();
}
export class WidgetGroup {
   public readonly selectedWidgetCount: number;
   public visible: boolean;
   public visibleBounds: boolean;
   public createWidget(location: server.Vector3, options?: WidgetCreateOptions): Widget;
   public delete(): void;
   public deleteWidget(widgetToDelete: Widget): void;
   public deselectAllWidgets(): void;
   public selectAllWidgets(): void;
   private constructor();
}
export class WidgetManager {
   public createGroup(options?: WidgetGroupCreateOptions): WidgetGroup;
   public deleteGroup(groupToDelete: WidgetGroup): void;
   private constructor();
}
export class WidgetMouseButtonEventData {
   public readonly action: WidgetMouseButtonActionType;
   public readonly altPressed: boolean;
   public readonly controlPressed: boolean;
   public readonly shiftPressed: boolean;
   private constructor();
}
export class WidgetStateChangeEventData {
   public readonly group: WidgetGroup;
   public readonly location?: server.Vector3;
   public readonly mouseEvent?: WidgetMouseButtonEventData;
   public readonly selected?: boolean;
   public readonly visible?: boolean;
   public readonly widget: Widget;
   private constructor();
}

export const isInternal = true;

export const editor: MinecraftEditor;


//@ts-ignore
export class InvalidWidgetComponentError extends Error {
   private constructor();
}
//@ts-ignore
export class InvalidWidgetError extends Error {
   private constructor();
}
//@ts-ignore
export class InvalidWidgetGroupError extends Error {
   private constructor();
}