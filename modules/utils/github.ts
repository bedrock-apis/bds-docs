
// github-utils.ts
import { spawn } from "node:child_process";
import { GIT_IS_GITHUB_ACTION, GIT_LOGIN_AS_EMAIL, GIT_LOGIN_AS_NAME, GIT_REPO, GIT_TOKEN } from "../constants";
import { getEngineVersion } from "./general";

type BranchKind = string;
type VersionEngine = string;
type VersionFull = string;
let IS_LOGGED_IN = false;

export class GithubUtils {
    private static async cmd(command: string, args: string[] = []): Promise<number> {
        const awaiter = Promise.withResolvers<number>();
        const proc = spawn(command, args, { stdio: "inherit", shell: true });
        proc.on("close", (code) => awaiter.resolve(code ?? 1));
        return awaiter.promise;
    }
    public static async initRepo(): Promise<number> {
        if (!GIT_IS_GITHUB_ACTION) return 0;

        let failed = 0;
        if (!IS_LOGGED_IN) if ((failed = await this.login())) return failed;
        
        console.log(GIT_REPO, GIT_TOKEN, Object.keys(Deno.env.toObject()))
        if (!GIT_REPO || !GIT_TOKEN) {
            console.error("Missing GITHUB_REPOSITORY or GITHUB_TOKEN.");
            return 1;
        }

        const remoteUrl = `https://x-access-token:${GIT_TOKEN}@github.com/${GIT_REPO}.git`;

        failed = await this.cmd("git", ["init"]);
        if (failed) return failed;

        failed = await this.cmd("git", ["remote", "add", "origin", remoteUrl]);
        if (failed) return failed;

        return await this.cmd("git", ["fetch", "--depth=0", "origin"]);
    }

    public static async login(name?: string, email?: string): Promise<number> {
        if (!GIT_IS_GITHUB_ACTION || IS_LOGGED_IN)
            return 0;

        let failed = await this.cmd("git", ["config", "--global", "user.name", `"${name ?? GIT_LOGIN_AS_NAME}"`]);
        if (failed) return failed;

        failed = await this.cmd("git", ["config", "--global", "user.email", `"${email ?? GIT_LOGIN_AS_EMAIL}"`]);
        if (failed) return failed;

        IS_LOGGED_IN = true;
        console.log("LOGGED IN");
        return 0;
    }

    public static async postNewBranch(branch: `${BranchKind}-${VersionEngine}` | BranchKind): Promise<number> {
        if (!GIT_IS_GITHUB_ACTION)
            return 0;

        let failed = 0;
        if (!IS_LOGGED_IN) if ((failed = await this.login())) return failed;

        failed = await this.cmd("git", ["checkout", "-b", branch]);
        if (failed) return failed;

        return failed = await this.cmd("git", ["push", "-u", "origin", branch]);
    }

    public static async checkoutBranch(branch: BranchKind, force = false): Promise<number> {
        if (!GIT_IS_GITHUB_ACTION)
            return 0;

        let failed = 0;
        if (!IS_LOGGED_IN) if ((failed = await this.login())) return failed;

        failed = await this.cmd("git", ["fetch"]);
        if (failed) return failed;

        return failed = await this.cmd("git", ["checkout", branch, ...(force ? ["-f"] : [])]);
    }

    public static async commitAndPush(branch: BranchKind, version: VersionFull, isPreview: boolean): Promise<number> {
        if (!GIT_IS_GITHUB_ACTION) return 0;

        let failed = 0;
        if (!IS_LOGGED_IN) if ((failed = await this.login())) return failed;

        failed = await this.cmd("git", ["add", "."]);
        if (failed) return failed;

        const message = `New ${branch} v${isPreview ? version : getEngineVersion(version)}`;
        failed = await this.cmd("git", ["commit", "-m", `"${message}"`]);
        if (failed) return failed;

        return failed = await this.cmd("git", ["push", "--force", "origin", branch]);
    }
}
