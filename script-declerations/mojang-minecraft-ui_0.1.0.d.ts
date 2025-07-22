
// Enums - 0

// Interfaces - 0

// Classes - 7
export class ActionFormData { public body(bodyText: string): ActionFormData; public button(text: string, iconPath?: string): ActionFormData; public constructor(); public show(player: _1e.Player): Promise<ActionFormResponse>; public title(titleText: string): ActionFormData;};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ActionFormResponse extends FormResponse{ public readonly selection?: number; private constructor();};
export class FormResponse { public readonly isCanceled: boolean; private constructor();};
export class MessageFormData { public body(bodyText: string): MessageFormData; public button1(text: string): MessageFormData; public button2(text: string): MessageFormData; public constructor(); public show(player: _1e.Player): Promise<MessageFormResponse>; public title(titleText: string): MessageFormData;};
//@ts-ignore extending for classes with private constructor is possible with native API
export class MessageFormResponse extends FormResponse{ public readonly selection?: number; private constructor();};
export class ModalFormData { public constructor(); public dropdown(label: string, options: string[], defaultValueIndex?: number): ModalFormData; public icon(iconPath: string): ModalFormData; public show(player: _1e.Player): Promise<ModalFormResponse>; public slider(label: string, minimumValue: number, maximumValue: number, valueStep: number, defaultValue?: number): ModalFormData; public textField(label: string, placeholderText: string, defaultValue?: string): ModalFormData; public title(titleText: string): ModalFormData; public toggle(label: string, defaultValue?: boolean): ModalFormData;};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ModalFormResponse extends FormResponse{ public readonly formValues?: (boolean | number | string)[]; private constructor();};

// Constants & Objects - 0


// Functions - 0

// Errors - 0
