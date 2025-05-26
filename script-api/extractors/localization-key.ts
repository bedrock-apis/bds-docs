import { BlockTypes, EntityTypes, ItemStack, ItemTypes, VanillaEntityIdentifier, world } from '@minecraft/server';
import { LocalizationKeysPacketData } from '../net';

export function* LocalizationKeysResolver() {
   const data: LocalizationKeysPacketData = {
      blocks: {},
      entities: {},
      items: {},
   };
   const dimension = world.getDimension('overworld');
   const block = dimension.getBlock({ x: -10, y: 0, z: -10 });
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
      const entity = dimension.spawnEntity(id as VanillaEntityIdentifier, { x: -10, y: 0, z: -10 });
      data.entities[id] = entity.localizationKey;
      entity.remove();
      yield;
   }

   return data;
}
