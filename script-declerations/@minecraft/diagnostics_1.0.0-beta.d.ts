
// Enums - 1
export enum SentryEventLevel { debug = "debug", error = "error", fatal = "fatal", info = "info", warning = "warning"};

// Interfaces - 2
export interface SentryCaptureContext { extraData?: Record<string,boolean | number | string>; level?: SentryEventLevel; tags?: Record<string,string>};
export interface SentryOptions { debug?: boolean; dsn: _1e.SecretString | string; maxBreadcrumbs?: number; sampleRate?: number};

// Classes - 1
export class Sentry { public addBreadcrumb(level: SentryEventLevel, message: string, category?: string): void; public addTag(name: string, value: string): void; public captureException(exception: unknown, captureContext?: SentryCaptureContext): void; public getTags(): Record<string,string>; public init(options: SentryOptions): void; public removeTag(name: string): void; private constructor();};

// Constants & Objects - 1

export const sentry: Sentry;

// Functions - 0

// Errors - 2
export class SentryAlreadyInitializedError extends Error{ private constructor();};
export class SentryUninitializedError extends Error{ private constructor();};
