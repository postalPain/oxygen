import { BiometricAction, BiometricsActions } from '../actions';

export interface IBiometricsState {
  enabled: boolean;
}

const defaultState: IBiometricsState = {
  enabled: null
};

const biometricsReducer = (
  state = defaultState,
  action: BiometricAction,
): IBiometricsState => {
  switch (action.type) {
    case BiometricsActions.SET_BIOMETRICS_ENABLED: {
      return {
        ...state,
        enabled: action.enabled
      };
    }
    default:
      return state;
  }
};

export default biometricsReducer;
