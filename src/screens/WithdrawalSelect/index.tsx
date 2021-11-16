import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { Button, Link } from 'components';
import styles from './styles';
import ScreenWrapperWithdrawal from 'components/ScreenWrapperWithdrawal';
import WithdrawalAmountTag from 'components/WithdrawalAmountTag';
import vocab from 'i18n';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import React, { useEffect, useRef, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import Slider from '@react-native-community/slider';
import theme from 'config/theme';
import { useDispatch, useSelector } from 'react-redux';
import { selectAmount, selectBalance, selectSuggestedValues } from 'modules/withdrawal/selectors';
import { setAmount } from 'modules/withdrawal/actions';

const WithdrawalSelect = (props: AppNavigationProps<AppScreenNames.WithdrawalSelect>) => {
  const dispatch = useDispatch();
  const navigation: StackNavigationProp<any> = useNavigation();
  const otherAmountRef = useRef(null);
  const balance = useSelector(selectBalance);
  const amount = useSelector(selectAmount);
  const suggestedValues = [200, 300, 500, 800, 1350]; // useSelector(selectSuggestedValues);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (amount > balance.withdrawable_wages) {
      setError(vocab.get().cantWithdrawMore(balance.withdrawable_wages));
    } else if (amount && (amount < suggestedValues[0])) {
      setError(vocab.get().cantWithdrawLess(suggestedValues[0]));
    } else {
      setError(null);
    }
  }, [amount]);

  return (
    <ScreenWrapperWithdrawal>
      <Text style={styles.headerText}>{vocab.get().withdrawalAmount}</Text>
      <Text style={[styles.amountText, {
        color: amount
          ? error ? theme.colors.floos3 : theme.colors.floos1
          : theme.colors.shade1
      }]}
      >{Math.floor(amount)} {vocab.get().aed}
      </Text>
      <Text style={styles.minimalText}>
        {amount
          ? vocab.get().plusServiceCharge(25)
          : vocab.get().minimalWithdrawableSum(20)}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={balance.withdrawable_wages}
        value={amount}
        minimumTrackTintColor={theme.colors.floos1}
        maximumTrackTintColor={theme.colors.shade1}
        thumbTintColor={theme.colors.floos3}
        onValueChange={(value) => dispatch(setAmount(Math.floor(value)))}
      />
      {suggestedValues.length > 1 && (
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
      { suggestedValues.length && (
        <View style={styles.suggestedContainerTotal}>

          <WithdrawalAmountTag
            key={suggestedValues[suggestedValues.length - 1]}
            style={{
              ...styles.suggestedTag,
            }}
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
          display: 'none'
        }}
        onChangeText={(value) => dispatch(setAmount(Number(value))) }
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate(AppScreenNames.WithdrawalOverview)}
          disabled={!amount || !!error}
        >
          {vocab.get().continue}
        </Button>
      </View>

    </ScreenWrapperWithdrawal>
  );
};

export default WithdrawalSelect;