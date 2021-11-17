import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ScreenWrapperMain from 'components/ScreenWrapperMain';
import vocab from 'i18n';
import moment from 'moment';
import styles from './styles';
import WithdrawalTagLarge from 'components/WithdrawalTagLarge';
import WithdrawalTagSmall from 'components/WithdrawalTagSmall';
import WithdrawInfo from './WithdrawInfo';
import { selectIsUserBlocked, selectUserInfo } from 'modules/user/selectors';
import ModalGoodToKnow from './ModalGoodToKnow';
import Modal from 'components/Modal';
import { getBalance, getSuggestedValues } from 'modules/withdrawal/actions';
import { selectBalance, selectIsWithdrawalPaused, selectSuggestedValues } from 'modules/withdrawal/selectors';
import ButtonWithdraw from 'components/ButtonWithdraw';
import Tooltip from 'components/Tooltip';


const Dashboard: React.FC<any> = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const balance = useSelector(selectBalance);
  const isUserBlocked = useSelector(selectIsUserBlocked);
  const isWithdrawalPaused = useSelector(selectIsWithdrawalPaused);
  const suggestedValues = useSelector(selectSuggestedValues);

  const [infoModal, setInfoModal] = useState(false);
  const [withdrawalDisabled, setWithdrawalDisable] = useState<string>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    dispatch(getBalance());
  }, []);

  useEffect(() => {
    balance && !suggestedValues && dispatch(getSuggestedValues()); // BE produces an error when requesting values before the balance
  }, [balance]);

  useEffect(() => {
    isUserBlocked && setWithdrawalDisable(vocab.get().withdrawalErrorBlocked);
    isWithdrawalPaused && setWithdrawalDisable(vocab.get().withdrawalErrorDays);
    suggestedValues && !suggestedValues.length && setWithdrawalDisable(vocab.get().withdrawalErrorMinimum);
  }, [isUserBlocked, isWithdrawalPaused, suggestedValues]);

  useEffect(() => {
    withdrawalDisabled && setShowTooltip(true);
  }, [withdrawalDisabled]);

  useEffect(() => {
    showTooltip && setTimeout(() => setShowTooltip(false), 4000);
  }, [showTooltip]);

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
        <View>
          {showTooltip && <Tooltip text={withdrawalDisabled} />}
          <ButtonWithdraw
            disabled={!!withdrawalDisabled}
            onPress={!!withdrawalDisabled ? () => setShowTooltip(true) : null}
          />
        </View>

      </View>
    </ScreenWrapperMain>
  );
};

export default Dashboard;
