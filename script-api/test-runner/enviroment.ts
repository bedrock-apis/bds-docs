import { Block, Entity, Vector3 } from "@minecraft/server";

export abstract class TestEnviroment {
    abstract onSetup(): void;
    abstract spawnEnttity(typeId: string): Entity;
    abstract placeBlock(typeId: string): Block;

    private nextLocations = new Map<string, Vector3>();

    protected getNextLocation(targetType: string, baseLocation: Vector3, offsetCoordinate: keyof Vector3 = "x", offsetNumber: number = 1): Vector3 {
        let previousOffset = this.nextLocations.get(targetType);
        if (!previousOffset) {
            previousOffset = baseLocation;
            this.nextLocations.set(targetType, previousOffset);
        }

        previousOffset[offsetCoordinate] += offsetNumber;
        return {
            x: previousOffset.x,
            y: previousOffset.y,
            z: previousOffset.z,
        };
    }
}

let globalEnviroment: TestEnviroment | null = null;

export function getEnviroment(): TestEnviroment {
    if (!globalEnviroment) throw new Error("You should setup test enviroment first");

    return globalEnviroment;
}

export function setEnviroment(enviroment: TestEnviroment) {
    globalEnviroment = enviroment;
}
export function spawnEntity(typeId: string): Entity {
    return getEnviroment().spawnEnttity(typeId);
}
export function placeBlock(typeId: string): Block {
    return getEnviroment().placeBlock(typeId);
}
