import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { Button } from 'components';
import ScreenWrapperWithdrawal from 'components/ScreenWrapperWithdrawal';
import vocab from 'i18n';
import { AppNavigationProps, AppScreenNames, AppStackParameters } from 'navigation/types';
import React from 'react';

const WithdrawalOverview = (props: AppNavigationProps<AppScreenNames.WithdrawalOverview>) => {
  const navigation: StackNavigationProp<any> = useNavigation();
  return (
    <ScreenWrapperWithdrawal>
      <Button onPress={() => navigation.navigate(AppScreenNames.WithdrawalConfirmation)}>
        {vocab.get().confirmWithdrawal}
      </Button>
    </ScreenWrapperWithdrawal>
  );
};

export default WithdrawalOverview;