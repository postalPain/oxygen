import ScreenWrapperMain, { MAIN_WRAPPER_PADDING_BOTTOM } from 'components/ScreenWrapperMain';
import { TAB_BAR_HEIGHT } from 'navigation/TabNavigation/TabBar/styles';
import React from 'react';
import { StyleSheet } from 'react-native';
import { windowDimensions } from 'utils/window';

interface IScreenWrapperWithdrawal {
  children?;
}

const ScreenWrapperWithdrawal = (props: IScreenWrapperWithdrawal) => {
  return (
    <ScreenWrapperMain style={styles.screenWrapperWithdrawal}>
      {props.children}
    </ScreenWrapperMain>
  );
};

const styles = StyleSheet.create({
  screenWrapperWithdrawal: {
    paddingTop: 0.19 * windowDimensions.height,
    paddingBottom: MAIN_WRAPPER_PADDING_BOTTOM + TAB_BAR_HEIGHT,
    paddingHorizontal: 0.08 * windowDimensions.width,
  },
});

export default ScreenWrapperWithdrawal;