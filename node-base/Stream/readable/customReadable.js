/**
 * 如果希望自己以某种特定的方式生产数据，交给程序消费，那么改如何开始呢？
  简单两步即可
  1. 继承 sream 模块的 Readable 类
  2. 重写 _read 方法，调用 this.push 将生产的数据放入待读取队列
  Readable 类已经把可读流要做的大部分工作完成，只需要继承它，然后把生产数据的方式写在 _read 方法里就可以实现一个自定义的可读流。
*/

const Readable = require('stream').Readable;

class RandomNumberStrean extends Readable {
  constructor(max) {
    super();
    this.max = max;
  }

  _read() {
    const ctx = this;
    setTimeout(() => {
      if (ctx.max) {
        const randomNumber = parseInt(Math.random() * 10000);
        // 只能 push 字符串或 Buffer，为了方便显示打一个回车
        ctx.push(`${randomNumber}\n`);
        ctx.max -= 1;
      } else {
        this.push(null);
      }
    }, 100);
  }
}

module.exports = RandomNumberStrean;
// 实现一个每 100 毫秒生产一个随机数的流（没什么用处）
