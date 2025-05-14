import { ChildProcessWithoutNullStreams, spawn } from 'node:child_process';
import { PROCESS_TIMEOUT } from '../consts';

export type ReturnType = Promise<{ exitCode: number; error?: unknown; command: string; fullCommand: string }>;
export async function InvokeProcessRaw(
   command: string,
   parameters: string[],
   timeout: number = PROCESS_TIMEOUT,
): Promise<{ promise: ReturnType; child: ChildProcessWithoutNullStreams }> {
   const fullCommand = `${command} ${parameters.join(' ')}`;
   let baseChild: ChildProcessWithoutNullStreams = null!;
   const promise = new Promise((res: (p: Awaited<ReturnType>) => void, rej) => {
      let timeouted = false;
      const timeTick = setTimeout(() => {
         timeouted = true;
         child.kill('SIGKILL');
      }, timeout);
      let wasResolved = false;
      const child = spawn(command, parameters, { windowsHide: true });
      child.stdout?.pipe(process.stdout);
      child.stderr?.pipe(process.stderr);
      child.on('error', code => (wasResolved ? null : res({ exitCode: -1, error: code, command, fullCommand })));
      child.on('spawn', () => {
         console.log("[Command Exec] '" + command + "'");
      });
      child.on('close', code => {
         clearTimeout(timeTick);
         console.error('[Command Exec Closed] : ' + command);
         if (wasResolved) return;
         if (timeouted) res({ exitCode: -1, error: 'TIMEOUTED', command, fullCommand });
         else res({ exitCode: code ?? 0, command, fullCommand });
      });
      baseChild = child;
   }).catch(error => ({ errorCode: -1, error, command, fullCommand })) as ReturnType;
   return { promise, child: baseChild };
}
export async function InvokeProcess(
   command: string,
   parameters: string[],
   timeout: number = PROCESS_TIMEOUT,
): ReturnType {
   return (await InvokeProcessRaw(command, parameters, timeout)).promise;
}

/**
 * @param {string} executable
 * @param {number} [timeout]
 * @param {...string} args
 * @returns {Promise<{ exitCode: number; error?: any }>}
 * @throws {string}
 *
 *   Export async function Execute(executable, timeout = 1000, ...args) { if(PLATFORM == "win"){ return
 *   ExecuteCommand(`${executable}`, timeout, ...args); } else if(PLATFORM == "linux"){ let result = await
 *   ExecuteCommand(`chmod +x ${executable}`, timeout, cwd); if(result.exitCode != 0) return result; return
 *   ExecuteCommand(`LD_LIBRARY_PATH=. ${executable}`, timeout, cwd); } return {exitCode: -1, error: "Unknown platform"}
 *   }
 */
