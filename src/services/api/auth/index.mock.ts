import { IAuthApi } from './types';

const authResp = {
  data: {
    access_token: 'access_token',
    access_ttl: 'access_ttl',
    refresh_token: 'refresh_token',
    refresh_ttl: 'refresh_ttl',
  }
};

const authMock: IAuthApi = {
  signUp: () => Promise.resolve(authResp),
  signOut: () => Promise.resolve(),
  signIn: () => Promise.resolve(authResp),
  refreshToken: () => Promise.resolve(authResp),
  forgotPassword: () => Promise.resolve({ data: {} }),
  resetPassword: () => Promise.resolve({ data: {} }),
};

export default authMock;
