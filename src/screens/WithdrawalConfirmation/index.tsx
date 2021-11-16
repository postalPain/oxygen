import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { Button } from 'components';
import styles from './styles';
import ScreenWrapperWithdrawal from 'components/ScreenWrapperWithdrawal';
import vocab from 'i18n';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import React from 'react';
import { Text, View } from 'react-native';
import IconCheckRound from 'components/IconCheckRound';
import { useSelector } from 'react-redux';
import { selectWithdrawalTransaction } from 'modules/withdrawal/selectors';
import moment from 'moment';

const WithdrawalConfirmation = (props: AppNavigationProps<AppScreenNames.WithdrawalConfirmation>) => {
  const navigation: StackNavigationProp<any> = useNavigation();
  const transaction = useSelector(selectWithdrawalTransaction);

  return (
    <ScreenWrapperWithdrawal>
      <View style={styles.content}>
        <IconCheckRound />
        <Text style={styles.header}>{vocab.get().yourRequestConfirmed}</Text>
        <Text style={styles.description}>{vocab.get().itShouldntTakeTooLong}</Text>
        <View style={styles.transactionContainer}>
          <Text style={styles.transactionHeader}>{vocab.get().requestId}</Text>
          <Text style={styles.transactionValue}>{transaction.id}</Text>
          <Text style={styles.transactionHeader}>{vocab.get().date}</Text>
          <Text style={styles.transactionValue}>{moment(transaction.created_at).format('DD.MM.YYYY')}</Text>
          <Text style={styles.transactionHeader}>{vocab.get().iban}</Text>
          <Text style={styles.transactionValue}>{transaction.bank_details.iban}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.navigate(AppScreenNames.TabNavigation)}>
          {vocab.get().ok}
        </Button>
      </View>

    </ScreenWrapperWithdrawal>
  );
};

export default WithdrawalConfirmation;