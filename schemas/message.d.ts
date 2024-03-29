export declare enum MessageType {
    Unknown = 0,
    Attachment = 1,
    Audio = 2,
    Contact = 3,
    ChatHistory = 4,
    Emoticon = 5,
    Image = 6,
    Text = 7,
    Location = 8,
    MiniProgram = 9,
    GroupNote = 10,
    Transfer = 11,
    RedEnvelope = 12,
    Recalled = 13,
    Url = 14,
    Video = 15
}
/**
 * Huan(202001): Wechat Server Message Type Value (to be confirmed.)
 */
export declare enum WechatAppMessageType {
    Text = 1,
    Img = 2,
    Audio = 3,
    Video = 4,
    Url = 5,
    Attach = 6,
    Open = 7,
    Emoji = 8,
    VoiceRemind = 9,
    ScanGood = 10,
    Good = 13,
    Emotion = 15,
    CardTicket = 16,
    RealtimeShareLocation = 17,
    ChatHistory = 19,
    MiniProgram = 33,
    Transfers = 2000,
    RedEnvelopes = 2001,
    ReaderType = 100001
}
/**
 * Wechat Server Message Type Value (to be confirmed)
 *  Huan(202001): The Windows(PC) DLL match the following numbers.
 */
export declare enum WechatMessageType {
    Text = 1,
    Image = 3,
    Voice = 34,
    VerifyMsg = 37,
    PossibleFriendMsg = 40,
    ShareCard = 42,
    Video = 43,
    Emoticon = 47,
    Location = 48,
    App = 49,
    VoipMsg = 50,
    StatusNotify = 51,
    VoipNotify = 52,
    VoipInvite = 53,
    MicroVideo = 62,
    Transfer = 2000,
    RedEnvelope = 2001,
    MiniProgram = 2002,
    GroupInvite = 2003,
    File = 2004,
    SysNotice = 9999,
    Sys = 10000,
    Recalled = 10002
}
/** @hidden */
export interface MessagePayloadBase {
    id: string;
    filename?: string;
    text?: string;
    timestamp: number;
    type: MessageType;
}
/** @hidden */
export interface MessagePayloadRoom {
    fromId?: string;
    mentionIdList?: string[];
    roomId: string;
    toId?: string;
}
/** @hidden */
export interface MessagePayloadTo {
    fromId: string;
    roomId?: string;
    toId: string;
}
export declare type MessagePayload = MessagePayloadBase & (MessagePayloadRoom | MessagePayloadTo);
export interface MessageQueryFilter {
    fromId?: string;
    id?: string;
    roomId?: string;
    text?: string | RegExp;
    toId?: string;
    type?: MessageType;
}
/** @hidden */
export declare type MessagePayloadFilterFunction = (payload: MessagePayload) => boolean;
/** @hidden */
export declare type MessagePayloadFilterFactory = (query: MessageQueryFilter) => MessagePayloadFilterFunction;
//# sourceMappingURL=message.d.ts.map