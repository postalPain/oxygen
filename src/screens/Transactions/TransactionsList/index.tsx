import React from 'react';
import { Text, View, Pressable } from 'react-native';
import vocabulary from 'i18n';
import { AppScreenNames } from 'navigation/types';
import { ITransaction, TransactionStatuses } from 'modules/transactions/types';
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
  return (
    <View style={styles.list}>
      <View style={styles.header}>
        <IconTransactionHistory />
        <Text style={styles.headerTitle}>
          {vocab.transactionHistory.toUpperCase()}
        </Text>
      </View>
      {transactions.map((transaction, index) => (
        <Pressable
          key={transaction.id}
          style={styles.transaction}
          onPress={() => openDetails(transaction)}
        >
          <Text style={styles.date}>{transaction.created_at}</Text>
          <View style={styles.details}>
            <Text
              style={[styles.amount, styles[transaction.status]]}>
              {transaction.amount}{vocab.aed}
            </Text>
            {transaction.status !== TransactionStatuses.accepted && (
              <Text style={[styles.status, styles[transaction.status]]}>
                {(transaction.status === TransactionStatuses.declined) || (transaction.status === TransactionStatuses.error)
                ? vocab.failed
                : vocab.pending}
              </Text>
            )}
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default TransactionsList;
