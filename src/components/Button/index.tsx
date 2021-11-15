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
  Icon?: React.ReactNode;
}

const Button = (props: IButton) => {
  const { secondary = false, onPress } = props;
  return (
    <View style={[styles.button, props.styles]}>
      <LinearGradient
        colors={props.disabled ? [theme.colors.shade1, theme.colors.shade1] : ['#935EBF', '#B15F8F']}
        locations={[0, 1]}
        useAngle
        style={styles.linearGradient}
      >
        <Pressable onPress={props.disabled ? undefined : onPress}>
          <View style={[styles.innerSecondary, {
            backgroundColor: secondary ? theme.colors.screenBackgroundColorLight : 'transparent'
          }]}
          >
            <View style={styles.textContainer}>
              {props.Icon}
              <Text style={[
                styles.text,
                secondary ? styles.textSecondary : styles.textPrimary,
                props.children && { paddingLeft: 10 }
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