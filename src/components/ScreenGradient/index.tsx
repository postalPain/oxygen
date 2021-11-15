import React from 'react';
import { ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from 'config/theme';
import useStyles from './styles';


interface IScreenGradientProps {
  style?: ViewStyle;
  color1?: string;
  color2?: string;
}

const ScreenGradient = ({
  style,
  color1 = theme.colors.floosGradientColor3,
  color2 = theme.colors.screenBackgroundColorLight,
}: IScreenGradientProps) => {
  const styles = useStyles();
  return (
    <LinearGradient
      style={[styles.gradient, style]}
      colors={[color1, color2,]}
    />
  );
};

export default ScreenGradient;
