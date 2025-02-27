import theme from 'config/theme';
import React from 'react';
import { Pressable, Text, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export interface IButton {
  disabled?: boolean;
  children?: string | React.ReactNode;
  secondary?: boolean;
  styles?: ViewStyle;
  onPress?: () => void;
  onPressDisabled?: () => void;
  Icon?: React.ReactNode;
  width?: number;
  textStyles?: ViewStyle;
}

const Button = (props: IButton) => {
  const { secondary = false, textStyles, disabled, onPress, onPressDisabled, width } = props;
  return (
    <View style={[styles.button, props.styles, width && { width }]}>
      <LinearGradient
        colors={disabled ? [theme.colors.shade1, theme.colors.shade1] : ['#935EBF', '#B15F8F']}
        locations={[0, 1]}
        useAngle
        style={[styles.linearGradient, width && { width }]}
      >
        <Pressable onPress={disabled ? onPressDisabled : onPress}>
          <View style={[styles.innerSecondary, {
            backgroundColor: secondary ? theme.colors.screenBackgroundColorLight : 'transparent'
          }]}
          >
            <View style={styles.textContainer}>
              {props.Icon}
              <Text style={[
                styles.text,
                secondary ? styles.textSecondary : styles.textPrimary,
                props.children && { paddingLeft: 10 },
                textStyles,
              ]}
              >
                {props.children}
              </Text>
            </View>

          </View>
        </Pressable>
      </LinearGradient>
    </View>
  );
};


export default Button;
