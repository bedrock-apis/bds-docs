
// Enums - 1
export enum FormRejectReason { MalformedResponse = "MalformedResponse", PlayerQuit = "PlayerQuit", ServerShutdown = "ServerShutdown"};

// Interfaces - 0

// Classes - 7
export class ActionFormData { public body(bodyText: _1e.RawMessage | string): ActionFormData; public button(text: _1e.RawMessage | string, iconPath?: string): ActionFormData; public constructor(); public show(player: _1e.Player): Promise<ActionFormResponse>; public title(titleText: _1e.RawMessage | string): ActionFormData;};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ActionFormResponse extends FormResponse{ public readonly selection?: number; private constructor();};
export class FormResponse { private constructor();};
export class MessageFormData { public body(bodyText: _1e.RawMessage | string): MessageFormData; public button1(text: _1e.RawMessage | string): MessageFormData; public button2(text: _1e.RawMessage | string): MessageFormData; public constructor(); public show(player: _1e.Player): Promise<MessageFormResponse>; public title(titleText: _1e.RawMessage | string): MessageFormData;};
//@ts-ignore extending for classes with private constructor is possible with native API
export class MessageFormResponse extends FormResponse{ public readonly selection?: number; private constructor();};
export class ModalFormData { public constructor(); public dropdown(label: _1e.RawMessage | string, options: (_1e.RawMessage | string)[], defaultValueIndex?: number): ModalFormData; public show(player: _1e.Player): Promise<ModalFormResponse>; public slider(label: _1e.RawMessage | string, minimumValue: number, maximumValue: number, valueStep: number, defaultValue?: number): ModalFormData; public textField(label: _1e.RawMessage | string, placeholderText: _1e.RawMessage | string, defaultValue?: _1e.RawMessage | string): ModalFormData; public title(titleText: _1e.RawMessage | string): ModalFormData; public toggle(label: _1e.RawMessage | string, defaultValue?: boolean): ModalFormData;};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ModalFormResponse extends FormResponse{ public readonly formValues?: (boolean | number | string)[]; private constructor();};

// Constants & Objects - 0


// Functions - 0

// Errors - 1
export class FormRejectError extends Error{ public readonly reason: FormRejectReason; private constructor();};
