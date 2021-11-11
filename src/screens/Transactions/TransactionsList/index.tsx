import React from 'react';
import { Text, View, } from 'react-native';
import vocabulary from 'i18n';
import { ITransaction, TransactionStatuses } from 'modules/transactions/types';
import { IconTransactionHistory } from 'components';
import useStyles from './styles';


const vocab = vocabulary.get();

interface ITransactionsListProps {
  transactions: ITransaction[];
}

const TransactionsList: React.FC<ITransactionsListProps> = ({ transactions }) => {
  const styles = useStyles();
  return (
    <View style={styles.list}>
      <View style={styles.header}>
        <IconTransactionHistory />
        <Text style={styles.headerTitle}>
          {vocab.transactionHistory.toUpperCase()}
        </Text>
      </View>
      {transactions.map((transaction, index) => (
        <View
          key={transaction.id}
          style={[styles.transaction, (index % 2) ? styles.transactionEven : styles.transactionOdd]}
        >
          <Text style={styles.date}>{transaction.created_at}</Text>
          <View style={styles.details}>
            <Text
              style={[styles.amount, styles[transaction.status]]}>
              {transaction.amount}AED
            </Text>
            {transaction.status !== TransactionStatuses.accepted && (
              <Text style={[styles.status, styles[transaction.status]]}>
                {transaction.status}
              </Text>
            )}
          </View>
        </View>
      ))}
    </View>
  );
};

export default TransactionsList;
