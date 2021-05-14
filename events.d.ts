import TypedEventEmitter from 'typed-emitter';
import { EventDirtyPayload, EventDongPayload, EventErrorPayload, EventFriendshipPayload, EventLoginPayload, EventLogoutPayload, EventMessagePayload, EventResetPayload, EventRoomJoinPayload, EventRoomLeavePayload, EventRoomTopicPayload, EventRoomInvitePayload, EventScanPayload, EventReadyPayload, EventHeartbeatPayload } from './schemas/event';
export declare type PuppetDirtyListener = (payload: EventDirtyPayload) => void;
export declare type PuppetDongListener = (payload: EventDongPayload) => void;
export declare type PuppetErrorListener = (payload: EventErrorPayload) => void;
export declare type PuppetFriendshipListener = (payload: EventFriendshipPayload) => void;
export declare type PuppetHeartbeatListener = (payload: EventHeartbeatPayload) => void;
export declare type PuppetLoginListener = (payload: EventLoginPayload) => void;
export declare type PuppetLogoutListener = (payload: EventLogoutPayload) => void;
export declare type PuppetMessageListener = (payload: EventMessagePayload) => void;
export declare type PuppetReadyListener = (payload: EventReadyPayload) => void;
export declare type PuppetResetListener = (payload: EventResetPayload) => void;
export declare type PuppetRoomInviteListener = (payload: EventRoomInvitePayload) => void;
export declare type PuppetRoomJoinListener = (payload: EventRoomJoinPayload) => void;
export declare type PuppetRoomLeaveListener = (payload: EventRoomLeavePayload) => void;
export declare type PuppetRoomTopicListener = (payload: EventRoomTopicPayload) => void;
export declare type PuppetScanListener = (payload: EventScanPayload) => void;
interface PuppetEvents {
    dirty: PuppetDirtyListener;
    dong: PuppetDongListener;
    error: PuppetErrorListener;
    friendship: PuppetFriendshipListener;
    heartbeat: PuppetHeartbeatListener;
    login: PuppetLoginListener;
    logout: PuppetLogoutListener;
    message: PuppetMessageListener;
    ready: PuppetReadyListener;
    reset: PuppetResetListener;
    'room-invite': PuppetRoomInviteListener;
    'room-join': PuppetRoomJoinListener;
    'room-leave': PuppetRoomLeaveListener;
    'room-topic': PuppetRoomTopicListener;
    scan: PuppetScanListener;
}
export declare const PuppetEventEmitter: new () => TypedEventEmitter<PuppetEvents>;
export {};
//# sourceMappingURL=events.d.ts.map