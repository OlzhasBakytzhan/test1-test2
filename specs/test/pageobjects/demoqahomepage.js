// test/pageobjects/DemoqaHome.js
class DemoqaHome {
    get widgetCard() { return $('//h5[text()="Widgets"]/ancestor::div[contains(@class,"top-card")]'); }
  
    async open() {
      await browser.url('https://demoqa.com');
    }
    async goToWidgets() {
      await this.widgetCard.scrollIntoView();
      await this.widgetCard.waitForClickable();
      await this.widgetCard.click();
    }
  }
  module.exports = new DemoqaHome();
  