import { defaultThreadRunner, RunThreadAsync, ThreadRunner } from './async-generator';
import { TestEnviroment, setEnviroment } from './enviroment';
import { TestReport } from './types';

export class TestSuite<T> {
   static stringify(object: unknown): string {
      if (object === undefined) return 'undefined';
      // TODO Better stringify
      return JSON.stringify(object, null, 4);
   }

   static withSetup<T>(id: string, setupFn: () => T) {
      return new TestSuite(id, setupFn);
   }

   static simple(id: string) {
      return new TestSuite(id, () => {});
   }

   static r(enviroment: TestEnviroment, runner: ThreadRunner = defaultThreadRunner) {
      return RunThreadAsync(this.run(enviroment), runner);
   }

   static *run(enviroment: TestEnviroment): Generator<Promise<void> | unknown, TestReport.Run, unknown> {
      try {
         setEnviroment(enviroment);

         yield enviroment.onSetup();
      } catch (e) {
         console.error(e);
         return { enviromentSetupError: String(e) };
      }
      yield;

      const suites = [];
      for (const suite of this.suites.values()) {
         suites.push(yield* suite.run());
      }
      return suites;
   }

   protected static suites = new Map<string, TestSuite<any>>();

   protected constructor(
      private id: string,
      protected setupFn: () => T,
   ) {
      TestSuite.suites.set(id, this);
   }

   *run(): Generator<unknown, TestReport.Suite, unknown> {
      let setup;
      try {
         setup = this.setupFn();
         yield;
      } catch (e) {
         return { id: this.id, setupError: String(e) };
      }

      const results: (TestReport.Chained | TestReport.Primitive)[] = [];
      for (const test of this.tests) {
         const result = test(setup);
         results.push(result);
         yield;
      }

      return { id: this.id, results: results };
   }

   protected tests: ((setupData: T) => TestReport.Chained | TestReport.Primitive)[] = [];

   test(testFn: (setupData: T) => unknown): this {
      this.tests.push(setupData => {
         try {
            const result = testFn(setupData);
            console.log(testFn.toString(), result);
            return TestSuite.stringify(result);
         } catch (error) {
            return this.createErrorReport(error);
         }
      });
      return this;
   }

   private createErrorReport(error: unknown): TestReport.Primitive {
      return { error: String(error) };
   }

   testChain(testFn: (setupData: T) => Generator<unknown, void, unknown>) {
      this.tests.push(setupData => {
         let results: string[] = [];
         try {
            for (const iteration of testFn(setupData)) {
               results.push(TestSuite.stringify(iteration));
            }

            return results;
         } catch (error) {
            return [...results, this.createErrorReport(error)];
         }
      });
      return this;
   }
}
