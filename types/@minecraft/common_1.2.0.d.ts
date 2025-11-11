
export enum InvalidArgumentErrorType {
   Duplicate = "Duplicate",
   Empty = "Empty",
   Unknown = "Unknown",
   Unspecified = "Unspecified",
}

export interface NumberRange {
   max: number;
   min: number;
}





//@ts-ignore
export class ArgumentOutOfBoundsError extends Error {
   public readonly index: number;
   public readonly maxValue?: number;
   public readonly minValue?: number;
   public readonly value?: number;
   private constructor();
}
//@ts-ignore
export class EngineError extends Error {
   private constructor();
}
//@ts-ignore
export class InvalidArgumentError extends Error {
   public readonly index: number;
   public readonly type: InvalidArgumentErrorType;
   private constructor();
}
//@ts-ignore
export class PropertyOutOfBoundsError extends Error {
   public readonly maxValue?: number;
   public readonly minValue?: number;
   public readonly value: number;
   private constructor();
}
//@ts-ignore
export class RuntimeConditionError extends Error {
   private constructor();
}
//@ts-ignore
export class UnsupportedFunctionalityError extends Error {
   private constructor();
}