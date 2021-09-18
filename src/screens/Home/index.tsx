import React from 'react';
import { Text, View, } from 'react-native';
import { ProjectThemeType } from 'config/theme';
import { NavigationContainerRef } from '@react-navigation/native';


interface IHomeProps {
  navigation: NavigationContainerRef;
  theme: ProjectThemeType,
}

const Home: React.FC<IHomeProps> = ({ theme }) => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
