"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = exports.MemoryCard = exports.FileBox = exports.log = void 0;
const brolog_1 = require("brolog");
Object.defineProperty(exports, "log", { enumerable: true, get: function () { return brolog_1.log; } });
const file_box_1 = require("file-box");
Object.defineProperty(exports, "FileBox", { enumerable: true, get: function () { return file_box_1.FileBox; } });
const memory_card_1 = require("memory-card");
Object.defineProperty(exports, "MemoryCard", { enumerable: true, get: function () { return memory_card_1.MemoryCard; } });
const version_1 = require("./version");
Object.defineProperty(exports, "VERSION", { enumerable: true, get: function () { return version_1.VERSION; } });
const logLevel = process.env.WECHATY_LOG;
if (logLevel) {
    brolog_1.log.level(logLevel.toLowerCase());
    brolog_1.log.silly('Puppet', 'Config: WECHATY_LOG set level to %s', logLevel);
}
//# sourceMappingURL=config.js.map