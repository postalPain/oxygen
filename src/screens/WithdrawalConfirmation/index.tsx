import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import styles from './styles';
import ScreenWrapperWithdrawal from 'components/ScreenWrapperWithdrawal';
import vocab from 'i18n';
import { AppScreenNames } from 'navigation/types';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import IconCheckRound from 'components/IconCheckRound';
import { useDispatch } from 'react-redux';
import { getSurveys } from 'modules/survey/actions';
import { E2ETextWrapper } from '../../components/E2EText';
import useAskForReview from 'modules/askForReview/hooks/useAskForReview';
import Button from 'components/Button';
import { TransactionContainer } from './TransactionContainer';

const WithdrawalConfirmation = () => {
  const navigation: StackNavigationProp<any> = useNavigation();
  const dispatch = useDispatch();
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
        <TransactionContainer />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onPress}>{vocab.get().ok}</Button>
      </View>
    </ScreenWrapperWithdrawal>
  );
};

export default WithdrawalConfirmation;
