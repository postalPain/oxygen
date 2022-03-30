import { ITransaction, TransactionsActions, TTransactionsAction } from 'modules/transactions/types';


export interface ITransactionsState {
  transactions: ITransaction[];
  transactionsLoading: boolean;
}

export const transactionsDefaultState: ITransactionsState = {
  transactions: [],
  transactionsLoading: true
};

const transactionsReducer = (
  state = transactionsDefaultState,
  action: TTransactionsAction,
): ITransactionsState => {
  switch (action.type) {
    case TransactionsActions.SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case TransactionsActions.SET_TRANSACTIONS_LOADING:
      return {
        ...state,
        transactionsLoading: action.transactionsLoading
      };
    default:
      return state;
  }
};

export default transactionsReducer;