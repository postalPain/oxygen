import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../theme';

interface IButton {
  children?: any;
  secondary?: boolean;
}

const Button = (props: IButton) => {
  const { secondary = false } = props;
  return (
    <View style={[styles.button, secondary ? styles.secondary : styles.primary]}>
      <LinearGradient
        colors={secondary
          ? [theme.backgroundColorPrimary, theme.backgroundColorPrimary]
          : ['#935EBF', '#B15F8F']}
        locations={[0, 1]}
        useAngle
        style={styles.linearGradient}
      >
        <Text style={[styles.text, secondary ? styles.textSecondary : styles.textPrimary]}>
          {props.children}
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 350,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    overflow: 'hidden',
  },
  primary: {
    borderColor: theme.backgroundColorPrimary,
  },
  secondary: {
    borderColor: theme.colorPrimary,
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
    color: theme.backgroundColorPrimary,
  },
  textSecondary: {
    color: theme.colorDark,
  }
});

export default Button;