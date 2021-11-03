import theme from 'config/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { windowDimensions } from 'utils/window';

interface IScreenWrapperMain {
  children?;
}

const ScreenWrapperMain = (props: IScreenWrapperMain) => {
  return (
    <View style={styles.screenWrapperMain}>
      <LinearGradient
        style={styles.gradient}
        colors={[ theme.colors.floosGradientColor3, theme.colors.screenBackgroundColorLight ]}
      />
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  screenWrapperMain: {
    height: windowDimensions.height,
    width: windowDimensions.width,
    paddingHorizontal: 0.05 * windowDimensions.width,
    paddingTop: 0.15 * windowDimensions.height,
    paddingBottom: 0.06 * windowDimensions.height,
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