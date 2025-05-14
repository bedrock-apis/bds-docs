import { ItemStack, ItemTypes } from '@minecraft/server';
import { ItemsDataPacketData } from '../net';
export type ItemData = ItemsDataPacketData['items'][string];
export function* ItemStackResolver() {
   let lastIndex = 0;
   const map = new Map<string, number>();
   const items: Record<string, ItemData> = {};
   for (const { id } of ItemTypes.getAll()) {
      if (id === 'minecraft:air') {
         console.warn('[ItemData Generator] Skipping ' + id);
         continue;
      }
      const itemStack = new ItemStack(id);
      const components: ItemData['components'] = {};
      for (const { typeId } of itemStack.getComponents()) {
         components[typeId] = {};
      }
      const data: ItemData = (items[id] = {
         tags: [],
         maxStack: itemStack.maxAmount,
         components: components,
      });
      // Tags
      for (const tag of itemStack.getTags()) {
         let index = map.get(tag) ?? null;
         if (index === null) {
            map.set(tag, (index = lastIndex++));
         }
         data.tags.push(index);
      }
      yield;
   }
   return { tags: Array.from(map.keys()), items };
}
