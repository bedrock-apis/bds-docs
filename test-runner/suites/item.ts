import { ItemStack } from '@minecraft/server';
import { TestSuite } from '../suite';

TestSuite.withSetup('item', () => new ItemStack('minecraft:apple'))
   .test(item => item.typeId)
   .test(item => item.amount)
   .test(item => item.getComponents())
   .testChain(function* (item) {
      yield item.amount;
      item.amount++;
      yield item.amount;
   });
