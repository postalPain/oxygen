import React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { ITransaction, TransactionKeys, TTransactionStatusBE } from 'modules/transactions/types';
import { getTransactionDetailsDate, getTransactionStatus } from 'utils/transactionData';
import useStyles from './styles';
import vocabulary from 'i18n';

const vocab = vocabulary.get();

export interface ITransactionMetaData {
  key: string;
  label: string;
}

interface ITransactionProps {
  style?: ViewStyle;
  metaData: ITransactionMetaData[];
  data: ITransaction;
}

const Transaction = ({
  style, data, metaData,
}: ITransactionProps) => {
  const styles = useStyles();
  return (
    <View style={styles.detailsContainer}>
      <View style={[styles.details, style]}>
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
              {(key === TransactionKeys.amount) && `${data[key]} ${vocab.aed}`}
              {(key === TransactionKeys.status) && getTransactionStatus(data[key])}
              {(key === TransactionKeys.iban) && data.bank_details.iban}
              {(key === TransactionKeys.id) && data[key]}
              {(key === TransactionKeys.created_at) && getTransactionDetailsDate(data[key])}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Transaction;
