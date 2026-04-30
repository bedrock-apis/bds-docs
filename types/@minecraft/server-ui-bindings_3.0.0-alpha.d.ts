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
export enum InternalDataDrivenScreenClosedReason {
   ClientClosed = "ClientClosed",
   ServerClosed = "ServerClosed",
   UserBusy = "UserBusy",
}
export enum InternalFormVisibilityErrorReason {
   AlreadyShowing = "AlreadyShowing",
   NotShowing = "NotShowing",
}
export enum InternalTextFilteringError {
   DisabledByPlayer = "DisabledByPlayer",
   TextProcessorServiceUnreachable = "TextProcessorServiceUnreachable",
   Unknown = "Unknown",
}

export interface InternalButtonOptions {
   disabled?: boolean | ObservableBoolean;
   tooltip?: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string;
   visible?: boolean | ObservableBoolean;
}
export interface InternalDividerOptions {
   visible?: boolean | ObservableBoolean;
}
export interface InternalDropdownItemData {
   description?: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string;
   label: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string;
   value: number;
}
export interface InternalDropdownOptions {
   description?: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string;
   disabled?: boolean | ObservableBoolean;
   visible?: boolean | ObservableBoolean;
}
export interface InternalMessageBoxResult {
   closeReason: InternalDataDrivenScreenClosedReason;
   selection?: number;
}
export interface InternalObservableOptions {
   clientWritable: boolean;
}
export interface InternalSliderOptions {
   description?: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string;
   disabled?: boolean | ObservableBoolean;
   step?: number | ObservableNumber;
   visible?: boolean | ObservableBoolean;
}
export interface InternalSpacingOptions {
   visible?: boolean | ObservableBoolean;
}
export interface InternalTextFieldOptions {
   description?: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string;
   disabled?: boolean | ObservableBoolean;
   visible?: boolean | ObservableBoolean;
}
export interface InternalTextOptions {
   visible?: boolean | ObservableBoolean;
}
export interface InternalToggleOptions {
   description?: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string;
   disabled?: boolean | ObservableBoolean;
   visible?: boolean | ObservableBoolean;
}
export interface InternalUIRawMessage {
   rawtext?: Array<InternalUIRawMessage>;
   text?: string;
   translate?: string;
   with?: Array<string> | InternalUIRawMessage;
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
export class FormResponse {
   public readonly cancelationReason?: FormCancelationReason;
   public readonly canceled: boolean;
   private constructor();
}
export class InternalCustomForm {
   public button(label: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string, onClick: ()=>void, options?: InternalButtonOptions): InternalCustomForm;
   public close(): void;
   public closeButton(): InternalCustomForm;
   public constructor(player: server.Player, title: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string);
   public divider(options?: InternalDividerOptions): InternalCustomForm;
   public dropdown(label: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string, value: ObservableNumber, items: Array<InternalDropdownItemData>, options?: InternalDropdownOptions): InternalCustomForm;
   public header(text: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string, options?: InternalTextOptions): InternalCustomForm;
   public isShowing(): boolean;
   public label(text: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string, options?: InternalTextOptions): InternalCustomForm;
   public show(): Promise<InternalDataDrivenScreenClosedReason>;
   public slider(label: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string, value: ObservableNumber, min: number | ObservableNumber, max: number | ObservableNumber, options?: InternalSliderOptions): InternalCustomForm;
   public spacer(options?: InternalSpacingOptions): InternalCustomForm;
   public textField(label: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string, text: ObservableString, options?: InternalTextFieldOptions): InternalCustomForm;
   public toggle(label: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string, toggled: ObservableBoolean, options?: InternalToggleOptions): InternalCustomForm;
}
export class InternalMessageBox {
   public body(body: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string): InternalMessageBox;
   public button1(label: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string, tooltip?: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string): InternalMessageBox;
   public button2(label: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string, tooltip?: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string): InternalMessageBox;
   public close(): void;
   public constructor(player: server.Player, title: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string);
   public isShowing(): boolean;
   public show(): Promise<InternalMessageBoxResult>;
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
export class ObservableBoolean {
   public constructor(data: boolean, options?: InternalObservableOptions);
   public getData(): boolean;
   public setData(data: boolean): void;
   public subscribe(callback: (arg0: boolean)=>void): (arg0: boolean)=>void;
   public unsubscribe(callback: (arg0: boolean)=>void): boolean;
}
export class ObservableNumber {
   public constructor(data: number, options?: InternalObservableOptions);
   public getData(): number;
   public setData(data: number): void;
   public subscribe(callback: (arg0: number)=>void): (arg0: number)=>void;
   public unsubscribe(callback: (arg0: number)=>void): boolean;
}
export class ObservableString {
   public constructor(data: string, options?: InternalObservableOptions);
   public getData(): string;
   public getFilteredText(player: server.Player): Promise<Array<InternalTextFilteringError> | string>;
   public setData(data: string): void;
   public subscribe(callback: (arg0: string)=>void): (arg0: string)=>void;
   public unsubscribe(callback: (arg0: string)=>void): boolean;
}
export class ObservableUIRawMessage {
   public constructor(data: InternalUIRawMessage, options?: InternalObservableOptions);
   public getData(): InternalUIRawMessage;
   public setData(data: InternalUIRawMessage): void;
   public subscribe(callback: (arg0: InternalUIRawMessage)=>void): (arg0: InternalUIRawMessage)=>void;
   public unsubscribe(callback: (arg0: InternalUIRawMessage)=>void): boolean;
}
export class UIManager {
   public closeAllForms(player: server.Player): void;
   private constructor();
}

export const isAlpha = true;

export const uiManager: UIManager;


//@ts-ignore
export class FormRejectError extends Error {
   public readonly reason: FormRejectReason;
   private constructor();
}
//@ts-ignore
export class InternalFormVisibilityError extends Error {
   public readonly formId: string;
   public readonly reason: InternalFormVisibilityErrorReason;
   private constructor();
}
//@ts-ignore
export class InternalInvalidFormError extends Error {
   public readonly formId: string;
   private constructor();
}
//@ts-ignore
export class InternalInvalidFormModificationError extends Error {
   public readonly formId: string;
   private constructor();
}
//@ts-ignore
export class InternalPlayerLeftError extends Error {
   public readonly formId: string;
   private constructor();
}