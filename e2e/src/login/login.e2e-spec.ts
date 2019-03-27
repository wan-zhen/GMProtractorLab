import { element, by, browser } from 'protractor';

describe('login', () => {
  it('點登入要進到登入頁', async () => {
    await browser
      .manage()
      .window()
      .maximize();
    await element(by.id('login')).click();
    expect(await browser.getCurrentUrl()).toContain('login');
  });

  it('登入 帳號 zhen 密碼 123456 要看到登入成功', async () => {
    await element(by.className('account')).sendKeys('zhen');
    await element(by.id('password')).sendKeys('123456');
    await element(by.buttonText('送出')).click();
    expect(await element(by.tagName('h2')).getText()).toBe('登入成功');
    await element(by.buttonText('登出')).click();
  });

  it('登入 錯的帳號 / 密碼 要看到登入失敗', async () => {
    await element(by.className('account')).sendKeys('error');
    await element(by.id('password')).sendKeys('123456');
    await element(by.buttonText('送出')).click();
    expect(await element(by.tagName('h2')).getText()).toBe('登入失敗');
  });
});
