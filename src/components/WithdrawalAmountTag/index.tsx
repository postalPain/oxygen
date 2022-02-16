import React from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { windowDimensions } from 'utils/window';
import LinearGradient from 'react-native-linear-gradient';
import theme from 'config/theme';
import vocab from 'i18n';
import { E2ETextWrapper } from '../E2EText';


interface IWithdrawalAmountTag {
  style?: ViewStyle;
  active?: boolean;
  amount?: number;
  onPress?: (amount: number) => void;
  total?: boolean;
}

const WithdrawalAmountTag = ({
  style,
  amount,
  active = false,
  total = false,
  onPress,
}: IWithdrawalAmountTag) => {
  return (
    <Pressable onPress={() => onPress(amount)}>
      <LinearGradient
        style={[styles.linearGradient, style]}
        colors={active
          ? ['#935EBF', '#B15F8F']
          : [theme.colors.screenBackgroundColorLight, theme.colors.screenBackgroundColorLight]}
        locations={[0, 1]}
        useAngle
      >
        <E2ETextWrapper>
          <Text
            style={[styles.text, {
              color: active ? theme.colors.screenBackgroundColorLight : theme.colors.textDark
            }]}
          >
            {!!total ? vocab.get().totalAvailableAmount(amount) : `${amount} ${vocab.get().aed}` }

          </Text>
        </E2ETextWrapper>
        <View style={[styles.border, {
          borderWidth: active ? 0 : 1
        }]}
        />
      </LinearGradient>
    </Pressable>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 0.035 * windowDimensions.width,
  },
  linearGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 0.04 * windowDimensions.height,
    borderRadius: 0.03 * windowDimensions.height,
    paddingHorizontal: '4%',
  },
  border: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 0.03 * windowDimensions.height,
  }
});

export default WithdrawalAmountTag;
