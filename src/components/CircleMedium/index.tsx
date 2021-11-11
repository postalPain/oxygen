import theme from 'config/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { windowDimensions } from 'utils/window';

export const circleMediumSize = 0.32 * windowDimensions.width;

const CircleMedium = () => {
  return (
    <View style={styles.circleMedium} />
  );
};

const styles = StyleSheet.create({
  circleMedium: {
    width: circleMediumSize,
    height: circleMediumSize,
    borderRadius: circleMediumSize,
    backgroundColor: theme.colors.floosGragientColor1
  },
});

export default CircleMedium;