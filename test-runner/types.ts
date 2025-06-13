export namespace TestReport {
   export interface Error {
      error: string
   }

   export type Primitive = string | Error

   export type Chained = Primitive[]

   export type Result = Primitive | Chained

   interface SuiteSetupFailed {
      setupError: string
   }

   interface SuiteSuccess {
      results: Result[]
   }

   export type Suite = {
      id: string
   } & (SuiteSetupFailed | SuiteSuccess)

   type RunSuccess = Suite[]
   interface RunFailed {
      enviromentSetupError: string
   }

   export type Run = RunSuccess | RunFailed
}
