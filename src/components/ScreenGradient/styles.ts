import { StyleSheet } from 'react-native';
import env from 'env';
import theme from 'config/theme';
import { getHeight } from 'utils/window';

const useStyles = () => StyleSheet.create({
  gradient: {
    position: 'absolute',
    height: getHeight(18),
    width: env.dimensions.width,
    opacity: .8
  },
});

export default useStyles;