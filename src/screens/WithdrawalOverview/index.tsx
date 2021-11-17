import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { Button } from 'components';
import styles from './styles';
import IconDocument from 'components/IconDocument';
import ScreenWrapperWithdrawal from 'components/ScreenWrapperWithdrawal';
import vocab from 'i18n';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import WithdrawalOverviewItem from './WithdrawalOverviewItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectAmount, selectFee } from 'modules/withdrawal/selectors';
import { withdrawal } from 'modules/withdrawal/actions';

const WithdrawalOverview = (props: AppNavigationProps<AppScreenNames.WithdrawalOverview>) => {
  const navigation: StackNavigationProp<any> = useNavigation();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState<boolean>(false);

  const amount = useSelector(selectAmount);
  const fee = useSelector(selectFee);

  return (
    <ScreenWrapperWithdrawal>
      <View style={styles.content}>

        <View style={styles.headerContainer}>
          <IconDocument />
          <Text style={styles.headerText}>{vocab.get().requestOverview}</Text>
        </View>
        <WithdrawalOverviewItem type='requested' amount={amount} style={styles.item} />
        <WithdrawalOverviewItem type='charge' amount={fee} style={styles.item} />
        <WithdrawalOverviewItem type='deduction' amount={amount + fee} style={styles.item} />
      </View>


      <View style={styles.buttonContainer}>

        <Button
          onPress={() => {
            setDisabled(true);
            dispatch(withdrawal(amount, {
              onSuccess: () => navigation.navigate(AppScreenNames.WithdrawalConfirmation)
            }));
          }}
          disabled={disabled}
        >
          {vocab.get().confirmWithdrawal}
        </Button>
      </View>

    </ScreenWrapperWithdrawal>
  );
};

export default WithdrawalOverview;