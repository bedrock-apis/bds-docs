# Bedrock Documentation Generator
## Available branches
You can target to specific version via each of branches, all generated docs are stored in `.\docs`. If you want to get version what the docs were generated from you can fetch for file in root directory called exist.json `.\exist.json`, this file has two types of version, the build version and engine version:
```json
{
    "version":"", //x.x.x or x.x.x.x depends on preview or stable
    "build-version":"" //x.x.x.x version of BDS generated with
} 
```
Supported branches:
 - **The Latest Stable** id: `stable`
 - **The Latest Preview** id: `preview`
 - **Specifc Stable** id `stable-x.x.x`
   - `stable-1.20.10`
## Targeting
 - **Targeting Preview Version**
```js
`https://raw.githubusercontent.com/Bedrock-APIs/bds-docs/preview/docs/script_modules/@minecraft/${module_name}_${module_version}.json`;
```
```js
`.../preview/docs/script_modules/@minecraft/server_1.7.0-beta.json`;
```
- Targeting Stable Version
```js
`https://raw.githubusercontent.com/Bedrock-APIs/bds-docs/stable/docs/script_modules/@minecraft/${module_name}_${module_version}.json`;
```
```js
`.../stable/docs/script_modules/@minecraft/server_1.2.0.json`;
```
- **Targeting Specific Stable Version** engine_version `1.XX.XX` format
```js
const engine_version = "x.x.x";
`https://raw.githubusercontent.com/Bedrock-APIs/bds-docs/stable-${engine_version}/docs/script_modules/@minecraft/${module_name}_${module_version}.json`;
```
```js
`.../stable-1.20.10/docs/script_modules/@minecraft/server_1.2.0.json`;
```
