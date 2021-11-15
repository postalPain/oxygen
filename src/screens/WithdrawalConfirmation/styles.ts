import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { windowDimensions } from 'utils/window';

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  header: {
    fontSize: theme.sizes.fontSizeHeaderLarge,
    textAlign: 'center',
    paddingTop: 0.04 * windowDimensions.height,
  },
  description: {
    paddingTop: 0.02 * windowDimensions.height,
    fontSize: 0.04 * windowDimensions.width
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  transactionContainer: {
    backgroundColor: theme.colors.shade2,
    borderRadius: 0.05 * windowDimensions.width,
    paddingHorizontal: 0.1 * windowDimensions.width,
    paddingTop: 0.02 * windowDimensions.height,
    paddingBottom: 0.1 * windowDimensions.width,
    marginTop: 0.025 * windowDimensions.height,
    width: '100%',
  },
  transactionHeader: {
    color: theme.colors.shade1,
    fontSize: 0.04 * windowDimensions.width,
    textTransform: 'uppercase',
    paddingTop: 0.03 * windowDimensions.height,
  },
  transactionValue: {
    color: theme.colors.textDark,
    paddingTop: 0.01 * windowDimensions.height,
    fontSize: 0.04 * windowDimensions.width,
  }
});

export default styles;