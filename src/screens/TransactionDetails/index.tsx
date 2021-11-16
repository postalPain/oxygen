import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import vocabulary from 'i18n';
import { Details, IconTransactionHistory, ScreenGradient, Transaction } from 'components';
import useStyles from './styles';
import { getTransactionDetailsDate, getTransactionStatus } from '../../utils/transactionData';


const vocab = vocabulary.get();

const getData = (params) => {
  return [
    {
      label: vocab.amount,
      text: `${params.amount} ${vocab.aed}`,
      width: '50%',
    },
    {
      label: vocab.dateTime,
      text: getTransactionDetailsDate(params.created_at),
      width: '50%',
    },
    {
      label: vocab.status,
      text: getTransactionStatus(params.status),
      width: '50%',
    },
    {
      label: vocab.requestId,
      text: params.id.toString(),
      width: '50%',
    },
    {
      label: vocab.iban,
      text: params.bank_details.iban,
    },
  ];
}

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
        <Details data={getData(params)} />
      </View>
    </SafeAreaView>
  )
};

export default TransactionDetails;
