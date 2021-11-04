import React, { useState } from 'react';
import { Text, View, } from 'react-native';
import { ProjectThemeType } from 'config/theme';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { Button } from 'components';
import api from 'services/api';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthData } from 'modules/auth/selectors';
import { signOut } from 'modules/auth/actions';


interface IDashboardProps {
  navigation: AppNavigationProps<AppScreenNames.Dashboard>;
  theme: ProjectThemeType;
}

const Dashboard: React.FC<IDashboardProps> = ({ theme, navigation }) => {
  const dispatch = useDispatch();
  const authData = useSelector(selectAuthData);

  const [userInfo, setUserInfo] = useState(null);

  return (
    <View>
      <Text>Dashboard</Text>
      <Text>{JSON.stringify(authData, undefined, 4)}</Text>
      <Text>{JSON.stringify(userInfo, undefined, 4)}</Text>
      <Button onPress={() => api.employees.userInfo().then(x => setUserInfo(x.data))}>Me</Button>
      <Button secondary onPress={() => { dispatch(signOut()) }}>
        Log out
      </Button>
    </View>
  );
};

export default Dashboard;
