import { BedrockDedicatedServerEnviroment } from "../test-runner/enviroments/bds";
import { TestSuite } from "../test-runner/suite";
import "../test-runner/suites/all";

export function* TestsResolver() {
	const generator = TestSuite.run(new BedrockDedicatedServerEnviroment());
	let result = generator.next();
	while (!result.done) {
		result = generator.next();
		yield;
		if (result.done) {
			return { suites: result.value };
		}
	}

	throw new Error("failed to get repost");
}
