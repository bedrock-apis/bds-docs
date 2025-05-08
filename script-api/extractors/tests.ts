import { BedrockDedicatedServerEnviroment } from "../test-runner/enviroments/bds";
import { TestSuite } from "../test-runner/suite";
import "../test-runner/suites/all";

export function* TestsResolver() {
	yield;
	const suites = yield* TestSuite.run(new BedrockDedicatedServerEnviroment());
	return { suites };
}
