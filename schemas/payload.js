"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadType = void 0;
/**
 * Huan(202008): Like the GRPC, we must not change the number below.
 *  When we are adding new types, just increase the maximum number by +1!
 */
var PayloadType;
(function (PayloadType) {
    PayloadType[PayloadType["Unknown"] = 0] = "Unknown";
    PayloadType[PayloadType["Message"] = 1] = "Message";
    PayloadType[PayloadType["Contact"] = 2] = "Contact";
    PayloadType[PayloadType["Room"] = 3] = "Room";
    PayloadType[PayloadType["RoomMember"] = 4] = "RoomMember";
    PayloadType[PayloadType["Friendship"] = 5] = "Friendship";
})(PayloadType = exports.PayloadType || (exports.PayloadType = {}));
//# sourceMappingURL=payload.js.map