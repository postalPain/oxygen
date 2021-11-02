import React, { useState } from 'react';
import { Text, View, } from 'react-native';
import { ProjectThemeType } from 'config/theme';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { Button } from 'components';
import api from 'services/api';
import { useSelector } from 'react-redux';
import { selectAuthData } from 'modules/auth/selectors';
import ScreenWrapperMain from 'components/ScreenWrapperMain';
import IconPlus from 'components/IconPlus';
import vocab from 'i18n';


interface IDashboardProps {
  navigation: AppNavigationProps<AppScreenNames.Dashboard>;
  theme: ProjectThemeType;
}

const Dashboard: React.FC<IDashboardProps> = ({ theme, navigation }) => {
  const authData = useSelector(selectAuthData);

  const [userInfo, setUserInfo] = useState(null);

  return (
    <ScreenWrapperMain>
      <Text>Dashboard</Text>
      <Text>{JSON.stringify(authData, undefined, 4)}</Text>
      <Text>{JSON.stringify(userInfo, undefined, 4)}</Text>
      <Button
        onPress={() => api.employees.userInfo().then(x => setUserInfo(x.data))}
        Icon={<IconPlus size={22} />}
      >
        {vocab.get().withdraw}
      </Button>
    </ScreenWrapperMain>
  );
};

export default Dashboard;
