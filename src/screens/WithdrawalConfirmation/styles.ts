import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { windowDimensions } from 'utils/window';

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: theme.sizes.fontSizeHeaderLarge,
    textAlign: 'center',
    paddingTop: 0.05 * windowDimensions.height,
  },
  description: {
    paddingTop: 0.02 * windowDimensions.height,
    fontSize: 0.04 * windowDimensions.width
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export default styles;