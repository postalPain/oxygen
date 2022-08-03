import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { getWidth, windowDimensions } from 'utils/window';

const styles = StyleSheet.create({
  wrapper: {
    height: 0.16 * windowDimensions.height,
    alignSelf: 'stretch',
    backgroundColor: theme.colors.shade2,
    borderRadius: getWidth(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    color: theme.colors.floos2,
    fontSize: 20,
    textAlign: 'center'
  }
});

export default styles;
