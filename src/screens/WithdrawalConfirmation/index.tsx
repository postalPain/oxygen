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

const WithdrawalConfirmation = (props: AppNavigationProps<AppScreenNames.WithdrawalConfirmation>) => {
  const navigation: StackNavigationProp<any> = useNavigation();
  return (
    <ScreenWrapperWithdrawal>
      <View style={styles.content}>
        <IconCheckRound />
        <Text style={styles.header}>{vocab.get().yourRequestConfirmed}</Text>
        <Text style={styles.description}>{vocab.get().itShouldntTakeTooLong}</Text>
        <View style={styles.transactionContainer}>
          <Text style={styles.transactionHeader}>{vocab.get().requestId}</Text>
          <Text style={styles.transactionValue}>46753</Text>
          <Text style={styles.transactionHeader}>{vocab.get().date}</Text>
          <Text style={styles.transactionValue}>5.09.2021</Text>
          <Text style={styles.transactionHeader}>{vocab.get().iban}</Text>
          <Text style={styles.transactionValue}>8564 9264 9475 0363</Text>
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