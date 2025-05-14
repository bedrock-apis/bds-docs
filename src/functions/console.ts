import { TERMINAL_CREATE_GROUP, TERMINAL_END_GROUP } from '../consts';

type GroupDef = { time: number; base?: GroupDef };
let lastGroup: GroupDef | undefined = undefined;

export function group(content = '') {
   lastGroup = {
      time: Date.now(),
      base: lastGroup,
   };
   console.log(TERMINAL_CREATE_GROUP + content);
}
export function groupEnd() {
   const { time = 0, base } = lastGroup ?? {};
   lastGroup = base;
   console.log('Group Performed in ' + (Date.now() - time) + 'ms');
   console.log(TERMINAL_END_GROUP);
}
export function groupFinish() {
   while (lastGroup) groupEnd();
}
export function TerminalGroup<T extends (...params: unknown[]) => unknown>(
   method: T,
   groupName: string,
   ...p: Parameters<T>
) {
   console.log(TERMINAL_CREATE_GROUP + groupName);
   try {
      return method(...p);
   } finally {
      console.log(TERMINAL_END_GROUP);
   }
}
