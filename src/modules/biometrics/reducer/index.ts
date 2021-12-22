import { BiometricAction, BiometricsActions } from '../actions';

export interface IBiometricsState {
  ready: boolean;
}

const defaultState: IBiometricsState = {
  ready: null
};

const biometricsReducer = (
  state = defaultState,
  action: BiometricAction,
): IBiometricsState => {
  switch (action.type) {
    case BiometricsActions.SET_BIOMETRICS_READY: {
      return {
        ...state,
        ready: action.ready
      };
    }
    default:
      return state;
  }
};

export default biometricsReducer;
