import * as _00 from '@minecraft/common';
import * as _10 from '@minecraft/server-admin';
export enum HttpRequestMethod {Delete = "Delete", Get = "Get", Head = "Head", Post = "Post", Put = "Put"}
export class HttpClient { private constructor(); cancelAll(reason: string): void; get(uri: string): Promise<HttpResponse>; request(config: HttpRequest): Promise<HttpResponse>}
export class HttpHeader { constructor(key: string, value: _10.SecretString | string); key: string; value: _10.SecretString | string}
export class HttpRequest { constructor(uri: string); body: string; headers: HttpHeader[]; method: HttpRequestMethod; timeout: number; uri: string; addHeader(key: string, value: _10.SecretString | string): HttpRequest; setBody(body: string): HttpRequest; setHeaders(headers: HttpHeader[]): HttpRequest; setMethod(method: HttpRequestMethod): HttpRequest; setTimeout(timeout: number): HttpRequest}
export class HttpResponse { private constructor(); readonly body: string; readonly headers: HttpHeader[]; readonly request: HttpRequest; readonly status: number}
export const http: HttpClient;