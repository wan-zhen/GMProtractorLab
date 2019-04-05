import { element, by, browser, $, ExpectedConditions as EC } from 'protractor';
/**
 * step 1. 去到 連結 /add
 * step 2. 輸入 user 名稱 john
 * ---step 3. 等待 新增按鈕 disable 解除
 * ---step 4. 按下新增
 * ---step 5. 等待 alert 出現
 * step 6. 確定 alert
 * 期待會看到新增成功
 */
describe('add', () => {
  fit('新增 user 會看到新增成功', async () => {
    const submitBtn = element(by.buttonText('新增'));
    await browser.get('/add');
    await $('.account').sendKeys('john');
    // 寫出 step 3.4.5
    await browser
      .switchTo()
      .alert()
      .accept();
    expect(await element(by.tagName('h2')).getText()).toBe('新增成功');
  });
});
