import en from '../src/i18n/vocabularies/english';

describe('Login and user info', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  it('should navigate to login screen', async () => {
    await expect(element(by.text(en.logIn))).toBeVisible();
    await element(by.text(en.logIn)).tap();
    await expect(element(by.id('loginEmailInput'))).toBeVisible();
  });
  it('should add credentials and confirm', async () => {
    await element(by.id('loginEmailInput')).tap();
    await element(by.id('loginEmailInput')).typeText('lorem@ipsum.com');
    await element(by.id('loginPasswordInput')).tap();
    await element(by.id('loginPasswordInput')).typeText('123123');
    await element(by.text(en.logIn)).tap();
  });
  it('should display correct name', async () => {
    await expect(element(by.text('Mockname'))).toBeVisible();
  });
  it('should display correct available to withdraw amount', async () => {
    await expect(element(by.text('1,214'))).toBeVisible();
  });
  it('should display correct earned until today amount', async () => {
    await expect(element(by.text('2,428'))).toBeVisible();
  });
  it('should display correct total withdrawn amount', async () => {
    await expect(element(by.text('652'))).toBeVisible();
  });
});
