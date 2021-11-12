import { ScreenWrapperMain } from 'components';
import { mainWrapperPaddingBottom } from 'components/ScreenWrapperMain';
import { tabBarHeight } from 'navigation/TabNavigation/TabBar/styles';
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
    paddingBottom: mainWrapperPaddingBottom + tabBarHeight,
  },
});

export default ScreenWrapperWithdrawal;