import { BiometricAction, BiometricsActions } from '../actions';

export interface IBiometricsState {
  permitted: boolean;
}

const defaultState: IBiometricsState = {
  permitted: null
};

const biometricsReducer = (
  state = defaultState,
  action: BiometricAction,
): IBiometricsState => {
  switch (action.type) {
    case BiometricsActions.SET_BIOMETRICS_ENABLED: {
      return {
        ...state,
        permitted: action.enabled
      };
    }
    default:
      return state;
  }
};

export default biometricsReducer;
