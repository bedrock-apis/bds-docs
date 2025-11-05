import { BRANCH, UNKNOWN_ERROR_CODE, VERSION } from "./constants";


// Main entry point
async function main(): Promise<number>{
    console.log(BRANCH, VERSION);
    return 0;
}


// Entry Invocation
main()
   .catch(e => (console.error(e), e.CODE??UNKNOWN_ERROR_CODE))
   .then(Deno.exit);