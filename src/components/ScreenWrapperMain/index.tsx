import theme from 'config/theme';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { windowDimensions } from 'utils/window';
import { ScreenGradient } from 'components';

interface IScreenWrapperMain {
  children?;
  style?: ViewStyle;
}

const ScreenWrapperMain = (props: IScreenWrapperMain) => {
  return (
    <View style={[styles.screenWrapperMain, props.style]}>
      <ScreenGradient />
      {props.children}
    </View>
  );
};

export const MAIN_WRAPPER_PADDING_HORIZONTAL = 0.05 * windowDimensions.width;

export const MAIN_WRAPPER_PADDING_BOTTOM = 0.06 * windowDimensions.height;

const styles = StyleSheet.create({
  screenWrapperMain: {
    flex: 1,
    width: windowDimensions.width,
    paddingHorizontal: MAIN_WRAPPER_PADDING_HORIZONTAL,
    paddingTop: 0.15 * windowDimensions.height,
    paddingBottom: MAIN_WRAPPER_PADDING_BOTTOM,
    backgroundColor: theme.colors.screenBackgroundColorLight,
    alignItems: 'center',
  },
});

export default ScreenWrapperMain;