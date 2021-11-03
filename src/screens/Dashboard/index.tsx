import React, { useState } from 'react';
import { Text, View, } from 'react-native';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { Button } from 'components';
import api from 'services/api';
import { useSelector } from 'react-redux';
import { selectAuthData } from 'modules/auth/selectors';
import ScreenWrapperMain from 'components/ScreenWrapperMain';
import IconPlus from 'components/IconPlus';
import vocab from 'i18n';
import moment from 'moment';
import styles from './styles';
import WithdrawalTagLarge from 'components/WithdrawalTagLarge';
import WithdrawalTagSmall from 'components/WithdrawalTagSmall';
import WithdrawInfo from './WithdrawInfo';

interface IDashboardProps {
  navigation: AppNavigationProps<AppScreenNames.Dashboard>;
}

const Dashboard: React.FC<IDashboardProps> = ({ navigation }) => {
  const authData = useSelector(selectAuthData);

  const [userInfo, setUserInfo] = useState(null);

  return (
    <>
      <ScreenWrapperMain>
        <View style={styles.greetingContainer}>
          <Text style={[styles.greeting]}>
            <Text>Hi, </Text>
            <Text style={styles.greetingName}>Bayani</Text>
          </Text>
          <Text style={[styles.greeting, styles.greetingDate]}>
            {moment().format('ddd D MMM[,] YYYY')}
          </Text>
        </View>
        <View style={{ alignSelf: 'stretch' }}>
          <WithdrawalTagLarge amount={2500} style={styles.largeTagContainer} />
          <WithdrawInfo style={styles.info} />
        </View>
        <View style={styles.smallTagsContainer}>
          <WithdrawalTagSmall amount={0} withdrawn style={{ flex: 3 }} />
          <View style={styles.smallTagsDivider} />
          <WithdrawalTagSmall amount={2500} earned style={{ flex: 4 }} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => api.employees.userInfo().then(x => setUserInfo(x.data))}
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
