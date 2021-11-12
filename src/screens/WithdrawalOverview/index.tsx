import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { Button } from 'components';
import styles from './styles';
import IconDocument from 'components/IconDocument';
import ScreenWrapperWithdrawal from 'components/ScreenWrapperWithdrawal';
import vocab from 'i18n';
import { AppNavigationProps, AppScreenNames, AppStackParameters } from 'navigation/types';
import React from 'react';
import { Text, View } from 'react-native';
import WithdrawalOverviewItem from './WithdrawalOverviewItem';

const mockedAmounts = [200, 25, 225];

const WithdrawalOverview = (props: AppNavigationProps<AppScreenNames.WithdrawalOverview>) => {
  const navigation: StackNavigationProp<any> = useNavigation();
  return (
    <ScreenWrapperWithdrawal>
      <View style={styles.content}>

        <View style={styles.headerContainer}>
          <IconDocument />
          <Text style={styles.headerText}>{vocab.get().requestOverview}</Text>
        </View>
        <WithdrawalOverviewItem type='requested' amount={mockedAmounts[0]} style={styles.item} />
        <WithdrawalOverviewItem type='charge' amount={mockedAmounts[1]} style={styles.item} />
        <WithdrawalOverviewItem type='deduction' amount={mockedAmounts[2]} style={styles.item} />
      </View>


      <View style={styles.buttonContainer}>

        <Button onPress={() => navigation.navigate(AppScreenNames.WithdrawalConfirmation)}>
          {vocab.get().confirmWithdrawal}
        </Button>
      </View>

    </ScreenWrapperWithdrawal>
  );
};

export default WithdrawalOverview;