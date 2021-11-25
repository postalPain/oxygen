export const DEV_URL = 'https://api-dev.stryproject-o.ch/api/v1';
export const STAGE_URL = 'https://api-stage.stryproject-o.ch/api/v1';
export const PROD_URL = 'https://api-prod.stryproject-o.ch/api/v1';
export const BASE_URL = DEV_URL;

export default {
  signUp: 'employees/sign-up',
  checkVerification: 'employees/verification/status',
  resendVerificationCode: 'employees/verification/resend-email',
  verifyEmail: 'employees/verification/email',
  refreshToken: 'refresh',
  userInfo: 'employees/me',
  getTransactions: 'employees/transactions',
  signOut: 'logout',
};
