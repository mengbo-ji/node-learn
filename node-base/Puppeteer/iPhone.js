const path = require('path');
const puppeteer = require('puppeteer');

const iPhoneXR = puppeteer.devices['iPhone XR'];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.emulate(iPhoneXR);

  await page.goto('https://www.baidu.com', { waitUntil: [ 'load' ] });

  await page.screenshot({
    path: path.join(__dirname, './image', 'baidu.png'),
    fullPage: true,
  });

  await browser.close();
})();
