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
import Modal from 'components/Modal';
import { getBalance, getWithdrawableDefaults, getSuggestedValues, getPaycycleInfo } from 'modules/withdrawal/actions';
import { selectBalance } from 'modules/withdrawal/selectors';
import ModalWithdrawInfo from './ModalWithdrawInfo';
import { E2ETextWrapper } from '../../components/E2EText';
import { analyticEvents, analytics } from '../../services/analytics';
import env from 'env';
import { navigate } from 'navigation';
import { AppScreenNames } from 'navigation/types';

const Dashboard: React.FC<any> = () => {
  const userInfo = useSelector(selectUserInfo);
  const balance = useSelector(selectBalance);

  const [infoModal, setInfoModal] = useState(false);

  const onInfoIconPress = () => {
    setInfoModal(true);
    analytics.logEvent(analyticEvents.dashboardOpenInfo, {
      source: 'via-info-icon',
    });
  };

  return (
    <ScreenWrapperMain>
      {infoModal && (
        <Modal>
          <ModalWithdrawInfo onClose={() => setInfoModal(false)} />
        </Modal>
      )}
      <View style={styles.greetingContainer}>
        <Text style={[styles.greeting]}>
          <Text>{vocab.get().hi}</Text>
          <E2ETextWrapper>
            <Text style={styles.greetingName} >{userInfo.first_name}
            </Text>
          </E2ETextWrapper>
        </Text>
        <Text
          style={[styles.greeting, styles.greetingDate]}
          onPress={() => env.dev && navigate(AppScreenNames.Debug)}
        >
          {moment().format('ddd D MMM[,] YYYY')}
        </Text>
      </View>
      <View style={{ alignSelf: 'stretch' }}>
        <WithdrawalTagLarge amount={balance.withdrawable_wages} style={styles.largeTagContainer} />
        <WithdrawInfo style={styles.info} onPress={onInfoIconPress} />
      </View>
      <View style={styles.smallTagsContainer}>
        <WithdrawalTagSmall amount={balance.total_withdrawn_amount} withdrawn style={{ flex: 5 }} />
        <View style={styles.smallTagsDivider} />
        <WithdrawalTagSmall amount={balance.earned_wages} earned style={{ flex: 6 }} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonWithdraw setInfoModal={setInfoModal} source="via-dashboard" />
      </View>
    </ScreenWrapperMain>
  );
};

export default Dashboard;
