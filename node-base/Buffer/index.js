
// Buffer 和 string 转换
const buf1 = Buffer.from('test');
console.log('buf1', buf1);
const str1 = buf1.toString();
console.log('str1', str1);

// Buffer 拼接
const buf2 = Buffer.from('a');
const buf3 = Buffer.from('b');
const buf4 = Buffer.from('c');

const newBuf = Buffer.concat([ buf1, buf2, buf3, buf4 ]);
console.log('newBuf', newBuf.toString());

// StringDecoder
// 在 NodeJS 中一个汉字由三个字节表示，如果我们处理中文字符的时候使用了不是3的倍数的字节数就会造成字符拼接乱码问题
const buf = Buffer.from('中文字符串！');

for (let i = 0; i < buf.length; i += 5) {
  const b = Buffer.allocUnsafe(5);
  buf.copy(b, 0, i);
  console.log(b.toString());
}

// 使用 string_decoder 模块可以解决这个问题
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');

for (let i = 0; i < buf.length; i += 5) {
  const b = Buffer.allocUnsafe(5);
  buf.copy(b, 0, i);
  console.log(decoder.write(b));
}

// 判断对象是否为buffer
Buffer.isBuffer();

// 判断 Buffer 对象编码
Buffer.isEncoding();

// 返回 内存为此 Buffer 实例所申请的字节数，并不是 Buffer 实例内容的字节数
console.log(buf.length);

// 和数组的 indexOf 类似，返回某字符串、acsii 码或者 buf 在改 buf 中的位置
console.log(buf.indexOf('中'));

// 将一个 buf 的（部分）内容复制到另外一个 buf 中
const newBuf1 = Buffer.from('a');
newBuf1.copy(Buffer.from('b'));
console.log(newBuf1.toString());
