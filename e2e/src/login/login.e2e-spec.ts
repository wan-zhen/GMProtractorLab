import { element, by, browser } from 'protractor';

describe('login', () => {
  it('點登入要進到登入頁', () => {
    browser
      .manage()
      .window()
      .maximize();
    element(by.id('login')).click();
    expect(browser.getCurrentUrl()).toContain('login');
  });

  it('登入 帳號 zhen 密碼 123456 要看到登入成功', () => {
    // expect(element(by.tagName('h2'))).toBe('登入成功');
  });

  it('登入 錯的帳號 / 密碼 要看到登入失敗', () => {

  });
});
