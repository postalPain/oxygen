import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ScreenWrapperMain from 'components/ScreenWrapperMain';
import vocab from 'i18n';
import moment from 'moment';
import styles from './styles';
import WithdrawalTagLarge from 'components/WithdrawalTagLarge';
import WithdrawalTagSmall from 'components/WithdrawalTagSmall';
import ButtonWithdraw from 'components/ButtonWithdraw';
import WithdrawInfo from './WithdrawInfo';
import { selectUserInfo } from 'modules/user/selectors';
import ModalGoodToKnow from './ModalGoodToKnow';
import Modal from 'components/Modal';
import { getBalance, getWithdrawableDefaults, getSuggestedValues } from 'modules/withdrawal/actions';
import { selectBalance, selectSuggestedValues } from 'modules/withdrawal/selectors';


const Dashboard: React.FC<any> = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const balance = useSelector(selectBalance);
  const suggestedValues = useSelector(selectSuggestedValues);
  const [infoModal, setInfoModal] = useState(false);
  useEffect(() => {
    dispatch(getBalance());
    dispatch(getWithdrawableDefaults());
  }, []);

  useEffect(() => {
    balance && dispatch(getSuggestedValues()); // BE produces an error when requesting values before the balance
  }, [balance]);

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
        <WithdrawalTagSmall amount={balance.total_withdrawn_amount} withdrawn style={{ flex: 5 }} />
        <View style={styles.smallTagsDivider} />
        <WithdrawalTagSmall amount={balance.earned_wages} earned style={{ flex: 6 }} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonWithdraw />
      </View>
    </ScreenWrapperMain>
  );
};

export default Dashboard;
