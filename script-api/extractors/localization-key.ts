import {
   Block,
   BlockTypes,
   EntityTypes,
   ItemStack,
   ItemTypes,
   VanillaEntityIdentifier,
   world,
} from '@minecraft/server';
import { loadChunk } from '../helper';
import { LocalizationKeysPacketData } from '../net';

export function* LocalizationKeysResolver() {
   const dimension = world.getDimension('overworld');
   const block: Block = yield loadChunk({ x: 0, y: 0, z: 1000 }, 'localizationKey');

   const data: LocalizationKeysPacketData = {
      blocks: {},
      entities: {},
      items: {},
   };

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
