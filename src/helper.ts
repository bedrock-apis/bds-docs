import { ALWAYS_OVERWRITE, FILE_NAME_GITHUB_REPO_EXISTS, GITHUB_PREVIEW_BRANCH_NAME, GITHUB_STABLE_BRANCH_NAME, LINK_GITHUB_REPO } from "./consts";
import { FetchJson, GetEngineVersion } from "./functions";
import { BDSVersions, BranchKind, ExistJson, VersionFull } from "./types";

export async function GetRepositoryExistJson(branch: BranchKind){
    return await FetchJson<ExistJson>(`${LINK_GITHUB_REPO}/${branch}/${FILE_NAME_GITHUB_REPO_EXISTS}`);
}
export type VersionIncompatibility = {
    branch: BranchKind,
    version: VersionFull,
    usePreview: boolean
};
export async function GetRepositoryVersionIncompatibility(versions: BDSVersions): Promise<VersionIncompatibility | null>{
    // Avoid checking if always overwrite is set to true
    if(ALWAYS_OVERWRITE) return {
        branch: GITHUB_STABLE_BRANCH_NAME,
        version: versions.windows.stable,
        usePreview: false
    };

    // Check for stable branch
    let data = await GetRepositoryExistJson(GITHUB_STABLE_BRANCH_NAME);
    if(!data || data.version !== GetEngineVersion(versions.windows.stable)) return {
        branch: GITHUB_STABLE_BRANCH_NAME,
        version: versions.windows.stable,
        usePreview: false
    }

    // Check for preview branch
    data = await GetRepositoryExistJson(GITHUB_PREVIEW_BRANCH_NAME);
    if(!data || data.version !== versions.windows.preview) return {
        branch: GITHUB_PREVIEW_BRANCH_NAME,
        version: versions.windows.preview,
        usePreview: true
    }
    return null;
}