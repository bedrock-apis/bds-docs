import { GITHUB_PREVIEW_BRANCH_NAME, GITHUB_STABLE_BRANCH_NAME } from './consts';

export type BranchKind = typeof GITHUB_PREVIEW_BRANCH_NAME | typeof GITHUB_STABLE_BRANCH_NAME;
export type VersionFull = `${number}.${number}.${number}.${number}`;
export type VersionEngine = `${number}.${number}.${number}`;
export type Version = VersionFull | VersionEngine;
export type BDSBuildVersions = {
   stable: VersionFull;
   preview: VersionFull;
   versions: VersionFull[];
   preview_versions: VersionFull[];
};
export type BDSVersions = {
   linux: BDSBuildVersions;
   windows: BDSBuildVersions;
};
export type ExistJson = {
   'version': Version;
   'build-version': VersionFull;
   'flags': string[];
};
export type ManifestVersion<T = string> = VersionEngine | `${VersionEngine}-${T}` | [number, number, number];
export type ManifestLike = {
   format_version: number;
   header: {
      description?: string;
      name: string;
      uuid: string;
      version: ManifestVersion;
      min_engine_version?: [number, number, number];
   };
   modules: {
      description?: string;
      type: 'script' | 'data' | 'resources';
      uuid: string;
      version: ManifestVersion;
      language?: 'javascript';
      entry: string;
   }[];
   dependencies: {
      module_name?: string;
      uuid?: string;
      version: ManifestVersion;
   }[];
   capabilities: string[];
};
