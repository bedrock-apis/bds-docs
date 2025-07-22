
// Enums - 2
export enum FormCancelationReason { UserBusy = "UserBusy", UserClosed = "UserClosed"};
export enum FormRejectReason { MalformedResponse = "MalformedResponse", PlayerQuit = "PlayerQuit", ServerShutdown = "ServerShutdown"};

// Interfaces - 4
export interface ModalFormDataDropdownOptions { defaultValueIndex?: number; tooltip?: _1e.RawMessage | string};
export interface ModalFormDataSliderOptions { defaultValue?: number; tooltip?: _1e.RawMessage | string; valueStep?: number};
export interface ModalFormDataTextFieldOptions { defaultValue?: _1e.RawMessage | string; tooltip?: _1e.RawMessage | string};
export interface ModalFormDataToggleOptions { defaultValue?: boolean; tooltip?: _1e.RawMessage | string};

// Classes - 8
export class ActionFormData { public body(bodyText: _1e.RawMessage | string): ActionFormData; public button(text: _1e.RawMessage | string, iconPath?: string): ActionFormData; public constructor(); public divider(): ActionFormData; public header(text: _1e.RawMessage | string): ActionFormData; public label(text: _1e.RawMessage | string): ActionFormData; public show(player: _1e.Player): Promise<ActionFormResponse>; public title(titleText: _1e.RawMessage | string): ActionFormData;};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ActionFormResponse extends FormResponse{ public readonly selection?: number; private constructor();};
export class FormResponse { public readonly cancelationReason?: FormCancelationReason; public readonly canceled: boolean; private constructor();};
export class MessageFormData { public body(bodyText: _1e.RawMessage | string): MessageFormData; public button1(text: _1e.RawMessage | string): MessageFormData; public button2(text: _1e.RawMessage | string): MessageFormData; public constructor(); public show(player: _1e.Player): Promise<MessageFormResponse>; public title(titleText: _1e.RawMessage | string): MessageFormData;};
//@ts-ignore extending for classes with private constructor is possible with native API
export class MessageFormResponse extends FormResponse{ public readonly selection?: number; private constructor();};
export class ModalFormData { public constructor(); public divider(): ModalFormData; public dropdown(label: _1e.RawMessage | string, items: (_1e.RawMessage | string)[], dropdownOptions?: ModalFormDataDropdownOptions): ModalFormData; public header(text: _1e.RawMessage | string): ModalFormData; public label(text: _1e.RawMessage | string): ModalFormData; public show(player: _1e.Player): Promise<ModalFormResponse>; public slider(label: _1e.RawMessage | string, minimumValue: number, maximumValue: number, sliderOptions?: ModalFormDataSliderOptions): ModalFormData; public submitButton(submitButtonText: _1e.RawMessage | string): ModalFormData; public textField(label: _1e.RawMessage | string, placeholderText: _1e.RawMessage | string, textFieldOptions?: ModalFormDataTextFieldOptions): ModalFormData; public title(titleText: _1e.RawMessage | string): ModalFormData; public toggle(label: _1e.RawMessage | string, toggleOptions?: ModalFormDataToggleOptions): ModalFormData;};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ModalFormResponse extends FormResponse{ public readonly formValues?: (boolean | number | string | undefined)[]; private constructor();};
export class UIManager { public closeAllForms(player: _1e.Player): void; private constructor();};

// Constants & Objects - 1

export const uiManager: UIManager;

// Functions - 0

// Errors - 1
export class FormRejectError extends Error{ public readonly reason: FormRejectReason; private constructor();};
