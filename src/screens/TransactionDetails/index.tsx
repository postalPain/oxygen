import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import vocabulary from 'i18n';
import { getTransactionDetailsDate, getTransactionStatus } from 'utils/transactionData';
import { ITransaction } from 'modules/transactions/types';
import { selectTransactions } from 'modules/transactions/selectors';
import { Details, IconTransactionHistory, ScreenGradient } from 'components';
import useStyles from './styles';

const vocab = vocabulary.get();

const getData = (transaction: ITransaction) => {
  return [
    {
      label: vocab.amount,
      text: `${transaction.amount} ${vocab.aed}`,
      width: '50%',
    },
    {
      label: vocab.dateTime,
      text: getTransactionDetailsDate(transaction.created_at),
      width: '50%',
    },
    {
      label: vocab.status,
      text: getTransactionStatus(transaction.status),
      width: '50%',
    },
    {
      label: vocab.requestId,
      text: transaction.id.toString(),
      width: '50%',
    },
    {
      label: vocab.iban,
      text: transaction.bank_details.iban,
    },
  ];
};

const TransactionDetails = (
  { route: { params } }: AppNavigationProps<AppScreenNames.TransactionsDetails>
) => {
  const styles = useStyles();
  const transactions: ITransaction[] = useSelector(selectTransactions);
  const [currentTransaction, setCurrentTransaction] = useState<ITransaction>(params.transaction);
  useEffect(
    () => {
      setCurrentTransaction(transactions.find((t) => t.id === params.transaction.id));
    },
    [transactions]
  );
  return !!currentTransaction && (
    <SafeAreaView style={styles.screen}>
      <ScreenGradient style={styles.gradient} />
      <View style={styles.container}>
        <View style={styles.header}>
          <IconTransactionHistory />
          <Text style={styles.headerText}>
            {vocab.transactionsInformation}
          </Text>
        </View>
        <Details
          data={getData(currentTransaction)}
        />
      </View>
    </SafeAreaView>
  );
};

export default TransactionDetails;
