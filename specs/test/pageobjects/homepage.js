// test/pageobjects/HomePage.js
class HomePage {
    get framesLink()   { return $('=Frames'); }
    get nestedLink()   { return $('=Nested Frames'); }
  
    async open() {
      await browser.url('https://the-internet.herokuapp.com');
    }
    async goToNestedFrames() {
      await this.framesLink.waitForClickable();
      await this.framesLink.click();
      await this.nestedLink.waitForClickable();
      await this.nestedLink.click();
    }
  }
  module.exports = new HomePage();
  