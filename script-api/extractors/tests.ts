import { Block, Entity, system, VanillaEntityIdentifier, world } from '@minecraft/server';
import { TestEnviroment } from '../../test-runner/enviroment';
import { TestSuite } from '../../test-runner/suite';

import '../../test-runner/suites/all';
import { loadChunk } from '../helper';

class BedrockDedicatedServerEnviroment extends TestEnviroment {
   async onSetup(): Promise<void> {
      await loadChunk({ x: 0, y: 0, z: 0 }, 'test');
   }

   placeBlock(typeId: string): Block {
      const location = this.getNextLocation('block', { x: 0, y: 0, z: 0 }, 'y');
      world.getDimension('overworld').setBlockType(location, typeId);

      const block = world.getDimension('overworld').getBlock(location);

      if (!block) throw new Error('Unable to place block');

      return block;
   }

   spawnEntity(typeId: string): Entity {
      const location = this.getNextLocation('entity', { x: 0, y: 0, z: 1 }, 'z');
      const entity = world.getDimension('overworld').spawnEntity(typeId as VanillaEntityIdentifier, location);

      return entity;
   }
}

export function TestsResolver() {
   return TestSuite.r(new BedrockDedicatedServerEnviroment(), system.runJob.bind(system));
}
