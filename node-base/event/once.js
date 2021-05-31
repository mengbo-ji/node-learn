const EventEmitter = require('events');

/**
 * 如果希望 listener 被触发一次后就不再触发，可以使用 once 来绑定事件
*/
const ee = new EventEmitter();
ee.once('foo', () => console.log('a'));
