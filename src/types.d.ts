import { GITHUB_PREVIEW_BRANCH_NAME, GITHUB_STABLE_BRANCH_NAME } from "./consts";

export type BranchKind = typeof GITHUB_PREVIEW_BRANCH_NAME | typeof GITHUB_STABLE_BRANCH_NAME;
export type VersionFull = `${number}.${number}.${number}.${number}`;
export type VersionEngine = `${number}.${number}.${number}`;
export type Version = VersionFull | VersionEngine;
export type BDSBuildVersions = {stable:VersionFull, preview: VersionFull, versions:VersionFull[], preview_versions: VersionFull[]}
export type BDSVersions = {linux:BDSBuildVersions, windows:BDSBuildVersions};
export type ExistJson = {
    version: Version,
    "build-version": VersionFull,
    flags: string[]
}