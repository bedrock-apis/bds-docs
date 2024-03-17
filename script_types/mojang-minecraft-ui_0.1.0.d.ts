import * as _00 from '@minecraft/common';
import * as _10 from 'mojang-minecraft';
export class ActionFormData { constructor(); body(bodyText: string): ActionFormData; button(text: string, iconPath?: string): ActionFormData; show(player: _10.Player): Promise<ActionFormResponse>; title(titleText: string): ActionFormData}
//@ts-ignore allow class inheritance for native classes
export class ActionFormResponse extends FormResponse{ private constructor(); readonly selection?: number}
export class FormResponse { private constructor(); readonly isCanceled: boolean}
export class MessageFormData { constructor(); body(bodyText: string): MessageFormData; button1(text: string): MessageFormData; button2(text: string): MessageFormData; show(player: _10.Player): Promise<MessageFormResponse>; title(titleText: string): MessageFormData}
//@ts-ignore allow class inheritance for native classes
export class MessageFormResponse extends FormResponse{ private constructor(); readonly selection?: number}
export class ModalFormData { constructor(); dropdown(label: string, options: string[], defaultValueIndex?: number): ModalFormData; icon(iconPath: string): ModalFormData; show(player: _10.Player): Promise<ModalFormResponse>; slider(label: string, minimumValue: number, maximumValue: number, valueStep: number, defaultValue?: number): ModalFormData; textField(label: string, placeholderText: string, defaultValue?: string): ModalFormData; title(titleText: string): ModalFormData; toggle(label: string, defaultValue?: boolean): ModalFormData}
//@ts-ignore allow class inheritance for native classes
export class ModalFormResponse extends FormResponse{ private constructor(); readonly formValues?: boolean | number | string[]}