import * as common from "@minecraft/common";
import * as server from "@minecraft/server";


export interface TransferPlayerIpPortOptions {
   hostname: string;
   port: number;
}
export interface TransferPlayerNetherNetOptions {
   netherNetId: string;
}

export class AdminBeforeEvents {
   public readonly asyncPlayerJoin: AsyncPlayerJoinBeforeEventSignal;
   private constructor();
}
export class AllowList {
   public enabled: boolean;
   public add(player: server.Player | string): void;
   public clear(): void;
   public contains(player: server.Player | string): boolean;
   public reloadFile(): void;
   public remove(player: server.Player | string): void;
   private constructor();
}
export class AsyncPlayerJoinBeforeEvent {
   public readonly name: string;
   public readonly persistentId: string;
   public readonly splitScreenSlot?: server.PlayerSplitScreenSlot;
   public allowJoin(): void;
   public disallowJoin(reason?: string): void;
   public disconnect(reason?: string): void;
   public isValid(): boolean;
   private constructor();
}
export class AsyncPlayerJoinBeforeEventSignal {
   public subscribe(callback: (arg0: AsyncPlayerJoinBeforeEvent)=>Promise<void>): (arg0: AsyncPlayerJoinBeforeEvent)=>Promise<void>;
   public unsubscribe(callback: (arg0: AsyncPlayerJoinBeforeEvent)=>Promise<void>): boolean;
   private constructor();
}
export class DedicatedServerUtils {
   public readonly allowList: AllowList;
   public readonly levelStorage: LevelStorage;
   public reloadCDNConfig(): void;
   public reloadPermissions(): void;
   public reloadScriptingConfig(): void;
   public stopServer(): void;
   private constructor();
}
export class LevelStorage {
   public saveHold(): void;
   public saveQuery(): Array<LevelStorageQuerySnapshotFile>;
   public saveResume(): void;
   private constructor();
}
export class LevelStorageQuerySnapshotFile {
   public readonly fileName: string;
   public readonly fileSize: number;
   private constructor();
}
export class SecretString {
   public constructor(value: string);
}
export class ServerSecrets {
   public readonly names: Array<string>;
   public get(name: string): (SecretString | undefined);
   private constructor();
}
export class ServerVariables {
   public readonly names: Array<string>;
   public get(name: string): (unknown | undefined);
   private constructor();
}


export const beforeEvents: AdminBeforeEvents;
export const dedicatedServer?: DedicatedServerUtils;
export const secrets: ServerSecrets;
export const variables: ServerVariables;

export function deopPlayer(player: server.Player): void;
export function kickPlayer(player: server.Player, reason?: string): void;
export function opPlayer(player: server.Player): void;
export function transferPlayer(player: server.Player, options: TransferPlayerIpPortOptions | TransferPlayerNetherNetOptions): void;

//@ts-ignore
export class AllowListFileReloadError extends Error {
   private constructor();
}
//@ts-ignore
export class AllowListModificationError extends Error {
   private constructor();
}
//@ts-ignore
export class CannotDeopPlayerError extends Error {
   private constructor();
}
//@ts-ignore
export class CannotKickPlayerError extends Error {
   private constructor();
}
//@ts-ignore
export class DisconnectedError extends Error {
   public readonly id: string;
   private constructor();
}
//@ts-ignore
export class LevelStorageSaveStateChangeError extends Error {
   private constructor();
}
//@ts-ignore
export class PlayerAlreadyOpError extends Error {
   private constructor();
}