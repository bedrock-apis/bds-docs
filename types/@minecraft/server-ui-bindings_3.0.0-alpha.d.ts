import * as common from "@minecraft/common";
import * as server from "@minecraft/server";

export enum FormCancelationReason {
   UserBusy = "UserBusy",
   UserClosed = "UserClosed",
}
export enum FormRejectReason {
   MalformedResponse = "MalformedResponse",
   PlayerQuit = "PlayerQuit",
   ServerShutdown = "ServerShutdown",
}

export interface ModalFormDataDropdownOptions {
   defaultValueIndex?: number;
   tooltip?: server.RawMessage | string;
}
export interface ModalFormDataSliderOptions {
   defaultValue?: number;
   tooltip?: server.RawMessage | string;
   valueStep?: number;
}
export interface ModalFormDataTextFieldOptions {
   defaultValue?: server.RawMessage | string;
   tooltip?: server.RawMessage | string;
}
export interface ModalFormDataToggleOptions {
   defaultValue?: boolean;
   tooltip?: server.RawMessage | string;
}

export class ActionFormData {
   public body(bodyText: server.RawMessage | string): ActionFormData;
   public button(text: server.RawMessage | string, iconPath?: string): ActionFormData;
   public constructor();
   public divider(): ActionFormData;
   public header(text: server.RawMessage | string): ActionFormData;
   public label(text: server.RawMessage | string): ActionFormData;
   public show(player: server.Player): Promise<ActionFormResponse>;
   public title(titleText: server.RawMessage | string): ActionFormData;
}
//@ts-ignore
export class ActionFormResponse extends FormResponse {
   public readonly selection?: number;
   private constructor();
}
export class DataStore {
   public getProperty(player: server.Player, dataStoreName: string, property: string): (string | undefined);
   public getPropertyPath(player: server.Player, dataStoreName: string, property: string, path: string): (string | undefined);
   public setClientWritable(player: server.Player, dataStoreName: string, property: string, path: string, isWritable?: boolean): void;
   public setProperty(player: server.Player, dataStoreName: string, property: string, data: string): void;
   public setPropertyPath(player: server.Player, dataStoreName: string, property: string, path: string, data: boolean | number | string): void;
   public subscribe(player: server.Player, dataStoreName: string, property: string, onChange: (arg0?: string)=>void): (arg0?: string)=>void;
   public subscribePath(player: server.Player, dataStoreName: string, property: string, path: string, onChange: (arg0?: string)=>void): (arg0?: string)=>void;
   public unsubscribe(onChange: (arg0?: string)=>void): boolean;
   private constructor();
}
export class FormResponse {
   public readonly cancelationReason?: FormCancelationReason;
   public readonly canceled: boolean;
   private constructor();
}
export class MessageFormData {
   public body(bodyText: server.RawMessage | string): MessageFormData;
   public button1(text: server.RawMessage | string): MessageFormData;
   public button2(text: server.RawMessage | string): MessageFormData;
   public constructor();
   public show(player: server.Player): Promise<MessageFormResponse>;
   public title(titleText: server.RawMessage | string): MessageFormData;
}
//@ts-ignore
export class MessageFormResponse extends FormResponse {
   public readonly selection?: number;
   private constructor();
}
export class ModalFormData {
   public constructor();
   public divider(): ModalFormData;
   public dropdown(label: server.RawMessage | string, items: Array<server.RawMessage | string>, dropdownOptions?: ModalFormDataDropdownOptions): ModalFormData;
   public header(text: server.RawMessage | string): ModalFormData;
   public label(text: server.RawMessage | string): ModalFormData;
   public show(player: server.Player): Promise<ModalFormResponse>;
   public slider(label: server.RawMessage | string, minimumValue: number, maximumValue: number, sliderOptions?: ModalFormDataSliderOptions): ModalFormData;
   public submitButton(submitButtonText: server.RawMessage | string): ModalFormData;
   public textField(label: server.RawMessage | string, placeholderText: server.RawMessage | string, textFieldOptions?: ModalFormDataTextFieldOptions): ModalFormData;
   public title(titleText: server.RawMessage | string): ModalFormData;
   public toggle(label: server.RawMessage | string, toggleOptions?: ModalFormDataToggleOptions): ModalFormData;
}
//@ts-ignore
export class ModalFormResponse extends FormResponse {
   public readonly formValues?: Array<boolean | number | string | undefined>;
   private constructor();
}
export class UIManager {
   public closeAllForms(player: server.Player): void;
   private constructor();
}

export const isAlpha = true;

export const ddui: DataStore;
export const uiManager: UIManager;


//@ts-ignore
export class FormRejectError extends Error {
   public readonly reason: FormRejectReason;
   private constructor();
}
//@ts-ignore
export class InvalidPathError extends Error {
   public readonly path: string;
   private constructor();
}