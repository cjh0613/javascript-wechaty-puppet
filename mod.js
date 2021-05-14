"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Puppet = exports.log = exports.VERSION = exports.MemoryCard = exports.FileBox = exports.YOU = exports.PUPPET_EVENT_DICT = exports.CHAT_EVENT_DICT = exports.PayloadType = exports.throwUnsupportedError = exports.MessageType = exports.ImageType = exports.FriendshipSceneType = exports.FriendshipType = exports.ScanStatus = exports.ContactType = exports.ContactGender = void 0;
var contact_1 = require("./schemas/contact");
Object.defineProperty(exports, "ContactGender", { enumerable: true, get: function () { return contact_1.ContactGender; } });
Object.defineProperty(exports, "ContactType", { enumerable: true, get: function () { return contact_1.ContactType; } });
var event_1 = require("./schemas/event");
Object.defineProperty(exports, "ScanStatus", { enumerable: true, get: function () { return event_1.ScanStatus; } });
var friendship_1 = require("./schemas/friendship");
Object.defineProperty(exports, "FriendshipType", { enumerable: true, get: function () { return friendship_1.FriendshipType; } });
Object.defineProperty(exports, "FriendshipSceneType", { enumerable: true, get: function () { return friendship_1.FriendshipSceneType; } });
var image_1 = require("./schemas/image");
Object.defineProperty(exports, "ImageType", { enumerable: true, get: function () { return image_1.ImageType; } });
var message_1 = require("./schemas/message");
Object.defineProperty(exports, "MessageType", { enumerable: true, get: function () { return message_1.MessageType; } });
var throw_unsupported_error_1 = require("./throw-unsupported-error");
Object.defineProperty(exports, "throwUnsupportedError", { enumerable: true, get: function () { return throw_unsupported_error_1.throwUnsupportedError; } });
var payload_1 = require("./schemas/payload");
Object.defineProperty(exports, "PayloadType", { enumerable: true, get: function () { return payload_1.PayloadType; } });
var puppet_1 = require("./schemas/puppet");
// PuppetQRCodeScanEvent,
// PuppetRoomInviteEvent,
// PuppetRoomJoinEvent,
// PuppetRoomLeaveEvent,
// PuppetRoomTopicEvent,
// Receiver,
/**
 * Huan(202003): XXX_DICT
 *  The following two data structure is for the downstream
 *  to get a array of event string list.
 */
Object.defineProperty(exports, "CHAT_EVENT_DICT", { enumerable: true, get: function () { return puppet_1.CHAT_EVENT_DICT; } });
Object.defineProperty(exports, "PUPPET_EVENT_DICT", { enumerable: true, get: function () { return puppet_1.PUPPET_EVENT_DICT; } });
Object.defineProperty(exports, "YOU", { enumerable: true, get: function () { return puppet_1.YOU; } });
var config_1 = require("./config");
Object.defineProperty(exports, "FileBox", { enumerable: true, get: function () { return config_1.FileBox; } });
Object.defineProperty(exports, "MemoryCard", { enumerable: true, get: function () { return config_1.MemoryCard; } });
Object.defineProperty(exports, "VERSION", { enumerable: true, get: function () { return config_1.VERSION; } });
Object.defineProperty(exports, "log", { enumerable: true, get: function () { return config_1.log; } });
var puppet_2 = require("./puppet");
Object.defineProperty(exports, "Puppet", { enumerable: true, get: function () { return puppet_2.Puppet; } });
//# sourceMappingURL=mod.js.map