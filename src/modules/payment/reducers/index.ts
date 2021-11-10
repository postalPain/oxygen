import { paymentActions } from '../actions';

export interface IPaymentState {
  showModal: boolean;
}

export const initialState: IPaymentState = {
  showModal: false,
};

const paymentReducer = (
  state = initialState,
  action: any,
): IPaymentState => {
  switch (action.type) {
    case paymentActions.TEST_MODAL:
      return {
        ...state,
        showModal: !state.showModal
      };
    default:
      return state;
  }
};

export default paymentReducer;
