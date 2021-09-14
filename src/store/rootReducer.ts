import { combineReducers } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { persistReducer } from 'redux-persist';
import createSensitiveStorage from 'redux-persist-sensitive-storage';
import AsyncStorage from '@react-native-community/async-storage';

import { reducers as user } from './user';
import { AppActions } from 'store/app/types';

const sensitiveStorage = createSensitiveStorage({
  keychainService: 'myKeychain',
  sharedPreferencesName: 'mySharedPrefs',
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['registration'],
};

const sensitivePersistConfig = {
  key: 'token',
  storage: sensitiveStorage,
};

const appReducer = combineReducers({
  user,
  // sensitive: persistReducer(sensitivePersistConfig, login),
});

// TODO add interfaces for state and action
const rootReducer = (state: any, action: any) => {
  if (action.type === AppActions.APP_RESET_STORE) {
    AsyncStorage.removeItem('persist:root');
    // eslint-disable-next-line no-shadow
    const { app } = state;
    // eslint-disable-next-line no-param-reassign
    state = { app };
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof appReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default persistedReducer;
