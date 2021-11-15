import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { getTransactionDetailsDate, getTransactionStatus } from 'utils/transactionData';
import vocabulary from 'i18n';
import { TransactionKeys } from 'modules/transactions/types';
import { IconTransactionHistory } from 'components';
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
  // TODO change navigation header style
  // TODO transform status
  // TODO transform date
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <IconTransactionHistory />
          <Text style={styles.headerText}>
            {vocab.transactionsInformation}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.details}>
            {metaData.map(({ key, label }) => (
              <View
                key={key}
                style={[
                  styles.item,
                  key === TransactionKeys.iban
                    ? styles.itemFullLine
                    : styles.itemHalfLine
                ]}
              >
                <Text style={styles.itemLabel}>
                  {label}
                </Text>
                <Text style={styles.itemText}>
                  {(key === TransactionKeys.amount) && `${params[key]} ${vocab.aed}`}
                  {(key === TransactionKeys.status) && getTransactionStatus(params[key])}
                  {(key === TransactionKeys.iban) && params.bank_details.iban}
                  {(key === TransactionKeys.id) && params[key]}
                  {(key === TransactionKeys.created_at) && getTransactionDetailsDate(params[key])}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
};

export default TransactionDetails;
