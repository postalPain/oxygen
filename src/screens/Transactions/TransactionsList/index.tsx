import React from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import vocabulary from 'i18n';
import { getTransactionDate, getTransactionStatus } from 'utils/transactionData';
import { AppScreenNames } from 'navigation/types';
import { ITransaction, TransactionStatusesFE } from 'modules/transactions/types';
import { IconTransactionHistory } from 'components';
import useStyles from './styles';


const vocab = vocabulary.get();

interface ITransactionsListProps {
  navigation: any,
  transactions: ITransaction[];
}

const TransactionsList: React.FC<ITransactionsListProps> = (
  { transactions, navigation }
) => {
  const styles = useStyles();
  const openDetails = (transaction: ITransaction) => {
    navigation.navigate(AppScreenNames.TransactionsDetails, transaction);
  };
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.list}>
      <View style={styles.header}>
        <IconTransactionHistory />
        <Text style={styles.headerTitle}>
          {vocab.transactionHistory.toUpperCase()}
        </Text>
      </View>
      <ScrollView style={{ marginBottom: tabBarHeight * 1.5, backgroundColor: 'coral', }}>
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
                  style={[styles.amount, styles[transactionStatus.toLowerCase()]]}>
                  {transaction.amount}{vocab.aed}
                </Text>
                {transactionStatus.toLowerCase() !== TransactionStatusesFE.completed && (
                  <Text style={[styles.status, styles[transactionStatus]]}>
                    {transactionStatus}
                  </Text>
                )}
              </View>
            </Pressable>
          )
        })}
      </ScrollView>
    </View>
  );
};

export default TransactionsList;
