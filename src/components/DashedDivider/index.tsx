import theme from 'config/theme';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface IDashedDivider {
  backgroundColor?: string;
  style?: ViewStyle;
}
const DashedDivider = (props: IDashedDivider) => {
  return (
    <View style={[
      styles.container,
      props.style,
      props.backgroundColor && { backgroundColor: props.backgroundColor },
    ]}
    >
      <View style={styles.dashedLine} />
      <View style={[styles.cover, props.backgroundColor && { backgroundColor: props.backgroundColor }]} />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    height: 3,
  },
  dashedLine: {
    height: 0,
    borderStyle: 'dashed',
    borderColor: theme.colors.shade1,
    borderWidth: 1,
  },
  cover: {
    position: 'absolute',
    backgroundColor: theme.colors.screenBackgroundColorLight,
    top: 0,
    left: 0,
    right: 0,
    bottom: 2,
  }
});

export default DashedDivider;