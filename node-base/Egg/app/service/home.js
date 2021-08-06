'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async getUser() {
    return 'mengbo-ji';
  }
}

module.exports = HomeService;
