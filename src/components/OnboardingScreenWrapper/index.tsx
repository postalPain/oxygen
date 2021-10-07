import CircleLarge, { circleLargeSize } from 'components/CircleLarge';
import CircleMedium, { circleMediumSize } from 'components/CircleMedium';
import CircleSmall, { circleSmallSize } from 'components/CircleSmall';
import theme from 'config/theme';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { windowDimensions } from 'utils/window';
import AnimatedTranslate from './AnimatedTranslate';
import { OnboardingContext } from './context';

interface IOnboardingScreenWrapper {
  children?: any;
}

const OnboardingScreenWrapper = (props: IOnboardingScreenWrapper) => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <OnboardingContext.Provider value={{ onSlideChange: setSlideIndex }}>
      <View style={styles.onboardingScreenWrapper}>
        <LinearGradient style={styles.background} colors={['#E6C1FF', theme.colors.screenBackgroundColorLight]} />
        <AnimatedTranslate
          styles={styles.circle}
          x={coordinates.medium[slideIndex].x}
          y={coordinates.medium[slideIndex].y}
        >
          <CircleMedium />
        </AnimatedTranslate>
        <AnimatedTranslate
          styles={styles.circle}
          x={coordinates.large[slideIndex].x}
          y={coordinates.large[slideIndex].y}
        >
          <CircleLarge />
        </AnimatedTranslate>
        <AnimatedTranslate
          styles={styles.circle}
          x={coordinates.small1[slideIndex].x}
          y={coordinates.small1[slideIndex].y}
        >
          <CircleSmall />
        </AnimatedTranslate>
        <AnimatedTranslate
          styles={styles.circle}
          x={coordinates.small2[slideIndex].x}
          y={coordinates.small2[slideIndex].y}
        >
          <CircleSmall />
        </AnimatedTranslate>
        {props.children}
      </View>
    </OnboardingContext.Provider>

  );
};

const styles = StyleSheet.create({
  onboardingScreenWrapper: {
    width: windowDimensions.width,
    height: windowDimensions.height,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: windowDimensions.height / 3,
  },
  circle: {
    position: 'absolute'
  },
});


const coordinates = {
  large: [ {
    x: windowDimensions.width - 0.65 * circleLargeSize,
    y: -0.3 * circleLargeSize
  }, {
    x: - 0.07 * circleLargeSize,
    y: -0.5 * circleLargeSize
  }, {
    x: windowDimensions.width - 0.61 * circleLargeSize,
    y: 0.07 * circleLargeSize
  }],
  medium: [ {
    x: -0.14 * circleMediumSize,
    y: -0.14 * circleMediumSize
  }, {
    x: windowDimensions.width - 0.71 * circleMediumSize,
    y: 0.71 * circleMediumSize
  }, {
    x: 0.14 * circleMediumSize,
    y: -0.14 * circleMediumSize
  }, ],
  small1: [
    {
      x: -0.3 * circleSmallSize,
      y: 3.3 * circleSmallSize
    },
    {
      x: 0.5 * circleSmallSize,
      y: 2.5 * circleSmallSize
    },
    {
      x: -0.41 * circleSmallSize,
      y: 3 * circleSmallSize
    },
  ],
  small2: [
    {
      x: windowDimensions.width - 0.66 * circleSmallSize,
      y: 3.3 * circleSmallSize
    },
    {
      x: windowDimensions.width - 0.5 * circleSmallSize,
      y: 0
    },
    {
      x: windowDimensions.width - 3.3 * circleSmallSize,
      y: -0.16 * circleSmallSize
    },
  ],
};

export default OnboardingScreenWrapper;
