import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { SCREEN_HORIZONTAL_PADDING } from 'utils/screen';
import env from 'env';

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    backgroundColor: theme.colors.screenBackgroundColorLight,
    paddingTop: 0.12 * env.dimensions.height,
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  },
});

export default styles;