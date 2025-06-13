import { spawnEntity } from '../enviroment';
import { TestSuite } from '../suite';

TestSuite.withSetup('entity', () => spawnEntity('minecraft:cow'))
   .test(entity => entity.typeId)
   .test(entity => entity.location)
   .test(entity => entity.localizationKey)
   .test(entity => entity.getComponents())
   .test(entity => JSON.stringify(entity));
