import React from 'react';
import { View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from 'config/theme';
import useStyles from './styles';
import GradientRamadan from './GradientRamadan';

interface IScreenGradientRamadanProps {
  style?: ViewStyle;
  color1?: string;
  color2?: string;
}

const ScreenGradientRamadan = ({
  style,
  color1 = theme.colors.floosGradientColor3,
  color2 = theme.colors.screenBackgroundColorLight,
}: IScreenGradientRamadanProps) => {
  const styles = useStyles();
  return (
    <View style={[styles.gradientRamadan, style]} >
      <LinearGradient
        style={styles.gradient}
        colors={[color1, color2]}
      />
      <View style={styles.ornament}>
        <GradientRamadan />
      </View>
    </View>

  );
};

export default ScreenGradientRamadan;
