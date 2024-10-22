import * as _1e from '@minecraft/common';
import * as _2c from '@minecraft/server-admin';

// Enums - 1
export enum HttpRequestMethod { Delete = "Delete", Get = "Get", Head = "Head", Post = "Post", Put = "Put"};

// Interfaces - 0

// Classes - 4
export class HttpClient { public cancelAll(reason: string): void; public get(uri: string): Promise<HttpResponse>; public request(config: HttpRequest): Promise<HttpResponse>; private constructor();};
export class HttpHeader { public key: string; public value: _2c.SecretString | string; public constructor(key: string, value: _2c.SecretString | string);};
export class HttpRequest { public body: string; public headers: HttpHeader[]; public method: HttpRequestMethod; public timeout: number; public uri: string; public addHeader(key: string, value: _2c.SecretString | string): HttpRequest; public constructor(uri: string); public setBody(body: string): HttpRequest; public setHeaders(headers: HttpHeader[]): HttpRequest; public setMethod(method: HttpRequestMethod): HttpRequest; public setTimeout(timeout: number): HttpRequest;};
export class HttpResponse { public readonly body: string; public readonly headers: HttpHeader[]; public readonly request: HttpRequest; public readonly status: number; private constructor();};

// Constants & Objects - 1

export const http: HttpClient;

// Functions - 0

// Errors - 0
