import * as common from "@minecraft/common";
import * as server from "@minecraft/server";

export enum GameTestCompletedErrorReason {
   Cleanup = "Cleanup",
   Done = "Done",
}
export enum GameTestErrorType {
   Assert = "Assert",
   AssertAtPosition = "AssertAtPosition",
   ExecutionTimeout = "ExecutionTimeout",
   ExhaustedAttempts = "ExhaustedAttempts",
   FailConditionsMet = "FailConditionsMet",
   LevelStateModificationFailed = "LevelStateModificationFailed",
   MethodNotImplemented = "MethodNotImplemented",
   SimulatedPlayerOutOfBounds = "SimulatedPlayerOutOfBounds",
   Unknown = "Unknown",
   Waiting = "Waiting",
}
export enum LookDuration {
   Continuous = "Continuous",
   Instant = "Instant",
   UntilMove = "UntilMove",
}
export enum PersonaArmSize {
   Slim = "Slim",
   Wide = "Wide",
}
export enum PersonaPieceType {
   Arms = "Arms",
   Back = "Back",
   Body = "Body",
   Bottom = "Bottom",
   Capes = "Capes",
   Dress = "Dress",
   Eyes = "Eyes",
   FaceAccessory = "FaceAccessory",
   FacialHair = "FacialHair",
   Feet = "Feet",
   Hair = "Hair",
   Hands = "Hands",
   Head = "Head",
   HighPants = "HighPants",
   Hood = "Hood",
   LeftArm = "LeftArm",
   LeftLeg = "LeftLeg",
   Legs = "Legs",
   Mouth = "Mouth",
   Outerwear = "Outerwear",
   RightArm = "RightArm",
   RightLeg = "RightLeg",
   Skeleton = "Skeleton",
   Skin = "Skin",
   Top = "Top",
}

export interface GameTestErrorContext {
   absolutePosition: server.Vector3;
   relativePosition: server.Vector3;
   tickCount: number;
}
export interface MoveToOptions {
   faceTarget?: boolean;
   speed?: number;
}
export interface PlayerPersonaPiece {
   id: string;
   isDefaultPiece?: boolean;
   packId: string;
   productId: string;
   type: PersonaPieceType;
}
export interface PlayerSkinData {
   armSize?: PersonaArmSize;
   personaPieces?: Array<PlayerPersonaPiece>;
   skinColor?: server.RGB;
}

export class FenceConnectivity {
   public readonly east: boolean;
   public readonly north: boolean;
   public readonly south: boolean;
   public readonly west: boolean;
   private constructor();
}
export class GameTestDebug {
   public static crash(): void;
   public static debugFail(message: string): void;
   public static timeout(duration: number): void;
   private constructor();
}
export class GameTestSequence {
   public thenExecute(callback: ()=>void): GameTestSequence;
   public thenExecuteAfter(delayTicks: number, callback: ()=>void): GameTestSequence;
   public thenExecuteFor(tickCount: number, callback: ()=>void): GameTestSequence;
   public thenFail(errorMessage: string): void;
   public thenIdle(delayTicks: number): GameTestSequence;
   public thenSucceed(): void;
   public thenWait(callback: ()=>void): GameTestSequence;
   public thenWaitAfter(delayTicks: number, callback: ()=>void): GameTestSequence;
   private constructor();
}
export class NavigationResult {
   public readonly isFullPath: boolean;
   public getPath(): Array<server.Vector3>;
   private constructor();
}
export class RegistrationBuilder {
   public batch(batchName: string): RegistrationBuilder;
   public maxAttempts(attemptCount: number): RegistrationBuilder;
   public maxTicks(tickCount: number): RegistrationBuilder;
   public padding(paddingBlocks: number): RegistrationBuilder;
   public required(isRequired: boolean): RegistrationBuilder;
   public requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder;
   public rotateTest(rotate: boolean): RegistrationBuilder;
   public setupTicks(tickCount: number): RegistrationBuilder;
   public structureLocation(structureLocation: server.Vector3, structureDimension?: server.DimensionType | string): RegistrationBuilder;
   public structureName(structureName: string): RegistrationBuilder;
   public tag(tag: string): RegistrationBuilder;
   private constructor();
}
export class SculkSpreader {
   public readonly maxCharge: number;
   public addCursorsWithOffset(offset: server.Vector3, charge: number): void;
   public getCursorPosition(index: number): server.Vector3;
   public getNumberOfCursors(): number;
   public getTotalCharge(): number;
   private constructor();
}
//@ts-ignore
export class SimulatedPlayer extends server.Player {
   public readonly headRotation: server.Vector2;
   public isSprinting: boolean;
   public attack(): boolean;
   public attackEntity(entity: server.Entity): boolean;
   public breakBlock(blockLocation: server.Vector3, direction?: server.Direction): boolean;
   public chat(message: string): void;
   public disconnect(): void;
   public dropSelectedItem(): boolean;
   public fly(): void;
   public giveItem(itemStack: server.ItemStack, selectSlot?: boolean): boolean;
   public glide(): boolean;
   public interact(): boolean;
   public interactWithBlock(blockLocation: server.Vector3, direction?: server.Direction): boolean;
   public interactWithEntity(entity: server.Entity): boolean;
   public jump(): boolean;
   public lookAtBlock(blockLocation: server.Vector3, duration?: LookDuration): void;
   public lookAtEntity(entity: server.Entity, duration?: LookDuration): void;
   public lookAtLocation(location: server.Vector3, duration?: LookDuration): void;
   public move(westEast: number, northSouth: number, speed?: number): void;
   public moveRelative(leftRight: number, backwardForward: number, speed?: number): void;
   public moveToBlock(blockLocation: server.Vector3, options?: MoveToOptions): void;
   public moveToLocation(location: server.Vector3, options?: MoveToOptions): void;
   public navigateToBlock(blockLocation: server.Vector3, speed?: number): NavigationResult;
   public navigateToEntity(entity: server.Entity, speed?: number): NavigationResult;
   public navigateToLocation(location: server.Vector3, speed?: number): NavigationResult;
   public navigateToLocations(locations: Array<server.Vector3>, speed?: number): void;
   public respawn(): boolean;
   public rotateBody(angleInDegrees: number): void;
   public setBodyRotation(angleInDegrees: number): void;
   public setItem(itemStack: server.ItemStack, slot: number, selectSlot?: boolean): boolean;
   public setSkin(options: PlayerSkinData): void;
   public startBuild(slot?: number): void;
   public stopBreakingBlock(): void;
   public stopBuild(): void;
   public stopFlying(): void;
   public stopGliding(): void;
   public stopInteracting(): void;
   public stopMoving(): void;
   public stopSwimming(): void;
   public stopUsingItem(): (server.ItemStack | undefined);
   public swim(): void;
   public useItem(itemStack: server.ItemStack): boolean;
   public useItemInSlot(slot: number): boolean;
   public useItemInSlotOnBlock(slot: number, blockLocation: server.Vector3, direction?: server.Direction, faceLocation?: server.Vector3): boolean;
   public useItemOnBlock(itemStack: server.ItemStack, blockLocation: server.Vector3, direction?: server.Direction, faceLocation?: server.Vector3): boolean;
   private constructor();
}
export class Tags {
   public static readonly suiteAll = "suite:all";
   public static readonly suiteDebug = "suite:debug";
   public static readonly suiteDefault = "suite:default";
   public static readonly suiteDisabled = "suite:disabled";
   public static readonly suiteNextUpdate = "suite:nextupdate";
   private constructor();
}
export class Test {
   public assert(condition: boolean, message: string): void;
   public assertBlockPresent(blockType: server.BlockType | string, blockLocation: server.Vector3, isPresent?: boolean): void;
   public assertBlockState(blockLocation: server.Vector3, callback: (arg0: server.Block)=>boolean): void;
   public assertCanReachLocation(mob: server.Entity, blockLocation: server.Vector3, canReach?: boolean): void;
   public assertContainerContains(itemStack: server.ItemStack, blockLocation: server.Vector3): void;
   public assertContainerEmpty(blockLocation: server.Vector3): void;
   public assertEntityHasArmor(entityTypeIdentifier: string, armorSlot: number, armorName: string, armorData: number, blockLocation: server.Vector3, hasArmor?: boolean): void;
   public assertEntityHasComponent(entityTypeIdentifier: string, componentIdentifier: string, blockLocation: server.Vector3, hasComponent?: boolean): void;
   public assertEntityInstancePresent(entity: server.Entity, blockLocation: server.Vector3, isPresent?: boolean): void;
   public assertEntityInstancePresentInArea(entity: server.Entity, isPresent?: boolean): void;
   public assertEntityPresent(entityTypeIdentifier: string, blockLocation: server.Vector3, searchDistance?: number, isPresent?: boolean): void;
   public assertEntityPresentInArea(entityTypeIdentifier: string, isPresent?: boolean): void;
   public assertEntityState(blockLocation: server.Vector3, entityTypeIdentifier: string, callback: (arg0: server.Entity)=>boolean): void;
   public assertEntityTouching(entityTypeIdentifier: string, location: server.Vector3, isTouching?: boolean): void;
   public assertIsWaterlogged(blockLocation: server.Vector3, isWaterlogged?: boolean): void;
   public assertItemEntityCountIs(itemType: server.ItemType | string, blockLocation: server.Vector3, searchDistance: number, count: number): void;
   public assertItemEntityPresent(itemType: server.ItemType | string, blockLocation: server.Vector3, searchDistance?: number, isPresent?: boolean): void;
   public assertRedstonePower(blockLocation: server.Vector3, power: number): void;
   public destroyBlock(blockLocation: server.Vector3, dropResources?: boolean): void;
   public fail(errorMessage: string): void;
   public failIf(callback: ()=>void): void;
   public getBlock(blockLocation: server.Vector3): server.Block;
   public getDimension(): server.Dimension;
   public getFenceConnectivity(blockLocation: server.Vector3): FenceConnectivity;
   public getSculkSpreader(blockLocation: server.Vector3): (SculkSpreader | undefined);
   public getTestDirection(): server.Direction;
   public idle(tickDelay: number): Promise<void>;
   public isCleaningUp(): boolean;
   public isCompleted(): boolean;
   public killAllEntities(): void;
   public onPlayerJump(mob: server.Entity, jumpAmount: number): void;
   public pressButton(blockLocation: server.Vector3): void;
   public print(text: string): void;
   public pullLever(blockLocation: server.Vector3): void;
   public pulseRedstone(blockLocation: server.Vector3, duration: number): void;
   public relativeBlockLocation(worldBlockLocation: server.Vector3): server.Vector3;
   public relativeLocation(worldLocation: server.Vector3): server.Vector3;
   public removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void;
   public rotateDirection(direction: server.Direction): server.Direction;
   public rotateVector(vector: server.Vector3): server.Vector3;
   public runAfterDelay(delayTicks: number, callback: ()=>void): void;
   public runAtTickTime(tick: number, callback: ()=>void): void;
   public runOnFinish(callback: ()=>void): void;
   public setBlockPermutation(blockData: server.BlockPermutation, blockLocation: server.Vector3): void;
   public setBlockType(blockType: server.BlockType | string, blockLocation: server.Vector3): void;
   public setFluidContainer(location: server.Vector3, type: server.FluidType): void;
   public setTntFuse(entity: server.Entity, fuseLength: number): void;
   public spawn(entityTypeIdentifier: string, blockLocation: server.Vector3): server.Entity;
   public spawnAtLocation(entityTypeIdentifier: string, location: server.Vector3): server.Entity;
   public spawnItem(itemStack: server.ItemStack, location: server.Vector3): server.Entity;
   public spawnSimulatedPlayer(blockLocation: server.Vector3, name?: string, gameMode?: server.GameMode): SimulatedPlayer;
   public spawnWithoutBehaviors(entityTypeIdentifier: string, blockLocation: server.Vector3): server.Entity;
   public spawnWithoutBehaviorsAtLocation(entityTypeIdentifier: string, location: server.Vector3): server.Entity;
   public spreadFromFaceTowardDirection(blockLocation: server.Vector3, fromFace: server.Direction, direction: server.Direction): void;
   public startSequence(): GameTestSequence;
   public succeed(): void;
   public succeedIf(callback: ()=>void): void;
   public succeedOnTick(tick: number): void;
   public succeedOnTickWhen(tick: number, callback: ()=>void): void;
   public succeedWhen(callback: ()=>void): void;
   public succeedWhenBlockPresent(blockType: server.BlockType | string, blockLocation: server.Vector3, isPresent?: boolean): void;
   public succeedWhenEntityHasComponent(entityTypeIdentifier: string, componentIdentifier: string, blockLocation: server.Vector3, hasComponent: boolean): void;
   public succeedWhenEntityPresent(entityTypeIdentifier: string, blockLocation: server.Vector3, isPresent?: boolean): void;
   public triggerInternalBlockEvent(blockLocation: server.Vector3, event: string, eventParameters?: Array<number>): void;
   public until(callback: ()=>void): Promise<void>;
   public walkTo(mob: server.Entity, blockLocation: server.Vector3, speedModifier?: number): void;
   public walkToLocation(mob: server.Entity, location: server.Vector3, speedModifier?: number): void;
   public worldBlockLocation(relativeBlockLocation: server.Vector3): server.Vector3;
   public worldLocation(relativeLocation: server.Vector3): server.Vector3;
   private constructor();
}



export function getPlayerSkin(player: server.Player): PlayerSkinData;
export function register(testClassName: string, testName: string, testFunction: (arg0: Test)=>void): RegistrationBuilder;
export function registerAsync(testClassName: string, testName: string, testFunction: (arg0: Test)=>Promise<void>): RegistrationBuilder;
export function setAfterBatchCallback(batchName: string, batchCallback: ()=>void): void;
export function setBeforeBatchCallback(batchName: string, batchCallback: ()=>void): void;
export function spawnSimulatedPlayer(location: server.DimensionLocation, name: string, gameMode?: server.GameMode): SimulatedPlayer;

//@ts-ignore
export class GameTestCompletedError extends Error {
   public readonly reason: GameTestCompletedErrorReason;
   private constructor();
}
//@ts-ignore
export class GameTestError extends Error {
   public readonly context?: GameTestErrorContext;
   public readonly messageParameters: Array<string>;
   public readonly type: GameTestErrorType;
   private constructor();
}