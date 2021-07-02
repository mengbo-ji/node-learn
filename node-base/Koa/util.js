function compose(middleware) {
  return function(context) {
    // 从第一个中间件开始
    dispatch(0);
    /**
     * 调用指定 index 的中间件，为其传入 next 参数为下一个中间件的 dispatch
     * @param {Number} i 中间件 index
     * @return {Promise} resolve 后意味着上一个中间件 next() 后的代码可以继续执行
     */
    function dispatch(i) {
      const fn = middleware[i];
      if (i === middleware.length) {
        return Promise.resolve();
      }
      try {
        // 程序执行到 await next() 时进入下一个中间件调用
        // 当调用当前中间件，next参数设置为下一个中间件的dispatch
        const ret = fn(context, dispatch.bind(null, i + 1));
        // 将本次调用结果返回给上一个中间件，也就是 await next()
        return Promise.resolve(ret);
      } catch (ex) {
        return Promise.resolve(ex);
      }
    }
  };
}

class Router {
  constructor() {
    const methods = [ 'get', 'post' ];
    this.stack = {};
    methods.forEach(method => {
      // router.get(path, middleware), router.post(path, middleware)
      // router.register(path, method, middleware) 快捷方式
      Router.prototype[method] = function(path, middleware) {
        this.register(path, method, middleware);
        // 支持链式调用
        return this;
      };
      // 每种方法单独维护一个数组，提升路由匹配性能
      this.stack[method] = [];
    });
  }

  register(path, method, middleware) {
    this.stack[method].push({
      path,
      middleware,
    });
  }

  routes() {
    const stack = this.stack;
    return async function(ctx, next) {
      const middlewareList = stack[ctx.method.toLowerCase()];
      let targetMiddleware;

      for (let i = 0; i < middlewareList.length; i++) {
        const { path, middleware } = middlewareList[i];
        // 忽略了 url 参数等影响
        const isPathMatch = path instanceof RegExp ? path.test(ctx.path) : path === ctx.path;

        if (isPathMatch) {
          targetMiddleware = middleware;
          // 使用匹配到的第一个路由，不再继续尝试
          break;
        }
      }

      if (targetMiddleware) {
        await targetMiddleware(ctx, next);
      } else {
        await next();
      }

    };
  }

}

module.exports = {
  compose,
  Router,
};
