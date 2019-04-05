import { element, by, browser, $, ExpectedConditions as EC } from 'protractor';
import { compareScreenshot, addMask, go, click, see, type } from 'blue-harvest';
describe('labs golden', () => {
  it('截圖比較', async () => {
    await browser.get('/');
    // 確保每次視窗大小一致
    await browser
      .manage()
      .window()
      .setSize(1366, 1024);
    // 圖片儲存資料夾要預先建立好
    const golden = 'e2e/goldens/home.png';
    const diffDir = 'e2e/goldens/'; // 會產生 diff-home.png
    //await browser.waitForAngular(); // 截圖前一定要 wait
    const actual = await browser.takeScreenshot();
    const result = await compareScreenshot(actual, golden, diffDir);
    expect(result).toBeTruthy();
  });
});

// const gif_img = element(by.id('gif-img'));
// await addMask(gif_img, 'gray');
