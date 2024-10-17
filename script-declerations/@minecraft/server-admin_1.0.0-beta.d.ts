import * as _1e from '@minecraft/common';
import * as _2c from '@minecraft/server';

// Enums - 0

// Interfaces - 0

// Classes - 3
export class SecretString { public constructor(value: string);};
export class ServerSecrets { public readonly names: string[]; public get(name: string): (SecretString | undefined); private constructor();};
export class ServerVariables { public readonly names: string[]; public get(name: string): (unknown | undefined); private constructor();};

// Constants & Objects - 2

export const secrets: ServerSecrets;
export const variables: ServerVariables;

// Functions - 1
export function transferPlayer(player: _2c.Player, host: string, port: number): void

// Errors - 0
