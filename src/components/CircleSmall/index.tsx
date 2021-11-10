import theme from 'config/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { windowDimensions } from 'utils/window';

export const circleSmallSize = 0.15 * windowDimensions.width;

const CircleSmall = () => {
  return (
    <View style={styles.circleSmall} />
  );
};

const styles = StyleSheet.create({
  circleSmall: {
    width: circleSmallSize,
    height: circleSmallSize,
    borderRadius: circleSmallSize,
    backgroundColor: theme.colors.floosGragientColor1,
  },
});

export default CircleSmall;