import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { AppScreenNames } from 'navigation/types';
import vocab from 'i18n';
import React, { useEffect, useState } from 'react';
import {
  selectCompanyIsActivated,
  selectIsUserBlocked,
  selectCompanyDeactivatedMessage,
} from 'modules/user/selectors';
import {
  selectBalance,
  selectIsWithdrawalPaused,
  selectMinimumWithdrawable,
  selectPaycycleInfo,
} from 'modules/withdrawal/selectors';
import Button from 'components/Button';
import IconPlus from 'components/IconPlus';
import Tooltip from '../Tooltip';
import PayPeriodTooltip from './PayPeriodTooltip';
import {
  getStoredPaycycleViewed,
  storePaycycleViewed,
} from 'modules/withdrawal/asyncStorage';
import { WithdrawalSource } from 'services/analytics/types';
import { setSource } from '../../modules/withdrawal/actions';

interface IButtonWithdraw {
  setInfoModal?: (on: boolean) => void;
  source: WithdrawalSource;
}

const ButtonWithdraw = (props: IButtonWithdraw) => {
  const { setInfoModal, source } = props;
  const navigation: StackNavigationProp<any> = useNavigation();
  const balance = useSelector(selectBalance);
  const paycycleInfo = useSelector(selectPaycycleInfo);
  const isUserBlocked = useSelector(selectIsUserBlocked);
  const companyIsActivated = useSelector(selectCompanyIsActivated);
  const companyDeactivatedMessage = useSelector(
    selectCompanyDeactivatedMessage,
  );
  const isWithdrawalPaused = useSelector(selectIsWithdrawalPaused);
  const minimumWithdrawable = useSelector(selectMinimumWithdrawable);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showPaycycleTooltip, setShowPaycycleTooltip] = useState(false);
  const [withdrawalDisabled, setWithdrawalDisabled] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const paycycleViewed = await getStoredPaycycleViewed();
      setShowPaycycleTooltip(
        paycycleInfo.end && paycycleViewed !== paycycleInfo.end,
      );
    })();
  }, [paycycleInfo]);

  useEffect(() => {
    let newWithdrawalDisabled = null;
    isUserBlocked &&
      (newWithdrawalDisabled = vocab.get().withdrawalErrorBlocked);
    isWithdrawalPaused &&
      (newWithdrawalDisabled = vocab.get().withdrawalErrorDays);
    if (balance.withdrawable_wages !== null && minimumWithdrawable !== null) {
      balance.withdrawable_wages < minimumWithdrawable &&
        (newWithdrawalDisabled = vocab.get().withdrawalErrorMinimum);
    }
    if (!companyIsActivated && companyDeactivatedMessage) {
      const currentLang = vocab.getLanguage() || 'en';
      const disabledMessage = companyDeactivatedMessage[currentLang];
      if (disabledMessage) {
        newWithdrawalDisabled = disabledMessage;
      }
    }
    setWithdrawalDisabled(newWithdrawalDisabled);
  }, [isUserBlocked, isWithdrawalPaused, minimumWithdrawable, balance]);

  useEffect(() => {
    !!withdrawalDisabled && setShowTooltip(true);
  }, [withdrawalDisabled]);

  const onButtonPress = () => {
    dispatch(setSource(source));
    navigation.navigate(AppScreenNames.WithdrawalSelect);
  };

  const getButton = () => (
    <Button
      Icon={<IconPlus size={22} />}
      disabled={!!withdrawalDisabled}
      onPressDisabled={() => setShowTooltip(true)}
      onPress={onButtonPress}
    >
      {vocab.get().withdraw}
    </Button>
  );

  return withdrawalDisabled ? (
    <Tooltip
      show={showTooltip}
      content={withdrawalDisabled}
      onPress={() => setShowTooltip(false)}
    >
      {getButton()}
    </Tooltip>
  ) : (
    <Tooltip
      show={showPaycycleTooltip}
      content={<PayPeriodTooltip />}
      onPress={() => {
        setInfoModal && setInfoModal(true);
        storePaycycleViewed(paycycleInfo.end);
        setShowPaycycleTooltip(false);
      }}
    >
      {getButton()}
    </Tooltip>
  );
};

export default ButtonWithdraw;
