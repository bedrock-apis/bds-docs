import * as _1e from '@minecraft/common';
import * as _2c from '@minecraft/server';

// Enums - 0

// Interfaces - 2
export interface TransferPlayerIpPortOptions { hostname: string; port: number};
export interface TransferPlayerNetherNetOptions { netherNetId: string};

// Classes - 6
export class AdminBeforeEvents { public readonly asyncPlayerJoin: AsyncPlayerJoinBeforeEventSignal; private constructor();};
export class AsyncPlayerJoinBeforeEvent { public readonly name: string; public readonly persistentId: string; public disconnect(reason?: string): void; public isValid(): boolean; private constructor();};
export class AsyncPlayerJoinBeforeEventSignal { public subscribe(callback: (arg0: AsyncPlayerJoinBeforeEvent)=>Promise<void>): (arg0: AsyncPlayerJoinBeforeEvent)=>Promise<void>; public unsubscribe(callback: (arg0: AsyncPlayerJoinBeforeEvent)=>Promise<void>): boolean; private constructor();};
export class SecretString { public constructor(value: string);};
export class ServerSecrets { public readonly names: string[]; public get(name: string): (SecretString | undefined); private constructor();};
export class ServerVariables { public readonly names: string[]; public get(name: string): (unknown | undefined); private constructor();};

// Constants & Objects - 3

export const beforeEvents: AdminBeforeEvents;
export const secrets: ServerSecrets;
export const variables: ServerVariables;

// Functions - 1
export function transferPlayer(player: _2c.Player, options: TransferPlayerIpPortOptions | TransferPlayerNetherNetOptions): void

// Errors - 1
export class DisconnectedError extends Error{ public readonly id: string; private constructor();};
