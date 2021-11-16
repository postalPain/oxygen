import { combineReducers } from 'redux';

import authReducers from 'modules/auth/reducers';
import userReducers from 'modules/user/reducers';
import notificationsReducers from 'modules/notifications/reducers';
import withdrawalReducer from 'modules/withdrawal/reducers';
import transactionsReducer from 'modules/transactions/reducers';


/** Creating Redux modules */
const rootReducer = combineReducers({
  auth: authReducers,
  user: userReducers,
  notifications: notificationsReducers,
  withdrawal: withdrawalReducer,
  transactions: transactionsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
