const EventEmitter = require('events');

/**
 * 1. EventEmitter 实例会维护一个 listener 数组，每次 listener 默认会被添加到数组尾部
 * 2. 每次添加 listener 不会检查是否添加过，多次调用 on 传入相同的 eventName 和 listener，会导致 listener 被添加多次
*/
const ee = new EventEmitter();
ee.on('foo', () => console.log('a'));

