import * as server_ui from "@minecraft/server-ui-bindings";
import * as common from "@minecraft/common";
import * as server from "@minecraft/server";

export enum DataDrivenScreenClosedReason {
   ClientCanceled = "ClientCanceled",
   InvalidForm = "InvalidForm",
   ProgrammaticClose = "ProgrammaticClose",
   ProgrammaticCloseAll = "ProgrammaticCloseAll",
   UserBusy = "UserBusy",
}
export enum DataDrivenScreenRejectReason {
   PlayerLeave = "PlayerLeave",
   ServerShutdown = "ServerShutdown",
}
export enum InternalTextFilteringError {
   DisabledByPlayer = "DisabledByPlayer",
   TextProcessorServiceUnreachable = "TextProcessorServiceUnreachable",
   Unknown = "Unknown",
}


export class DataDrivenScreen {
   public static closeAllScreens(player: server.Player): void;
   public constructor(player: server.Player, screenId: string);
   public hideScreen(): void;
   public isShowing(): boolean;
   public showScreen(instanceId?: number): Promise<DataDrivenScreenResponse>;
}
export class DataDrivenScreenResponse {
   public readonly closedReason: DataDrivenScreenClosedReason;
   private constructor();
}
export class DataStore {
   public getFilteredText(player: server.Player, text: string): Promise<Array<InternalTextFilteringError> | string>;
   public getInstanceIdOverride(): (number | undefined);
   public getProperty(player: server.Player, dataStoreName: string, property: string): (string | undefined);
   public getPropertyPath(player: server.Player, dataStoreName: string, property: string, path: string): (string | undefined);
   public setClientWritable(player: server.Player, dataStoreName: string, property: string, path: string, isWritable?: boolean): void;
   public setInstanceIdOverride(instanceId?: number): void;
   public setProperty(player: server.Player, dataStoreName: string, property: string, data: string): void;
   public setPropertyPath(player: server.Player, dataStoreName: string, property: string, path: string, data: boolean | number | string): void;
   public subscribe(player: server.Player, dataStoreName: string, property: string, path: string, onChange: (arg0?: string)=>void): (arg0?: string)=>void;
   public unsubscribe(onChange: (arg0?: string)=>void): boolean;
   private constructor();
}

export const testConstant = 5;

export const ddui: DataStore;


//@ts-ignore
export class DataDrivenScreenRejectError extends Error {
   public readonly reason: DataDrivenScreenRejectReason;
   private constructor();
}
//@ts-ignore
export class InvalidPathError extends Error {
   public readonly path: string;
   private constructor();
}