import { system, world } from '@minecraft/server';
import { PacketTypes, PROTOCOL_ID } from '../shared';
import { RunThreadAsync } from '../test-runner/async-generator';
import { BlockResolver } from './extractors';
import { ErrorMessages } from './extractors/error-messages';
import { ItemStackResolver } from './extractors/items';
import { LocalizationKeysResolver } from './extractors/localization-key';
import { TestsResolver } from './extractors/tests';
import { RunThread } from './helper';
import { getNumberOfPosts, SendPayload } from './net';
import { startUpTime } from './precode';

world.afterEvents.worldLoad.subscribe(async () => {
   WorldLoad();
});

async function WorldLoad() {
   await null;
   await SendPayload(PacketTypes.StartUp, { protocolId: PROTOCOL_ID });
   Main().then(
      exitCode => {
         SendPayload(PacketTypes.EndOfSession, {
            exitCode,
            numberOfPosts: getNumberOfPosts(),
            totalTime: Date.now() - startUpTime,
         });
      },
      error => {
         console.error(error, error?.stack);
         SendPayload(PacketTypes.EndOfSession, {
            exitCode: -1,
            numberOfPosts: getNumberOfPosts(),
            totalTime: Date.now() - startUpTime,
         });
      },
   );
}

async function Main(): Promise<number> {
   // Security Check
   await null;
   await SendPayload(PacketTypes.Ready, {
      startUpTime: startUpTime,
      loadTimeSpan: Date.now() - startUpTime,
   });

   // Blocks
   {
      const blocks = await RunThread(BlockResolver());
      await SendPayload(PacketTypes.BlocksData, blocks);
   }

   // Localization
   {
      const localization = await RunThreadAsync(LocalizationKeysResolver(), system.runJob.bind(system));
      await SendPayload(PacketTypes.LocalizationKeys, localization);
   }

   // Tests
   {
      const tests = await TestsResolver();
      await SendPayload(PacketTypes.ScriptData, tests);
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
