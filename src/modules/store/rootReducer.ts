import { combineReducers } from 'redux';

import userReducers from '../user/reducers';

/** Creating Redux modules */
const rootReducer = combineReducers({
  user: userReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
