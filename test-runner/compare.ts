import { ThreadRunner } from './async-generator';
import { TestEnviroment } from './enviroment';
import { TestSuite } from './suite';
import { TestReport } from './types';

export async function runAndCompare(bdsDocsResults: TestReport.Run, enviroment: TestEnviroment, runner?: ThreadRunner) {
   const result = await TestSuite.r(enviroment, runner);

   if (!Array.isArray(bdsDocsResults)) {
      return 'Bds docs enviroment setup failed, skipping...';
   }

   if (!Array.isArray(result)) {
      return `Enviroment setup failed: ${result.enviromentSetupError}`;
   }

   let report = '';

   for (const [i, suiteA] of bdsDocsResults.entries()) {
      const suiteB = result[i];

      if (typeof suiteB === 'undefined') {
         report += `No suite ${suiteA.id}. Perhaps you forgot to import suite file.\n`;
         continue;
      }

      const suiteReport = compareSuite(suiteA, suiteB);
      if (suiteReport) {
         const suiteType = 'results' in suiteA && Array.isArray(suiteA.results) ? ' (chained)' : '';
         report += `Suite ${suiteA.id}${suiteType}: ${indent(suiteReport)}\n`;
      }
   }

   return report.trim();
}

function compareSuite(suiteA: TestReport.Suite, suiteB: TestReport.Suite): string {
   if ('results' in suiteA) {
      if (!('results' in suiteB)) {
         return `Unexpected setup error: ${suiteB.setupError}`;
      }

      return compareMultipleResults(suiteA.results, suiteB.results);
   } else {
      if ('results' in suiteB) {
         return `Expected setup error: ${suiteA.setupError}`;
      }

      if (suiteA.setupError !== suiteB.setupError) {
         return `Setup error mismatch: ${indent(diff(suiteA.setupError, suiteB.setupError))}`;
      }
   }
   return '';
}

function compareResults(resultA: TestReport.Result, resultB: TestReport.Result): string {
   if (typeof resultB === 'undefined') return 'Missing test result';

   if (typeof resultA === 'object') {
      if (Array.isArray(resultA)) {
         if (!Array.isArray(resultB)) {
            return 'Unexpected primitive result, expected chained';
         } else return compareMultipleResults(resultA, resultB);
      }

      if (typeof resultB !== 'object' || Array.isArray(resultB)) {
         return `Expected error, got: ${resultB}`;
      }
   } else {
      if (Array.isArray(resultB)) return 'Unexpected chained result, expected primitive';

      if (typeof resultB === 'object') return `Unexpected error: ${errorResultToString(resultB)}`;

      if (resultA !== resultB) return `Results mismatch: ${indent(diff(resultA, resultB))}`;
   }

   return '';
}

function compareMultipleResults(resultsA: TestReport.Result[], resultsB: TestReport.Result[]): string {
   let report = '';
   for (const [i, resultA] of resultsA.entries()) {
      const resultB = resultsB[i];
      if (typeof resultB === 'undefined') {
         report += `${i}: No result, expected ${resultToString(resultA)}\n`;
         continue;
      }

      const compare = compareResults(resultA, resultB);
      if (compare) {
         report += `${i}: ${indent(compare)}\n`;
      }
   }
   return report;
}

function resultToString(result: TestReport.Result): string {
   if (typeof result === 'object' && 'error' in result) {
      return errorResultToString(result);
   }

   if (Array.isArray(result)) {
      return result.map(resultToString).join(', ');
   }

   return result;
}

function errorResultToString(result: TestReport.Error): string {
   return result.error;
}

function indent(string: string, level = 2) {
   if (!isMultiline(string)) return string;

   const indent = ' '.repeat(level);

   return `\n${indent}${string.replaceAll('\n', `\n${indent}`)}`;
}

function isMultiline(string: string) {
   return string.includes('\n');
}

const wrapDiffLength = 80;

function diff(a: string, b: string) {
   if (!isMultiline(a) && !isMultiline(b) && a.length < wrapDiffLength && b.length < wrapDiffLength) {
      return `${b} != ${a}`;
   }
   const spaces = isMultiline(a) ? '\n\n' : '\n';
   return `\n${a}${spaces}${b}\n`;
}
