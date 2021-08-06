'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const user = await ctx.service.home.getUser();

    await ctx.render('home', {
      title: 'egg.js demo',
      user,
    });
  }
}

module.exports = HomeController;
