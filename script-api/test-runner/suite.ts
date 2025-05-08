import {
	TestRunResult,
	TestRunResultChain,
	TestRunResultSimple,
	TestSuiteRunResult,
} from "../net";
import { TestEnviroment, setEnviroment } from "./enviroment";

export class TestSuite<T> {
	static stringify(object: unknown): string {
		// TODO Better stringify
		return JSON.stringify(object, null, 2);
	}

	static withSetup<T>(id: string, setupFn: () => T) {
		return new TestSuite(id, setupFn);
	}

	static simple(id: string) {
		return new TestSuite(id, () => {});
	}

	static *run(enviroment: TestEnviroment) {
		setEnviroment(enviroment);

		enviroment.onSetup();
		yield;

		const suites = [];
		for (const suite of this.suites.values()) {
			const suiteResult = yield* suite.run();
			suites.push(suiteResult);
		}
		return suites;
	}

	protected static suites = new Map<string, TestSuite<any>>();

	protected constructor(private id: string, protected setupFn: () => T) {
		TestSuite.suites.set(id, this);
	}

	*run(): Generator<unknown, TestSuiteRunResult, unknown> {
		const setup = this.setupFn();
		yield;

		const results: (TestRunResultChain | TestRunResultSimple)[] = [];
		for (const test of this.tests) {
			results.push(test(setup));
			yield;
		}

		return { id: this.id, tests: results };
	}

	protected tests: ((
		setupData: T
	) => TestRunResultChain | TestRunResultSimple)[] = [];

	test(testFn: (setupData: T) => unknown): this {
		this.tests.push((setupData) => {
			try {
				const result = testFn(setupData);
				return { type: "simple", result: TestSuite.stringify(result) };
			} catch (error) {
				return { type: "simple", result: this.createErrorReport(error) };
			}
		});
		return this;
	}

	private createErrorReport(error: unknown): TestRunResult {
		return {
			type: "error",
			error: error instanceof Error ? error.stack ?? "" : String(error),
		};
	}

	testChain(testFn: (setupData: T) => Generator<unknown, void, unknown>) {
		this.tests.push((setupData) => {
			let results: string[] = [];
			try {
				for (const iteration of testFn(setupData)) {
					results.push(TestSuite.stringify(iteration));
				}

				return { type: "chain", result: results };
			} catch (error) {
				return {
					type: "chain",
					result: [...results, this.createErrorReport(error)],
				};
			}
		});
		return this;
	}
}
