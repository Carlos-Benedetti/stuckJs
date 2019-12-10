// test.js
const timeout = 5000;

describe(
    '/ (Home Page)',
    () => {
        let page;
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage();
            await page.goto(`file://${__dirname}/../demo/index.html`);
            const variable = await page.evaluate(() => user)
        }, timeout);

        it('should load without error', async () => {

            const variable = await page.evaluate(() => user.name = "banana")
            const input = await page.evaluate(() => document.querySelector('[stuk]'))

            expect(input.value).toContain('banana');
        });
    },
    timeout,
);