import { BiometryType } from 'react-native-biometrics';
import { BiometryAction, BiometryActions } from '../actions';
import { BiometryErrors, BiometryStatus } from '../biometrics';

export interface IBiometricsState {
  status: BiometryStatus;
  ready: boolean;
}

const defaultState: IBiometricsState = {
  status: {} as BiometryStatus,
  ready: null,
};

const biometricsReducer = (
  state = defaultState,
  action: BiometryAction,
): IBiometricsState => {
  switch (action.type) {
    case BiometryActions.SET_BIOMETRY_READY: {
      return {
        ...state,
        ready: action.ready
      };
    }
    case BiometryActions.SET_BIOMETRY_STATUS: {
      return {
        ...state,
        status: action.biometryStatus
      };
    }
    default:
      return state;
  }
};

export default biometricsReducer;
