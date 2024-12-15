// Change every time you made a changes to this protocol
export const PROTOCOL_ID = 2;

// Packet Types, do not remove packet types only comment them and keep their unique Id so we know what ids are or was in use
export enum PacketTypes {
    // Flow Report Types
    StartUp = 0,
    Ready = 1,
    EndOfSession = 2,

    // Flow Warning Types
    // FatalError = 3,
    Warning = 4,
    BlocksData = 5,
    ItemsData = 6,
    ErrorMessages = 8,
}
export type PacketBodyType = {
    [PacketTypes.StartUp]: StartUpPacketData;
    [PacketTypes.Ready]: ReadyPacketData;
    [PacketTypes.EndOfSession]: EndOfSessionPacketData;
    
    [PacketTypes.Warning]: WarningPacketData;
    [PacketTypes.BlocksData]: BlocksDataPacketData;
    [PacketTypes.ItemsData]: ItemsDataPacketData;
    [PacketTypes.ErrorMessages]: ErrorMessagesDataPacketData;
}
export interface ErrorMessagesDataPacketData{
    general: {
        message: string | null,
        type: string | null,
        code: string
    }[],
    reports: {
        message: string | null,
        type: string | null,
        code: string
    }[]
}
export interface BlocksDataPacketData{
    tags: string[];
    blocks: Record<string,{
        tags: number[];
    }>;
}
export interface ItemsDataPacketData{
    tags: string[];
    items: Record<string,{
        tags: number[];
        maxStack: number;
        components: Record<string, unknown>;
    }>;
}
// Base Packet Payload
export interface IPacket<T extends keyof PacketBodyType> {
    type: T;
    body: PacketBodyType[this["type"]];
}
export function IsPacketTypeOf<T extends keyof PacketBodyType>(packet: unknown, type:  T): packet is IPacket<T> {
    return (typeof packet === "object") && (packet as {type: unknown})?.type === type;
}

// Do not change this Packet!!!! Critical packet for handshake meaning,
// should be same across all protocol versions
export interface StartUpPacketData {
    protocolId: number;
}

export interface ReadyPacketData {
    startUpTime: number;
    loadTimeSpan: number;
}

export interface EndOfSessionPacketData {
    exitCode: number;
    totalTime: number;
    numberOfPosts: number;
}

export interface WarningPacketData {
    message: string;
    severity: string;
}