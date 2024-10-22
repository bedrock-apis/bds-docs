import * as _1e from '@minecraft/common';
import * as _2c from '@minecraft/server';

// Enums - 2
export enum FormCancelationReason { UserBusy = "UserBusy", UserClosed = "UserClosed"};
export enum FormRejectReason { MalformedResponse = "MalformedResponse", PlayerQuit = "PlayerQuit", ServerShutdown = "ServerShutdown"};

// Interfaces - 0

// Classes - 8
export class ActionFormData { public body(bodyText: _2c.RawMessage | string): ActionFormData; public button(text: _2c.RawMessage | string, iconPath?: string): ActionFormData; public constructor(); public show(player: _2c.Player): Promise<ActionFormResponse>; public title(titleText: _2c.RawMessage | string): ActionFormData;};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ActionFormResponse extends FormResponse{ public readonly selection?: number; private constructor();};
export class FormResponse { public readonly cancelationReason?: FormCancelationReason; public readonly canceled: boolean; private constructor();};
export class MessageFormData { public body(bodyText: _2c.RawMessage | string): MessageFormData; public button1(text: _2c.RawMessage | string): MessageFormData; public button2(text: _2c.RawMessage | string): MessageFormData; public constructor(); public show(player: _2c.Player): Promise<MessageFormResponse>; public title(titleText: _2c.RawMessage | string): MessageFormData;};
//@ts-ignore extending for classes with private constructor is possible with native API
export class MessageFormResponse extends FormResponse{ public readonly selection?: number; private constructor();};
export class ModalFormData { public constructor(); public dropdown(label: _2c.RawMessage | string, options: (_2c.RawMessage | string)[], defaultValueIndex?: number): ModalFormData; public show(player: _2c.Player): Promise<ModalFormResponse>; public slider(label: _2c.RawMessage | string, minimumValue: number, maximumValue: number, valueStep: number, defaultValue?: number): ModalFormData; public submitButton(submitButtonText: _2c.RawMessage | string): ModalFormData; public textField(label: _2c.RawMessage | string, placeholderText: _2c.RawMessage | string, defaultValue?: _2c.RawMessage | string): ModalFormData; public title(titleText: _2c.RawMessage | string): ModalFormData; public toggle(label: _2c.RawMessage | string, defaultValue?: boolean): ModalFormData;};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ModalFormResponse extends FormResponse{ public readonly formValues?: (boolean | number | string)[]; private constructor();};
export class UIManager { public closeAllForms(player: _2c.Player): void; private constructor();};

// Constants & Objects - 1

export const uiManager: UIManager;

// Functions - 0

// Errors - 1
export class FormRejectError extends Error{ public readonly reason: FormRejectReason; private constructor();};
