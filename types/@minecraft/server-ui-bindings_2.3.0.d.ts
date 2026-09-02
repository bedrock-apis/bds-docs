import * as common from "@minecraft/common";
import * as server from "@minecraft/server";

export enum DataDrivenScreenClosedReason {
   ClientClosed = "ClientClosed",
   ServerClosed = "ServerClosed",
   UserBusy = "UserBusy",
}
export enum FormCancelationReason {
   UserBusy = "UserBusy",
   UserClosed = "UserClosed",
}
export enum FormRejectReason {
   MalformedResponse = "MalformedResponse",
   PlayerQuit = "PlayerQuit",
   ServerShutdown = "ServerShutdown",
}
export enum FormVisibilityErrorReason {
   AlreadyShowing = "AlreadyShowing",
   NotShowing = "NotShowing",
}
export enum TextFilteringError {
   DisabledByPlayer = "DisabledByPlayer",
   TextProcessorServiceUnreachable = "TextProcessorServiceUnreachable",
   Unknown = "Unknown",
}

export interface ButtonOptions {
   disabled?: boolean | ObservableBoolean;
   imageDetails?: ImageDetails;
   tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
   visible?: boolean | ObservableBoolean;
}
export interface DividerOptions {
   visible?: boolean | ObservableBoolean;
}
export interface DropdownItemData {
   description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
   label: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
   value: number;
}
export interface DropdownOptions {
   description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
   disabled?: boolean | ObservableBoolean;
   tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
   visible?: boolean | ObservableBoolean;
}
export interface ImageDetails {
   imagePackId: ObservableString | string;
   imageSrc: ObservableString | string;
}
export interface ImageOptions {
   onClick?: ()=>void;
   tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
   visible?: boolean | ObservableBoolean;
   width?: number | ObservableNumber;
}
export interface MessageBoxButtonOptions {
   imageDetails?: ImageDetails;
   tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
}
export interface MessageBoxResult {
   closeReason: DataDrivenScreenClosedReason;
   selection?: number;
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
export interface ObservableOptions {
   clientWritable: boolean;
}
export interface SliderOptions {
   description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
   disabled?: boolean | ObservableBoolean;
   step?: number | ObservableNumber;
   tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
   visible?: boolean | ObservableBoolean;
}
export interface SpacingOptions {
   visible?: boolean | ObservableBoolean;
}
export interface TextFieldOptions {
   description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
   disabled?: boolean | ObservableBoolean;
   tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
   visible?: boolean | ObservableBoolean;
}
export interface TextOptions {
   tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
   visible?: boolean | ObservableBoolean;
}
export interface ToggleOptions {
   description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
   disabled?: boolean | ObservableBoolean;
   tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
   visible?: boolean | ObservableBoolean;
}
export interface UIRawMessage {
   rawtext?: Array<UIRawMessage>;
   text?: string;
   translate?: string;
   with?: Array<string> | UIRawMessage;
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
export class CustomForm {
   public button(label: ObservableString | ObservableUIRawMessage | string | UIRawMessage, onClick: ()=>void, options?: ButtonOptions): CustomForm;
   public close(): void;
   public closeButton(): CustomForm;
   public constructor(player: server.Player, title: ObservableString | ObservableUIRawMessage | string | UIRawMessage);
   public divider(options?: DividerOptions): CustomForm;
   public dropdown(label: ObservableString | ObservableUIRawMessage | string | UIRawMessage, value: ObservableNumber, items: Array<DropdownItemData>, options?: DropdownOptions): CustomForm;
   public header(text: ObservableString | ObservableUIRawMessage | string | UIRawMessage, options?: TextOptions): CustomForm;
   public image(src: ObservableString | string, pack: ObservableString | string, options?: ImageOptions): CustomForm;
   public isShowing(): boolean;
   public label(text: ObservableString | ObservableUIRawMessage | string | UIRawMessage, options?: TextOptions): CustomForm;
   public show(): Promise<DataDrivenScreenClosedReason>;
   public slider(label: ObservableString | ObservableUIRawMessage | string | UIRawMessage, value: ObservableNumber, min: number | ObservableNumber, max: number | ObservableNumber, options?: SliderOptions): CustomForm;
   public spacer(options?: SpacingOptions): CustomForm;
   public textField(label: ObservableString | ObservableUIRawMessage | string | UIRawMessage, text: ObservableString, options?: TextFieldOptions): CustomForm;
   public toggle(label: ObservableString | ObservableUIRawMessage | string | UIRawMessage, toggled: ObservableBoolean, options?: ToggleOptions): CustomForm;
}
export class FormResponse {
   public readonly cancelationReason?: FormCancelationReason;
   public readonly canceled: boolean;
   private constructor();
}
export class MessageBox {
   public body(body: ObservableString | ObservableUIRawMessage | string | UIRawMessage): MessageBox;
   public button1(label: ObservableString | ObservableUIRawMessage | string | UIRawMessage, tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage): MessageBox;
   public button1WithOptions(label: ObservableString | ObservableUIRawMessage | string | UIRawMessage, options?: MessageBoxButtonOptions): MessageBox;
   public button2(label: ObservableString | ObservableUIRawMessage | string | UIRawMessage, tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage): MessageBox;
   public button2WithOptions(label: ObservableString | ObservableUIRawMessage | string | UIRawMessage, options?: MessageBoxButtonOptions): MessageBox;
   public close(): void;
   public constructor(player: server.Player, title: ObservableString | ObservableUIRawMessage | string | UIRawMessage);
   public isShowing(): boolean;
   public show(): Promise<MessageBoxResult>;
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
   public constructor(data: boolean, options?: ObservableOptions);
   public getData(): boolean;
   public setData(data: boolean): void;
   public subscribe(callback: (arg0: boolean)=>void): (arg0: boolean)=>void;
   public unsubscribe(callback: (arg0: boolean)=>void): boolean;
}
export class ObservableNumber {
   public constructor(data: number, options?: ObservableOptions);
   public getData(): number;
   public setData(data: number): void;
   public subscribe(callback: (arg0: number)=>void): (arg0: number)=>void;
   public unsubscribe(callback: (arg0: number)=>void): boolean;
}
export class ObservableString {
   public constructor(data: string, options?: ObservableOptions);
   public getData(): string;
   public getFilteredText(player: server.Player): Promise<Array<TextFilteringError> | string>;
   public setData(data: string): void;
   public subscribe(callback: (arg0: string)=>void): (arg0: string)=>void;
   public unsubscribe(callback: (arg0: string)=>void): boolean;
}
export class ObservableUIRawMessage {
   public constructor(data: UIRawMessage, options?: ObservableOptions);
   public getData(): UIRawMessage;
   public setData(data: UIRawMessage): void;
   public subscribe(callback: (arg0: UIRawMessage)=>void): (arg0: UIRawMessage)=>void;
   public unsubscribe(callback: (arg0: UIRawMessage)=>void): boolean;
}
export class UIManager {
   public closeAllForms(player: server.Player): void;
   private constructor();
}


export const uiManager: UIManager;


//@ts-ignore
export class FormRejectError extends Error {
   public readonly reason: FormRejectReason;
   private constructor();
}
//@ts-ignore
export class FormVisibilityError extends Error {
   public readonly formId: string;
   public readonly reason: FormVisibilityErrorReason;
   private constructor();
}
//@ts-ignore
export class InvalidFormError extends Error {
   public readonly formId: string;
   private constructor();
}
//@ts-ignore
export class InvalidFormModificationError extends Error {
   public readonly formId: string;
   private constructor();
}
//@ts-ignore
export class InvalidObservableError extends Error {
   private constructor();
}
//@ts-ignore
export class PlayerLeftError extends Error {
   public readonly formId: string;
   private constructor();
}