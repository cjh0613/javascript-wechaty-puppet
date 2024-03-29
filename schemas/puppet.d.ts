/**
 * This is used internally to as a placeholder for the bot name.
 *
 * For example:
 *  we should replace '你' and 'You' to YOU.
 *
 * See: https://github.com/Microsoft/TypeScript/issues/20898#issuecomment-354073352
 *
 * Huan(202003): `YOU` must NOT be passed to the `Wechaty`
 *  `YOU` is only for the wechaty-puppet-XXX internal usage only.
 *  because it might be transported via the GRPC interface,
 *  which can not serialize the `YOU` Symbol correctly.
 *
 */
export declare const YOU: unique symbol;
export declare type YOU = typeof YOU;
/** @hidden */
export declare const CHAT_EVENT_DICT: {
    friendship: string;
    login: string;
    logout: string;
    message: string;
    'room-invite': string;
    'room-join': string;
    'room-leave': string;
    'room-topic': string;
    scan: string;
};
export declare type ChatEventName = keyof typeof CHAT_EVENT_DICT;
/** @hidden */
export declare const PUPPET_EVENT_DICT: {
    dirty: string;
    dong: string;
    error: string;
    heartbeat: string;
    ready: string;
    reset: string;
    friendship: string;
    login: string;
    logout: string;
    message: string;
    'room-invite': string;
    'room-join': string;
    'room-leave': string;
    'room-topic': string;
    scan: string;
};
export declare type PuppetEventName = keyof typeof PUPPET_EVENT_DICT;
/**
 * endpoint: URL/Path for the puppet underlining system
 * timeout: WatchDog Timeout in Seconds
 */
export interface PuppetOptions {
    endpoint?: string;
    timeout?: number;
    token?: string;
    [puppetOptionKey: string]: unknown;
}
//# sourceMappingURL=puppet.d.ts.map