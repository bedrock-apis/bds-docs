#!/bin/bash
set -e

REPO="$GITHUB_REPOSITORY"
VERSION_URL="https://raw.githubusercontent.com/Bedrock-OSS/BDS-Versions/main/versions.json"
STABLE_EXISTS_URL="https://raw.githubusercontent.com/${REPO}/stable/exists.json"
PREVIEW_EXISTS_URL="https://raw.githubusercontent.com/${REPO}/preview/exists.json"

# Download reference version data
curl -sSL "$VERSION_URL" -o versions.json

# Download exists.json for stable and preview branches
curl -sSL "$STABLE_EXISTS_URL" -o exists_stable.json
curl -sSL "$PREVIEW_EXISTS_URL" -o exists_preview.json

# Extract version info from versions.json
STABLE_VERSION=$(jq -r '.linux.stable' versions.json)
PREVIEW_VERSION=$(jq -r '.linux.preview' versions.json)
STABLE_BASE=$(echo "$STABLE_VERSION" | cut -d. -f1-3)

# Extract deployed versions
EXISTS_STABLE_VERSION=$(jq -r '.version' exists_stable.json)
EXISTS_PREVIEW_BUILD=$(jq -r '.build-version' exists_preview.json)

# Output for debugging
echo "Expected stable: $STABLE_BASE"
echo "Expected preview: $PREVIEW_VERSION"
echo "Current stable: $EXISTS_STABLE_VERSION"
echo "Current preview: $EXISTS_PREVIEW_BUILD"

# Logic
if [[ "$EXISTS_STABLE_VERSION" == "$STABLE_BASE" ]]; then
    echo "Stable version already matches. Skipping."
    exit 0
elif [[ "$EXISTS_PREVIEW_BUILD" == "$PREVIEW_VERSION" ]]; then
    echo "Preview version already matches. Skipping."
    exit 0
else
    echo "New version detected in either channel. Proceeding."
    exit 1
fi
