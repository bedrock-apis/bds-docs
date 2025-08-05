import * as _1e from '@minecraft/common';
import * as _2c from '@minecraft/server';
import * as _3e from '@minecraft/server-editor-bindings';

// Enums - 3
export enum EditorRealmsServiceAvailability { DedicatedServer = 2, NoRealmsSubscription = 1, NotLoggedIn = 0, NotServerHost = 3, Success = 4, Unknown = 5};
export enum RealmsServiceStatus { Exporting = 2, Fetching = 0, Idle = 1, Uploading = 3};
export enum RealmsWorldUploadResult { EditorSystemFailure = 4, ExportWorldFailure = 2, Success = 1, Unknown = 0, UploadWorldFailure = 3, WorldNameNonCompliant = 6, WorldUploadBusy = 5};

// Interfaces - 4
export interface DataTransferCollectionNameData { nameStringId: string; uniqueId: string};
export interface EditorRealmsWorld { id: string; name: string};
export interface EditorRealmsWorldSlot { id: number; name: string};
export interface InputBindingInfo { actionId?: string; canRebind: boolean; label?: string; tooltip?: string};

// Classes - 18
export class DataStore { public readonly actionBarContainer: DataStoreActionBarContainer; public readonly actionContainer: DataStoreActionContainer; public readonly afterEvents: DataStoreAfterEvents; public readonly menuContainer: DataStoreMenuContainer; public readonly modalToolContainer: DataStoreModalToolContainer; public readonly paneContainer: DataStorePaneContainer; private constructor();};
export class DataStoreActionBarContainer { public getItemPayload(id: string): string; public getItemProperty(id: string, property: string): (boolean | number | string | undefined); public hasItemPayload(id: string): boolean; public hasItemProperty(id: string, property: string): boolean; public registerItem(id: string, payload: string): void; public unregisterItem(id: string): void; public updateRegisteredItem(id: string, payload: string): void; public updateRegisteredItemProperty(id: string, payload: string, property: string): void; private constructor();};
export class DataStoreActionContainer { public bindActionToControl(controlId: string, actionPayload: string): void; public removeActionFromControl(controlId: string, actionPayload?: string): void; private constructor();};
export class DataStoreAfterEvents { public readonly payloadReceived: DataStorePayloadAfterEventSignal; private constructor();};
export class DataStoreMenuContainer { public createItem(id: string, payload: string): void; public destroyItem(id: string): void; public getPayload(id: string): string; public getProperty(id: string, property: string): (boolean | number | string | undefined); public hasPayload(id: string): boolean; public hasProperty(id: string, property: string): boolean; public updateItem(id: string, payload: string): void; private constructor();};
export class DataStoreModalToolActivationChangedEvent { public readonly isActive: boolean; public readonly toolId?: string; private constructor();};
export class DataStoreModalToolActivationChangedEventSignal { public subscribe(callback: (arg0: DataStoreModalToolActivationChangedEvent)=>void): (arg0: DataStoreModalToolActivationChangedEvent)=>void; public unsubscribe(callback: (arg0: DataStoreModalToolActivationChangedEvent)=>void): void; private constructor();};
export class DataStoreModalToolContainer { public readonly toolActivationChanged: DataStoreModalToolActivationChangedEventSignal; public getSelectedTool(): (string | undefined); public getToolPayload(id: string): string; public getToolProperty(id: string, property: string): (boolean | number | string | undefined); public hasToolPayload(id: string): boolean; public hasToolProperty(id: string, property: string): boolean; public registerTool(id: string, payload: string): void; public unregisterTool(id: string): void; public updateRegisteredTool(id: string, payload: string): void; public updateRegisteredToolProperty(id: string, payload: string, property: string): void; public updateSelectedTool(toolId?: string): void; private constructor();};
export class DataStorePaneContainer { public createPane(id: string): void; public destroyPane(id: string): void; private constructor();};
export class DataStorePayloadAfterEvent { public readonly dataTag: string; public readonly payload: string; private constructor();};
export class DataStorePayloadAfterEventSignal { public subscribe(callback: (arg0: DataStorePayloadAfterEvent)=>void): (arg0: DataStorePayloadAfterEvent)=>void; public unsubscribe(callback: (arg0: DataStorePayloadAfterEvent)=>void): void; private constructor();};
export class DataTransferManager { public closeSession(collectionUniqueId: string): void; public getRegisteredAccessors(): DataTransferCollectionNameData[]; public openSession(collectionUniqueId: string): void; public requestData(collectionUniqueId: string): Promise<DataTransferRequestResponse>; public sendData(collectionUniqueId: string, jsonData: string): void; public sendDataToClipboard(jsonData: string): void; private constructor();};
export class DataTransferRequestResponse { public readonly collectionName: string; public readonly data: string; public readonly schema: string; private constructor();};
export class InputService { public focusViewport(): void; public getKeyBindingProcessingState(contextId: string, bindingId: string): (number | undefined); public registerKeyBinding(contextId: string, bindingId: string, key: number, modifier: _3e.InputModifier, info: InputBindingInfo): void; public registerMouseBinding(contextId: string, bindingId: string, mouseAction: _3e.MouseActionCategory): void; public unregisterKeyBinding(contextId: string, bindingId: string): void; public unregisterMouseBinding(contextId: string, bindingId: string): void; public updateKeyBindingProcessingState(contextId: string, bindingId: string, state?: number): void; private constructor();};
export class InternalPlayerServiceContext { public readonly dataStore: DataStore; public readonly dataTransfer: DataTransferManager; public readonly input: InputService; public readonly realmsService: RealmsService; public readonly tickingArea: TickingAreaManager; private constructor();};
export class MinecraftEditorInternal { public readonly isNewLevel: boolean; public fireTelemetryEvent(player: _2c.Player, source: string, eventName: string, metadata: string): void; public getMapColorUnsafe(player: _2c.Player, coordinate: _2c.Vector3): _2c.RGBA; public getPlayerServices(player: _2c.Player): InternalPlayerServiceContext; public registerExtension(extensionName: string, activationFunction: (arg0: _3e.ExtensionContext)=>void, shutdownFunction: (arg0: _3e.ExtensionContext)=>void, options?: _3e.ExtensionOptionalParameters): _3e.Extension; private constructor();};
export class RealmsService { public beginDownloadFromRealms(realmsWorldId: string, slotId: number): Promise<string>; public beginUploadToRealms(realmsWorldId: string, slotId: number, gameOptions: _3e.GameOptions): Promise<RealmsWorldUploadResult>; public canUploadWorld(): boolean; public getRealmWorldlist(): Promise<EditorRealmsWorld[]>; public getServiceStatus(): RealmsServiceStatus; public getSlots(worldId: string): Promise<EditorRealmsWorldSlot[]>; public isRealmsServiceAvailable(): EditorRealmsServiceAvailability; private constructor();};
export class TickingAreaManager { public isTickingAreaActive(areaIdentifier: string): boolean; public purgeTickingAreas(areaIdentifier: string): boolean; public releaseTickingArea(areaIdentifier: string): boolean; public requestTickingArea(areaIdentifier: string, from: _2c.Vector3, to: _2c.Vector3): boolean; private constructor();};

// Constants & Objects - 1

export const editorInternal: MinecraftEditorInternal;

// Functions - 0

// Errors - 0
