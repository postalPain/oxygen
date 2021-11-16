import { ITransaction, TransactionsActions, TTransactionsAction } from 'modules/transactions/types';


export const transactionsDefaultState = [];

const transactionsReducer = (
  state = transactionsDefaultState,
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