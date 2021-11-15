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
      <View style={styles.headerContainer}>
        <IconCheckRound />
        <Text style={styles.header}>{vocab.get().yourRequestConfirmed}</Text>
        <Text style={styles.description}>{vocab.get().itShouldntTakeTooLong}</Text>
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