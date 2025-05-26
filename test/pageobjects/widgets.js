// test/pageobjects/Widgets.js
class Widgets {
    get progressMenu() { return $('//span[text()="Progress Bar"]'); }
    async openProgressBar() {
      await this.progressMenu.scrollIntoView();
      await this.progressMenu.waitForClickable();
      await this.progressMenu.click();
    }
  }
  module.exports = new Widgets();
  