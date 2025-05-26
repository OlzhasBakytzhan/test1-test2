// test/specs/task2.spec.js
const { expect } = require('chai');
const DemoqaHome       = require('../pageobjects/demoqahomepage.js');
const Widgets          = require('../pageobjects/widgets.js');
const ProgressBarPage  = require('../pageobjects/progressbar.js');

describe('Task 2', () => {
  beforeEach(async () => {
    await browser.reloadSession();
    await DemoqaHome.open();
  });
  afterEach(async () => {
    await browser.reloadSession();
  });

  it('shows Reset when complete and hides it after refresh', async () => {
    await DemoqaHome.goToWidgets();
    await Widgets.openProgressBar();

    await ProgressBarPage.start();
    await ProgressBarPage.waitForComplete();

    expect(await ProgressBarPage.isResetVisible()).to.be.true;

    
    await browser.pause(500);
    await browser.refresh();
    await browser.pause(500);

    expect(await ProgressBarPage.isResetHidden()).to.be.true;
  });
});
