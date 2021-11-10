import theme from 'config/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { windowDimensions } from 'utils/window';

export const circleLargeSize = 0.63 * windowDimensions.width;

const CircleLarge = () => {
  return (
    <View style={styles.circleLarge} />
  );
};

const styles = StyleSheet.create({
  circleLarge: {
    width: circleLargeSize,
    height: circleLargeSize,
    borderRadius: circleLargeSize,
    borderWidth: 0.135 * circleLargeSize,
    borderColor: theme.colors.floos2,
    backgroundColor: 'transparent',
  },
});

export default CircleLarge;