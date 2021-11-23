import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { SCREEN_HORIZONTAL_PADDING } from 'utils/screen';
import { getHeight } from 'utils/window';
import env from 'env';

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    backgroundColor: theme.colors.screenBackgroundColorLight,
    paddingTop: getHeight(11),
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
  },
});

export default styles;