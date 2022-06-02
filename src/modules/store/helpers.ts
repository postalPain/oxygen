import { put } from 'redux-saga/effects';

import { errorNotification } from 'modules/notifications/actions';
import { ERROR_CODES, IError } from 'services/api/errors';

export function* handleApiError(error: IError) {
  if (error.code !== ERROR_CODES.unauthorized) {
    yield put(errorNotification({ text: error.message }));
  }
}
