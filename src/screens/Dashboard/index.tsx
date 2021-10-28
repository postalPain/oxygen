import React from 'react';
import { Text, View, } from 'react-native';
import { ProjectThemeType } from 'config/theme';
import { NavigationContainerRef } from '@react-navigation/native';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';


interface IDashboardProps {
  navigation: AppNavigationProps<AppScreenNames.Dashboard>;
  theme: ProjectThemeType;
}

const Dashboard: React.FC<IDashboardProps> = ({ theme, navigation }) => {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
};

export default Dashboard;
