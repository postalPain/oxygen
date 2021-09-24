import { TAppAction } from '../types';

const appReducer = (
  state = {},
  action: TAppAction,
): {} => {
  switch (action.type) {
    default:
      return state;
  }
};

export default appReducer;