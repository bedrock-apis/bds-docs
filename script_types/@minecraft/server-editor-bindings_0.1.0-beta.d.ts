import * as _00 from '@minecraft/common';
import * as _10 from '@minecraft/server';
export enum BlockPaletteItemType {Probability = 1, Simple = 0}
export enum CursorControlMode {Fixed = 3, Keyboard = 0, KeyboardAndMouse = 2, Mouse = 1}
export enum CursorTargetMode {Block = 0, Face = 1}
export enum EditorMode {Crosshair = "Crosshair", Tool = "Tool"}
export enum ExportResult {EditorSystemFailure = 7, FileArchiverFetchFailed = 2, LevelFetchFailed = 1, PlayerNotFound = 4, ProjectConverterFetchFailed = 3, ValidWorldExport = 0, WorldExportBusy = 6, WorldExportFailed = 5}
export enum GraphicsSettingsProperty {ShowInvisibleBlocks = "ShowInvisibleBlocks"}
export enum PlaytestSessionResult {EditorSystemFailure = 7, InvalidLevelId = 8, InvalidSessionHandle = 1, OK = 0, PlayerNotFound = 9, ResponseTimeout = 10, SessionInfoNotFound = 2, TooManyPlayers = 3, UnspecifiedError = 11, UnsupportedScenario = 6, WorldExportBusy = 5, WorldExportFailed = 4}
export enum ProjectExportType {PlayableWorld = 0, ProjectBackup = 1, WorldTemplate = 2}
export enum WidgetGroupSelectionMode {Multiple = "Multiple", None = "None", Single = "Single"}
export class BlockPalette { constructor(); getItem(index: number): IBlockPaletteItem; removeItemAt(index: number): void; removeItems(): void; setItem(blockPaletteItem: IBlockPaletteItem, index: number): void}
export class BlockPaletteManager { private constructor(); getSelectedBlockType(): _10.BlockType; setSelectedBlockType(block: _10.BlockType): void}
export class BrushShapeManager { private constructor(); readonly activeBrushShape?: BrushShape; readonly activeBrushVolume?: _10.CompoundBlockVolume; readonly brushShapeNames: string[]; activateBrushShape(name: string): _10.CompoundBlockVolume; getSettingsUIElements(brushName: string): SettingsUIElement[]; registerBrushShape(name: string, icon: string, rebuild: ()=>_10.CompoundBlockVolume, getSettingsUIElements: ()=>SettingsUIElement[]): void; uiSettingValueChanged(elementName: string, newValue: boolean | number | string | _10.Vector3): boolean}
export class ClipboardItem { private constructor(); readonly isEmpty: boolean; clear(): void; getPredictedWriteAsCompoundBlockVolume(location: _10.Vector3, options?: ClipboardWriteOptions): _10.CompoundBlockVolume; getPredictedWriteAsSelection(location: _10.Vector3, options?: ClipboardWriteOptions): Selection; getSize(): _10.Vector3; readFromSelection(selection: Selection): void; readFromWorld(from: _10.Vector3, to: _10.Vector3): void; writeToWorld(location: _10.Vector3, options?: ClipboardWriteOptions): boolean}
export class ClipboardManager { private constructor(); readonly clipboard: ClipboardItem; create(): ClipboardItem}
export class Cursor { private constructor(); readonly faceDirection: number; readonly isVisible: boolean; getPosition(): _10.Vector3; getProperties(): CursorProperties; hide(): void; moveBy(offset: _10.Vector3): _10.Vector3; resetToDefaultState(): void; setProperties(properties: CursorProperties): void; show(): void}
export class CursorPropertiesChangeAfterEvent { private constructor(); readonly properties: CursorProperties}
export class CursorPropertyChangeAfterEventSignal { private constructor(); subscribe(callback: (arg0: CursorPropertiesChangeAfterEvent)=>undefined): (arg0: CursorPropertiesChangeAfterEvent)=>undefined; unsubscribe(callback: (arg0: CursorPropertiesChangeAfterEvent)=>undefined): void}
//@ts-ignore allow class inheritance for native classes
export class CustomWidget extends Widget{ private constructor(); readonly location: _10.Vector3; readonly rotation: _10.Vector2; readonly showTextOnlyWhenSelected: boolean; getText(): string; moveBy(delta: _10.Vector3): void; setText(text: string): void}
export class CustomWidgetMoveEventData { private constructor(); readonly group: WidgetGroup; readonly location?: _10.Vector3; readonly rotation?: _10.Vector2; readonly widget: CustomWidget}
export class DataStore { private constructor(); readonly actionContainer: DataStoreActionContainer; readonly afterEvents: DataStoreAfterEvents; readonly menuContainer: DataStoreMenuContainer}
export class DataStoreActionContainer { private constructor(); bindActionToControl(controlId: string, actionPayload: string): void; removeActionFromControl(controlId: string, actionPayload?: string): void}
export class DataStoreAfterEvents { private constructor(); readonly payloadReceived: DataStorePayloadAfterEventSignal}
export class DataStoreMenuContainer { private constructor(); createItem(id: string, payload: string): void; destroyItem(id: string): void; getPayload(id: string): string; getProperty(id: string, property: string): boolean | number | string; hasPayload(id: string): boolean; hasProperty(id: string, property: string): boolean; updateItem(id: string, payload: string): void}
export class DataStorePayloadAfterEvent { private constructor(); readonly dataTag: string; readonly payload: string}
export class DataStorePayloadAfterEventSignal { private constructor(); subscribe(callback: (arg0: DataStorePayloadAfterEvent)=>undefined): (arg0: DataStorePayloadAfterEvent)=>undefined; unsubscribe(callback: (arg0: DataStorePayloadAfterEvent)=>undefined): void}
export class ExportManager { private constructor(); beginExportProject(options: ProjectExportOptions): Promise<ExportResult>; canExportProject(): boolean}
export class Extension { private constructor(); readonly defaultToolGroupId: string; readonly description: string; readonly name: string; readonly notes: string}
export class ExtensionContext { private constructor(); readonly afterEvents: ExtensionContextAfterEvents; readonly blockPalette: BlockPaletteManager; readonly brushShapeManager: BrushShapeManager; readonly clipboardManager: ClipboardManager; readonly cursor: Cursor; readonly exportManager: ExportManager; readonly extensionInfo: Extension; readonly player: _10.Player; readonly playtest: PlaytestManager; readonly selectionManager: SelectionManager; readonly settings: SettingsManager; readonly transactionManager: TransactionManager; readonly widgetManager: WidgetManager}
export class ExtensionContextAfterEvents { private constructor(); readonly cursorPropertyChange: CursorPropertyChangeAfterEventSignal; readonly modeChange: ModeChangeAfterEventSignal; readonly primarySelectionChange: PrimarySelectionChangeAfterEventSignal}
export class GraphicsSettings { private constructor(); get(property: GraphicsSettingsProperty): boolean | number | string; getAll(): Record<string,boolean | number | string>; set(property: GraphicsSettingsProperty, value: boolean | number | string): void; setAll(properties: Record<string,boolean | number | string>): void}
export class IBlockPaletteItem { private constructor(); getBlock(): _10.BlockType; getDisplayName(): string; getType(): BlockPaletteItemType; setBlock(block: _10.BlockPermutation | _10.BlockType | string): void}
//@ts-ignore allow class inheritance for native classes
export class LineWidget extends Widget{ private constructor()}
export class Logger { private constructor(); debug(message: string, properties?: LogProperties): void; error(message: string, properties?: LogProperties): void; info(message: string, properties?: LogProperties): void; warning(message: string, properties?: LogProperties): void}
export class MinecraftEditor { private constructor(); readonly log: Logger; readonly simulation: SimulationState}
export class MinecraftEditorInternal { private constructor(); getDataStore(player: _10.Player): DataStore; registerExtension(extensionName: string, activationFunction: (arg0: ExtensionContext)=>undefined, shutdownFunction: (arg0: ExtensionContext)=>undefined, options?: ExtensionOptionalParameters): Extension}
export class ModeChangeAfterEvent { private constructor(); readonly mode: EditorMode}
export class ModeChangeAfterEventSignal { private constructor(); subscribe(callback: (arg0: ModeChangeAfterEvent)=>undefined): (arg0: ModeChangeAfterEvent)=>undefined; unsubscribe(callback: (arg0: ModeChangeAfterEvent)=>undefined): void}
export class PlaytestManager { private constructor(); beginPlaytest(options: PlaytestGameOptions): Promise<PlaytestSessionResult>; getPlaytestSessionAvailability(): PlaytestSessionResult}
export class PrimarySelectionChangeAfterEventSignal { private constructor(); subscribe(callback: (arg0: SelectionEventAfterEvent)=>undefined): (arg0: SelectionEventAfterEvent)=>undefined; unsubscribe(callback: (arg0: SelectionEventAfterEvent)=>undefined): void}
export class PrimarySelectionChangedEvent { private constructor(); readonly volume?: _10.CompoundBlockVolume}
//@ts-ignore allow class inheritance for native classes
export class ProbabilityBlockPaletteItem extends IBlockPaletteItem{ constructor(displayName?: string); addBlock(block: _10.BlockPermutation | _10.BlockType | string, weight: number): void; removeBlockAt(index: number): void}
export class Selection { private constructor(); readonly isEmpty: boolean; visible: boolean; clear(): void; getBlockLocationIterator(): _10.BlockLocationIterator; getBoundingBox(): _10.BoundingBox; getFillColor(): _10.RGBA; getOutlineColor(): _10.RGBA; getVolumeOrigin(): _10.Vector3; moveBy(delta: _10.Vector3): _10.Vector3; moveTo(location: _10.Vector3): _10.Vector3; peekLastVolume(forceRelativity?: _10.CompoundBlockVolumePositionRelativity): _10.CompoundBlockVolumeItem; popVolume(): void; pushVolume(item: _10.CompoundBlockVolumeItem): void; set(other: _10.CompoundBlockVolume | Selection): void; setFillColor(color: _10.RGBA): void; setOutlineColor(color: _10.RGBA): void}
export class SelectionEventAfterEvent { private constructor(); readonly selectionEvent: PrimarySelectionChangedEvent}
export class SelectionManager { private constructor(); readonly selection: Selection; create(): Selection}
export class SettingsManager { private constructor(); readonly graphics: GraphicsSettings}
export class SettingsUIElement { constructor(name: string, initialValue: boolean | number | string | _10.Vector3, onChange: (arg0: boolean | number | string | _10.Vector3)=>boolean, min?: number, max?: number, options?: string[]); readonly initialValue: boolean | number | string | _10.Vector3; readonly max?: number; readonly min?: number; readonly name: string; readonly onChange: (arg0: boolean | number | string | _10.Vector3)=>boolean; readonly options?: string[]}
//@ts-ignore allow class inheritance for native classes
export class SimpleBlockPaletteItem extends IBlockPaletteItem{ constructor(displayName?: string)}
export class SimulationState { private constructor(); isPaused(): boolean; setPaused(isPaused: boolean): void}
export class TransactionManager { private constructor(); addUserDefinedOperation(transactionHandlerId: UserDefinedTransactionHandlerId, operationData: string, operationName?: string): void; commitOpenTransaction(): boolean; commitTrackedChanges(): number; createUserDefinedTransactionHandler(undoClosure: (arg0: string)=>undefined, redoClosure: (arg0: string)=>undefined): UserDefinedTransactionHandlerId; discardOpenTransaction(): boolean; discardTrackedChanges(): number; openTransaction(name: string): boolean; redo(): void; redoSize(): number; trackBlockChangeArea(from: _10.Vector3, to: _10.Vector3): boolean; trackBlockChangeCompoundBlockVolume(compoundBlockVolume: _10.CompoundBlockVolume): boolean; trackBlockChangeList(locations: _10.Vector3[]): boolean; trackBlockChangeSelection(selection: Selection): boolean; undo(): void; undoSize(): number}
export class UserDefinedTransactionHandlerId { private constructor()}
export class Widget { private constructor(); readonly valid: boolean; deleteWidget(): void; getIsSelected(): boolean; getIsVisible(): boolean; setIsSelected(isSelected: boolean): void; setIsVisible(isVisible: boolean): void}
export class WidgetGroup { private constructor(); readonly valid: boolean; areAnySelected(): boolean; createCustomWidget(customEntityName: string, location: _10.Vector3, rotation?: _10.Vector2, options?: CustomWidgetCreateOptions): CustomWidget; deleteWidget(widgetToDelete: Widget): void; deselectAllWidgets(): void; getIsVisible(): boolean; moveSelectedWidgets(delta: _10.Vector3): void; selectAllWidgets(): void; setIsVisible(isVisible: boolean): void}
export class WidgetManager { private constructor(); createGroup(options?: WidgetGroupCreateOptions): WidgetGroup; deleteGroup(groupToDelete: WidgetGroup): void}
export class WidgetStateChangeEventData { private constructor(); readonly group: WidgetGroup; readonly isSelected?: boolean; readonly isVisible?: boolean; readonly widget: Widget}
export interface BrushShape {icon: string, name: string}
export interface ClipboardWriteOptions {anchor?: _10.Vector3, mirror?: _10.StructureMirrorAxis, offset?: _10.Vector3, rotation?: _10.StructureRotation}
export interface CursorProperties {controlMode?: CursorControlMode, fixedModeDistance?: number, outlineColor?: _10.RGBA, projectThroughLiquid?: boolean, targetMode?: CursorTargetMode, visible?: boolean}
export interface CustomWidgetCreateOptions {moveEvent?: (arg0: CustomWidgetMoveEventData)=>undefined, showTextOnlyWhenSelected?: boolean, text?: string, visualOffset?: _10.Vector3}
export interface ExtensionOptionalParameters {description?: string, notes?: string, toolGroupId?: string}
export interface LogProperties {player?: _10.Player, tags?: string[]}
export interface PlaytestGameOptions {alwaysDay?: boolean, difficulty?: _10.Difficulty, dimensionId?: string, disableWeather?: boolean, gameMode?: _10.GameMode, showCoordinates?: boolean, spawnPosition?: _10.Vector3, timeOfDay?: number, weather?: number}
export interface ProjectExportOptions {alwaysDay?: boolean, difficulty?: _10.Difficulty, disableWeather?: boolean, exportName?: string, exportType: ProjectExportType, gameMode?: _10.GameMode, initialTimOfDay?: number}
export interface WidgetCreateOptions {initialVisibility?: boolean, isSelectable?: boolean, stateChangeEvent?: (arg0: WidgetStateChangeEventData)=>undefined}
export interface WidgetGroupCreateOptions {groupSelectionMode?: WidgetGroupSelectionMode}
export const editor: MinecraftEditor;
export const editorInternal: MinecraftEditorInternal;