"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WechatMessageType = exports.WechatAppMessageType = exports.MessageType = void 0;
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Unknown"] = 0] = "Unknown";
    MessageType[MessageType["Attachment"] = 1] = "Attachment";
    MessageType[MessageType["Audio"] = 2] = "Audio";
    MessageType[MessageType["Contact"] = 3] = "Contact";
    MessageType[MessageType["ChatHistory"] = 4] = "ChatHistory";
    MessageType[MessageType["Emoticon"] = 5] = "Emoticon";
    MessageType[MessageType["Image"] = 6] = "Image";
    MessageType[MessageType["Text"] = 7] = "Text";
    MessageType[MessageType["Location"] = 8] = "Location";
    MessageType[MessageType["MiniProgram"] = 9] = "MiniProgram";
    MessageType[MessageType["GroupNote"] = 10] = "GroupNote";
    MessageType[MessageType["Transfer"] = 11] = "Transfer";
    MessageType[MessageType["RedEnvelope"] = 12] = "RedEnvelope";
    MessageType[MessageType["Recalled"] = 13] = "Recalled";
    MessageType[MessageType["Url"] = 14] = "Url";
    MessageType[MessageType["Video"] = 15] = "Video";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
/**
 * Huan(202001): Wechat Server Message Type Value (to be confirmed.)
 */
var WechatAppMessageType;
(function (WechatAppMessageType) {
    WechatAppMessageType[WechatAppMessageType["Text"] = 1] = "Text";
    WechatAppMessageType[WechatAppMessageType["Img"] = 2] = "Img";
    WechatAppMessageType[WechatAppMessageType["Audio"] = 3] = "Audio";
    WechatAppMessageType[WechatAppMessageType["Video"] = 4] = "Video";
    WechatAppMessageType[WechatAppMessageType["Url"] = 5] = "Url";
    WechatAppMessageType[WechatAppMessageType["Attach"] = 6] = "Attach";
    WechatAppMessageType[WechatAppMessageType["Open"] = 7] = "Open";
    WechatAppMessageType[WechatAppMessageType["Emoji"] = 8] = "Emoji";
    WechatAppMessageType[WechatAppMessageType["VoiceRemind"] = 9] = "VoiceRemind";
    WechatAppMessageType[WechatAppMessageType["ScanGood"] = 10] = "ScanGood";
    WechatAppMessageType[WechatAppMessageType["Good"] = 13] = "Good";
    WechatAppMessageType[WechatAppMessageType["Emotion"] = 15] = "Emotion";
    WechatAppMessageType[WechatAppMessageType["CardTicket"] = 16] = "CardTicket";
    WechatAppMessageType[WechatAppMessageType["RealtimeShareLocation"] = 17] = "RealtimeShareLocation";
    WechatAppMessageType[WechatAppMessageType["ChatHistory"] = 19] = "ChatHistory";
    WechatAppMessageType[WechatAppMessageType["MiniProgram"] = 33] = "MiniProgram";
    WechatAppMessageType[WechatAppMessageType["Transfers"] = 2000] = "Transfers";
    WechatAppMessageType[WechatAppMessageType["RedEnvelopes"] = 2001] = "RedEnvelopes";
    WechatAppMessageType[WechatAppMessageType["ReaderType"] = 100001] = "ReaderType";
})(WechatAppMessageType = exports.WechatAppMessageType || (exports.WechatAppMessageType = {}));
/**
 * Wechat Server Message Type Value (to be confirmed)
 *  Huan(202001): The Windows(PC) DLL match the following numbers.
 */
var WechatMessageType;
(function (WechatMessageType) {
    WechatMessageType[WechatMessageType["Text"] = 1] = "Text";
    WechatMessageType[WechatMessageType["Image"] = 3] = "Image";
    WechatMessageType[WechatMessageType["Voice"] = 34] = "Voice";
    WechatMessageType[WechatMessageType["VerifyMsg"] = 37] = "VerifyMsg";
    WechatMessageType[WechatMessageType["PossibleFriendMsg"] = 40] = "PossibleFriendMsg";
    WechatMessageType[WechatMessageType["ShareCard"] = 42] = "ShareCard";
    WechatMessageType[WechatMessageType["Video"] = 43] = "Video";
    WechatMessageType[WechatMessageType["Emoticon"] = 47] = "Emoticon";
    WechatMessageType[WechatMessageType["Location"] = 48] = "Location";
    WechatMessageType[WechatMessageType["App"] = 49] = "App";
    WechatMessageType[WechatMessageType["VoipMsg"] = 50] = "VoipMsg";
    WechatMessageType[WechatMessageType["StatusNotify"] = 51] = "StatusNotify";
    WechatMessageType[WechatMessageType["VoipNotify"] = 52] = "VoipNotify";
    WechatMessageType[WechatMessageType["VoipInvite"] = 53] = "VoipInvite";
    WechatMessageType[WechatMessageType["MicroVideo"] = 62] = "MicroVideo";
    WechatMessageType[WechatMessageType["Transfer"] = 2000] = "Transfer";
    WechatMessageType[WechatMessageType["RedEnvelope"] = 2001] = "RedEnvelope";
    WechatMessageType[WechatMessageType["MiniProgram"] = 2002] = "MiniProgram";
    WechatMessageType[WechatMessageType["GroupInvite"] = 2003] = "GroupInvite";
    WechatMessageType[WechatMessageType["File"] = 2004] = "File";
    WechatMessageType[WechatMessageType["SysNotice"] = 9999] = "SysNotice";
    WechatMessageType[WechatMessageType["Sys"] = 10000] = "Sys";
    WechatMessageType[WechatMessageType["Recalled"] = 10002] = "Recalled";
})(WechatMessageType = exports.WechatMessageType || (exports.WechatMessageType = {}));
//# sourceMappingURL=message.js.map