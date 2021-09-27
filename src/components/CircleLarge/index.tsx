import theme from 'config/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const circleLargeSize = 240;

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