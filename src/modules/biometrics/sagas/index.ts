import { put, takeLatest } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { signInSuccess } from 'modules/auth/actions';
import { IAuthData } from 'modules/auth/types';
import { getState } from 'modules/store';
import { selectUserEmail } from 'modules/user/selectors';
import api, { IResponse } from 'services/api';
import { isTtlActive } from 'utils/time';
import { BiometricsActions, IBiometricLoginAction, setBiometricsReady } from '../actions';
import { getBiometricData, getBiometricsPermission } from '../asyncStorage';
import { biometricAuthenticate, getBiometricsSupported } from '../biometrics';
import { getKeychainCredentials, TKeychainCredentials } from '../keychain';

function* getBiometricEnabledWorker () {
  const email = yield selectUserEmail(getState());
  const biometricsSupported = yield getBiometricsSupported();
  const biometricPermitted = yield getBiometricsPermission(email);

  if (!email || !biometricsSupported || !biometricPermitted) {
    yield put(setBiometricsReady(false));
    return;
  }

  const { ttl, credentials } = yield getBiometricData();
  const enabled = credentials && (credentials.username === email) && isTtlActive(ttl);

  yield put(setBiometricsReady(enabled));
}

function* biometricLoginWorker(action: IBiometricLoginAction) {
  let biometricSuccess;
  try {
    biometricSuccess = yield biometricAuthenticate();
    if (!biometricSuccess) {
      return;
    }
  } catch (error) {
    action.meta?.onError?.();
    console.log(error);
    return;
  }
  const credentials: TKeychainCredentials = yield getKeychainCredentials();

  let response: IResponse<IAuthData>;
  try {
    response = yield api.auth.refreshToken({ refresh_token: credentials.password });
  } catch (e) {
    action.meta?.onError?.();
    console.log('ERROR: api.auth.refreshToken({ refresh_token: credentials.password });');
    return;
  }
  yield put(signInSuccess(action.email, response.data, { onSuccess: action.meta?.onSuccess }));
}


export default function* biometricsWatcher(): SagaIterator {
  yield takeLatest(BiometricsActions.GET_BIOMETRICS_READY, getBiometricEnabledWorker);
  yield takeLatest(BiometricsActions.BIOMETRIC_LOGIN, biometricLoginWorker);
}