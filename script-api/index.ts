import { startUpTime } from "./precode";
import { getNumberOfPosts, SendPayload } from "./net";
import { PacketTypes, PROTOCOL_ID } from "../shared";
import { RunThread } from "./helper";
import { BlockResolver } from "./extractors";
import { ItemStackResolver } from "./extractors/items";
import { ErrorMessages } from "./extractors/error_messages";
import { system } from "@minecraft/server";

await SendPayload(PacketTypes.StartUp, {protocolId: PROTOCOL_ID});

Main().then((exitCode)=>{
    SendPayload(PacketTypes.EndOfSession, {exitCode, numberOfPosts: getNumberOfPosts(),totalTime: Date.now() - startUpTime});
},
()=>{
    SendPayload(PacketTypes.EndOfSession, {exitCode: -1,numberOfPosts: getNumberOfPosts(),totalTime: Date.now() - startUpTime});
});

async function Main(): Promise<number> {
    // Security Check
    await null;
    await SendPayload(PacketTypes.Ready, {startUpTime: startUpTime, loadTimeSpan: Date.now() - startUpTime});

    // Blocks
    {
        const blocks = await RunThread(BlockResolver());
        await SendPayload(PacketTypes.BlocksData, blocks);
    }

    // Items
    {
        const items = await RunThread(ItemStackResolver());
        await SendPayload(PacketTypes.ItemsData, items);
    }

    // Errors
    {
        const errors = await RunThread(ErrorMessages());
        await SendPayload(PacketTypes.ErrorMessages, errors);
    }
    
    await system.waitTicks(5);
    return 0;
}
