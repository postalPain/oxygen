import en from '../src/i18n/en';

describe('Welcome screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  it('should have log in button', async () => {
    await expect(element(by.text(en.logIn))).toBeVisible();
  });
  it('should have sign up button', async () => {
    await expect(element(by.text(en.signUp))).toBeVisible();
  });
  it('should navigate to login screen', async () => {
    await element(by.text(en.logIn)).tap();
    await expect(element(by.id('loginEmailInput'))).toBeVisible();
  });
  it('should navigate back to welcome screen', async () => {
    await element(by.id('navigationBackButton')).tap();
    await expect(element(by.text(en.logIn))).toBeVisible();
    await expect(element(by.text(en.signUp))).toBeVisible();
    await expect(element(by.id('loginEmailInput'))).not.toBeVisible();
  });
  it('should navigate to sign up screen', async () => {
    await element(by.text(en.signUp)).tap();
    await expect(element(by.id('registrationIdInput'))).toBeVisible();
  });
  it('should navigate back to welcome screen', async () => {
    await element(by.id('navigationBackButton')).tap();
    await expect(element(by.text(en.logIn))).toBeVisible();
    await expect(element(by.text(en.signUp))).toBeVisible();
    await expect(element(by.id('registrationIdInput'))).not.toBeVisible();
  });
});
