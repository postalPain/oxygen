import CircleLarge from 'components/CircleLarge';
import CircleMedium from 'components/CircleMedium';
import CircleSmall from 'components/CircleSmall';
import theme from 'config/theme';
import React, { useState } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AnimatedTranslate from './AnimatedTranslate';
import { OnboardingContext } from './context';
import styles from './styles';
import { getCircleCoordinates } from 'constants/coordinates';

interface IOnboardingScreenWrapper {
  children?: any;
}

const ScreenWrapperOnboarding = (props: IOnboardingScreenWrapper) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const circleCoordinates = getCircleCoordinates();

  return (
    <OnboardingContext.Provider value={{ onSlideChange: setSlideIndex }}>
      <View style={styles.onboardingScreenWrapper}>
        <LinearGradient
          style={styles.gradient}
          colors={[ theme.colors.floosGradientColor3, theme.colors.screenBackgroundColorLight ]}
        />
        <AnimatedTranslate
          styles={styles.circle}
          x={circleCoordinates[slideIndex].medium.x}
          y={circleCoordinates[slideIndex].medium.y}
        >
          <CircleMedium />
        </AnimatedTranslate>
        <AnimatedTranslate
          styles={styles.circle}
          x={circleCoordinates[slideIndex].large.x}
          y={circleCoordinates[slideIndex].large.y}
        >
          <CircleLarge />
        </AnimatedTranslate>
        <AnimatedTranslate
          styles={styles.circle}
          x={circleCoordinates[slideIndex].small1.x}
          y={circleCoordinates[slideIndex].small1.y}
        >
          <CircleSmall />
        </AnimatedTranslate>
        <AnimatedTranslate
          styles={styles.circle}
          x={circleCoordinates[slideIndex].small2.x}
          y={circleCoordinates[slideIndex].small2.y}
        >
          <CircleSmall />
        </AnimatedTranslate>
        {props.children}
      </View>
    </OnboardingContext.Provider>

  );
};


export default ScreenWrapperOnboarding;
