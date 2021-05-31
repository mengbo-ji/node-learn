const EventEmitter = require('events');

/**
 * 1. 通过 prependListener 可以把 listener 添加到 listener 数组头部
*/
const ee = new EventEmitter();
ee.prependListener('foo', () => console.log('a'));
