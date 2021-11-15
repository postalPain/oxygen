import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { AppScreenNames, AppStackParameters } from 'navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import ScreenWrapperMain from 'components/ScreenWrapperMain';
import vocab from 'i18n';
import moment from 'moment';
import styles from './styles';
import WithdrawalTagLarge from 'components/WithdrawalTagLarge';
import WithdrawalTagSmall from 'components/WithdrawalTagSmall';
import WithdrawInfo from './WithdrawInfo';
import { selectUserInfo } from 'modules/user/selectors';
import { Button } from 'components';
import IconPlus from 'components/IconPlus';
import ModalGoodToKnow from './ModalGoodToKnow';
import Modal from 'components/Modal';
import { getBalance } from 'modules/payment/actions';
import { selectBalance } from 'modules/payment/selectors';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';

const Dashboard: React.FC<any> = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const balance = useSelector(selectBalance);
  const navigation: StackNavigationProp<AppStackParameters, AppScreenNames.Dashboard> = useNavigation();

  const [infoModal, setInfoModal] = useState(false);

  useEffect(() => {
    dispatch(getBalance());
  }, []);

  return (
    <ScreenWrapperMain>
      {infoModal && (
        <Modal>
          <ModalGoodToKnow onClose={() => setInfoModal(false)} />
        </Modal>
      )}
      <View style={styles.greetingContainer}>
        <Text style={[styles.greeting]}>
          <Text>{vocab.get().hi}</Text>
          <Text style={styles.greetingName}>{userInfo.first_name}</Text>
        </Text>
        <Text style={[styles.greeting, styles.greetingDate]}>
          {moment().format('ddd D MMM[,] YYYY')}
        </Text>
      </View>
      <View style={{ alignSelf: 'stretch' }}>
        <WithdrawalTagLarge amount={balance.withdrawable_wages} style={styles.largeTagContainer} />
        <WithdrawInfo style={styles.info} onPress={() => setInfoModal(true)} />
      </View>
      <View style={styles.smallTagsContainer}>
        <WithdrawalTagSmall amount={balance.total_withdrawn_amount} withdrawn style={{ flex: 3 }} />
        <View style={styles.smallTagsDivider} />
        <WithdrawalTagSmall amount={balance.earned_wages} earned style={{ flex: 4 }} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate(AppScreenNames.WithdrawalSelect)}
          Icon={<IconPlus size={22} />}
        >
          {vocab.get().withdraw}
        </Button>
      </View>
    </ScreenWrapperMain>
  );
};

export default Dashboard;
