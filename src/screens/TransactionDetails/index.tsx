import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import vocabulary from 'i18n';
import { getTransactionDetailsDate, getTransactionStatus } from 'utils/transactionData';
import { ITransaction } from 'modules/transactions/types';
import useStyles from './styles';
import AppStatusBlur from '../../components/AppStatusBlur';
import { getTransaction } from 'modules/transactions/actions';
import ScreenGradient from 'components/ScreenGradient';
import IconTransactionHistory from 'components/IconTransactionHistory';
import DetailsContainer from 'components/Details';
import InfoRecord from 'components/InfoRecord';
import moment from 'moment';

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
      footnote: (transaction.accepted_at && moment().diff(transaction.accepted_at, 'days', true) < 2)
        && vocab.keepInMind
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
  { route: { params } }: AppNavigationProps<AppScreenNames.TransactionDetails>
) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [currentTransaction, setCurrentTransaction] = useState<ITransaction>(null);

  useEffect(() => {
    dispatch(getTransaction(params.id, setCurrentTransaction));
  }, []);

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
        <DetailsContainer>
          {getData(currentTransaction).map(({ label, text, width, footnote }) =>
            <InfoRecord
              label={label}
              text={text}
              width={width}
              key={label}
              footnote={footnote}
            />
          )}
        </DetailsContainer>
      </View>
      {Platform.OS === 'ios' && <AppStatusBlur />}
    </SafeAreaView>
  );
};

export default TransactionDetails;
