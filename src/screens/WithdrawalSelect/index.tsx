import React, { useEffect, useRef, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import Slider from '@react-native-community/slider';
import vocab from 'i18n';
import { AppScreenNames } from 'navigation/types';
import {
  selectAmount,
  selectFee,
  selectMaximumWithdrawable,
  selectMinimumWithdrawable,
  selectSuggestedValues,
} from 'modules/withdrawal/selectors';
import { setAmount } from 'modules/withdrawal/actions';
import theme from 'config/theme';
import ScreenWrapperWithdrawal from 'components/ScreenWrapperWithdrawal';
import WithdrawalAmountTag from 'components/WithdrawalAmountTag';
import { Button, Link } from 'components';
import styles from './styles';


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
  const [inputValue, setInputValue] = useState('');
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

  const onValueChange = (value) => {
    dispatch(setAmount(+value));
  };

  return (
    <ScreenWrapperWithdrawal>
      <Text style={styles.headerText}>{vocab.get().withdrawalAmount}</Text>
      <Text
        style={[styles.amountText, {
          color: amount
            ? disabled ? theme.colors.floos3 : theme.colors.floos1
            : theme.colors.shade1
        }]}
      >
        {Math.floor(amount)} {vocab.get().aed}
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
        onValueChange={(value) => {
          setInputValue('');
          onValueChange(value);
        }}
        step={10}
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
                  onPress={(_amount) => {
                    setInputValue('');
                    onValueChange(_amount);
                  }}
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
            onPress={(value) => {
              setInputValue('');
              onValueChange(value);
            }}
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
        value={inputValue}
        style={{ opacity: 0 }}
        onChangeText={(value) => {
          setInputValue(value);
          onValueChange(value);
        }}
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