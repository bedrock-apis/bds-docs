
export const PORT_NUMBER = 29132;
export const BRANCH: string | null = Deno.env.get("BRANCH_TO_UPDATE")??null;
export const VERSION: string | null = Deno.env.get("ENGINE_VERSION")??null;

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