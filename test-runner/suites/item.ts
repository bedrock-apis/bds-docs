import { ItemFoodComponent, ItemStack } from '@minecraft/server';
import { TestSuite } from '../suite';

TestSuite.withSetup('item', () => new ItemStack('minecraft:apple'))
   .test(item => item.typeId)
   .test(item => item.amount)
   .test(item => item.localizationKey)
   .test(item => Object.getOwnPropertyDescriptor(item, 'localizationKey'))
   .test(item => item.lockMode)
   .test(item => Object.getOwnPropertyDescriptor(item, 'lockMode'))
   .test(item => item.clone())
   .test(item => item.getCanDestroy())
   .test(item => item.getComponents())
   .testChain(function* (item) {
      yield item.amount;
      item.amount++;
      yield item.amount;
   });

TestSuite.withSetup('ItemComponent', () => ItemFoodComponent)
   .test(c => c.componentId)
   // @ts-expect-error
   .test(c => (c.componentId = 'customId')) // Setting static property;
   .test(c => Object.getOwnPropertyDescriptor(c, 'componentId'));
