import { system } from '@minecraft/server';

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
