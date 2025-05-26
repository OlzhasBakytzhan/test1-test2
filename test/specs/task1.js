// test/specs/task1.spec.js
const { expect } = require('chai');
const InternetHome    = require('../pageobjects/homepage.js');
const NestedFrames    = require('../pageobjects/nestedframes.js');

describe('Task 1 • Nested Frames', () => {
  beforeEach(async () => {
    await browser.reloadSession();
    await InternetHome.open();
  });
  afterEach(async () => {
    await browser.reloadSession();
  });

  it('validates MIDDLE and LEFT frame texts, then shows Nested Frames link', async () => {
    await InternetHome.goToNestedFrames();

    // verify MIDDLE
    await NestedFrames.switchToMiddle();
    expect(await NestedFrames.getBodyText()).to.equal('MIDDLE');

    // verify LEFT
    await NestedFrames.switchToLeft();
    expect(await NestedFrames.getBodyText()).to.equal('LEFT');

    // back to menu and ensure link visible
    await browser.switchFrame(null);
    await browser.back();
    const link = await $('=Nested Frames');
    await link.waitForDisplayed({ timeout: 5000 });
    expect(await link.isDisplayed()).to.be.true;
  });
});
