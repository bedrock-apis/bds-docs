import * as server_editor from "@minecraft/server-editor-bindings";
import * as common from "@minecraft/common";
import * as server from "@minecraft/server";

export enum EditorRealmsServiceAvailability {
   DedicatedServer = 2,
   NoRealmsSubscription = 1,
   NotLoggedIn = 0,
   NotServerHost = 3,
   Success = 4,
   Unknown = 5,
}
export enum JigsawJointType {
   Aligned = 1,
   Rollable = 0,
}
export enum JigsawJsonType {
   Processor = 0,
   Structure = 1,
   StructureSet = 2,
   TemplatePool = 3,
}
export enum PersistenceGroupType {
   Local = 0,
   Replication = 1,
   Shared = 2,
}
export enum PersistenceScope {
   ClientGlobal = 1,
   ClientProject = 0,
   ServerGlobal = 3,
   ServerProject = 2,
}
export enum PrefabInstanceInteractionEventType {
   Clicked = "Clicked",
   Moved = "Moved",
}
export enum PrefabSource {
   Global = "Global",
   Project = "Project",
   Unknown = "Unknown",
}
export enum ProjectRegionAvailabilityMode {
   Loaded = 0,
   Ticking = 1,
}
export enum RealmsServiceStatus {
   Exporting = 2,
   Fetching = 0,
   Idle = 1,
   Uploading = 3,
}
export enum RealmsWorldUploadResult {
   EditorSystemFailure = 4,
   ExportWorldFailure = 2,
   Success = 1,
   Unknown = 0,
   UploadWorldFailure = 3,
   WorldNameNonCompliant = 6,
   WorldUploadBusy = 5,
}

export interface DataTransferCollectionNameData {
   nameStringId: string;
   uniqueId: string;
}
export interface EditorJigsawSection {
   bounds: server.BlockBoundingBox;
   offset: server.Vector3;
   rotation: server.StructureRotation;
   structureId: string;
}
export interface EditorRealmsWorld {
   id: string;
   name: string;
}
export interface EditorRealmsWorldSlot {
   id: number;
   name: string;
}
export interface EditorRegistryFile {
   fileJson: string;
   fileName: string;
}
export interface InputBindingInfo {
   actionId?: string;
   canRebind: boolean;
   label?: string;
   tooltip?: string;
}
export interface JigsawBlockData {
   finalBlock: string;
   jointType: JigsawJointType;
   jointTypeVisible: boolean;
   name: string;
   placementPriority: number;
   selectionPriority: number;
   target: string;
   targetPool: string;
}
export interface PersistenceGroupCreationOptions {
   groupType?: PersistenceGroupType;
   scope: PersistenceScope;
   version?: number;
}
export interface PersistenceQueryGroupOptions {
   namespace?: string;
   namespacedName?: string;
   scope?: PersistenceScope;
   version?: number;
}
export interface PrefabInstanceInteractionEventClicked {
   altPressed: boolean;
   ctrlPressed: boolean;
   shiftPressed: boolean;
}
export interface PrefabInstanceInteractionEventMoved {
   location: server.Vector3;
}
export interface PrefabServiceCreateTemplateOptions {
   description?: string;
   displayName?: string;
   notes?: string;
   tags?: Array<string>;
}
export interface PrefabTemplateAddStructureOptions {
   mirror?: server.StructureMirrorAxis;
   offset?: server.Vector3;
   rotation?: server.StructureRotation;
}
export interface PrefabTemplateCreateInstanceOptions {
   mirror?: server.StructureMirrorAxis;
   rotation?: server.StructureRotation;
}
export interface PrefabTemplateMetadata {
   description: string;
   displayName: string;
   instanceReferenceCount: number;
   name: string;
   notes: string;
   readOnly: boolean;
   source: PrefabSource;
   structureReferenceCount: number;
   tags: Array<string>;
   templateId: string;
}
export interface ProjectRegionOptions {
   availabilityMode?: ProjectRegionAvailabilityMode;
   extentX: common.NumberRange;
   extentZ: common.NumberRange;
}

export class DataStore {
   public readonly actionBarContainer: DataStoreActionBarContainer;
   public readonly actionContainer: DataStoreActionContainer;
   public readonly afterEvents: DataStoreAfterEvents;
   public readonly menuContainer: DataStoreMenuContainer;
   public readonly modalToolContainer: DataStoreModalToolContainer;
   public readonly paneContainer: DataStorePaneContainer;
   public sendNotificationEvent(dataTag: string, payload: string): void;
   private constructor();
}
export class DataStoreActionBarContainer {
   public getItemPayload(id: string): string;
   public getItemProperty(id: string, property: string): (boolean | number | string | undefined);
   public hasItemPayload(id: string): boolean;
   public hasItemProperty(id: string, property: string): boolean;
   public registerItem(id: string, payload: string): void;
   public unregisterItem(id: string): void;
   public updateRegisteredItem(id: string, payload: string): void;
   public updateRegisteredItemProperty(id: string, payload: string, property: string): void;
   private constructor();
}
export class DataStoreActionContainer {
   public bindActionToControl(controlId: string, actionPayload: string): void;
   public removeActionFromControl(controlId: string, actionPayload?: string): void;
   private constructor();
}
export class DataStoreAfterEvents {
   public readonly payloadReceived: DataStorePayloadAfterEventSignal;
   private constructor();
}
export class DataStoreMenuContainer {
   public createItem(id: string, payload: string): void;
   public destroyItem(id: string): void;
   public getPayload(id: string): string;
   public getProperty(id: string, property: string): (boolean | number | string | undefined);
   public hasPayload(id: string): boolean;
   public hasProperty(id: string, property: string): boolean;
   public updateItem(id: string, payload: string): void;
   private constructor();
}
export class DataStoreModalToolActivationChangedEvent {
   public readonly isActive: boolean;
   public readonly toolId?: string;
   private constructor();
}
export class DataStoreModalToolActivationChangedEventSignal {
   public subscribe(callback: (arg0: DataStoreModalToolActivationChangedEvent)=>void): (arg0: DataStoreModalToolActivationChangedEvent)=>void;
   public unsubscribe(callback: (arg0: DataStoreModalToolActivationChangedEvent)=>void): void;
   private constructor();
}
export class DataStoreModalToolContainer {
   public readonly toolActivationChanged: DataStoreModalToolActivationChangedEventSignal;
   public getSelectedTool(): (string | undefined);
   public getToolPayload(id: string): string;
   public getToolProperty(id: string, property: string): (boolean | number | string | undefined);
   public hasToolPayload(id: string): boolean;
   public hasToolProperty(id: string, property: string): boolean;
   public registerTool(id: string, payload: string): void;
   public unregisterTool(id: string): void;
   public updateRegisteredTool(id: string, payload: string): void;
   public updateRegisteredToolProperty(id: string, payload: string, property: string): void;
   public updateSelectedTool(toolId?: string): void;
   private constructor();
}
export class DataStorePaneContainer {
   public createPane(id: string): void;
   public destroyPane(id: string): void;
   private constructor();
}
export class DataStorePayloadAfterEvent {
   public readonly dataTag: string;
   public readonly payload: string;
   private constructor();
}
export class DataStorePayloadAfterEventSignal {
   public subscribe(callback: (arg0: DataStorePayloadAfterEvent)=>void): (arg0: DataStorePayloadAfterEvent)=>void;
   public unsubscribe(callback: (arg0: DataStorePayloadAfterEvent)=>void): void;
   private constructor();
}
export class DataTransferManager {
   public closeSession(collectionUniqueId: string): void;
   public getRegisteredAccessors(): Array<DataTransferCollectionNameData>;
   public openSession(collectionUniqueId: string): void;
   public requestData(collectionUniqueId: string, useSnapshot?: boolean): Promise<DataTransferRequestResponse>;
   public sendData(collectionUniqueId: string, jsonData: string): void;
   public sendDataToClipboard(jsonData: string): void;
   private constructor();
}
export class DataTransferRequestResponse {
   public readonly collectionName: string;
   public readonly data: string;
   public readonly schema: string;
   private constructor();
}
export class InputService {
   public focusViewport(): void;
   public getKeyBindingProcessingState(contextId: string, bindingId: string): (number | undefined);
   public registerKeyBinding(contextId: string, bindingId: string, key: number, modifier: server_editor.InputModifier, info: InputBindingInfo): void;
   public registerMouseBinding(contextId: string, bindingId: string, mouseAction: server_editor.MouseActionCategory): void;
   public unregisterKeyBinding(contextId: string, bindingId: string): void;
   public unregisterMouseBinding(contextId: string, bindingId: string): void;
   public updateKeyBindingProcessingState(contextId: string, bindingId: string, state?: number): void;
   private constructor();
}
export class InternalPersistenceManager {
   public createGroup(namespacedName: string, options: PersistenceGroupCreationOptions): PersistenceGroup;
   public deleteGroup(namespacedName: string, options: PersistenceGroupCreationOptions): void;
   public disposeAllGroups(): void;
   public fetchGroups(options: PersistenceQueryGroupOptions): Array<PersistenceGroup>;
   public getGroup(namespacedName: string, options: PersistenceGroupCreationOptions): (PersistenceGroup | undefined);
   public getOrCreateGroup(namespacedName: string, options: PersistenceGroupCreationOptions): PersistenceGroup;
   public requestClientGroup(namespacedName: string, options: PersistenceGroupCreationOptions, callback: (arg0?: PersistenceGroup)=>void): void;
   private constructor();
}
export class InternalPlayerServiceContext {
   public readonly dataStore: DataStore;
   public readonly dataTransfer: DataTransferManager;
   public readonly input: InputService;
   public readonly internalPersistenceManager: InternalPersistenceManager;
   public readonly jigsawService: JigsawService;
   public readonly prefabManager: PrefabManager;
   public readonly realmsService: RealmsService;
   public readonly regionManager: ProjectRegionManager;
   private constructor();
}
export class JigsawService {
   public generateJigsaw(registryName: string, startingPool: string, startTarget: string, seed: server.Vector3, depth: number, maxHorizontalDistanceFromCenter: number, validateRegistry: boolean, clipboardItem: server_editor.ClipboardItem): Promise<Array<EditorJigsawSection>>;
   public getEmptyRegistryFiles(): Record<string,string>;
   public getExportLocation(): string;
   public getJigsawBlockData(pos: server.Vector3): JigsawBlockData;
   public getRegistryData(registryName: string): Record<string,Array<EditorRegistryFile>>;
   public getRegistryList(): Array<string>;
   public setJigsawBlockData(pos: server.Vector3, jigsawData: JigsawBlockData): void;
   public setRegistryData(registryName: string, processorData: Array<EditorRegistryFile>, structureData: Array<EditorRegistryFile>, structureSetData: Array<EditorRegistryFile>, templatePoolData: Array<EditorRegistryFile>): Promise<Array<string>>;
   private constructor();
}
export class MinecraftEditorInternal {
   public readonly isNewLevel: boolean;
   public fireTelemetryEvent(player: server.Player, source: string, eventName: string, metadata: string): void;
   public getPlayerServices(player: server.Player): InternalPlayerServiceContext;
   public registerExtension(extensionName: string, activationFunction: (arg0: server_editor.ExtensionContext)=>void, shutdownFunction: (arg0: server_editor.ExtensionContext)=>void, options?: server_editor.ExtensionOptionalParameters): server_editor.Extension;
   private constructor();
}
export class PersistenceGroup {
   public createItem(itemName: string, defaultJsonValue?: string): PersistenceGroupItem;
   public deleteItem(itemName: string): void;
   public dispose(): boolean;
   public disposeAllGroupItems(): void;
   public disposeGroupItem(key: string): boolean;
   public fetchItem(itemName: string): (PersistenceGroupItem | undefined);
   public getOrCreateItem(itemName: string, defaultJsonValue?: string): PersistenceGroupItem;
   public listItems(): Array<string>;
   private constructor();
}
export class PersistenceGroupItem {
   public commit(): void;
   public getAsJSON(): string;
   public getKey(): string;
   public getValue(): string;
   public setValue(value: string): void;
   private constructor();
}
export class PrefabInstanceInteractionEvent {
   public readonly eventData: PrefabInstanceInteractionEventClicked | PrefabInstanceInteractionEventMoved;
   public readonly eventType: PrefabInstanceInteractionEventType;
   public readonly instance: PrefabTemplateInstance;
   private constructor();
}
export class PrefabManager {
   public readonly instanceInteractionEvents: PrefabServiceInstanceInteractionEvent;
   public beginCapturingMouseClicks(): void;
   public clearSelectedInstances(): void;
   public cloneTemplate(templateOrMetadataToClone: PrefabTemplate | PrefabTemplateMetadata, newName: string, optionalNewDisplayName?: string): PrefabTemplate;
   public createTemplate(name: string, options?: PrefabServiceCreateTemplateOptions): PrefabTemplate;
   public deleteInstance(instance: PrefabTemplateInstance): void;
   public deleteTemplate(templateOrMetadata: PrefabTemplate | PrefabTemplateMetadata): void;
   public deselectInstance(instance: PrefabTemplateInstance): void;
   public endCapturingMouseClicks(): void;
   public getTemplate(searchMetadata_or_fullyQualifiedName: PrefabTemplateMetadata | string): PrefabTemplate;
   public getTemplateList(): Array<PrefabTemplateMetadata>;
   public selectInstance(instance: PrefabTemplateInstance, append: boolean): void;
   private constructor();
}
export class PrefabServiceInstanceInteractionEvent {
   public subscribe(callback: (arg0: PrefabInstanceInteractionEvent)=>void): (arg0: PrefabInstanceInteractionEvent)=>void;
   public unsubscribe(callback: (arg0: PrefabInstanceInteractionEvent)=>void): void;
   private constructor();
}
export class PrefabTemplate {
   public description: string;
   public displayName: string;
   public readonly instanceCount: number;
   public readonly name: string;
   public notes: string;
   public readonly source: PrefabSource;
   public addStructure(structure: server_editor.EditorStructure, options?: PrefabTemplateAddStructureOptions): PrefabTemplateStructure;
   public createInstance(location: server.Vector3, options?: PrefabTemplateCreateInstanceOptions): PrefabTemplateInstance;
   public getMetadata(): PrefabTemplateMetadata;
   public getTags(): Array<string>;
   public getTemplateStructures(): Array<PrefabTemplateStructure>;
   public removeStructure(templateStructure: PrefabTemplateStructure): void;
   public setName(newName: string): void;
   public setTags(newTags: Array<string>): void;
   private constructor();
}
export class PrefabTemplateInstance {
   public instanceMirror: server.StructureMirrorAxis;
   public instanceRotation: server.StructureRotation;
   public location: server.Vector3;
   public bakeInstance(): void;
   public getStructureRefs(): Array<PrefabTemplateInstanceStructure>;
   public getTemplate(): PrefabTemplate;
   private constructor();
}
export class PrefabTemplateInstanceStructure {
   public instanceMirror: server.StructureMirrorAxis;
   public instanceRotation: server.StructureRotation;
   public getTemplateStructure(): PrefabTemplateStructure;
   private constructor();
}
export class PrefabTemplateStructure {
   public readonly id: string;
   public instanceMirror: server.StructureMirrorAxis;
   public instanceOffset: server.Vector3;
   public instanceRotation: server.StructureRotation;
   public readonly structureNormalizedOrigin: server.Vector3;
   public readonly structureOffset: server.Vector3;
   public readonly structureSize: server.Vector3;
   public getStructure(): server_editor.EditorStructure;
   private constructor();
}
export class ProjectRegion {
   public readonly availabilityMode: ProjectRegionAvailabilityMode;
   public readonly id: string;
   public readonly isValid: boolean;
   public dispose(): boolean;
   public getAvailableLocationFromRay(location: server.Vector3, direction: server.Vector3, options?: server.BlockRaycastOptions): (server.Vector3 | undefined);
   public getBlock(location: server.Vector3): (server.Block | undefined);
   public getBlockMapColor(location: server.Vector3): server.RGBA;
   public getBlockPermutation(location: server.Vector3): server.BlockPermutation;
   public getBlockTypeId(location: server.Vector3): string;
   public getBounds(): server.BlockBoundingBox;
   public isAirBlock(location: server.Vector3): boolean;
   public isAreaAvailable(boundingBox: server.BlockBoundingBox): boolean;
   public isAvailable(): boolean;
   public isBlockWaterLogged(location: server.Vector3): boolean;
   public isLiquidBlock(location: server.Vector3): boolean;
   public isLocationAvailable(location: server.Vector3): boolean;
   public isSolidBlock(location: server.Vector3): boolean;
   public requestBlockOperationArea(volume: server_editor.RelativeVolumeListBlockVolume, callback: (arg0: server.BlockLocationIterator)=>void): Promise<void>;
   public requestExpandToContain(extentX: common.NumberRange, extentZ: common.NumberRange): Promise<void>;
   public requestExtentsUpdate(extentX: common.NumberRange, extentZ: common.NumberRange): Promise<void>;
   public requestMove(center: server.Vector3): Promise<void>;
   public setBlockType(location: server.Vector3, blockType: server.BlockType | string): void;
   public setBlockWaterlogged(location: server.Vector3, isWaterlogged: boolean): void;
   public spawnEntity(identifier: server.EntityType | string, location: server.Vector3, rotation?: number): server.Entity;
   public waitUntilAvailable(): Promise<void>;
   public waitUntilBoundsAvailable(boundingBox: server.BlockBoundingBox): Promise<void>;
   private constructor();
}
export class ProjectRegionManager {
   public disposeAllRegions(): void;
   public disposeRegion(id: string): boolean;
   public getCursorRegion(): ProjectRegion;
   public getSelectionRegion(): ProjectRegion;
   public leaseRegion(options: ProjectRegionOptions): ProjectRegion;
   private constructor();
}
export class RealmsService {
   public beginDownloadFromRealms(realmsWorldId: string, slotId: number): Promise<string>;
   public beginUploadToRealms(realmsWorldId: string, slotId: number, gameOptions: server_editor.GameOptions): Promise<RealmsWorldUploadResult>;
   public canUploadWorld(): boolean;
   public getRealmWorldlist(): Promise<Array<EditorRealmsWorld>>;
   public getServiceStatus(): RealmsServiceStatus;
   public getSlots(worldId: string): Promise<Array<EditorRealmsWorldSlot>>;
   public isRealmsServiceAvailable(): EditorRealmsServiceAvailability;
   private constructor();
}


export const editorInternal: MinecraftEditorInternal;


//@ts-ignore
export class PrefabErrorInvalidInstance extends Error {
   private constructor();
}
//@ts-ignore
export class PrefabErrorInvalidName extends Error {
   private constructor();
}
//@ts-ignore
export class PrefabErrorInvalidStructure extends Error {
   private constructor();
}
//@ts-ignore
export class PrefabErrorInvalidTemplate extends Error {
   private constructor();
}
//@ts-ignore
export class PrefabErrorInvalidTemplateStructure extends Error {
   private constructor();
}
//@ts-ignore
export class PrefabErrorStringInvalidLength extends Error {
   public readonly length: number;
   public readonly maxLength: number;
   public readonly string: string;
   private constructor();
}
//@ts-ignore
export class PrefabErrorValueOutOfBounds extends Error {
   private constructor();
}
//@ts-ignore
export class PrefabServiceError extends Error {
   private constructor();
}
//@ts-ignore
export class PrefabTemplateExists extends Error {
   private constructor();
}
//@ts-ignore
export class PrefabTemplateNotFound extends Error {
   private constructor();
}