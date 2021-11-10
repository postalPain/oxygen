import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
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



interface IDashboardProps {
  navigation: AppNavigationProps<AppScreenNames.Dashboard>;
}

const Dashboard: React.FC<IDashboardProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);

  const [infoModal, setInfoModal] = useState(false);

  return (
    <>
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
          <WithdrawalTagLarge amount={2500} style={styles.largeTagContainer} />
          <WithdrawInfo style={styles.info} onPress={() => setInfoModal(true)} />
        </View>
        <View style={styles.smallTagsContainer}>
          <WithdrawalTagSmall amount={0} withdrawn style={{ flex: 3 }} />
          <View style={styles.smallTagsDivider} />
          <WithdrawalTagSmall amount={2500} earned style={{ flex: 4 }} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => console.log('withdraw') }
            Icon={<IconPlus size={22} />}
          >
            {vocab.get().withdraw}
          </Button>
        </View>
      </ScreenWrapperMain>
    </>
  );
};

export default Dashboard;
