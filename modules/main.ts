import { UNKNOWN_ERROR_CODE } from "./constants";


// Main entry point
async function main(): Promise<number>{
    Deno.env.get("BRANCH_TO_UPDATE");
    return 0;
}


// Entry Invocation
main()
   .catch(e => (console.error(e), e.CODE??UNKNOWN_ERROR_CODE))
   .then(Deno.exit);