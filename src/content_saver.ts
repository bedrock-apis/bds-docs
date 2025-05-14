import { readFile } from 'node:fs/promises';
import { Panic } from './functions';
import { BUNDLER_OUTPUT, FILE_NAME_SCRIPT_API } from './consts';
import { resolve } from 'node:path';

const __DATA = new Map();
const SCRIPT_DATA_KEY = 'SCRIPT_API_CODE';
export async function SaveWorkspaceContent(): Promise<number> {
   // Save current content to memory and use it later
   let data = await readFile(resolve(BUNDLER_OUTPUT, FILE_NAME_SCRIPT_API));
   if (!data) return Panic('Failed to load file');

   __DATA.set(SCRIPT_DATA_KEY, data);
   return 0;
}
export function GetScriptAPICode(): Buffer | null {
   return __DATA.get(SCRIPT_DATA_KEY) ?? null;
}
