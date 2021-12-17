import { put, takeLatest } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { signInSuccess } from 'modules/auth/actions';
import { IAuthData } from 'modules/auth/types';
import { getState } from 'modules/store';
import { selectUserEmail } from 'modules/user/selectors';
import api, { IResponse } from 'services/api';
import { isTtlActive } from 'utils/time';
import { BiometricsActions, IBiometricLoginAction, setBiometricsEnabled } from '../actions';
import { getBiometricData } from '../asyncStorage';
import { biometricAuthenticate } from '../biometrics';
import { getKeychainCredentials, TKeychainCredentials } from '../keychain';

function* getBiometricEnabledWorker () {
  const storedEmail = yield selectUserEmail(getState());
  if (!storedEmail) {
    yield put(setBiometricsEnabled(null));
    return;
  }

  const { ttl, credentials } = yield getBiometricData();
  const enabled = credentials && (credentials.username === storedEmail) && isTtlActive(ttl);
  console.log('credentials', credentials);
  console.log('storedEmail', storedEmail);
  console.log('isTtlActive(ttl)', isTtlActive(ttl));
  console.log('enabled', enabled);

  yield put(setBiometricsEnabled(enabled));
}

function* biometricLoginWorker(action: IBiometricLoginAction) {
  let biometricSuccess;
  try {
    biometricSuccess = yield biometricAuthenticate();
    if (!biometricSuccess) {
      return;
    }
  } catch (error) {
    if (error?.name === 'LAErrorUserCancel') {
      // yield put(errorNotification({ text: BiometricErrors.BIOMETRICS_CANCELLED }));
      return;
    }
    // yield put(errorNotification({ text: BiometricErrors.BIOMETRICS_FAILED }));
  }
  const credentials: TKeychainCredentials = yield getKeychainCredentials();

  let response: IResponse<IAuthData>;
  try {
    response = yield api.auth.refreshToken({ refresh_token: credentials.password });
  } catch (e) {
    console.log('ERROR: api.auth.refreshToken({ refresh_token: credentials.password });');
    return;
  }
  yield put(signInSuccess(action.email, response.data));
}


export default function* biometricsWatcher(): SagaIterator {
  yield takeLatest(BiometricsActions.GET_BIOMETRICS_ENABLED, getBiometricEnabledWorker);
  yield takeLatest(BiometricsActions.BIOMETRIC_LOGIN, biometricLoginWorker);
}