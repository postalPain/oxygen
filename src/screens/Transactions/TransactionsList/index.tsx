import React, { useState } from 'react';
import { Text, View, Pressable, ScrollView, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import vocabulary from 'i18n';
import { getTransactionDate, getTransactionStatus } from 'utils/transactionData';
import useInterval from 'utils/useInterval';
import { AppScreenNames } from 'navigation/types';
import { ITransaction, TransactionStatusesBE, TransactionStatusesFE } from 'modules/transactions/types';
import { getTransactions } from 'modules/transactions/actions';
import { selectTransactions } from 'modules/transactions/selectors';
import { IMeta } from 'modules/store/types';
import { IconTransactionHistory } from 'components';
import useStyles from './styles';


const vocab = vocabulary.get();

interface ITransactionsListProps {
  navigation: any;
}

const noPendingTransaction = (transactions: ITransaction[]): boolean => {
  return !transactions.find(({ status }) => {
    return (status === TransactionStatusesBE.pending)
      || (status === TransactionStatusesBE.processing);
  });
};

const REQUEST_DELAY = 1000 * 60 * .5;

const TransactionsList: React.FC<ITransactionsListProps> = ({ navigation }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const transactions: ITransaction[] = useSelector(selectTransactions);
  const [delay, setDelay] = useState(REQUEST_DELAY);
  useInterval(() => {
    _getTransactions();
  }, delay);
  const _getTransactions = (meta?: IMeta) => {
    dispatch(getTransactions({
      onSuccess: (_transactions) => {
        setDelay(noPendingTransaction(transactions) ? null : REQUEST_DELAY);
        meta?.onSuccess?.();
      },
      onError: meta?.onError,
    }));
  };
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const refreshData = () => {
    setRefreshing(true);
    _getTransactions({
      onSuccess: () => setRefreshing(false),
      onError: () => setRefreshing(false),
    });
  };
  const openDetails = (transaction: ITransaction) => {
    navigation.navigate(AppScreenNames.TransactionsDetails, transaction);
  };
  return (
    <View style={styles.list}>
      <View style={styles.header}>
        <IconTransactionHistory />
        <Text style={styles.headerTitle}>
          {vocab.transactionHistory.toUpperCase()}
        </Text>
      </View>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refreshData}
          />
        }
      >
        {transactions.map((transaction) => {
          const transactionStatus = getTransactionStatus(transaction.status);
          return (
            <Pressable
              key={transaction.id}
              style={styles.transaction}
              onPress={() => openDetails(transaction)}
            >
              <Text style={styles.date}>{getTransactionDate(transaction.created_at)}</Text>
              <View style={styles.details}>
                <Text
                  style={[styles.amount, styles[transactionStatus.toLowerCase()]]}
                >
                  {transaction.amount}{vocab.aed}
                </Text>
                {transactionStatus.toLowerCase() !== TransactionStatusesFE.completed && (
                  <Text style={[styles.status, styles[transactionStatus.toLowerCase()]]}>
                    {transactionStatus}
                  </Text>
                )}
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TransactionsList;
