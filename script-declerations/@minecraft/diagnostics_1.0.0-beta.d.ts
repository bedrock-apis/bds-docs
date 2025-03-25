import * as _1e from '@minecraft/common';

// Enums - 1
export enum SentryBreadcrumbLevel { debug = "debug", error = "error", info = "info", warning = "warning"};

// Interfaces - 1
export interface SentryOptions { dsn: string};

// Classes - 1
export class Sentry { public addBreadcrumb(level: SentryBreadcrumbLevel, message: string, category?: string): void; public addTag(name: string, value: string): void; public getTags(): Record<string,string>; public init(options: SentryOptions): void; public removeTag(name: string): void; private constructor();};

// Constants & Objects - 1

export const sentry: Sentry;

// Functions - 0

// Errors - 2
export class SentryAlreadyInitializedError extends Error{ private constructor();};
export class SentryUninitializedError extends Error{ private constructor();};
