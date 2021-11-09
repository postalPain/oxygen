import CircleLarge, { circleLargeSize } from 'components/CircleLarge';
import CircleMedium, { circleMediumSize } from 'components/CircleMedium';
import CircleSmall, { circleSmallSize } from 'components/CircleSmall';
import theme from 'config/theme';
import React, { useState } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { windowDimensions } from 'utils/window';
import AnimatedTranslate from './AnimatedTranslate';
import { OnboardingContext } from './context';
import styles from './styles';

interface IOnboardingScreenWrapper {
  children?: any;
}

const ScreenWrapperOnboarding = (props: IOnboardingScreenWrapper) => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <OnboardingContext.Provider value={{ onSlideChange: setSlideIndex }}>
      <View style={styles.onboardingScreenWrapper}>
        <LinearGradient
          style={styles.background}
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

export const circleCoordinates = [{
  large: { x: windowDimensions.width - 0.65 * circleLargeSize, y: -0.3 * circleLargeSize },
  medium: { x: -0.14 * circleMediumSize, y: -0.14 * circleMediumSize },
  small1: { x: -0.3 * circleSmallSize, y: 3 * circleSmallSize },
  small2: { x: windowDimensions.width - 0.66 * circleSmallSize, y: 3.2 * circleSmallSize }
},
{
  large: { x: - 0.07 * circleLargeSize, y: -0.5 * circleLargeSize },
  medium: { x: windowDimensions.width - 0.71 * circleMediumSize, y: 0.71 * circleMediumSize },
  small1: { x: 0.5 * circleSmallSize, y: 2.5 * circleSmallSize },
  small2: { x: windowDimensions.width - 0.5 * circleSmallSize, y: 0 }
},
{
  large: { x: windowDimensions.width - 0.61 * circleLargeSize, y: 0.07 * circleLargeSize },
  medium: { x: 0.14 * circleMediumSize, y: -0.14 * circleMediumSize },
  small1: { x: -0.41 * circleSmallSize, y: 3 * circleSmallSize },
  small2: { x: windowDimensions.width - 3.3 * circleSmallSize, y: -0.16 * circleSmallSize }
}];

export default ScreenWrapperOnboarding;
