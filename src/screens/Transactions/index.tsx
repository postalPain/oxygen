import React, { useEffect, useState } from 'react';
import { View, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectNoPendingTransaction, selectTransactions, selectTransactionsLoading } from 'modules/transactions/selectors';
import { getTransactions } from 'modules/transactions/actions';
import { ScreenWrapperMain } from 'components';
import NoTransactions from './NoTransactions';
import TransactionsList from './TransactionsList';
import useStyles from './styles';
import useInterval from 'utils/useInterval';
import { useIsFocused } from '@react-navigation/native';

const REQUEST_DELAY = 1000 * 15;

const Transactions = (
) => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const isFocused = useIsFocused();

  const [delay, setDelay] = useState(REQUEST_DELAY);

  const transactions = useSelector(selectTransactions);
  const transactionsLoading = useSelector(selectTransactionsLoading);
  const noPendingTransactions = useSelector(selectNoPendingTransaction);

  useInterval(() => {
    dispatch(getTransactions());
  }, delay);

  useEffect(() => {
    setDelay((noPendingTransactions || !isFocused) ? null : REQUEST_DELAY);
  }, [noPendingTransactions, isFocused]);

  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  return (
    <ScreenWrapperMain>
      <View style={styles.container}>
        {!transactionsLoading && !transactions.length && <NoTransactions />}
        {!!transactions.length && <TransactionsList />}
      </View>
    </ScreenWrapperMain>
  );
};

export default Transactions;
