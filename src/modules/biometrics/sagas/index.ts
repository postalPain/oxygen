import { put, select, takeLatest } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import { errorNotification } from 'modules/notifications/actions';
import { getState } from 'modules/store';
import { selectUserEmail } from 'modules/user/selectors';
import { BiometricsActions, IBiometricLoginAction, IGetBiometricEnabledAction, setBiometricEnabled } from '../actions';
import { getBiometricsAllowed } from '../asyncStorage';
import { biometricAuthenticate } from '../biometrics';
import { getKeychainCredentials, TKeychainCredentials } from '../keychain';

function* checkBiometricEnabledWorker (action: IGetBiometricEnabledAction) {
  const storedEmail = yield selectUserEmail(getState());
  if (!storedEmail) {
    yield put(setBiometricEnabled(false));
    return;
  }

  const credentials: TKeychainCredentials = yield getKeychainCredentials();

  if (!credentials || credentials.username !== storedEmail) {
    yield put(setBiometricEnabled(false));
    return;
  }

  const allowed = yield getBiometricsAllowed(action.email);

  yield put(setBiometricEnabled(allowed));
}

function* biometricLoginWorker(action: IBiometricLoginAction) {
  try {
    const success = yield biometricAuthenticate();
    if (success) {
      const credentials: TKeychainCredentials = yield getKeychainCredentials();
      if (!credentials) {
        return;
      }
    }
  } catch (error) {
    if (error?.name === 'LAErrorUserCancel') {
      // yield put(errorNotification({ text: BiometricErrors.BIOMETRICS_CANCELLED }));

    }
    // yield put(errorNotification({ text: BiometricErrors.BIOMETRICS_FAILED }));
  }
}


export default function* biometricsWatcher(): SagaIterator {
  yield takeLatest(BiometricsActions.BIOMETRIC_LOGIN, biometricLoginWorker);
  yield takeLatest(BiometricsActions.BIOMETRIC_LOGIN, biometricLoginWorker);
}