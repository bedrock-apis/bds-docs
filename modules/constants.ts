const ENV = Deno.env;
export const GIT_IS_GITHUB_ACTION = ENV.get("GITHUB_ACTIONS")?.toLocaleLowerCase() === "true";;
export const GIT_LOGIN_AS_NAME = "Bedrock APIs Bot - Gen";
export const GIT_LOGIN_AS_EMAIL = "genbot@bedrockapis.com"
export const GIT_REPO = ENV.get("GITHUB_REPOSITORY");
export const GIT_TOKEN = ENV.get("GITHUB_TOKEN") ?? ENV.get("GH_TOKEN");
export const GIT_IGNORE_DATA = `__*__`;
export const GIT_ATTRIBUTES_DATA = `* text=auto eol=lf`;
export const GIT_IGNORE_FILE_NAME = ".gitignore";
export const GIT_ATTRIBUTES_FILE_NAME = ".gitattributes";

export const INSTALLATION_FOLDER = "__installation__";
export const PORT_NUMBER = 29132;
export const BRANCH_TO_UPDATE: "stable" | "preview" | `${string}` | null = Deno.env.get("BRANCH_TO_UPDATE") ?? null;
export const EXISTS_FILE = "exist.json";
export const CONTENTS_FILE_NAME = "contents.json";
export const TO_JSON_FORMAT = (t: unknown) => JSON.stringify(t, null, 3);
// Error Codes
export const SUCCESS_CODE = 0;
export const UNKNOWN_ERROR_CODE = -1;

export class DumperError extends Error {
    public readonly CODE: number;
    public constructor(code: number, message: string) {
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