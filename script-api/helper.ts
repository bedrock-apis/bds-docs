import { system, Vector3, world } from '@minecraft/server';

export async function RunThread<T>(iterator: Iterable<void, T>): Promise<T> {
   return new Promise<T>((r, j) => system.runJob(__Local__Executor<T>(iterator, r, j)));
}
function* __Local__Executor<T>(
   iterator: Iterable<void, T>,
   resolve: (any: T) => void,
   reject: (er: unknown) => void,
): Generator<void> {
   try {
      const results = yield* iterator;
      resolve(results);
   } catch (error) {
      reject(error);
   }
}

export async function loadChunk(location: Vector3, tickingareaName: string) {
   const dimension = world.getDimension('overworld');
   dimension.runCommand(`tickingarea add circle ${location.x} ${location.y} ${location.z} 4 ${tickingareaName}`);

   let runs = 0;
   let block;
   do {
      runs++;
      if (runs >= 100) throw new TypeError('Loading took too long');

      try {
         dimension.setBlockType(location, 'minecraft:bedrock');
         block = dimension.getBlock(location);
      } catch {}
      await system.waitTicks(10);
   } while (!block?.isValid);

   return block;
}
