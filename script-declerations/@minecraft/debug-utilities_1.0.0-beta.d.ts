import * as _1e from '@minecraft/common';
import * as _2c from '@minecraft/server';

// Enums - 0

// Interfaces - 3
export interface HandleCounts { handleCounts: Record<string,number>; name: string; packId: string; scriptModuleUUID: string};
export interface PluginStats { plugins: HandleCounts[]};
export interface RuntimeStats { arrayCount: number; atomCount: number; atomSize: number; fastArrayCount: number; fastArrayElementCount: number; functionCodeSize: number; functionCount: number; functionLineCount: number; functionSize: number; memoryAllocatedCount: number; memoryAllocatedSize: number; memoryUsedCount: number; memoryUsedSize: number; objectCount: number; objectSize: number; propertyCount: number; propertySize: number; stringCount: number; stringSize: number};

// Classes - 8
//@ts-ignore extending for classes with private constructor is possible with native API
export class DebugArrow extends DebugLine{ public headLength: number; public headRadius: number; public headSegments: number; public constructor(location: _2c.Vector3, endLocation: _2c.Vector3);};
//@ts-ignore extending for classes with private constructor is possible with native API
export class DebugBox extends DebugShape{ public bound: _2c.Vector3; public constructor(location: _2c.Vector3);};
//@ts-ignore extending for classes with private constructor is possible with native API
export class DebugCircle extends DebugShape{ public constructor(location: _2c.Vector3);};
export class DebugDrawer { public addShape(shape: DebugShape): void; public removeAll(): void; public removeShape(shape: DebugShape): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class DebugLine extends DebugShape{ public endLocation: _2c.Vector3; public constructor(location: _2c.Vector3, endLocation: _2c.Vector3);};
export class DebugShape { public color: _2c.RGB; public readonly hasDuration: boolean; public location: _2c.Vector3; public rotation: _2c.Vector3; public scale: number; public timeLeft?: number; public readonly totalTimeLeft?: number; public remove(): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class DebugSphere extends DebugShape{ public constructor(location: _2c.Vector3);};
//@ts-ignore extending for classes with private constructor is possible with native API
export class DebugText extends DebugShape{ public text: string; public constructor(location: _2c.Vector3, text: string);};

// Constants & Objects - 1

export const debugDrawer: DebugDrawer;

// Functions - 3
export function collectPluginStats(): PluginStats
export function collectRuntimeStats(): RuntimeStats
export function disableWatchdogTimingWarnings(disable: boolean): void

// Errors - 0
