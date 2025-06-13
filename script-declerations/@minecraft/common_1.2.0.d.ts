
// Enums - 1
export enum InvalidArgumentErrorType { Duplicate = "Duplicate", Empty = "Empty", Unknown = "Unknown", Unspecified = "Unspecified"};

// Interfaces - 1
export interface NumberRange { max: number; min: number};

// Classes - 0

// Constants & Objects - 0


// Functions - 0

// Errors - 5
export class ArgumentOutOfBoundsError extends Error{ public readonly index: number; public readonly maxValue?: number; public readonly minValue?: number; public readonly value?: number; private constructor();};
export class EngineError extends Error{ private constructor();};
export class InvalidArgumentError extends Error{ public readonly index: number; public readonly type: InvalidArgumentErrorType; private constructor();};
export class PropertyOutOfBoundsError extends Error{ public readonly maxValue: number; public readonly minValue: number; public readonly value: number; private constructor();};
export class RuntimeConditionError extends Error{ private constructor();};
