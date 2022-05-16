import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { Button } from 'components';
import styles from './styles';
import ScreenWrapperWithdrawal from 'components/ScreenWrapperWithdrawal';
import vocab from 'i18n';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import IconCheckRound from 'components/IconCheckRound';
import { useDispatch, useSelector } from 'react-redux';
import { selectWithdrawalTransaction } from 'modules/withdrawal/selectors';
import { getSurveys } from 'modules/survey/actions';
import moment from 'moment';
import { E2ETextWrapper } from '../../components/E2EText';
import useAskForReview from 'modules/askForReview/hooks/useAskForReview';

const WithdrawalConfirmation = (props: AppNavigationProps<AppScreenNames.WithdrawalConfirmation>) => {
  const navigation: StackNavigationProp<any> = useNavigation();
  const dispatch = useDispatch();
  const transaction = useSelector(selectWithdrawalTransaction);
  const askForReview = useAskForReview();

  useEffect(() => {
    return () => {
      askForReview();
    };
  }, []);

  const onPress = () => {
    navigation.navigate(AppScreenNames.TabNavigation);
    dispatch(getSurveys());
  };

  return (
    <ScreenWrapperWithdrawal>
      <View style={styles.content}>
        <IconCheckRound />
        <E2ETextWrapper>
          <Text style={styles.header}>{vocab.get().yourRequestConfirmed}</Text>
        </E2ETextWrapper>
        <Text style={styles.description}>{vocab.get().itShouldntTakeTooLong}</Text>
        <View style={styles.transactionContainer}>
          <Text style={styles.transactionHeader}>{vocab.get().requestId}</Text>
          <Text style={styles.transactionValue}>{transaction.id}</Text>
          <Text style={styles.transactionHeader}>{vocab.get().date}</Text>
          <Text style={styles.transactionValue}>{moment(transaction.created_at).format('DD.MM.YYYY')}</Text>
          <Text style={styles.transactionHeader}>{vocab.get().iban}</Text>
          <Text style={styles.transactionValue}>{transaction.bank_details.iban}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onPress}>
          {vocab.get().ok}
        </Button>
      </View>

    </ScreenWrapperWithdrawal>
  );
};

export default WithdrawalConfirmation;
