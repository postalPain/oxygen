import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


/** Store initial state */
const INITIAL_STATE: any = {};

const sagaMiddleware = createSagaMiddleware();

let flipperMiddleware;
if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  flipperMiddleware = createDebugger();
}

/** Creating Redux modules */
const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(
    sagaMiddleware,
    flipperMiddleware
  )),
);

sagaMiddleware.run(rootSaga);

export const getState = () => store.getState();

export default store;
