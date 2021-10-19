import CircleLarge from 'components/CircleLarge';
import CircleMedium from 'components/CircleMedium';
import CircleSmall from 'components/CircleSmall';
import IconFloosFull from 'components/IconFloosFull';
import { circleCoordinates } from 'components/ScreenWrapperOnboarding';
import theme from 'config/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getFontSize } from 'utils/screen';
import { windowDimensions } from 'utils/window';
import Logo from '../../../assets/logo.svg';
import EmailTag from './EmailTag';

interface IScreenWrapperLogin {
  children?: any;
}

const ScreenWrapperLogin = (props: IScreenWrapperLogin) => {
  return (
    <View style={styles.screenWrapperLogin}>
      <View style={styles.header}>
        <View style={[styles.circle, styles.circleMedium]}>
          <CircleMedium />
        </View>
        <View style={[styles.circle, styles.circleLarge]}>
          <CircleLarge />
        </View>
        <View style={[styles.circle, styles.circleSmall1]}>
          <CircleSmall />
        </View>
        <View style={[styles.circle, styles.circleSmall2]}>
          <CircleSmall />
        </View>
        <View style={styles.headerBackground} />
        <View style={styles.logo}>
          <IconFloosFull />
        </View>
        {/* <View style={styles.logoLoggedIn}>
          <Logo />
        </View> */}
        <View>
          <Text style={styles.hiMessage}>Hi, Bayani!</Text>
          <EmailTag style={styles.emailTag} email="asd@asd.com" />
        </View>
      </View>

      <View style={styles.childrenContainer}>
        {props.children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenWrapperLogin: {
    width: windowDimensions.width,
    height: windowDimensions.height,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 0.36 * windowDimensions.height,
    paddingBottom: 0.01 * windowDimensions.height
  },
  headerBackground: {
    position: 'absolute',
    top: - 0.05 * windowDimensions.width,
    left: - 0.04 * windowDimensions.width,
    right: - 0.02 * windowDimensions.width,
    bottom: 0,
    backgroundColor: theme.colors.floosGragientColor1,
    opacity: 0.05,
    borderRadius: 0.055 * windowDimensions.height
  },
  logo: {
    marginBottom: 0.09 * windowDimensions.height
  },
  logoLoggedIn: {
    width: 0.13 * windowDimensions.width,
    height: 0.13 * windowDimensions.width
  },
  hiMessage: {
    fontSize: getFontSize(6),
    marginBottom: 0.015 * windowDimensions.height,
    textAlign: 'center'
  },
  emailTag: {
  },
  circle: {
    position: 'absolute'
  },
  circleMedium: {
    left: circleCoordinates[0].medium.x,
    top: circleCoordinates[0].medium.y,
  },
  circleLarge: {
    left: circleCoordinates[0].large.x,
    top: circleCoordinates[0].large.y,
  },
  circleSmall1: {
    left: circleCoordinates[0].small1.x,
    top: circleCoordinates[0].small1.y,
  },
  circleSmall2: {
    left: circleCoordinates[0].small2.x,
    top: circleCoordinates[0].small2.y,
  },
  childrenContainer: {
    flex: 1,
    paddingHorizontal: 0.085 * windowDimensions.width,
    paddingTop: 0.01 * windowDimensions.height,
    paddingBottom: 0.09 * windowDimensions.height,
  }
});

export default ScreenWrapperLogin;