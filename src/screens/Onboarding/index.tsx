import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import vocab from 'i18n';

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

const Onboarding = (): React.ReactElement => {
  const navigation = useNavigation();

  return (
    <View style={styles.authScreen}>
      <View style={styles.authScreenWrapper}>
        <View style={styles.carouselContainer}>
          <Carousel slides={carouselSlides} />
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <Button styles={styles.button}>
            {vocab.get().signUp}
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

export default Onboarding;
