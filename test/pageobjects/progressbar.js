// test/pageobjects/ProgressBar.js
class ProgressBarPage {
    get startBtn()  { return $('#startStopButton'); }
    get barText()   { return $('#progressBar .progress-bar'); }
    get resetBtn()  { return $('#resetButton'); }
  
    async start() {
      await this.startBtn.scrollIntoView();
      await this.startBtn.waitForClickable();
      await this.startBtn.click();
    }
  
    async waitForComplete() {
      await browser.waitUntil(
        async () => (await this.barText.getText()) === '100%',
        { timeout: 35_000, timeoutMsg: 'Progress did not reach 100%' }
      );
    }
  
    async isResetVisible() {
      await this.resetBtn.waitForDisplayed({ timeout: 5_000 });
      return this.resetBtn.isDisplayed();
    }
  
    async isResetHidden() {
      await this.resetBtn.waitForDisplayed({ reverse: true, timeout: 5_000 });
      return !(await this.resetBtn.isDisplayed());
    }
  }
  module.exports = new ProgressBarPage();
  