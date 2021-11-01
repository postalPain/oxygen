import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, } from 'react-native';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import SplashScreen from 'react-native-splash-screen';


const LoadingScreen = (
  { navigation }: AppNavigationProps<AppScreenNames.Loading>
): React.ReactElement => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Loading...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default LoadingScreen;
