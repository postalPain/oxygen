import en from '../src/i18n/en';

describe('Welcome screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('should have log in button', async () => {
    await expect(element(by.text(en.logIn))).toBeVisible();
  });
});
