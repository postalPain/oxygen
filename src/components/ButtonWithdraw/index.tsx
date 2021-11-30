import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { AppScreenNames } from 'navigation/types';
import vocab from 'i18n';
import React, { useEffect, useState } from 'react';
import { selectIsUserBlocked } from 'modules/user/selectors';
import { selectBalance, selectIsWithdrawalPaused, selectMinimumWithdrawable, selectSuggestedValues } from 'modules/withdrawal/selectors';
import Button from 'components/Button';
import IconPlus from 'components/IconPlus';
import Tooltip from '../Tooltip';

const ButtonWithdraw = () => {
  const navigation: StackNavigationProp<any> = useNavigation();
  const balance = useSelector(selectBalance);
  const isUserBlocked = useSelector(selectIsUserBlocked);
  const isWithdrawalPaused = useSelector(selectIsWithdrawalPaused);
  const minimumWithdrawable = useSelector(selectMinimumWithdrawable);
  const [showTooltip, setShowTooltip] = useState(false);
  const [withdrawalDisabled, setWithdrawalDisabled] = useState(null);
  useEffect(() => {
    isUserBlocked && setWithdrawalDisabled(vocab.get().withdrawalErrorBlocked);
    isWithdrawalPaused && setWithdrawalDisabled(vocab.get().withdrawalErrorDays);
    (balance.withdrawable_wages < minimumWithdrawable) && setWithdrawalDisabled(vocab.get().withdrawalErrorMinimum);
  }, [isUserBlocked, isWithdrawalPaused, minimumWithdrawable]);
  useEffect(() => {
    !!withdrawalDisabled && setShowTooltip(true);
  }, [withdrawalDisabled]);
  useEffect(() => {
    showTooltip && setTimeout(() => setShowTooltip(false), 4000);
  }, [showTooltip]);
  return (
    <View>
      {showTooltip && <Tooltip text={withdrawalDisabled} />}
      <Button
        Icon={<IconPlus size={22} />}
        disabled={!!withdrawalDisabled}
        onPressDisabled={() => setShowTooltip(true)}
        onPress={() => navigation.navigate(AppScreenNames.WithdrawalSelect)}
      >
        {vocab.get().withdraw}
      </Button>
    </View>

  );
};

export default ButtonWithdraw;