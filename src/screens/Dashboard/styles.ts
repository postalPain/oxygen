import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { windowDimensions } from 'utils/window';

const styles = StyleSheet.create({
  greetingContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingBottom: 0.1 * windowDimensions.height,
  },
  greeting: {
    color: theme.colors.floos1,
    fontSize: 24,
    letterSpacing: 0.4,
    paddingBottom: 5
  },
  greetingName: {
    fontWeight: 'bold'
  },
  greetingDate: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  largeTagContainer: {
    marginBottom: 0.04 * windowDimensions.width,
  },
  smallTagsContainer: {
    flexDirection: 'row',
  },
  smallTagsDivider: {
    width: 0.04 * windowDimensions.width
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default styles;