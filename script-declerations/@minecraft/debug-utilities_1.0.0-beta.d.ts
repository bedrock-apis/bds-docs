import * as _1e from '@minecraft/common';

// Enums - 0

// Interfaces - 3
export interface HandleCounts { handleCounts: Record<string,number>; name: string; packId: string; scriptModuleUUID: string};
export interface PluginStats { plugins: HandleCounts[]};
export interface RuntimeStats { arrayCount: number; atomCount: number; atomSize: number; fastArrayCount: number; fastArrayElementCount: number; functionCodeSize: number; functionCount: number; functionLineCount: number; functionSize: number; memoryAllocatedCount: number; memoryAllocatedSize: number; memoryUsedCount: number; memoryUsedSize: number; objectCount: number; objectSize: number; propertyCount: number; propertySize: number; stringCount: number; stringSize: number};

// Classes - 0

// Constants & Objects - 0


// Functions - 3
export function collectPluginStats(): PluginStats
export function collectRuntimeStats(): RuntimeStats
export function disableWatchdogTimingWarnings(disable: boolean): void

// Errors - 0
