import theme from 'config/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { windowDimensions } from 'utils/window';
import { ScreenGradient } from 'components';

interface IScreenWrapperMain {
  children?;
}

const ScreenWrapperMain = (props: IScreenWrapperMain) => {
  return (
    <View style={styles.screenWrapperMain}>
      <ScreenGradient />
      {props.children}
    </View>
  );
};

export const MainWrapperPaddingHorizontal = 0.05 * windowDimensions.width;

const styles = StyleSheet.create({
  screenWrapperMain: {
    flex: 1,
    width: windowDimensions.width,
    paddingHorizontal: MainWrapperPaddingHorizontal,
    paddingTop: 0.15 * windowDimensions.height,
    paddingBottom: 0.06 * windowDimensions.height,
    backgroundColor: theme.colors.screenBackgroundColorLight,
    alignItems: 'center',
  },
});

export default ScreenWrapperMain;