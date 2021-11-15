export const BASE_URL = 'https://api-dev.stryproject-o.ch/api/v1';

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
