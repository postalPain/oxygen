import React from 'react';
import { Text, SafeAreaView, } from 'react-native';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';

interface IProfileProps {
  navigation: AppNavigationProps<AppScreenNames.Profile>;
}

const Profile: React.FC<IProfileProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Profile Screen</Text>
    </SafeAreaView>
  );
};

export default Profile;
