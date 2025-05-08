import { BlockPermutation, BlockTypes } from "@minecraft/server";
import { BlocksDataPacketData } from "../net";

export type BlockData = BlocksDataPacketData["blocks"][string];

export function* BlockResolver() {
    let lastIndex = 0;
    const map = new Map<string, number>();
    const blocks: Record<string, BlockData> = {};
    for (const { id } of BlockTypes.getAll()) {
        const permutation = BlockPermutation.resolve(id);
        const data: BlockData = (blocks[id] = { tags: [] });
        for (const tag of permutation.getTags()) {
            let index = map.get(tag) ?? null;
            if (index === null) {
                map.set(tag, (index = lastIndex++));
            }
            data.tags.push(index);
        }
        yield;
    }
    return { tags: Array.from(map.keys()), blocks };
}
