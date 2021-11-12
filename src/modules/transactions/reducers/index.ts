import { ITransaction, TransactionsActions, TTransactionsAction } from 'modules/transactions/types';


const defaultState = [];

const transactionsReducer = (
  state = defaultState,
  action: TTransactionsAction,
): ITransaction[] => {
  switch (action.type) {
    case TransactionsActions.SET_TRANSACTIONS:
    return action.payload;
    default:
      return state;
  }
};

export default transactionsReducer;