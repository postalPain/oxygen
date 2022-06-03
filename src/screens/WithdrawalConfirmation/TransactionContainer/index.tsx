import React, { Fragment } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import vocab from 'i18n';
import moment from 'moment';

import { selectWithdrawalTransaction } from 'modules/withdrawal/selectors';

import styles from './styles';

interface IField {
  header: string;
  value: string | number;
}

export const TransactionContainer = () => {
  const transaction = useSelector(selectWithdrawalTransaction);

  const transactionFields: IField[] = [
    {
      header: vocab.get().requestId,
      value: transaction.id,
    },
    {
      header: vocab.get().date,
      value: moment(transaction.created_at).format('DD.MM.YYYY'),
    },
    ...(transaction.bank_details.iban
      ? [
        {
          header: vocab.get().iban,
          value: transaction.bank_details.iban,
        },
      ]
      : [
        {
          header: vocab.get().workPermitNumber,
          value: transaction.bank_details.work_permit_number,
        },
        {
          header: vocab.get().cashPickup,
          value: vocab.get().cashPickupConfirmationDescription,
        },
      ]),
  ];

  return (
    <View style={styles.transactionContainer}>
      {transactionFields.map(({ header, value }) => (
        <Fragment key={header}>
          <Text style={styles.transactionHeader}>{header}</Text>
          <Text style={styles.transactionValue}>{value}</Text>
        </Fragment>
      ))}
    </View>
  );
};
