export class ArgumentOutOfBoundsError extends Error { private constructor(), readonly maxValue: number, readonly minValue: number, readonly value: number}
export class EngineError extends Error { private constructor() }
export class InvalidArgumentError extends Error { private constructor(), readonly index: number}