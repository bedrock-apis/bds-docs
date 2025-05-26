import {
   BlockTypes,
   EntityTypes,
   ItemStack,
   ItemTypes,
   system,
   VanillaEntityIdentifier,
   world,
} from '@minecraft/server';
import { LocalizationKeysPacketData } from '../net';

export function* LocalizationKeysResolver() {
   world.getDimension('overworld').runCommand('tickingarea add circle 0 0 1000 4 localizationKey');

   yield system.waitTicks(10);

   const data: LocalizationKeysPacketData = {
      blocks: {},
      entities: {},
      items: {},
   };
   const dimension = world.getDimension('overworld');
   const block = dimension.getBlock({ x: 0, y: 0, z: 1000 });
   if (!block) throw new TypeError('No block to get!');

   for (const { id } of BlockTypes.getAll()) {
      block.setType(id);
      data.blocks[id] = block.localizationKey;
      yield;
   }

   for (const { id } of ItemTypes.getAll()) {
      if (id === 'minecraft:air') {
         console.warn('[LocalizationKeys Generator] Skipping ' + id);
         continue;
      }
      data.items[id] = new ItemStack(id).localizationKey;
      yield;
   }

   for (const { id } of EntityTypes.getAll()) {
      const entity = dimension.spawnEntity(id as VanillaEntityIdentifier, { x: 0, y: -64, z: 1000 });
      data.entities[id] = entity.localizationKey;
      entity.remove();
      yield;
   }

   return data;
}
