import { world } from '@minecraft/server';
import { TestSuite } from '../suite';

TestSuite.simple('dynamic properties')
   .test(() => world.getDynamicPropertyIds())
   .testChain(function* () {
      const id = 'id1';

      const values = [true, false, '', 'string', 1, 0, -1, Infinity, NaN, 10000000000];

      for (const value of values) {
         world.setDynamicProperty(id, value);
         yield world.getDynamicProperty(id);
      }
   });
