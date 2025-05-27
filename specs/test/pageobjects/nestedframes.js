// test/pageobjects/NestedFrames.js
class NestedFrames {
    get topFrame()    { return $('frame[name="frame-top"]'); }
    get middleFrame() { return $('frame[name="frame-middle"]'); }
    get leftFrame()   { return $('frame[name="frame-left"]'); }
  
    async switchToMiddle() {
      await browser.switchFrame(null);            
      await browser.switchFrame(this.topFrame);
      await browser.switchFrame(this.middleFrame);
    }
    async switchToLeft() {
      await browser.switchFrame(null);            
      await browser.switchFrame(this.topFrame);
      await browser.switchFrame(this.leftFrame);
    }
    async getBodyText() {
      return $('body').getText();
    }
  }
  module.exports = new NestedFrames();
  