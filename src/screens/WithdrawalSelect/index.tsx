import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { Button, Link } from 'components';
import styles from './styles';
import ScreenWrapperWithdrawal from 'components/ScreenWrapperWithdrawal';
import WithdrawalAmountTag from 'components/WithdrawalAmountTag';
import vocab from 'i18n';
import { AppNavigationProps, AppScreenNames, AppStackParameters } from 'navigation/types';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import theme from 'config/theme';
import { useSelector } from 'react-redux';
import { selectBalance } from 'modules/payment/selectors';

const mockedSuggestedValues = [10, 20, 30, 40, 50, 60];

const WithdrawalSelect = (props: AppNavigationProps<AppScreenNames.WithdrawalSelect>) => {
  const navigation: StackNavigationProp<any> = useNavigation();
  const balance = useSelector(selectBalance);
  const [amount, setAmount] = useState(0);

  return (
    <ScreenWrapperWithdrawal>
      <Text style={styles.headerText}>{vocab.get().withdrawalAmount}</Text>
      <Text style={[styles.amountText, {
        color: amount ? theme.colors.floos1 : theme.colors.shade1
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
        onValueChange={(value) => setAmount(Math.floor(value))}
      />
      <View style={styles.suggestedContainer}>
        {mockedSuggestedValues
          .filter(value => value < balance.withdrawable_wages)
          .map(value =>
            <WithdrawalAmountTag
              key={value}
              style={styles.suggestedTag}
              active={amount === value}
              onPress={setAmount}
              amount={value}
            />
          )}
      </View>
      <Link style={styles.otherAmount}>{vocab.get().otherAmount}</Link>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate(AppScreenNames.WithdrawalOverview)}
        >
          {vocab.get().continue}
        </Button>
      </View>

    </ScreenWrapperWithdrawal>
  );
};

export default WithdrawalSelect;