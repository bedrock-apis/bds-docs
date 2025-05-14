import { BlockPermutation } from '@minecraft/server';
import { placeBlock } from '../enviroment';
import { TestSuite } from '../suite';

TestSuite.withSetup('block', () => placeBlock('minecraft:stone'))
   .test(block => block.typeId)
   .test(block => block.type)
   .test(block => block.location)
   .test(block => block.permutation)
   .test(block => block.center())
   .test(block => block.localizationKey)
   .testChain(function* (block) {
      yield {
         type: block.type,
         states: block.permutation.getAllStates(),
      };

      block.trySetPermutation(BlockPermutation.resolve('minecraft:dirt'));
      yield {
         type: block.type,
         states: block.permutation.getAllStates(),
      };
   });
