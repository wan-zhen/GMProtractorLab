import { element, by, browser, $, ExpectedConditions as EC } from 'protractor';

describe('add', () => {
  fit('新增 user 會看到新增成功', async () => {
    const submitBtn = element(by.buttonText('新增'));
    await browser.get('/add');
    await $('.account').sendKeys('john');
    await browser.wait(EC.elementToBeClickable(submitBtn), 5000);
    await submitBtn.click();
    await browser.wait(EC.alertIsPresent(), 5000);
    await browser
      .switchTo()
      .alert()
      .accept();
    expect(await element(by.tagName('h2')).getText()).toBe('新增成功');
  });
});
