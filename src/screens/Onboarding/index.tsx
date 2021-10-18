import React, { useEffect } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import vocab from 'i18n';

import Button from 'components/Button';
import { Carousel } from 'components/Carousel';
import OnboardingScreenWrapper from 'components/OnboardingScreenWrapper';
import { OnboardingContext } from 'components/OnboardingScreenWrapper/context';
import { AppScreenNames } from 'navigation/types';
import SplashScreen from 'react-native-splash-screen';

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
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const navigation = useNavigation();
  const goToSignUp = () => {
    navigation.navigate(AppScreenNames.EnterEmployer);
  };
  const goToLogIn = () => {
    navigation.navigate(AppScreenNames.SignIn);
  };
  return (
    <OnboardingScreenWrapper>
      <OnboardingContext.Consumer>
        { context => (
          <View style={styles.authScreen}>
            <View style={styles.authScreenWrapper}>
              <View style={styles.carouselContainer}>
                <Carousel slides={carouselSlides} onSlideChange={context.onSlideChange} />
              </View>
              <View style={{ flex: 2, alignItems: 'center' }}>
                <Button
                  styles={styles.button}
                  onPress={goToSignUp}
                >
                  {vocab.get().signUp}
                </Button>
                <Button
                  secondary
                  styles={styles.button}
                  onPress={goToLogIn}
                >
                  {vocab.get().logIn}
                </Button>
              </View>
            </View>
          </View>
        )}
      </OnboardingContext.Consumer>

    </OnboardingScreenWrapper>
  );
};

const styles = StyleSheet.create({
  authScreen: {
    flex: 1,
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
