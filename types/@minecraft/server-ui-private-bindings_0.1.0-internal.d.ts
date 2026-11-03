import * as server_ui from "@minecraft/server-ui-bindings";
import * as common from "@minecraft/common";
import * as server from "@minecraft/server";



export class DataStore {
   public getVariable(player: server.Player, variableName: string): (boolean | number | string | undefined);
   private constructor();
}

export const testConstant = 5;

export const ddui: DataStore;

