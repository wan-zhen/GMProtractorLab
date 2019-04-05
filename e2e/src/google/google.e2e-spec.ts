import { element, by, browser, $, ExpectedConditions as EC } from 'protractor';

describe('google', () => {
  it('用 google 搜尋', async () => {
    await browser.get('/');
    await $('.gLFyf').sendKeys('五月天');
    await element(by.buttonText('Google 搜尋')).click();
    expect(await $('h3.LC20lb').getText()).toBe('五月天- 维基百科，自由的百科全书');
  });
});
