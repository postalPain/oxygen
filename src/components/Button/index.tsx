import theme from 'config/theme';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { windowDimensions } from 'utils/window';

interface IButton {
  disabled?: boolean;
  children?: string;
  secondary?: boolean;
  styles?: any;
  onPress?: () => void;
}

const Button = (props: IButton) => {
  const { secondary = false, onPress } = props;
  return (
    <View style={[styles.button, props.styles]}>
      <LinearGradient
        colors={props.disabled ? [theme.colors.shade1] : ['#935EBF', '#B15F8F']}
        locations={[0, 1]}
        useAngle
        style={styles.linearGradient}
      >
        <Pressable onPress={props.disabled ? undefined : onPress}>
          <View style={[styles.innerSecondary, {
            backgroundColor: secondary ? theme.colors.screenBackgroundColorLight : 'transparent'
          }]}
          >
            <Text style={[styles.text, secondary ? styles.textSecondary : styles.textPrimary]}>
              {props.children}
            </Text>
          </View>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: windowDimensions.width * 0.84,
    height: windowDimensions.width * 0.14,
    borderRadius: windowDimensions.width * 0.14,
    overflow: 'hidden',
  },
  innerSecondary: {
    width: windowDimensions.width * 0.84 - 2,
    height: windowDimensions.width * 0.14 - 2,
    borderRadius: windowDimensions.width * 0.14,
    backgroundColor: theme.colors.screenBackgroundColorLight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  linearGradient: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  textPrimary: {
    color: theme.colors.screenBackgroundColorLight,
  },
  textSecondary: {
    color: theme.colors.textDark,
  }
});

export default Button;