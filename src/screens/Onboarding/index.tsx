import React from 'react';
import { StyleSheet, View, } from 'react-native';

import vocab from 'i18n';
import Button from 'components/Button';
import { Carousel } from 'components/Carousel';
import ScreenWrapperOnboarding from 'components/ScreenWrapperOnboarding';
import { OnboardingContext } from 'components/ScreenWrapperOnboarding/context';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';

const carouselSlides = [{
  image: require('../../../assets/onboarding_01.png'),
  label: vocab.get().carousel1,
}, {
  image: require('../../../assets/onboarding_02.png'),
  label: vocab.get().carousel2,
}, {
  image: require('../../../assets/onboarding_03.png'),
  label: vocab.get().carousel3,
}];

const Onboarding = (
  { navigation }: AppNavigationProps<AppScreenNames.Onboarding>
): React.ReactElement => {

  const goToSignUp = () => {
    navigation.navigate(AppScreenNames.EnterRegistrationId);
  };
  const goToLogIn = () => {
    navigation.navigate(AppScreenNames.SignIn);
  };
  return (
    <ScreenWrapperOnboarding>
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

    </ScreenWrapperOnboarding>
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
