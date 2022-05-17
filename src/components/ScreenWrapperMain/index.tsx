import theme from 'config/theme';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { getHeight, getWidth, windowDimensions } from 'utils/window';
import ScreenGradientRamadan from 'components/CampaignRamadan/ScreenGradientRamadan';
import { isRamadan22 } from 'utils/time';
import ScreenGradient from 'components/ScreenGradient';

interface IScreenWrapperMain {
  children?;
  style?: ViewStyle;
}

const ScreenWrapperMain = (props: IScreenWrapperMain) => {
  return (
    <View style={[styles.screenWrapperMain, props.style]}>
      <View style={styles.screenGradient}>
        {isRamadan22() ? <ScreenGradientRamadan /> : <ScreenGradient />}
      </View>
      {props.children}
    </View>
  );
};

export const MAIN_WRAPPER_PADDING_HORIZONTAL = getWidth(5);

export const MAIN_WRAPPER_PADDING_BOTTOM = getHeight(3);

const styles = StyleSheet.create({
  screenWrapperMain: {
    flex: 1,
    width: windowDimensions.width,
    paddingHorizontal: MAIN_WRAPPER_PADDING_HORIZONTAL,
    paddingTop: getHeight(20),
    paddingBottom: MAIN_WRAPPER_PADDING_BOTTOM,
    backgroundColor: theme.colors.screenBackgroundColorLight,
    alignItems: 'center',
  },
  screenGradient: {
    position: 'absolute',
    left: 0,
    right: 0
  },
});

export default ScreenWrapperMain;