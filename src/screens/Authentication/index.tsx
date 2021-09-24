import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppScreenNames } from 'navigation/types';
import vocab from 'i18n';
import FullLogo from 'assets/logo.svg';

import Button from 'components/Button';
import theme from 'config/theme';
import { Carousel } from 'components/Carousel';

const carouselSlides = [{
  image: require('assets/onboarding_01.png'),
  label: vocab.get().carousel1,
}, {
  image: require('assets/onboarding_02.png'),
  label: vocab.get().carousel2,
}, {
  image: require('assets/onboarding_03.png'),
  label: vocab.get().carousel3,
}];

const Authentication = (): React.ReactElement => {
  const navigation = useNavigation();

  const onSignUpPress = () => {
    navigation.navigate(AppScreenNames.SignUp);
  };

  const onSignInPress = () => {
    navigation.navigate(AppScreenNames.SignIn);
  };

  return (
    <View style={styles.authScreen}>
      <View style={styles.authScreenWrapper}>
        <View style={styles.carouselContainer}>
          <FullLogo />
          <Carousel slides={carouselSlides} />
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <Button styles={styles.button}>
            {vocab.get().register}
          </Button>
          <Button secondary styles={styles.button}>
            {vocab.get().logIn}
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authScreen: {
    flex: 1,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  authScreenWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  carouselText: {
    textAlign: 'center',
  },
  button: {
    marginBottom: 15
  },
  carouselContainer: {
    flex: 5,
    justifyContent: 'flex-end'
  }
});

export default Authentication;
