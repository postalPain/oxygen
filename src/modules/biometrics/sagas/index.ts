import { put, takeLatest } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { signInSuccess } from 'modules/auth/actions';
import { AuthActions, IAuthData } from 'modules/auth/types';
import { getState } from 'modules/store';
import { selectUserEmail } from 'modules/user/selectors';
import api from 'services/api';
import { IResponse } from 'services/api/types';
import { isTtlActive } from 'utils/time';
import { BiometryActions, IBiometricLoginAction, setBiometryReady, setBiometryStatus } from '../actions';
import { deleteBiometricData, getBiometrics, getBiometrics83, getBiometricTtl, getBiometricTtl83, storeBiometricData, storeBiometrics, storeBiometricTtl } from '../asyncStorage';
import { biometricAuthenticate, BiometryStatus, getDeviceBiometryStatus } from '../biometrics';
import { getKeychainCredentials, TKeychainCredentials } from '../keychain';
import { selectBiometryStatus } from '../selectors';

function* getBiometricsAvailableWorker (action) {
  const biometryStatus: BiometryStatus = yield getDeviceBiometryStatus();
  yield put(setBiometryStatus(biometryStatus));
  yield action.meta?.onSuccess(biometryStatus);
}

function* getBiometricsReadyWorker () {
  const email = yield selectUserEmail(getState());
  const biometryStatus = selectBiometryStatus(getState());

  // Use new key for the old users, remove somewhere in 2023
  const biometricAccepted83 = yield getBiometrics83(email);
  const ttl83 = yield getBiometricTtl83();
  yield biometricAccepted83 && storeBiometrics(biometricAccepted83);
  yield ttl83 && storeBiometricTtl(ttl83);

  const biometricAccepted = yield getBiometrics();

  if (!email || !biometryStatus.available || !biometricAccepted) {
    yield put(setBiometryReady(false));
    return;
  }

  const ttl = yield getBiometricTtl();
  const credentials = yield getKeychainCredentials();

  const enabled = credentials && (credentials.username === email) && isTtlActive(ttl);

  yield put(setBiometryReady(enabled));
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
  yield put(signInSuccess(action.email, response.data, 'biometric', { onSuccess: action.meta?.onSuccess }));
}

function* signOutWorker() {
  yield deleteBiometricData();
  yield put(setBiometryReady(false));
}


export default function* biometricsSagas(): SagaIterator {
  yield takeLatest(BiometryActions.GET_BIOMETRY_STATUS, getBiometricsAvailableWorker);
  yield takeLatest(BiometryActions.GET_BIOMETRY_READY, getBiometricsReadyWorker);
  yield takeLatest(BiometryActions.BIOMETRIC_LOGIN, biometricLoginWorker);
  yield takeLatest(AuthActions.SIGN_OUT, signOutWorker);
}
