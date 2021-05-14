#!/usr/bin/env ts-node
"use strict";
/* eslint @typescript-eslint/no-unused-vars: off */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blue_tape_1 = __importDefault(require("blue-tape"));
const sinon_1 = __importDefault(require("sinon"));
const config_1 = require("./config");
const contact_1 = require("./schemas/contact");
const message_1 = require("./schemas/message");
/**
 * The Fixture
 */
const puppet_test_1 = require("../tests/fixtures/puppet-test/puppet-test");
blue_tape_1.default('contactQueryFilterFunction()', async (t) => {
    const TEXT_REGEX = 'query by regex';
    const TEXT_TEXT = 'query by text';
    const PAYLOAD_LIST = [
        {
            alias: TEXT_TEXT,
            avatar: 'mock',
            gender: contact_1.ContactGender.Unknown,
            id: 'id1',
            name: TEXT_REGEX,
            phone: [],
            type: contact_1.ContactType.Individual,
        },
        {
            alias: TEXT_REGEX,
            avatar: 'mock',
            gender: contact_1.ContactGender.Unknown,
            id: 'id2',
            name: TEXT_TEXT,
            phone: [],
            type: contact_1.ContactType.Individual,
        },
        {
            alias: TEXT_TEXT,
            avatar: 'mock',
            gender: contact_1.ContactGender.Unknown,
            id: 'id3',
            name: TEXT_REGEX,
            phone: [],
            type: contact_1.ContactType.Individual,
        },
        {
            alias: TEXT_REGEX,
            avatar: 'mock',
            gender: contact_1.ContactGender.Unknown,
            id: 'id4',
            name: TEXT_TEXT,
            phone: [],
            type: contact_1.ContactType.Individual,
        },
    ];
    const REGEX_VALUE = new RegExp(TEXT_REGEX);
    const TEXT_VALUE = TEXT_TEXT;
    const puppet = new puppet_test_1.PuppetTest();
    t.test('filter name by regex', async (t) => {
        const QUERY = { name: REGEX_VALUE };
        const ID_LIST = ['id1', 'id3'];
        const func = puppet.contactQueryFilterFactory(QUERY);
        const idList = PAYLOAD_LIST.filter(func).map(payload => payload.id);
        t.deepEqual(idList, ID_LIST, 'should filter the query to id list');
    });
    t.test('filter name by text', async (t) => {
        const QUERY = { name: TEXT_VALUE };
        const ID_LIST = ['id2', 'id4'];
        const func = puppet.contactQueryFilterFactory(QUERY);
        const idList = PAYLOAD_LIST.filter(func).map(payload => payload.id);
        t.deepEqual(idList, ID_LIST, 'should filter query to id list');
    });
    t.test('filter alias by regex', async (t) => {
        const QUERY = { alias: REGEX_VALUE };
        const ID_LIST = ['id2', 'id4'];
        const func = puppet.contactQueryFilterFactory(QUERY);
        const idList = PAYLOAD_LIST.filter(func).map(payload => payload.id);
        t.deepEqual(idList, ID_LIST, 'should filter query to id list');
    });
    t.test('filter alias by text', async (t) => {
        const QUERY = { alias: TEXT_VALUE };
        const ID_LIST = ['id1', 'id3'];
        const func = puppet.contactQueryFilterFactory(QUERY);
        const idList = PAYLOAD_LIST.filter(func).map(payload => payload.id);
        t.deepEqual(idList, ID_LIST, 'should filter query to id list');
    });
    t.test('filter contact existing id', async (t) => {
        const QUERY = { id: 'id1' };
        const ID_LIST = ['id1'];
        const func = puppet.contactQueryFilterFactory(QUERY);
        const idList = PAYLOAD_LIST.filter(func).map(payload => payload.id);
        t.deepEqual(idList, ID_LIST, 'should filter query to id list by id');
    });
    t.test('filter contact non-existing id', async (t) => {
        const QUERY = { id: 'fasdfsdfasfas' };
        const ID_LIST = [];
        const func = puppet.contactQueryFilterFactory(QUERY);
        const idList = PAYLOAD_LIST.filter(func).map(payload => payload.id);
        t.deepEqual(idList, ID_LIST, 'should filter query to id list by id');
    });
    t.test('throw if filter key unknown', async (t) => {
        t.throws(() => puppet.contactQueryFilterFactory({ xxxx: 'test' }), 'should throw');
    });
    t.test('throw if filter key are more than one', async (t) => {
        t.throws(() => puppet.contactQueryFilterFactory({
            alias: 'test',
            name: 'test',
        }), 'should throw');
    });
});
blue_tape_1.default('roomQueryFilterFunction()', async (t) => {
    const TEXT_REGEX = 'query by regex';
    const TEXT_TEXT = 'query by text';
    const PAYLOAD_LIST = [
        {
            adminIdList: [],
            id: 'id1',
            memberIdList: [],
            topic: TEXT_TEXT,
        },
        {
            adminIdList: [],
            id: 'id2',
            memberIdList: [],
            topic: TEXT_REGEX,
        },
        {
            adminIdList: [],
            id: 'id3',
            memberIdList: [],
            topic: TEXT_TEXT,
        },
        {
            adminIdList: [],
            id: 'id4',
            memberIdList: [],
            topic: TEXT_REGEX,
        },
    ];
    const REGEX_VALUE = new RegExp(TEXT_REGEX);
    const TEXT_VALUE = TEXT_TEXT;
    const puppet = new puppet_test_1.PuppetTest();
    t.test('filter name by regex', async (t) => {
        const QUERY = { topic: REGEX_VALUE };
        const ID_LIST = ['id2', 'id4'];
        const func = puppet.roomQueryFilterFactory(QUERY);
        const idList = PAYLOAD_LIST.filter(func).map(payload => payload.id);
        t.deepEqual(idList, ID_LIST, 'should filter the query to id list');
    });
    t.test('filter name by text', async (t) => {
        const QUERY = { topic: TEXT_VALUE };
        const ID_LIST = ['id1', 'id3'];
        const func = puppet.roomQueryFilterFactory(QUERY);
        const idList = PAYLOAD_LIST.filter(func).map(payload => payload.id);
        t.deepEqual(idList, ID_LIST, 'should filter query to id list by text');
    });
    t.test('filter name by existing id', async (t) => {
        const QUERY = { id: 'id4' };
        const ID_LIST = ['id4'];
        const func = puppet.roomQueryFilterFactory(QUERY);
        const idList = PAYLOAD_LIST.filter(func).map(payload => payload.id);
        t.deepEqual(idList, ID_LIST, 'should filter query to id list by id');
    });
    t.test('filter name by non-existing id', async (t) => {
        const QUERY = { id: 'fsdfasfasfsdfsaf' };
        const ID_LIST = [];
        const func = puppet.roomQueryFilterFactory(QUERY);
        const idList = PAYLOAD_LIST.filter(func).map(payload => payload.id);
        t.deepEqual(idList, ID_LIST, 'should filter query to id list by id');
    });
    t.test('throw if filter key unknown', async (t) => {
        t.throws(() => puppet.roomQueryFilterFactory({ xxx: 'test' }), 'should throw');
    });
    t.test('throw if filter key are more than one', async (t) => {
        t.throws(() => puppet.roomQueryFilterFactory({
            alias: 'test',
            topic: 'test',
        }), 'should throw');
    });
});
blue_tape_1.default('contactRoomList()', async (t) => {
    const puppet = new puppet_test_1.PuppetTest();
    const sandbox = sinon_1.default.createSandbox();
    const CONTACT_ID_1 = 'contact-id-1';
    const CONTACT_ID_2 = 'contact-id-2';
    const CONTACT_ID_3 = 'contact-id-3';
    const ROOM_ID_1 = 'room-id-1';
    const ROOM_ID_2 = 'room-id-2';
    const ROOM_PAYLOAD_LIST = [
        {
            adminIdList: [],
            id: ROOM_ID_1,
            memberIdList: [
                CONTACT_ID_1,
                CONTACT_ID_2,
            ],
            topic: 'room-topic-1',
        },
        {
            adminIdList: [],
            id: ROOM_ID_2,
            memberIdList: [
                CONTACT_ID_2,
                CONTACT_ID_3,
            ],
            topic: 'room-topic-2',
        },
    ];
    sandbox.stub(puppet, 'roomList').resolves(ROOM_PAYLOAD_LIST.map(payload => payload.id));
    sandbox.stub(puppet, 'roomPayload').callsFake(async (roomId) => {
        for (const payload of ROOM_PAYLOAD_LIST) {
            if (payload.id === roomId) {
                return payload;
            }
        }
        throw new Error('no payload for room id ' + roomId);
    });
    const roomIdList1 = await puppet.contactRoomList(CONTACT_ID_1);
    const roomIdList2 = await puppet.contactRoomList(CONTACT_ID_2);
    const roomIdList3 = await puppet.contactRoomList(CONTACT_ID_3);
    t.deepEqual(roomIdList1, [ROOM_ID_1], 'should get room 1 for contact 1');
    t.deepEqual(roomIdList2, [ROOM_ID_1, ROOM_ID_2], 'should get room 1&2 for contact 2');
    t.deepEqual(roomIdList3, [ROOM_ID_2], 'should get room 2 for contact 3');
});
blue_tape_1.default('reset event throttle for reset()', async (t) => {
    const puppet = new puppet_test_1.PuppetTest({});
    const sandbox = sinon_1.default.createSandbox();
    const timer = sandbox.useFakeTimers();
    const reset = sandbox.stub(puppet, 'reset');
    await puppet.start();
    puppet.emit('reset', { data: 'testing' });
    t.equal(reset.callCount, 1, 'should call reset() immediately');
    timer.tick(1000 - 1);
    puppet.emit('reset', { data: 'testing 2' });
    t.equal(reset.callCount, 1, 'should not call reset() again in the following 1 second');
    timer.tick(1000 + 1);
    puppet.emit('reset', { data: 'testing 2' });
    t.equal(reset.callCount, 2, 'should call reset() again after 1 second');
    sandbox.restore();
});
blue_tape_1.default('setMemory() memory without name', async (t) => {
    const puppet = new puppet_test_1.PuppetTest();
    const memory = new config_1.MemoryCard();
    t.doesNotThrow(() => puppet.setMemory(memory), 'should not throw when set a no-name memory first time ');
    t.doesNotThrow(() => puppet.setMemory(memory), 'should not throw when set a no-name memory second time');
});
blue_tape_1.default('setMemory() memory with a name', async (t) => {
    const puppet = new puppet_test_1.PuppetTest();
    const memory = new config_1.MemoryCard({ name: 'name' });
    t.doesNotThrow(() => puppet.setMemory(memory), 'should not throw when set a named memory first time ');
    t.throws(() => puppet.setMemory(memory), 'should throw when set a named memory second time');
});
blue_tape_1.default('messageQueryFilterFactory() one condition', async (t) => {
    const EXPECTED_TEXT1 = 'text';
    const EXPECTED_TEXT2 = 'regexp';
    const EXPECTED_TEXT3 = 'fdsafasdfsdakljhj;lds';
    const EXPECTED_ID1 = 'id1';
    const TEXT_QUERY_TEXT = EXPECTED_TEXT1;
    const TEXT_QUERY_ID = EXPECTED_ID1;
    const TEXT_QUERY_RE = new RegExp(EXPECTED_TEXT2);
    const QUERY_TEXT = {
        text: TEXT_QUERY_TEXT,
    };
    const QUERY_RE = {
        text: TEXT_QUERY_RE,
    };
    const QUERY_ID = {
        id: TEXT_QUERY_ID,
    };
    const PAYLOAD_LIST = [
        {
            id: EXPECTED_ID1,
            text: EXPECTED_TEXT1,
        },
        {
            text: EXPECTED_TEXT2,
        },
        {
            text: EXPECTED_TEXT3,
        },
    ];
    const puppet = new puppet_test_1.PuppetTest();
    let filterFuncText;
    let resultPayload;
    filterFuncText = puppet.messageQueryFilterFactory(QUERY_TEXT);
    resultPayload = PAYLOAD_LIST.filter(filterFuncText);
    t.equal(resultPayload.length, 1, 'should get one result');
    t.equal(resultPayload[0].text, EXPECTED_TEXT1, 'should get text1');
    filterFuncText = puppet.messageQueryFilterFactory(QUERY_RE);
    resultPayload = PAYLOAD_LIST.filter(filterFuncText);
    t.equal(resultPayload.length, 1, 'should get one result');
    t.equal(resultPayload[0].text, EXPECTED_TEXT2, 'should get text2');
    filterFuncText = puppet.messageQueryFilterFactory(QUERY_ID);
    resultPayload = PAYLOAD_LIST.filter(filterFuncText);
    t.equal(resultPayload.length, 1, 'should get one result');
    t.equal(resultPayload[0].id, EXPECTED_ID1, 'should get id1');
});
blue_tape_1.default('messageQueryFilterFactory() two condition', async (t) => {
    const EXPECTED_TEXT_DATA = 'data';
    const EXPECTED_TEXT_LINK = 'https://google.com';
    const EXPECTED_TYPE_URL = message_1.MessageType.Url;
    const EXPECTED_TYPE_TEXT = message_1.MessageType.Text;
    const QUERY_TEXT = {
        text: EXPECTED_TEXT_DATA,
    };
    const QUERY_TYPE = {
        type: EXPECTED_TYPE_URL,
    };
    const QUERY_TYPE_TEXT = {
        text: EXPECTED_TEXT_DATA,
        type: EXPECTED_TYPE_URL,
    };
    const PAYLOAD_LIST = [
        {
            text: EXPECTED_TEXT_DATA,
            type: message_1.MessageType.Text,
        },
        {
            text: EXPECTED_TEXT_DATA,
            type: message_1.MessageType.Url,
        },
        {
            text: EXPECTED_TEXT_LINK,
            type: message_1.MessageType.Text,
        },
        {
            text: EXPECTED_TEXT_LINK,
            type: message_1.MessageType.Url,
        },
    ];
    const puppet = new puppet_test_1.PuppetTest();
    let filterFuncText;
    let resultPayload;
    filterFuncText = puppet.messageQueryFilterFactory(QUERY_TEXT);
    resultPayload = PAYLOAD_LIST.filter(filterFuncText);
    t.equal(resultPayload.length, 2, 'should get two result');
    t.equal(resultPayload[0].text, EXPECTED_TEXT_DATA, 'should get text data');
    t.equal(resultPayload[0].type, EXPECTED_TYPE_TEXT, 'should get type text');
    t.equal(resultPayload[1].text, EXPECTED_TEXT_DATA, 'should get text data');
    t.equal(resultPayload[1].type, EXPECTED_TYPE_URL, 'should get type url');
    filterFuncText = puppet.messageQueryFilterFactory(QUERY_TYPE);
    resultPayload = PAYLOAD_LIST.filter(filterFuncText);
    t.equal(resultPayload.length, 2, 'should get two result');
    t.equal(resultPayload[0].text, EXPECTED_TEXT_DATA, 'should get text data');
    t.equal(resultPayload[0].type, EXPECTED_TYPE_URL, 'should get type url');
    t.equal(resultPayload[1].text, EXPECTED_TEXT_LINK, 'should get text link');
    t.equal(resultPayload[1].type, EXPECTED_TYPE_URL, 'should get type url ');
    filterFuncText = puppet.messageQueryFilterFactory(QUERY_TYPE_TEXT);
    resultPayload = PAYLOAD_LIST.filter(filterFuncText);
    t.equal(resultPayload.length, 1, 'should get one result');
    t.equal(resultPayload[0].text, EXPECTED_TEXT_DATA, 'should get text data');
    t.equal(resultPayload[0].type, EXPECTED_TYPE_URL, 'should get type url');
});
blue_tape_1.default('name()', async (t) => {
    const puppet = new puppet_test_1.PuppetTest();
    const name = puppet.name();
    const EXPECTED_NAME = 'puppet-test';
    t.equal(name, EXPECTED_NAME, 'should get the child class package name');
});
blue_tape_1.default('version()', async (t) => {
    const puppet = new puppet_test_1.PuppetTest();
    const version = puppet.version();
    const EXPECTED_VERSION = '1.0.0';
    t.equal(version, EXPECTED_VERSION, 'should get the child class package version');
});
//# sourceMappingURL=puppet.spec.js.map