import { PORT_NUMBER } from "../constants";

Deno.serve({port: PORT_NUMBER}, async (request)=>{
    const url = new URL(request.url);
    if(request.url){}
    return Response.error();
});