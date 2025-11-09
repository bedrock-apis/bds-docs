export const GIT_IS_GITHUB_ACTION = Deno.env.get("GITHUB_ACTIONS")?.toLocaleLowerCase()==="true";;
export const GIT_LOGIN_AS_NAME = "BAPI The Dog";
export const GIT_LOGIN_AS_EMAIL = "thedog@bedrockapis.com"


export const INSTALLATION_FOLDER = "__installation__";
export const PORT_NUMBER = 29132;
export const BRANCH_TO_UPDATE: "stable" | "preview" | `${string}` | null = Deno.env.get("BRANCH_TO_UPDATE")??null;
// Error Codes
export const SUCCESS_CODE = 0;
export const UNKNOWN_ERROR_CODE = -1;

export class DumperError extends Error{
    public readonly CODE: number;
    public constructor(code: number, message: string){
        super(message);
        this.CODE = code;
    }
}

export enum ErrorCodes {
    UnsupportedPlatform = 1,
    UnavailableInstallationLink = 2,

    BedrockServerProcessCriticalExit = 0x11,
    BedrockServerProcessExitedWithErrorCode = 0x12,

    SubModuleFailed = 0x20,
}