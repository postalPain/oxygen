import { combineReducers } from 'redux';

import authReducers from 'modules/auth/reducers';
import userReducers from 'modules/user/reducers';
import notificationsReducers from 'modules/notifications/reducers';
import withdrawalReducer from 'modules/withdrawal/reducers';
import transactionsReducer from 'modules/transactions/reducers';
import biometricsReducer from 'modules/biometrics/reducer';
import loggerReducer from 'modules/logger/reducer';
import appReducer from 'modules/app/reducers';
import surveyReducer from 'modules/survey/reducers';


/** Creating Redux modules */
const rootReducer = combineReducers({
  auth: authReducers,
  user: userReducers,
  notifications: notificationsReducers,
  withdrawal: withdrawalReducer,
  transactions: transactionsReducer,
  biometrics: biometricsReducer,
  logger: loggerReducer,
  app: appReducer,
  survey: surveyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
