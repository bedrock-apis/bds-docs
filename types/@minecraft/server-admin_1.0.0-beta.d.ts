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
export class AsyncPlayerJoinBeforeEvent {
   public readonly name: string;
   public readonly persistentId: string;
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
export const secrets: ServerSecrets;
export const variables: ServerVariables;

export function transferPlayer(player: server.Player, options: TransferPlayerIpPortOptions | TransferPlayerNetherNetOptions): void;

//@ts-ignore
export class DisconnectedError extends Error {
   public readonly id: string;
   private constructor();
}