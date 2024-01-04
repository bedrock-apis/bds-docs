import * as _00 from '@minecraft/common';
import * as _10 from '@minecraft/server';
export enum FormRejectReason {MalformedResponse = "MalformedResponse", PlayerQuit = "PlayerQuit", ServerShutdown = "ServerShutdown"}
export class ActionFormData { constructor(); body(bodyText: _10.RawMessage | string): ActionFormData; button(text: _10.RawMessage | string, iconPath?: string): ActionFormData; show(player: _10.Player): Promise<ActionFormResponse>; title(titleText: _10.RawMessage | string): ActionFormData}
//@ts-ignore allow class inheritance for native classes
export class ActionFormResponse extends FormResponse{ private constructor(); readonly selection?: number}
export class FormResponse { private constructor()}
export class MessageFormData { constructor(); body(bodyText: _10.RawMessage | string): MessageFormData; button1(text: _10.RawMessage | string): MessageFormData; button2(text: _10.RawMessage | string): MessageFormData; show(player: _10.Player): Promise<MessageFormResponse>; title(titleText: _10.RawMessage | string): MessageFormData}
//@ts-ignore allow class inheritance for native classes
export class MessageFormResponse extends FormResponse{ private constructor(); readonly selection?: number}
export class ModalFormData { constructor(); dropdown(label: _10.RawMessage | string, options: _10.RawMessage | string[], defaultValueIndex?: number): ModalFormData; show(player: _10.Player): Promise<ModalFormResponse>; slider(label: _10.RawMessage | string, minimumValue: number, maximumValue: number, valueStep: number, defaultValue?: number): ModalFormData; textField(label: _10.RawMessage | string, placeholderText: _10.RawMessage | string, defaultValue?: _10.RawMessage | string): ModalFormData; title(titleText: _10.RawMessage | string): ModalFormData; toggle(label: _10.RawMessage | string, defaultValue?: boolean): ModalFormData}
//@ts-ignore allow class inheritance for native classes
export class ModalFormResponse extends FormResponse{ private constructor(); readonly formValues?: boolean | number | string[]}
export class FormRejectError extends Error { private constructor(), readonly reason: FormRejectReason}