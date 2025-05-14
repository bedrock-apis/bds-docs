import { DEBUG, LOGIN_AS_EMAIL, LOGIN_AS_NAME } from '../consts';
import type { BranchKind, VersionEngine, VersionFull } from '../types';
import { InvokeProcess } from './exec';
import { GetEngineVersion, Panic } from './utils';
let isLoggedIn = false;
const InvokeGit = InvokeProcess.bind(this, 'git');

export async function GithubPostNewBranch(branch: BranchKind | `${BranchKind}-${VersionEngine}`): Promise<number> {
   if (DEBUG) {
      console.log('[DEBUG] Login Skipped . . .');
      return 0;
   }

   // Make sure i am logged in
   const loginResult = await GithubLoginAs(LOGIN_AS_NAME, LOGIN_AS_EMAIL);
   if (!loginResult) return Panic(`Failed to login as ${LOGIN_AS_NAME} ${LOGIN_AS_EMAIL}`);

   // I have forgot for what is this useful, but i know its important
   let params = `checkout -b ${branch}`.split(' ');

   let result = await InvokeGit(params);
   if (result.exitCode != 0) return Panic(`Fail to execute '${result.command + ' ' + params.join(' ')}'  command`);

   // Basic checkout command execution
   params = `push -u ${branch}`.split(' ');

   result = await InvokeGit(params);
   if (result.exitCode != 0) return Panic(`Fail to execute '${result.command} ${params.join(' ')}' command`);

   return 0;
}
/**
 * @param {import('../functions').BranchKind} branch
 * @param {boolean} force
 */
export async function GithubCheckoutBranch(branch: BranchKind, force: boolean): Promise<number> {
   if (DEBUG) {
      console.log('[DEBUG] Login Skipped . . .');
      return 0;
   }
   // Make sure i am logged in
   const loginResult = await GithubLoginAs(LOGIN_AS_NAME, LOGIN_AS_EMAIL);
   if (!loginResult) return Panic(`Failed to login as ${LOGIN_AS_NAME} ${LOGIN_AS_EMAIL}`);

   let result = await InvokeGit(['fetch']);
   if (result.exitCode != 0) return Panic(`Fail to execute '${result.fullCommand}' command`);

   result = await InvokeGit(['checkout', branch, force ? '-f' : '']);
   if (result.exitCode != 0) return Panic(`Fail to execute '${result.fullCommand}' command`);

   return 0;
}
export async function GithubLoginAs(name: string, email: string): Promise<boolean> {
   if (isLoggedIn) return true;
   if (DEBUG) {
      console.log('[DEBUG] Login Skipped . . .');
      return true;
   }
   let result = await InvokeGit(['config', '--global', 'user.name', name]);
   if (result.exitCode != 0) return false;

   result = await InvokeGit(['config', '--global', 'user.email', email]);
   if (result.exitCode != 0) return false;

   console.log(`Successfully Logged in as '${name}'`);
   isLoggedIn = true;
   return true;
}
export async function GithubCommitAndPush(
   branch: BranchKind,
   version: VersionFull,
   isPreview: boolean,
): Promise<number> {
   if (DEBUG) {
      console.log('[DEBUG] Login Skipped . . .');
      return 0;
   }

   let result = await InvokeGit(['add', '.']);
   if (result.exitCode != 0) return -1;

   result = await InvokeGit([`commit`, `-m New ${branch} v${isPreview ? version : GetEngineVersion(version)}`]);
   if (result.exitCode != 0) return -1;

   result = await InvokeGit(['push', '--force', 'origin', branch]);
   if (result.exitCode != 0) return -1;

   return 0;
}
