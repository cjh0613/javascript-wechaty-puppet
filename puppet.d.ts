/**
 *   Wechaty - https://github.com/chatie/wechaty
 *
 *   @copyright 2016-2018 Huan LI <zixia@zixia.net>
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */
import QuickLru from 'quick-lru';
import { Watchdog } from 'watchdog';
import { Constructor } from 'clone-class';
import { StateSwitch } from 'state-switch';
import { FileBox, MemoryCard } from './config';
import { ContactPayload, ContactPayloadFilterFunction, ContactQueryFilter } from './schemas/contact';
import { FriendshipAddOptions, FriendshipPayload, FriendshipSearchQueryFilter } from './schemas/friendship';
import { ImageType } from './schemas/image';
import { MessagePayload, MessagePayloadFilterFunction, MessageQueryFilter } from './schemas/message';
import { RoomMemberPayload, RoomMemberQueryFilter, RoomPayload, RoomPayloadFilterFunction, RoomQueryFilter } from './schemas/room';
import { RoomInvitationPayload } from './schemas/room-invitation';
import { UrlLinkPayload } from './schemas/url-link';
import { MiniProgramPayload } from './schemas/mini-program';
import { PuppetOptions, YOU } from './schemas/puppet';
import { PayloadType } from './schemas/payload';
import { PuppetEventEmitter } from './events';
/**
 *
 * Puppet Base Class
 *
 * See: https://github.com/Chatie/wechaty/wiki/Puppet
 *
 */
export declare abstract class Puppet extends PuppetEventEmitter {
    protected options: PuppetOptions;
    /**
     * Must overwrite by child class to identify their version
     */
    static readonly VERSION: string;
    readonly state: StateSwitch;
    protected readonly cacheContactPayload: QuickLru<string, ContactPayload>;
    protected readonly cacheFriendshipPayload: QuickLru<string, FriendshipPayload>;
    protected readonly cacheMessagePayload: QuickLru<string, MessagePayload>;
    protected readonly cacheRoomPayload: QuickLru<string, RoomPayload>;
    protected readonly cacheRoomMemberPayload: QuickLru<string, RoomMemberPayload>;
    protected readonly cacheRoomInvitationPayload: QuickLru<string, RoomInvitationPayload>;
    protected readonly counter: number;
    protected memory: MemoryCard;
    /**
     * Login-ed User ID
     */
    protected id?: string;
    protected readonly watchdog: Watchdog;
    /**
     * childPkg stores the `package.json` that the NPM module who extends the `Puppet`
     */
    private readonly childPkg;
    /**
     * Throttle Reset Events
     */
    private resetThrottleQueue;
    /**
     *
     *
     * Constructor
     *
     *
     */
    constructor(options?: PuppetOptions);
    toString(): string;
    /**
     * Unref
     */
    unref(): void;
    /**
     * @private
     *
     * For used by Wechaty internal ONLY.
     */
    setMemory(memory: MemoryCard): void;
    /**
     *
     *
     * Start / Stop
     *
     *
     */
    start(): Promise<void>;
    stop(): Promise<void>;
    private feedDog;
    private dogReset;
    private throttleReset;
    /**
     * Huan(201808):
     *  reset() Should not be called directly.
     *  `protected` is for testing, not for the child class.
     *  should use `emit('reset', 'reason')` instead.
     *
     * Huan(202008): Update from protected to private
     */
    private reset;
    /**
     *
     *
     * Login / Logout
     *
     *
     */
    /**
     * Need to be called internaly when the puppet is logined.
     * this method will emit a `login` event
     */
    protected login(userId: string): Promise<void>;
    /**
     * Need to be called internaly/externaly when the puppet need to be logouted
     * this method will emit a `logout` event,
     *
     * Note: must set `this.id = undefined` in this function.
     */
    logout(reason?: string): Promise<void>;
    selfId(): string;
    logonoff(): boolean;
    /**
     *
     *
     * Misc
     *
     *
     */
    /**
     * Check whether the puppet is work property.
     * @returns `false` if something went wrong
     *          'dong' if everything is OK
     */
    abstract ding(data?: string): void;
    /**
     * Get the NPM name of the Puppet
     */
    name(): string;
    /**
     * Get version from the Puppet Implementation
     */
    version(): string;
    /**
     * will be used by semver.satisfied(version, range)
     */
    wechatyVersionRange(strict?: boolean): string;
    /**
     *
     * ContactSelf
     *
     */
    abstract contactSelfName(name: string): Promise<void>;
    abstract contactSelfQRCode(): Promise<string>;
    abstract contactSelfSignature(signature: string): Promise<void>;
    /**
     *
     * Tag
     *  tagContactAdd - add a tag for a Contact. Create it first if it not exist.
     *  tagContactRemove - remove a tag from the Contact
     *  tagContactDelete - delete a tag from Wechat
     *  tagContactList(id) - get tags from a specific Contact
     *  tagContactList() - get tags from all Contacts
     *
     */
    abstract tagContactAdd(tagId: string, contactId: string): Promise<void>;
    abstract tagContactDelete(tagId: string): Promise<void>;
    abstract tagContactList(contactId: string): Promise<string[]>;
    abstract tagContactList(): Promise<string[]>;
    abstract tagContactRemove(tagId: string, contactId: string): Promise<void>;
    /**
     *
     * Contact
     *
     */
    abstract contactAlias(contactId: string): Promise<string>;
    abstract contactAlias(contactId: string, alias: string | null): Promise<void>;
    abstract contactAvatar(contactId: string): Promise<FileBox>;
    abstract contactAvatar(contactId: string, file: FileBox): Promise<void>;
    abstract contactPhone(contactId: string, phoneList: string[]): Promise<void>;
    abstract contactCorporationRemark(contactId: string, corporationRemark: string | null): Promise<void>;
    abstract contactDescription(contactId: string, description: string | null): Promise<void>;
    abstract contactList(): Promise<string[]>;
    protected abstract contactRawPayload(contactId: string): Promise<any>;
    protected abstract contactRawPayloadParser(rawPayload: any): Promise<ContactPayload>;
    contactRoomList(contactId: string): Promise<string[]>;
    contactSearch(query?: string | ContactQueryFilter, searchIdList?: string[]): Promise<string[]>;
    protected contactQueryFilterFactory(query: ContactQueryFilter): ContactPayloadFilterFunction;
    /**
     * Check a Contact Id if it's still valid.
     *  For example: talk to the server, and see if it should be deleted in the local cache.
     */
    contactValidate(contactId: string): Promise<boolean>;
    protected contactPayloadCache(contactId: string): undefined | ContactPayload;
    contactPayload(contactId: string): Promise<ContactPayload>;
    /**
     *
     * Friendship
     *
     */
    abstract friendshipAccept(friendshipId: string): Promise<void>;
    abstract friendshipAdd(contactId: string, option?: FriendshipAddOptions): Promise<void>;
    abstract friendshipSearchPhone(phone: string): Promise<null | string>;
    abstract friendshipSearchWeixin(weixin: string): Promise<null | string>;
    protected abstract friendshipRawPayload(friendshipId: string): Promise<any>;
    protected abstract friendshipRawPayloadParser(rawPayload: any): Promise<FriendshipPayload>;
    friendshipSearch(searchQueryFilter: FriendshipSearchQueryFilter): Promise<string | null>;
    protected friendshipPayloadCache(friendshipId: string): undefined | FriendshipPayload;
    /**
     * Get & Set
     */
    friendshipPayload(friendshipId: string): Promise<FriendshipPayload>;
    friendshipPayload(friendshipId: string, newPayload: FriendshipPayload): Promise<void>;
    /**
     *
     * Conversation
     *
     */
    abstract conversationRead(conversationId: string): Promise<void>;
    /**
     *
     * Message
     *
     */
    abstract messageContact(messageId: string): Promise<string>;
    abstract messageFile(messageId: string): Promise<FileBox>;
    abstract messageImage(messageId: string, imageType: ImageType): Promise<FileBox>;
    abstract messageMiniProgram(messageId: string): Promise<MiniProgramPayload>;
    abstract messageUrl(messageId: string): Promise<UrlLinkPayload>;
    abstract messageForward(conversationId: string, messageId: string): Promise<void | string>;
    abstract messageSendContact(conversationId: string, contactId: string): Promise<void | string>;
    abstract messageSendFile(conversationId: string, file: FileBox): Promise<void | string>;
    abstract messageSendMiniProgram(conversationId: string, miniProgramPayload: MiniProgramPayload): Promise<void | string>;
    abstract messageSendText(conversationId: string, text: string, mentionIdList?: string[]): Promise<void | string>;
    abstract messageSendUrl(conversationId: string, urlLinkPayload: UrlLinkPayload): Promise<void | string>;
    abstract messageRecall(messageId: string): Promise<boolean>;
    protected abstract messageRawPayload(messageId: string): Promise<any>;
    protected abstract messageRawPayloadParser(rawPayload: any): Promise<MessagePayload>;
    protected messagePayloadCache(messageId: string): undefined | MessagePayload;
    messagePayload(messageId: string): Promise<MessagePayload>;
    messageList(): string[];
    messageSearch(query?: MessageQueryFilter): Promise<string[]>;
    protected messageQueryFilterFactory(query: MessageQueryFilter): MessagePayloadFilterFunction;
    /**
     *
     * Room Invitation
     *
     */
    protected roomInvitationPayloadCache(roomInvitationId: string): undefined | RoomInvitationPayload;
    abstract roomInvitationAccept(roomInvitationId: string): Promise<void>;
    protected abstract roomInvitationRawPayload(roomInvitationId: string): Promise<any>;
    protected abstract roomInvitationRawPayloadParser(rawPayload: any): Promise<RoomInvitationPayload>;
    /**
     * Get & Set
     */
    roomInvitationPayload(roomInvitationId: string): Promise<RoomInvitationPayload>;
    roomInvitationPayload(roomInvitationId: string, newPayload: RoomInvitationPayload): Promise<void>;
    /**
     *
     * Room
     *
     */
    abstract roomAdd(roomId: string, contactId: string): Promise<void>;
    abstract roomAvatar(roomId: string): Promise<FileBox>;
    abstract roomCreate(contactIdList: string[], topic?: string): Promise<string>;
    abstract roomDel(roomId: string, contactId: string): Promise<void>;
    abstract roomList(): Promise<string[]>;
    abstract roomQRCode(roomId: string): Promise<string>;
    abstract roomQuit(roomId: string): Promise<void>;
    abstract roomTopic(roomId: string): Promise<string>;
    abstract roomTopic(roomId: string, topic: string): Promise<void>;
    protected abstract roomRawPayload(roomId: string): Promise<any>;
    protected abstract roomRawPayloadParser(rawPayload: any): Promise<RoomPayload>;
    /**
     *
     * RoomMember
     *
     */
    abstract roomAnnounce(roomId: string): Promise<string>;
    abstract roomAnnounce(roomId: string, text: string): Promise<void>;
    abstract roomMemberList(roomId: string): Promise<string[]>;
    protected abstract roomMemberRawPayload(roomId: string, contactId: string): Promise<any>;
    protected abstract roomMemberRawPayloadParser(rawPayload: any): Promise<RoomMemberPayload>;
    roomMemberSearch(roomId: string, query: (YOU | string) | RoomMemberQueryFilter): Promise<string[]>;
    roomSearch(query?: RoomQueryFilter): Promise<string[]>;
    protected roomQueryFilterFactory(query: RoomQueryFilter): RoomPayloadFilterFunction;
    /**
     * Check a Room Id if it's still valid.
     *  For example: talk to the server, and see if it should be deleted in the local cache.
     */
    roomValidate(roomId: string): Promise<boolean>;
    protected roomPayloadCache(roomId: string): undefined | RoomPayload;
    roomPayload(roomId: string): Promise<RoomPayload>;
    /**
     * Concat roomId & contactId to one string
     */
    private cacheKeyRoomMember;
    roomMemberPayload(roomId: string, memberId: string): Promise<RoomMemberPayload>;
    /**
     *
     * dirty payload methods
     *  See: https://github.com/Chatie/grpc/pull/79
     *
     */
    dirtyPayload(type: PayloadType, id: string): Promise<void>;
    private dirtyPayloadRoom;
    private dirtyPayloadContact;
    private dirtyPayloadFriendship;
    private dirtyPayloadMessage;
    private dirtyPayloadRoomMember;
}
export declare type PuppetImplementation = typeof Puppet & Constructor<Puppet>;
export default Puppet;
//# sourceMappingURL=puppet.d.ts.map