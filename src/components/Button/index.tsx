import theme from 'config/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface IButton {
  children?: any;
  secondary?: boolean;
  styles?: any;
}

const Button = (props: IButton) => {
  const { secondary = false } = props;
  return (
    <View style={[styles.button, props.styles]}>
      <LinearGradient
        colors={['#935EBF', '#B15F8F']}
        locations={[0, 1]}
        useAngle
        style={styles.linearGradient}
      >
        <View style={[styles.innerSecondary, { backgroundColor: secondary ? 'white' : 'transparent' }]}>
          <Text style={[styles.text, secondary ? styles.textSecondary : styles.textPrimary]}>
            {props.children}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 350,
    height: 56,
    borderRadius: 28,
    overflow: 'hidden',
  },
  innerSecondary: {
    width: 348,
    height: 54,
    borderRadius: 27,
    backgroundColor: 'white',
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