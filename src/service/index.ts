import { createServer } from "node:http";
import {PORT, IP_ADDRESS} from "../../shared";

const server = createServer((req, res)=>{

});

export const ON_SERVICE_START_UP_TASK = new Promise<{port: number, ip: string}>(res=>{
    server.on("listening", ()=>res({port: PORT, ip: IP_ADDRESS}));
});
server.listen(PORT, IP_ADDRESS);