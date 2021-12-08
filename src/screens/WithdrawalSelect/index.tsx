import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { Button, Link } from 'components';
import styles from './styles';
import ScreenWrapperWithdrawal from 'components/ScreenWrapperWithdrawal';
import WithdrawalAmountTag from 'components/WithdrawalAmountTag';
import vocab from 'i18n';
import { AppScreenNames } from 'navigation/types';
import React, { useEffect, useRef, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import Slider from '@react-native-community/slider';
import theme from 'config/theme';
import { useDispatch, useSelector } from 'react-redux';
import { selectAmount, selectFee, selectMaximumWithdrawable, selectMinimumWithdrawable, selectSuggestedValues } from 'modules/withdrawal/selectors';
import { setAmount } from 'modules/withdrawal/actions';

const WithdrawalSelect = () => {
  const dispatch = useDispatch();
  const navigation: StackNavigationProp<any> = useNavigation();
  const otherAmountRef = useRef(null);
  const amount = useSelector(selectAmount);
  const suggestedValues = useSelector(selectSuggestedValues);
  const minimumWithdrawable = useSelector(selectMinimumWithdrawable);
  const maximumWithdrawable = useSelector(selectMaximumWithdrawable);
  const fee = useSelector(selectFee);
  const [description, setDescription] = useState<string>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (amount > maximumWithdrawable) {
      setDescription(vocab.get().maximumWithdrawable(maximumWithdrawable));
      setDisabled(true);
    } else if (amount < minimumWithdrawable) {
      setDescription(vocab.get().minimumWithdrawable(minimumWithdrawable));
      setDisabled(true);
    } else {
      setDescription(vocab.get().plusServiceCharge(fee));
      setDisabled(false);
    }
  }, [amount, suggestedValues]);

  useEffect(() => {
    !amount && minimumWithdrawable && dispatch(setAmount(minimumWithdrawable));
  }, [minimumWithdrawable]);

  return (
    <ScreenWrapperWithdrawal>
      <Text style={styles.headerText}>{vocab.get().withdrawalAmount}</Text>
      <Text style={[styles.amountText, {
        color: amount
          ? disabled ? theme.colors.floos3 : theme.colors.floos1
          : theme.colors.shade1
      }]}
      >{Math.floor(amount)} {vocab.get().aed}
      </Text>
      <Text style={styles.descriptionText}>
        {description}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={minimumWithdrawable}
        value={amount}
        maximumValue={maximumWithdrawable}
        minimumTrackTintColor={theme.colors.floos1}
        maximumTrackTintColor={theme.colors.shade1}
        thumbTintColor={theme.colors.floos3}
        onValueChange={(value) => dispatch(setAmount(Math.floor(value)))}
      />
      {suggestedValues?.length > 1 && (
        <View style={styles.suggestedContainer}>
          {suggestedValues
            .map((value, idx) =>
              idx < suggestedValues.length - 1 && (
                <WithdrawalAmountTag
                  key={value}
                  style={styles.suggestedTag}
                  active={amount === value}
                  onPress={(_amount) => dispatch(setAmount(_amount))}
                  amount={value}
                />
              )
            )}
        </View>
      )}

      { !!suggestedValues?.length && (
        <View style={styles.suggestedContainerTotal}>
          <WithdrawalAmountTag
            key={suggestedValues[suggestedValues.length - 1]}
            style={styles.suggestedTag}
            active={amount === suggestedValues[suggestedValues.length - 1]}
            total
            onPress={(_amount) => dispatch(setAmount(_amount))}
            amount={suggestedValues[suggestedValues.length - 1]}
          />
        </View>
      )}
      <Link
        style={styles.otherAmount}
        onPress={() => otherAmountRef.current.focus()}
      >
        {vocab.get().otherAmount}
      </Link>
      <TextInput
        keyboardType='numeric'
        returnKeyType='done'
        ref={otherAmountRef}
        value={amount.toString()}
        style={{
          opacity: 0
        }}
        onChangeText={(value) => dispatch(setAmount(Number(value))) }
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate(AppScreenNames.WithdrawalOverview)}
          disabled={!amount || !!disabled}
        >
          {vocab.get().continue}
        </Button>
      </View>

    </ScreenWrapperWithdrawal>
  );
};

export default WithdrawalSelect;