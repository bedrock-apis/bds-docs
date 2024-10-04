/**
 * @type {Promise<{default: {
* flagId: string, method(inputDir: string):Promise<boolean>,
* description?: string
* }}>[]}
 */
export const GENERATORS = [
    import("./metadata.js"),
    import("./module_maping.js"),
    import("./script_decleration.js"),
    import("./data/blocks.js")
];
/**
 * @type {{
* flagId: string, method(inputDir: string):Promise<boolean>,
* description?: string
* }[]}
*/
export const GENERATORS_FLAGS = (await Promise.all(GENERATORS)).map(e=>e.default);