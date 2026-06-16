import * as common from "@minecraft/common";
import * as server from "@minecraft/server";


export interface HandleCounts {
   handleCounts: Record<string,number>;
   name: string;
   packId: string;
   scriptModuleUUID: string;
}
export interface PluginStats {
   plugins: Array<HandleCounts>;
}
export interface RuntimeStats {
   arrayCount: number;
   atomCount: number;
   atomSize: number;
   fastArrayCount: number;
   fastArrayElementCount: number;
   functionCodeSize: number;
   functionCount: number;
   functionLineCount: number;
   functionSize: number;
   memoryAllocatedCount: number;
   memoryAllocatedLimit: number;
   memoryAllocatedSize: number;
   memoryUsedCount: number;
   memoryUsedSize: number;
   objectCount: number;
   objectSize: number;
   propertyCount: number;
   propertySize: number;
   stringCount: number;
   stringSize: number;
}

//@ts-ignore
export class DebugArrow extends DebugLine {
   public headLength: number;
   public headRadius: number;
   public headSegments: number;
   public constructor(location: server.DimensionLocation | server.Vector3, endLocation: server.Vector3);
}
//@ts-ignore
export class DebugBox extends DebugShape {
   public bound: server.Vector3;
   public constructor(location: server.DimensionLocation | server.Vector3);
}
//@ts-ignore
export class DebugCircle extends DebugShape {
   public constructor(location: server.DimensionLocation | server.Vector3);
}
//@ts-ignore
export class DebugCone extends DebugShape {
   public height: number;
   public numSegments: number;
   public radii: server.Vector2;
   public constructor(location: server.DimensionLocation | server.Vector3);
}
//@ts-ignore
export class DebugCylinder extends DebugShape {
   public height: number;
   public numSegments: number;
   public radii: server.Vector2;
   public constructor(location: server.DimensionLocation | server.Vector3);
}
export class DebugDrawer {
   public addShape(shape: DebugShape, dimension?: server.Dimension): void;
   public removeAll(): void;
   public removeShape(shape: DebugShape): void;
   private constructor();
}
//@ts-ignore
export class DebugEllipsoid extends DebugShape {
   public radii: server.Vector3;
   public segmentsPerAxis: number;
   public constructor(location: server.DimensionLocation | server.Vector3);
}
//@ts-ignore
export class DebugLine extends DebugShape {
   public endLocation: server.Vector3;
   public constructor(location: server.DimensionLocation | server.Vector3, endLocation: server.Vector3);
}
//@ts-ignore
export class DebugPyramid extends DebugShape {
   public depth?: number;
   public height: number;
   public width: number;
   public constructor(location: server.DimensionLocation | server.Vector3);
}
export class DebugShape {
   public attachedTo?: server.Entity;
   public color: server.RGBA;
   public readonly dimension: server.Dimension;
   public readonly hasDuration: boolean;
   public readonly location: server.Vector3;
   public maximumRenderDistance?: number;
   public rotation: server.Vector3;
   public scale: number;
   public timeLeft?: number;
   public readonly totalTimeLeft?: number;
   public visibleTo: Array<server.Player>;
   public remove(): void;
   public setLocation(location: server.DimensionLocation | server.Vector3): void;
   private constructor();
}
//@ts-ignore
export class DebugSphere extends DebugShape {
   public constructor(location: server.DimensionLocation | server.Vector3);
}
//@ts-ignore
export class DebugText extends DebugShape {
   public backfaceVisible: boolean;
   public backgroundColorOverride?: server.RGBA;
   public depthTest: boolean;
   public readonly text: server.RawMessage | string;
   public textBackfaceVisible: boolean;
   public useRotation: boolean;
   public constructor(location: server.DimensionLocation | server.Vector3, text: server.RawMessage | string);
   public setText(text: server.RawMessage | string): void;
}


export const debugDrawer: DebugDrawer;

export function collectPluginStats(): PluginStats;
export function collectRuntimeStats(): RuntimeStats;
export function disableWatchdogTimingWarnings(disable: boolean): void;
