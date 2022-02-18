import { IAuthApi } from './types';
import { globalMock } from '../index.mock';

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
  signIn: (body) => {
    if (body) {
      globalMock.auth = authResp;
      return Promise.resolve(authResp);
    } else {
      throw Error;
    }
  },
  refreshToken: () => Promise.resolve(authResp),
  forgotPassword: () => Promise.resolve({ data: {} }),
  resetPassword: () => Promise.resolve({ data: {} }),
};

export default authMock;
