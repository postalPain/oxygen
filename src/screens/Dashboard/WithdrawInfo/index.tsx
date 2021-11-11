import IconInfoLight from 'components/IconInfoLight';
import theme from 'config/theme';
import React from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import { windowDimensions } from 'utils/window';

interface IWithdrawInfo {
  style?: ViewStyle;
  onPress?: () => void;
}


const WithdrawInfo = ({ style, onPress }: IWithdrawInfo) => {
  return (
    <View style={[styles.withdrawInfo, style]}>
      <Pressable onPress={onPress}>
        <IconInfoLight
          color={theme.colors.screenBackgroundColorLight}
          size={height - 4}
        />
      </Pressable>
    </View>
  );
};

const height = 0.05 * windowDimensions.height;

const styles = StyleSheet.create({
  withdrawInfo: {
    width: 0.16 * windowDimensions.width,
    height,
    backgroundColor: theme.colors.floos1,
    borderTopLeftRadius: height,
    borderBottomLeftRadius: height,
    justifyContent: 'center',
    padding: 4
  },
});

export default WithdrawInfo;