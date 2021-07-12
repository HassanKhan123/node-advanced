const puppeteer = require('puppeteer');

test('Add two numbers', () => {
  const sum = 1 + 2;

  expect(sum).toEqual(3);
});

test('we can launch a browser', async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = browser.newPage();
  await (await page).goto('localhost:3000');
});
