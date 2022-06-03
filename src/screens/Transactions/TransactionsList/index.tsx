import React from 'react';
import { Text, View, Pressable, ScrollView, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import vocabulary from 'i18n';
import { getTransactionDate, getTransactionStatus } from 'utils/transactionData';
import { AppScreenNames } from 'navigation/types';
import { ITransaction, TransactionStatusesFE } from 'modules/transactions/types';
import { getTransactions } from 'modules/transactions/actions';
import { selectTransactions, selectTransactionsLoading } from 'modules/transactions/selectors';
import useStyles from './styles';
import { useNavigation } from '@react-navigation/native';
import IconTransactionHistory from 'components/IconTransactionHistory';


const vocab = vocabulary.get();

const TransactionsList = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const transactions = useSelector(selectTransactions);
  const transactionsLoading = useSelector(selectTransactionsLoading);

  const openDetails = (transaction: ITransaction) => {
    navigation.navigate(AppScreenNames.TransactionDetails, { id: transaction.id });
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
            refreshing={transactionsLoading}
            onRefresh={() => dispatch(getTransactions())}
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
                <View style={styles.detailsContainer}>
                  <Text style={[styles.amount, styles[transactionStatus.toLowerCase()]]} >
                    {transaction.amount}{vocab.aed}
                  </Text>
                  {transactionStatus.toLowerCase() !== TransactionStatusesFE.completed && (
                    <Text style={[styles.status, styles[transactionStatus.toLowerCase()]]}>
                      {transactionStatus}
                    </Text>
                  )}
                </View>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TransactionsList;
