import theme from 'config/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const circleMediumSize = 140;

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