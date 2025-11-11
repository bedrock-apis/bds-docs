






//@ts-ignore
export class ArgumentOutOfBoundsError extends Error {
   public readonly index: number;
   public readonly maxValue?: number;
   public readonly minValue?: number;
   public readonly value?: number;
   private constructor();
}
//@ts-ignore
export class InvalidArgumentError extends Error {
   public readonly index: number;
   private constructor();
}