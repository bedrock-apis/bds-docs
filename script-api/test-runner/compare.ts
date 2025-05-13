import { TestEnviroment } from "./enviroment";
import { TestSuite } from "./suite";
import { TestReport } from "./types";

export function runAndCompare(bdsDocsResults: TestReport.Run, enviroment: TestEnviroment) {
    let result;

    const generator = TestSuite.run(enviroment);
    let step = generator.next();
    while (!step.done) {
        step = generator.next();
        if (step.done) result = step.value;
    }

    if (!result) throw new Error("Failed to get result");

    if (!Array.isArray(bdsDocsResults)) {
        return "Bds docs enviroment setup failed, skipping...";
    }

    if (!Array.isArray(result)) {
        return "Enviroment setup failed: " + result.enviromentSetupError;
    }

    let report = "";

    for (const [i, suiteA] of bdsDocsResults.entries()) {
        const suiteB = result[i];

        if (typeof suiteB === "undefined") {
            report += `No suite ${suiteA.id}. Perhaps you forgot to import suite file.\n`;
            continue;
        }

        const suiteReport = compareSuite(suiteA, suiteB);
        if (suiteReport) {
            report += "Suite " + suiteA.id + ": " + suiteReport + "\n";
        }
    }

    return report.trim();
}

function compareSuite(suiteA: TestReport.Suite, suiteB: TestReport.Suite): string {
    if ("results" in suiteA) {
        if (!("results" in suiteB)) {
            return "Unexpected setup error: " + suiteB.setupError;
        }

        return compareMultipleResults(suiteA.results, suiteB.results);
    } else {
        if ("results" in suiteB) {
            return "Expected setup error: " + suiteA.setupError;
        }

        if (suiteA.setupError !== suiteB.setupError) {
            return "Setup error mismatch:\n\nA:\n" + suiteA.setupError + "\n\nB:\n" + suiteB.setupError;
        }
    }
    return "";
}

function compareResults(resultA: TestReport.Result, resultB: TestReport.Result): string {
    if (typeof resultB === "undefined") {
        return "Missing test result";
    }

    if (typeof resultA === "object") {
        if (Array.isArray(resultA)) {
            if (!Array.isArray(resultB)) {
                return "Unexpected primitive result, expected chained";
            } else return compareMultipleResults(resultA, resultB);
        }

        if (typeof resultB !== "object" || Array.isArray(resultB)) {
            return "Expected error, got: " + resultB;
        }
    } else {
        if (Array.isArray(resultB)) {
            return "Unexpected chained result, expected primitive";
        }

        if (typeof resultB === "object") {
            return "Unexpected error: " + errorResultToString(resultB);
        }

        if (resultA !== resultB) {
            const spaces = resultA.includes("\n") ? "\n\n" : "\n";
            return "Results mismatch:\n" + resultA + spaces + resultB;
        }
    }

    return "";
}

function compareMultipleResults(resultsA: TestReport.Result[], resultsB: TestReport.Result[]): string {
    let report = "";
    for (const [i, resultA] of resultsA.entries()) {
        const resultB = resultsB[i];
        if (typeof resultB === "undefined") {
            report += "No result at chain for index " + i + "\n";
            continue;
        }

        const compare = compareResults(resultA, resultB);
        if (compare) {
            report += i + ": " + compare + "\n";
        }
    }
    return report;
}

function errorResultToString(result: TestReport.Error): string {
    return result.error;
}
