import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { Button } from 'components';
import ScreenWrapperWithdrawal from 'components/ScreenWrapperWithdrawal';
import vocab from 'i18n';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import React from 'react';

const WithdrawalConfirmation = (props: AppNavigationProps<AppScreenNames.WithdrawalConfirmation>) => {
  const navigation: StackNavigationProp<any> = useNavigation();
  return (
    <ScreenWrapperWithdrawal>
      <Button onPress={() => navigation.navigate(AppScreenNames.TabNavigation)}>
        {vocab.get().ok}
      </Button>
    </ScreenWrapperWithdrawal>
  );
};

export default WithdrawalConfirmation;