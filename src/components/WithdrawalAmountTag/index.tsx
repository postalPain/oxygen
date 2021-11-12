import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { windowDimensions } from 'utils/window';

interface IWithdrawalAmountTag {
  children?: number;
  style?: ViewStyle;
}

const WithdrawalAmountTag = (props: IWithdrawalAmountTag) => {
  return (
    <View style={[styles.withdrawalAmountTag, props.style]}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  withdrawalAmountTag: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 0.035 * windowDimensions.height,
    paddingHorizontal: '4%',
    borderWidth: 1,
    borderRadius: 0.03 * windowDimensions.height,
  },
  text: {
    fontSize: 0.035 * windowDimensions.width,
  }
});

export default WithdrawalAmountTag;