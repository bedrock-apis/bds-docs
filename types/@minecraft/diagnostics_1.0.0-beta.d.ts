import * as common from "@minecraft/common";
import * as server_admin from "@minecraft/server-admin";

export enum SentryEventLevel {
   debug = "debug",
   error = "error",
   fatal = "fatal",
   info = "info",
   warning = "warning",
}

export interface SentryCaptureContext {
   extraData?: Record<string,boolean | number | string>;
   level?: SentryEventLevel;
   tags?: Record<string,string>;
}
export interface SentryOptions {
   debug?: boolean;
   dsn: server_admin.SecretString | string;
   maxBreadcrumbs?: number;
   sampleRate?: number;
}

export class Sentry {
   public addBreadcrumb(level: SentryEventLevel, message: string, category?: string): void;
   public addTag(name: string, value: string): void;
   public captureException(exception: unknown, captureContext?: SentryCaptureContext): void;
   public getTags(): Record<string,string>;
   public init(options: SentryOptions): void;
   public removeTag(name: string): void;
   private constructor();
}


export const sentry: Sentry;


//@ts-ignore
export class SentryAlreadyInitializedError extends Error {
   private constructor();
}
//@ts-ignore
export class SentryUninitializedError extends Error {
   private constructor();
}