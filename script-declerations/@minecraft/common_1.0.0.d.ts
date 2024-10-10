
// Enums - 0

// Interfaces - 0

// Classes - 0

// Constants & Objects - 0


// Functions - 0

// Errors - 3
export class ArgumentOutOfBoundsError extends Error{ public readonly maxValue: number; public readonly minValue: number; public readonly value: number; private constructor();};
export class EngineError extends Error{ private constructor();};
export class InvalidArgumentError extends Error{ public readonly index: number; private constructor();};
