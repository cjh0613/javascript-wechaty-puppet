export interface RoomMemberQueryFilter {
    name?: string;
    roomAlias?: string;
    contactAlias?: string;
}
export interface RoomQueryFilter {
    id?: string;
    topic?: string | RegExp;
}
export interface RoomPayload {
    id: string;
    topic: string;
    avatar?: string;
    memberIdList: string[];
    ownerId?: string;
    adminIdList: string[];
}
export interface RoomMemberPayload {
    id: string;
    roomAlias?: string;
    inviterId?: string;
    avatar: string;
    name: string;
}
/** @hidden */
export declare type RoomPayloadFilterFunction = (payload: RoomPayload) => boolean;
/** @hidden */
export declare type RoomPayloadFilterFactory = (query: RoomQueryFilter) => RoomPayloadFilterFunction;
//# sourceMappingURL=room.d.ts.map