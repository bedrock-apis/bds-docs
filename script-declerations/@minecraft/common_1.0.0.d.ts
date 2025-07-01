
// Enums - 0

// Interfaces - 0

// Classes - 0

// Constants & Objects - 0


// Functions - 0

// Errors - 2
export class ArgumentOutOfBoundsError extends Error{ public readonly index: number; public readonly maxValue?: number; public readonly minValue?: number; public readonly value?: number; private constructor();};
export class InvalidArgumentError extends Error{ public readonly index: number; private constructor();};
