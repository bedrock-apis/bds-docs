# Bedrock Documentation Generator

## Overview
This repository generates documentation for different versions of Bedrock. The generated docs are stored in the `./metadata` directory. Before fetching any data, ensure that the data is generated in the specific branch by checking the `exist.json` file in the root directory. This file includes the build version, engine version, and flags indicating the types of generated data.

## Checking Generated Data
The `exist.json` file is crucial for determining if the necessary data has been generated for a specific branch. This file must be fetched first to verify the existence of the repository and the availability of the required data. It contains:
- **version**: The version of the documentation (e.g., x.x.x or x.x.x.x).
- **build-version**: The version of BDS used to generate the documentation.
- **flags**: An array indicating the types of content generated. Read specific flags in sections about [Current Generator Flags](#current-flags). These generator flags may generate some additional data directly to `exist.json` root JSON object. All od these things should be described by generator flags in section of [Current Generator Flags](#current-flags).

Example of `exist.json`:
```json
{
    "version": "",
    "build-version": "",
    "flags": [] //string[]
}
```

## Versioning
You can target specific versions via the following branches:
- **Latest Stable**: `stable`
- **Latest Preview**: `preview`
- **Specific Stable**: `stable-x.x.x` (e.g., `stable-1.20.10`)

## Targeting Files
To fetch the documentation files, use the following URL format:
**Fetching JSON METADATA for specific Script Module**
```
https://raw.githubusercontent.com/Bedrock-APIs/bds-docs/{branch}/metadata/script_modules/@minecraft/{module_name}_{module_version}.json
```
Replace `{branch}` with the appropriate branch name (`stable`, `preview`, or `stable-x.x.x`), and `{module_name}` and `{module_version}` with the specific module name and version.

### Specific Stable Version Example
Keep in mind this branch is older and was generated with different flags, thats why we have to use `/docs/` in the link and not `/metadata/`
```js
const engine_version = "1.20.10";
`https://raw.githubusercontent.com/Bedrock-APIs/bds-docs/stable-${engine_version}/docs/script_modules/@minecraft/server_1.2.0.json`;
```

## Contribution
We welcome contributions from the community! Here are the steps to get started:
1. **Fork the Repository**: You can't properly debug the repo without a full fork.
2. **Allow Actions on Your Fork**: Ensure that GitHub Actions are enabled on your fork to run tests and other automated processes.

## Current Flags
When you download files before that, you should check what content is available using the flag, 
these flags determine what is currently available, if the given flag is not there then the given 
information under this flag would not be generated or supported. always check that the given flag is available.
 - `METADATA`
 - `SCRIPT_MODULES_MAPPING`
 - `SCRIPT_DECLARATIONS`
 - `BLOCKS_DATA`

### `FLAG:METADATA` Documentation
> This generator is moving BDS generated docs to **./metadata** and removes version from all JSON modules so github doesn't generates usless diff for every version change.
### `FLAG:SCRIPT_MODULES_MAPPING` Documentation
> This flag generator creates a detailed mapping of script modules from the documentation files. It reads and processes JSON files to gather metadata about various script modules. This information is then organized and added to main the `./exist.json` file, ensuring that all relevant data about script modules, such as names, UUIDs, and versions, is accurately captured
### `FLAG:SCRIPT_DECLARATIONS` Documentation
> The SCRIPT_DECLARATIONS flag generator creates TypeScript declaration files from JSON metadata about script modules. It processes JSON files, transforming their content into .d.ts files, which are then stored in the ./script-declarations directory. This ensures that all script modules have accurate TypeScript declarations, making it easier for developers to work with the generated documentation. The process involves reading the JSON files, transforming their content, and writing the output to the appropriate directory, ensuring that all tasks are completed successfully.
### `FLAG:BLOCKS_DATA` Documentation
> The BLOCKS_DATA flag generator creates JSON files containing detailed information about block states and blocks from vanilla data modules. It processes JSON files, extracting block properties and data items, and generates two output files: block_states.json and blocks.json. This ensures that all block-related data is accurately captured and organized, making it easier for developers to work with the generated documentation. The process involves reading the JSON files, transforming their content, and writing the output to the appropriate directory, ensuring that all tasks are completed successfully.

