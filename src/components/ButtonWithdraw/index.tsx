import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { Button } from 'components';
import { IButton } from 'components/Button';
import IconPlus from 'components/IconPlus';
import vocab from 'i18n';
import { AppScreenNames } from 'navigation/types';
import React from 'react';

const ButtonWithdraw = (props: IButton) => {
  const navigation: StackNavigationProp<any> = useNavigation();
  return (
    <Button
      Icon={<IconPlus size={22} />}
      {...props}  // eslint-disable-line
      onPress={() => navigation.navigate(AppScreenNames.WithdrawalSelect)}
    >
      {vocab.get().withdraw}
    </Button>
  );
};

export default ButtonWithdraw;