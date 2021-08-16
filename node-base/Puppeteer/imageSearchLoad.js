const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');
const puppeteer = require('puppeteer');
// const ora = require('ora');

// const devices = require('puppeteer/DeviceDescriptors');
const iPhoneXR = puppeteer.devices['iPhone XR'];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.emulate(iPhoneXR);

  await page.goto('https://iamge.baidu.com', { waitUntil: [ 'load' ] });
  await page.type('#image-search-input', 'dog');

  await page.tap('#image-search-btn');

  page.on('load', async () => {
    const srcs = await page.$$eval(
      '.sfc-image-content-waterfall img',
      images => images.map(img => img.src)
    );

    await browser.close();

    let i = 0;
    srcs.forEach(src => {
      const request = src.trim().startsWith('https') ? https : http;
      const dest = path.join(__dirname, `./images/${i++}.jpg`);
      console.log(`正在下载 ${src}`);

      request.get(src, res => {
        res.pipe(fs.createWriteStream(dest));
      });
    });
  });
})();
