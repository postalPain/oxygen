export const BASE_URL = 'https://api-dev.stryproject-o.ch/api/v1';

export default {
  signUp: 'employees/sign-up',
  checkVerification: 'employees/verification/status',
  resendVerificationCode: 'employees/verification/resend', // TODO change it when BE is ready
  userInfo: 'employees/me',
  signOut: 'logout',
};
