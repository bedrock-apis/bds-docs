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
const engine_version = '1.20.10';
`https://raw.githubusercontent.com/Bedrock-APIs/bds-docs/stable-${engine_version}/docs/script_modules/@minecraft/server_1.2.0.json`;
```

## Contribution

We welcome contributions from the community! Here are the steps to get started:

1. **Fork the Repository**: You can't properly debug the repo without a full fork.
2. **Allow Actions on Your Fork**: Ensure that GitHub Actions are enabled on your fork to run tests and other automated processes.
