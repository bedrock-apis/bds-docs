import { TestReport } from "../net";
import { TestEnviroment, setEnviroment } from "./enviroment";

export class TestSuite<T> {
    static stringify(object: unknown): string {
        // TODO Better stringify
        return JSON.stringify(object, null, 4);
    }

    static withSetup<T>(id: string, setupFn: () => T) {
        return new TestSuite(id, setupFn);
    }

    static simple(id: string) {
        return new TestSuite(id, () => {});
    }

    static *run(enviroment: TestEnviroment) {
        try {
            setEnviroment(enviroment);

            enviroment.onSetup();
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
            results.push(test(setup));
            yield;
        }

        return { id: this.id, results: results };
    }

    protected tests: ((setupData: T) => TestReport.Chained | TestReport.Primitive)[] = [];

    test(testFn: (setupData: T) => unknown): this {
        this.tests.push((setupData) => {
            try {
                const result = testFn(setupData);
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
        this.tests.push((setupData) => {
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
