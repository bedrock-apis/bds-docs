import * as _00 from '@minecraft/common';
export class SecretString { constructor(value: string)}
export class ServerSecrets { private constructor(); readonly names: string[]; get(name: string): SecretString}
export class ServerVariables { private constructor(); readonly names: string[]; get(name: string): any}
export const secrets: ServerSecrets;
export const variables: ServerVariables;