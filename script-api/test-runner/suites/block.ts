import { BlockPermutation } from "@minecraft/server";
import { placeBlock } from "../enviroment";
import { TestSuite } from "../suite";

TestSuite.withSetup("block", () => placeBlock("minecraft:stone"))
    .test((block) => block.typeId)
    .test((block) => block.type)
    .testChain(function* (block) {
        yield {
            type: block.type,
            states: block.permutation.getAllStates(),
        };

        block.trySetPermutation(BlockPermutation.resolve("minecraft:dirt"));
        yield {
            type: block.type,
            states: block.permutation.getAllStates(),
        };
    });
