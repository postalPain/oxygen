import theme from 'config/theme';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { windowDimensions } from 'utils/window';

interface IScreenWrapperMain {
  children?;
  style?: ViewStyle;
}

const ScreenWrapperMain = (props: IScreenWrapperMain) => {
  return (
    <View style={[styles.screenWrapperMain, props.style]}>
      <LinearGradient
        style={styles.gradient}
        colors={[ theme.colors.floosGradientColor3, theme.colors.screenBackgroundColorLight ]}
      />
      {props.children}
    </View>
  );
};

export const mainWrapperPaddingHorizontal = 0.05 * windowDimensions.width;

export const mainWrapperPaddingBottom = 0.06 * windowDimensions.height;

const styles = StyleSheet.create({
  screenWrapperMain: {
    flex: 1,
    width: windowDimensions.width,
    paddingHorizontal: mainWrapperPaddingHorizontal,
    paddingTop: 0.15 * windowDimensions.height,
    paddingBottom: mainWrapperPaddingBottom,
    backgroundColor: theme.colors.screenBackgroundColorLight,
    alignItems: 'center',
  },
  gradient: {
    position: 'absolute',
    height: 0.18 * windowDimensions.height,
    width: windowDimensions.width,
    backgroundColor: theme.colors.floos1,
    opacity: 0.8
  }
});

export default ScreenWrapperMain;