import * as server_ui from "@minecraft/server-ui-bindings";
import * as common from "@minecraft/common";
import * as server from "@minecraft/server";



export class DataStore {
   public getProperty(player: server.Player, dataStoreName: string, property: string): (string | undefined);
   public getPropertyPath(player: server.Player, dataStoreName: string, property: string, path: string): (string | undefined);
   private constructor();
}

export const testConstant = 5;

export const ddui: DataStore;


//@ts-ignore
export class InvalidPathError extends Error {
   public readonly path: string;
   private constructor();
}