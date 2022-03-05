import en from '../src/i18n/english';

describe('Withdraw and transaction', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  it('should login', async () => {
    await element(by.text(en.logIn)).tap();
    await element(by.id('loginEmailInput')).tap();
    await element(by.id('loginEmailInput')).typeText('lorem@ipsum.com');
    await element(by.id('loginPasswordInput')).tap();
    await element(by.id('loginPasswordInput')).typeText('123123');
    await element(by.text(en.logIn)).tap();
  });
  it('transactions should be empty', async () => {
    await expect(element(by.text(en.transactions))).toBeVisible();
    await element(by.text(en.transactions)).tap();
    await expect(element(by.text(en.withdraw))).toBeVisible();
    await expect(element(by.text(en.noTransactionsYet))).toBeVisible();
  });
  it('should display Withdraw button', async () => {
    await element(by.text(en.dashboard)).tap();
    await expect(element(by.text(en.withdraw))).toBeVisible();
  });
  it('should navigate to withdraw screen', async () => {
    await element(by.text(en.withdraw)).tap();
  });
  it('should contain suggested values', async () => {
    await expect(element(by.text('200 AED'))).toBeVisible();
    await expect(element(by.text('500 AED'))).toBeVisible();
    await expect(element(by.text('800 AED'))).toBeVisible();
  });
  it('should select amount and navigate to confirmation screen', async () => {
    await element(by.text('200 AED')).tap();
    await element(by.text(en.continue)).tap();
  });
  it('should contain confirmation button', async () => {
    await element(by.text(en.confirmWithdrawal)).tap();
  });
  it('should show confirmation details', async () => {
    await expect(element(by.text(en.yourRequestConfirmed))).toBeVisible();
    await expect(element(by.text(en.ok))).toBeVisible();
  });
  it('should navigate to dashboard', async () => {
    await element(by.text(en.ok)).tap();
  });
  it('should display updated available to withdraw amount', async () => {
    await expect(element(by.text('1039'))).toBeVisible();
  });
  it('should display correct total withdrawn amount', async () => {
    await expect(element(by.text('877'))).toBeVisible();
  });
  it('should display correct earned until today amount', async () => {
    await expect(element(by.text('2428'))).toBeVisible();
  });
  it('should display list of transactions', async () => {
    await element(by.text(en.transactions)).tap();
    await expect(element(by.text(en.transactionHistory.toUpperCase()))).toBeVisible();
  });
  it('should display last transaction with correct amount and status', async () => {
    await expect(element(by.text('200AED'))).toBeVisible();
    await expect(element(by.text(en.pending))).toBeVisible();
  });
});
