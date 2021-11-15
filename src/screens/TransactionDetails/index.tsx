import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import vocabulary from 'i18n';
import { TransactionKeys, } from 'modules/transactions/types';
import { IconTransactionHistory, ScreenGradient, Transaction } from 'components';
import useStyles from './styles';


const vocab = vocabulary.get();

const metaData = [
  {
    key: TransactionKeys.amount,
    label: vocab.amount,
  },
  {
    key: TransactionKeys.created_at,
    label: vocab.dateTime,
  },
  {
    key: TransactionKeys.status,
    label: vocab.status,
  },
  {
    key: TransactionKeys.id,
    label: vocab.requestId,
  },
  {
    key: TransactionKeys.iban,
    label: vocab.iban,
  },
];

const TransactionDetails = (
  { route: { params } }: AppNavigationProps<AppScreenNames.TransactionsDetails>
) => {
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.screen}>
      <ScreenGradient style={styles.gradient} />
      <View style={styles.container}>
        <View style={styles.header}>
          <IconTransactionHistory />
          <Text style={styles.headerText}>
            {vocab.transactionsInformation}
          </Text>
        </View>
        <Transaction
          metaData={metaData}
          data={params}
        />
      </View>
    </SafeAreaView>
  )
};

export default TransactionDetails;
