import * as common from "@minecraft/common";
import * as server from "@minecraft/server";
import * as server_admin from "@minecraft/server-admin";

export enum HttpRequestMethod {
   Delete = "Delete",
   Get = "Get",
   Head = "Head",
   Patch = "Patch",
   Post = "Post",
   Put = "Put",
}
export enum HttpStatusCode {
   Accepted = 202,
   AlreadyReported = 208,
   BadGateway = 502,
   BadRequest = 400,
   ClientClosedRequest = 499,
   ClientRequestTimeout = 498,
   Conflict = 409,
   ConnectionClosedWithoutResponse = 444,
   Continue = 100,
   Created = 201,
   ExpectationFailed = 417,
   FailedDependency = 424,
   Forbidden = 403,
   Found = 302,
   GatewayTimeout = 504,
   Gone = 410,
   HttpVersionNotSupported = 505,
   IMUsed = 226,
   InsufficientStorage = 507,
   InternalServerError = 500,
   LengthRequired = 411,
   Locked = 423,
   LoopDetected = 508,
   MethodNotAllowed = 405,
   MisdirectedRequest = 421,
   MovedPermanently = 301,
   MultipleChoices = 300,
   MultiStatus = 207,
   NetworkAuthenticationRequired = 511,
   NetworkConnectionTimeoutError = 599,
   NoContent = 204,
   NonAuthoritativeInformation = 203,
   NotAcceptable = 406,
   NotExtended = 510,
   NotFound = 404,
   NotImplemented = 501,
   NotModified = 304,
   OK = 200,
   PartialContent = 206,
   PayloadTooLarge = 413,
   PaymentRequired = 402,
   PermanentRedirect = 308,
   PreconditionFailed = 412,
   PreconditionRequired = 428,
   Processing = 102,
   ProxyAuthenticationRequired = 407,
   RequestedRangeNotSatisfiable = 416,
   RequestHeaderFieldsTooLarge = 431,
   RequestTimeout = 408,
   RequestURITooLong = 414,
   ResetContent = 205,
   SeeOther = 303,
   ServiceUnavailable = 503,
   SwitchingProtocols = 101,
   TemporaryRedirect = 307,
   TooEarly = 425,
   TooManyRequests = 429,
   Unauthorized = 401,
   UnavailableForLegalReasons = 451,
   UnprocessableEntity = 422,
   UnsupportedMediaType = 415,
   UpgradeRequired = 426,
   UseProxy = 305,
   VariantAlsoNegotiates = 506,
}
export enum PacketId {
   ActorEventPacket = "ActorEventPacket",
   ActorPickRequestPacket = "ActorPickRequestPacket",
   AddActorPacket = "AddActorPacket",
   AddBehaviorTreePacket = "AddBehaviorTreePacket",
   AddItemActorPacket = "AddItemActorPacket",
   AddPaintingPacket = "AddPaintingPacket",
   AddPlayerPacket = "AddPlayerPacket",
   AddVolumeEntityPacket = "AddVolumeEntityPacket",
   AgentActionEventPacket = "AgentActionEventPacket",
   AgentAnimationPacket = "AgentAnimationPacket",
   AnimateEntityPacket = "AnimateEntityPacket",
   AnimatePacket = "AnimatePacket",
   AnvilDamagePacket = "AnvilDamagePacket",
   AutomationClientConnectPacket = "AutomationClientConnectPacket",
   AvailableActorIdentifiersPacket = "AvailableActorIdentifiersPacket",
   AvailableCommandsPacket = "AvailableCommandsPacket",
   AwardAchievementPacket = "AwardAchievementPacket",
   BiomeDefinitionListPacket = "BiomeDefinitionListPacket",
   BlockActorDataPacket = "BlockActorDataPacket",
   BlockEventPacket = "BlockEventPacket",
   BlockPickRequestPacket = "BlockPickRequestPacket",
   BookEditPacket = "BookEditPacket",
   BossEventPacket = "BossEventPacket",
   CameraAimAssistActorPriorityPacket = "CameraAimAssistActorPriorityPacket",
   CameraAimAssistPacket = "CameraAimAssistPacket",
   CameraAimAssistPresetsPacket = "CameraAimAssistPresetsPacket",
   CameraInstructionPacket = "CameraInstructionPacket",
   CameraPacket = "CameraPacket",
   CameraPresetsPacket = "CameraPresetsPacket",
   CameraShakePacket = "CameraShakePacket",
   CameraSplinePacket = "CameraSplinePacket",
   ChangeDimensionPacket = "ChangeDimensionPacket",
   ChangeMobPropertyPacket = "ChangeMobPropertyPacket",
   ChunkRadiusUpdatedPacket = "ChunkRadiusUpdatedPacket",
   ClientboundAttributeLayerSyncPacket = "ClientboundAttributeLayerSyncPacket",
   ClientboundCloseFormPacket = "ClientboundCloseFormPacket",
   ClientboundControlSchemeSetPacket = "ClientboundControlSchemeSetPacket",
   ClientboundDataDrivenUICloseScreenPacket = "ClientboundDataDrivenUICloseScreenPacket",
   ClientboundDataDrivenUIReloadPacket = "ClientboundDataDrivenUIReloadPacket",
   ClientboundDataDrivenUIShowScreenPacket = "ClientboundDataDrivenUIShowScreenPacket",
   ClientboundDataStorePacket = "ClientboundDataStorePacket",
   ClientboundDebugRendererPacket = "ClientboundDebugRendererPacket",
   ClientboundMapItemDataPacket = "ClientboundMapItemDataPacket",
   ClientboundTextureShiftPacket = "ClientboundTextureShiftPacket",
   ClientboundUpdateSoundDataPacket = "ClientboundUpdateSoundDataPacket",
   ClientCacheBlobStatusPacket = "ClientCacheBlobStatusPacket",
   ClientCacheMissResponsePacket = "ClientCacheMissResponsePacket",
   ClientCacheStatusPacket = "ClientCacheStatusPacket",
   ClientCameraAimAssistPacket = "ClientCameraAimAssistPacket",
   ClientMovementPredictionSyncPacket = "ClientMovementPredictionSyncPacket",
   ClientToServerHandshakePacket = "ClientToServerHandshakePacket",
   CodeBuilderPacket = "CodeBuilderPacket",
   CodeBuilderSourcePacket = "CodeBuilderSourcePacket",
   CommandBlockUpdatePacket = "CommandBlockUpdatePacket",
   CommandOutputPacket = "CommandOutputPacket",
   CommandRequestPacket = "CommandRequestPacket",
   CompletedUsingItemPacket = "CompletedUsingItemPacket",
   ContainerClosePacket = "ContainerClosePacket",
   ContainerOpenPacket = "ContainerOpenPacket",
   ContainerRegistryCleanupPacket = "ContainerRegistryCleanupPacket",
   ContainerSetDataPacket = "ContainerSetDataPacket",
   CorrectPlayerMovePredictionPacket = "CorrectPlayerMovePredictionPacket",
   CraftingDataPacket = "CraftingDataPacket",
   CreatePhotoPacket = "CreatePhotoPacket",
   CreativeContentPacket = "CreativeContentPacket",
   CurrentStructureFeaturePacket = "CurrentStructureFeaturePacket",
   DeathInfoPacket = "DeathInfoPacket",
   DebugInfoPacket = "DebugInfoPacket",
   DimensionDataPacket = "DimensionDataPacket",
   DisconnectPacket = "DisconnectPacket",
   EditorNetworkPacket = "EditorNetworkPacket",
   EducationSettingsPacket = "EducationSettingsPacket",
   EduUriResourcePacket = "EduUriResourcePacket",
   EmoteListPacket = "EmoteListPacket",
   EmotePacket = "EmotePacket",
   FeatureRegistryPacket = "FeatureRegistryPacket",
   GameRulesChangedPacket = "GameRulesChangedPacket",
   GameTestRequestPacket = "GameTestRequestPacket",
   GameTestResultsPacket = "GameTestResultsPacket",
   GraphicsOverrideParameterPacket = "GraphicsOverrideParameterPacket",
   GuiDataPickItemPacket = "GuiDataPickItemPacket",
   HurtArmorPacket = "HurtArmorPacket",
   InteractPacket = "InteractPacket",
   InventoryContentPacket = "InventoryContentPacket",
   InventorySlotPacket = "InventorySlotPacket",
   InventoryTransactionPacket = "InventoryTransactionPacket",
   ItemRegistryPacket = "ItemRegistryPacket",
   ItemStackRequestPacket = "ItemStackRequestPacket",
   ItemStackResponsePacket = "ItemStackResponsePacket",
   JigsawStructureDataPacket = "JigsawStructureDataPacket",
   LabTablePacket = "LabTablePacket",
   LecternUpdatePacket = "LecternUpdatePacket",
   LegacyTelemetryEventPacket = "LegacyTelemetryEventPacket",
   LessonProgressPacket = "LessonProgressPacket",
   LevelChunkPacket = "LevelChunkPacket",
   LevelEventGenericPacket = "LevelEventGenericPacket",
   LevelEventPacket = "LevelEventPacket",
   LevelSoundEventPacket = "LevelSoundEventPacket",
   LocatorBarPacket = "LocatorBarPacket",
   LoginPacket = "LoginPacket",
   MapCreateLockedCopyPacket = "MapCreateLockedCopyPacket",
   MapInfoRequestPacket = "MapInfoRequestPacket",
   MobArmorEquipmentPacket = "MobArmorEquipmentPacket",
   MobEffectPacket = "MobEffectPacket",
   MobEquipmentPacket = "MobEquipmentPacket",
   ModalFormRequestPacket = "ModalFormRequestPacket",
   ModalFormResponsePacket = "ModalFormResponsePacket",
   MotionPredictionHintsPacket = "MotionPredictionHintsPacket",
   MoveActorAbsolutePacket = "MoveActorAbsolutePacket",
   MoveActorDeltaPacket = "MoveActorDeltaPacket",
   MovementEffectPacket = "MovementEffectPacket",
   MovePlayerPacket = "MovePlayerPacket",
   MultiplayerSettingsPacket = "MultiplayerSettingsPacket",
   NetworkChunkPublisherUpdatePacket = "NetworkChunkPublisherUpdatePacket",
   NetworkSettingsPacket = "NetworkSettingsPacket",
   NetworkStackLatencyPacket = "NetworkStackLatencyPacket",
   NpcDialoguePacket = "NpcDialoguePacket",
   NpcRequestPacket = "NpcRequestPacket",
   OnScreenTextureAnimationPacket = "OnScreenTextureAnimationPacket",
   OpenSignPacket = "OpenSignPacket",
   PacketViolationWarningPacket = "PacketViolationWarningPacket",
   PartyChangedPacket = "PartyChangedPacket",
   PartyDestinationCookieResponsePacket = "PartyDestinationCookieResponsePacket",
   PhotoTransferPacket = "PhotoTransferPacket",
   PlayerActionPacket = "PlayerActionPacket",
   PlayerArmorDamagePacket = "PlayerArmorDamagePacket",
   PlayerAuthInputPacket = "PlayerAuthInputPacket",
   PlayerEnchantOptionsPacket = "PlayerEnchantOptionsPacket",
   PlayerFogPacket = "PlayerFogPacket",
   PlayerHotbarPacket = "PlayerHotbarPacket",
   PlayerListPacket = "PlayerListPacket",
   PlayerLocationPacket = "PlayerLocationPacket",
   PlayerSkinPacket = "PlayerSkinPacket",
   PlayerStartItemCooldownPacket = "PlayerStartItemCooldownPacket",
   PlayerToggleCrafterSlotRequestPacket = "PlayerToggleCrafterSlotRequestPacket",
   PlayerUpdateEntityOverridesPacket = "PlayerUpdateEntityOverridesPacket",
   PlaySoundPacket = "PlaySoundPacket",
   PlayStatusPacket = "PlayStatusPacket",
   PositionTrackingDBClientRequestPacket = "PositionTrackingDBClientRequestPacket",
   PositionTrackingDBServerBroadcastPacket = "PositionTrackingDBServerBroadcastPacket",
   PrimitiveShapesPacket = "PrimitiveShapesPacket",
   PurchaseReceiptPacket = "PurchaseReceiptPacket",
   RefreshEntitlementsPacket = "RefreshEntitlementsPacket",
   RemoveActorPacket = "RemoveActorPacket",
   RemoveObjectivePacket = "RemoveObjectivePacket",
   RemoveVolumeEntityPacket = "RemoveVolumeEntityPacket",
   RequestAbilityPacket = "RequestAbilityPacket",
   RequestChunkRadiusPacket = "RequestChunkRadiusPacket",
   RequestNetworkSettingsPacket = "RequestNetworkSettingsPacket",
   RequestPermissionsPacket = "RequestPermissionsPacket",
   ResourcePackChunkDataPacket = "ResourcePackChunkDataPacket",
   ResourcePackChunkRequestPacket = "ResourcePackChunkRequestPacket",
   ResourcePackClientResponsePacket = "ResourcePackClientResponsePacket",
   ResourcePackDataInfoPacket = "ResourcePackDataInfoPacket",
   ResourcePacksInfoPacket = "ResourcePacksInfoPacket",
   ResourcePacksReadyForValidationPacket = "ResourcePacksReadyForValidationPacket",
   ResourcePackStackPacket = "ResourcePackStackPacket",
   RespawnPacket = "RespawnPacket",
   ScriptMessagePacket = "ScriptMessagePacket",
   SendPartyDestinationCookiePacket = "SendPartyDestinationCookiePacket",
   ServerboundDataDrivenScreenClosedPacket = "ServerboundDataDrivenScreenClosedPacket",
   ServerboundDataStorePacket = "ServerboundDataStorePacket",
   ServerboundDiagnosticsPacket = "ServerboundDiagnosticsPacket",
   ServerboundLoadingScreenPacket = "ServerboundLoadingScreenPacket",
   ServerboundPackSettingChangePacket = "ServerboundPackSettingChangePacket",
   ServerPlayerPostMovePositionPacket = "ServerPlayerPostMovePositionPacket",
   ServerPresenceInfoPacket = "ServerPresenceInfoPacket",
   ServerSettingsRequestPacket = "ServerSettingsRequestPacket",
   ServerSettingsResponsePacket = "ServerSettingsResponsePacket",
   ServerStatsPacket = "ServerStatsPacket",
   ServerStoreInfoPacket = "ServerStoreInfoPacket",
   ServerToClientHandshakePacket = "ServerToClientHandshakePacket",
   SetActorDataPacket = "SetActorDataPacket",
   SetActorLinkPacket = "SetActorLinkPacket",
   SetActorMotionPacket = "SetActorMotionPacket",
   SetCommandsEnabledPacket = "SetCommandsEnabledPacket",
   SetDefaultGameTypePacket = "SetDefaultGameTypePacket",
   SetDifficultyPacket = "SetDifficultyPacket",
   SetDisplayObjectivePacket = "SetDisplayObjectivePacket",
   SetHealthPacket = "SetHealthPacket",
   SetHudPacket = "SetHudPacket",
   SetLastHurtByPacket = "SetLastHurtByPacket",
   SetLocalPlayerAsInitializedPacket = "SetLocalPlayerAsInitializedPacket",
   SetPlayerFurnaceOptionsPacket = "SetPlayerFurnaceOptionsPacket",
   SetPlayerGameTypePacket = "SetPlayerGameTypePacket",
   SetPlayerInventoryOptionsPacket = "SetPlayerInventoryOptionsPacket",
   SetScoreboardIdentityPacket = "SetScoreboardIdentityPacket",
   SetScorePacket = "SetScorePacket",
   SetSpawnPositionPacket = "SetSpawnPositionPacket",
   SetTimePacket = "SetTimePacket",
   SettingsCommandPacket = "SettingsCommandPacket",
   SetTitlePacket = "SetTitlePacket",
   ShowCreditsPacket = "ShowCreditsPacket",
   ShowProfilePacket = "ShowProfilePacket",
   ShowStoreOfferPacket = "ShowStoreOfferPacket",
   SimpleEventPacket = "SimpleEventPacket",
   SimulationTypePacket = "SimulationTypePacket",
   SpawnExperienceOrbPacket = "SpawnExperienceOrbPacket",
   SpawnParticleEffectPacket = "SpawnParticleEffectPacket",
   StartGamePacket = "StartGamePacket",
   StopSoundPacket = "StopSoundPacket",
   StructureBlockUpdatePacket = "StructureBlockUpdatePacket",
   StructureTemplateDataRequestPacket = "StructureTemplateDataRequestPacket",
   StructureTemplateDataResponsePacket = "StructureTemplateDataResponsePacket",
   SubChunkPacket = "SubChunkPacket",
   SubChunkRequestPacket = "SubChunkRequestPacket",
   SubClientLoginPacket = "SubClientLoginPacket",
   SyncActorPropertyPacket = "SyncActorPropertyPacket",
   SyncWorldClocksPacket = "SyncWorldClocksPacket",
   TakeItemActorPacket = "TakeItemActorPacket",
   TextPacket = "TextPacket",
   TickingAreasLoadStatusPacket = "TickingAreasLoadStatusPacket",
   ToastRequestPacket = "ToastRequestPacket",
   TransferPacket = "TransferPacket",
   TrimDataPacket = "TrimDataPacket",
   UnlockedRecipesPacket = "UnlockedRecipesPacket",
   UpdateAbilitiesPacket = "UpdateAbilitiesPacket",
   UpdateAdventureSettingsPacket = "UpdateAdventureSettingsPacket",
   UpdateAttributesPacket = "UpdateAttributesPacket",
   UpdateBlockPacket = "UpdateBlockPacket",
   UpdateBlockSyncedPacket = "UpdateBlockSyncedPacket",
   UpdateClientInputLocksPacket = "UpdateClientInputLocksPacket",
   UpdateClientOptionsPacket = "UpdateClientOptionsPacket",
   UpdateEquipPacket = "UpdateEquipPacket",
   UpdatePlayerGameTypePacket = "UpdatePlayerGameTypePacket",
   UpdateSoftEnumPacket = "UpdateSoftEnumPacket",
   UpdateSubChunkBlocksPacket = "UpdateSubChunkBlocksPacket",
   UpdateTradePacket = "UpdateTradePacket",
   VoxelShapesPacket = "VoxelShapesPacket",
}
export enum WebSocketClientCloseReasons {
   ClosedByClient = 1,
   ClosedByServer = 0,
   IncomingPayloadsTooLarge = 2,
}

export interface PacketEventOptions {
   ignoredPacketIds?: Array<PacketId>;
   monitoredPacketIds?: Array<PacketId>;
}

export class CloseAfterEventSignal {
   public subscribe(callback: (arg0: WebSocketClientCloseAfterEvent)=>void): (arg0: WebSocketClientCloseAfterEvent)=>void;
   public unsubscribe(callback: (arg0: WebSocketClientCloseAfterEvent)=>void): void;
   private constructor();
}
export class HttpClient {
   public cancelAll(reason: string): void;
   public get(uri: string): Promise<HttpResponse>;
   public request(config: HttpRequest): Promise<HttpResponse>;
   private constructor();
}
export class HttpHeader {
   public key: string;
   public value: server_admin.SecretString | string;
   public constructor(key: string, value: server_admin.SecretString | string);
}
export class HttpRequest {
   public body: server.ISerializable | string;
   public headers: Array<HttpHeader>;
   public method: HttpRequestMethod;
   public timeout: number;
   public uri: string;
   public addHeader(key: string, value: server_admin.SecretString | string): HttpRequest;
   public constructor(uri: string);
   public setBody(body: server.ISerializable | string): HttpRequest;
   public setHeaders(headers: Array<HttpHeader>): HttpRequest;
   public setMethod(method: HttpRequestMethod): HttpRequest;
   public setTimeout(timeout: number): HttpRequest;
}
export class HttpResponse {
   public readonly body: string;
   public readonly headers: Array<HttpHeader>;
   public readonly request: HttpRequest;
   public readonly status: number;
   public deserialize(identifier: string): server.ISerializable;
   private constructor();
}
export class MessageAfterEventSignal {
   public subscribe(callback: (arg0: WebSocketClientReceiveAfterEvent)=>void): (arg0: WebSocketClientReceiveAfterEvent)=>void;
   public unsubscribe(callback: (arg0: WebSocketClientReceiveAfterEvent)=>void): void;
   private constructor();
}
export class NetworkBeforeEvents {
   public readonly packetReceive: PacketReceiveBeforeEventSignal;
   public readonly packetSend: PacketSendBeforeEventSignal;
   private constructor();
}
export class PacketReceiveBeforeEventSignal {
   public subscribe(callback: (arg0: PacketReceivedBeforeEvent)=>void, options?: PacketEventOptions): (arg0: PacketReceivedBeforeEvent)=>void;
   public unsubscribe(callback: (arg0: PacketReceivedBeforeEvent)=>void): void;
   private constructor();
}
export class PacketReceivedBeforeEvent {
   public cancel: boolean;
   public readonly packetId: PacketId;
   public readonly packetSize: number;
   public readonly sender?: server.Player;
   private constructor();
}
export class PacketSendBeforeEvent {
   public cancel: boolean;
   public readonly packetId: PacketId;
   public readonly recipients: Array<server.Player | undefined>;
   private constructor();
}
export class PacketSendBeforeEventSignal {
   public subscribe(callback: (arg0: PacketSendBeforeEvent)=>void, options?: PacketEventOptions): (arg0: PacketSendBeforeEvent)=>void;
   public unsubscribe(callback: (arg0: PacketSendBeforeEvent)=>void): void;
   private constructor();
}
export class WebSocket {
   public connect(uri: string, headers?: Array<HttpHeader>): Promise<WebSocketClient>;
   private constructor();
}
export class WebSocketClient {
   public readonly afterEvents: WebSocketClientAfterEvents;
   public readonly isOpen: boolean;
   public close(): void;
   public send(payload: string): void;
   private constructor();
}
export class WebSocketClientAfterEvents {
   public readonly close: CloseAfterEventSignal;
   public readonly message: MessageAfterEventSignal;
   private constructor();
}
export class WebSocketClientCloseAfterEvent {
   public readonly reason: WebSocketClientCloseReasons;
   private constructor();
}
export class WebSocketClientReceiveAfterEvent {
   public readonly message: string;
   private constructor();
}


export const beforeEvents: NetworkBeforeEvents;
export const http: HttpClient;
export const websocket: WebSocket;


//@ts-ignore
export class HttpRequestLimitExceededError extends Error {
   public readonly inFlightRequests: number;
   public readonly maxConcurrentRequests: number;
   private constructor();
}
//@ts-ignore
export class InternalHttpRequestError extends Error {
   public readonly errorCode: number;
   public readonly errorMessage: string;
   private constructor();
}
//@ts-ignore
export class InternalWebSocketError extends Error {
   public readonly errorCode: number;
   public readonly errorMessage: string;
   private constructor();
}
//@ts-ignore
export class MalformedUriError extends Error {
   private constructor();
}
//@ts-ignore
export class RequestBodyTooLargeError extends Error {
   public readonly maxBytes: number;
   public readonly providedBytes: number;
   private constructor();
}
//@ts-ignore
export class SerializableParseError extends Error {
   private constructor();
}
//@ts-ignore
export class TLSOnlyError extends Error {
   public readonly uri: string;
   private constructor();
}
//@ts-ignore
export class UriNotAllowedError extends Error {
   public readonly uri: string;
   private constructor();
}
//@ts-ignore
export class WebSocketConnectionFailedError extends Error {
   public readonly errorCode: HttpStatusCode;
   public readonly uri: string;
   private constructor();
}
//@ts-ignore
export class WebSocketLimitExceededError extends Error {
   public readonly connectedSockets: number;
   public readonly maxConcurrentConnections: number;
   private constructor();
}
//@ts-ignore
export class WebSocketNotConnectedError extends Error {
   private constructor();
}