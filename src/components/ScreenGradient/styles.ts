import { StyleSheet } from 'react-native';
import env from 'env';
import theme from 'config/theme';

const useStyles = () => StyleSheet.create({
  gradient: {
    position: 'absolute',
    height: .18 * env.dimensions.height,
    width: env.dimensions.width,
    backgroundColor: theme.colors.floos1,
    opacity: .8
  }
});

export default useStyles;