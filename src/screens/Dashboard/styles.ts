import { MAIN_WRAPPER_PADDING_HORIZONTAL } from 'components/ScreenWrapperMain';
import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { getHeight, getWidth, windowDimensions } from 'utils/window';

const styles = StyleSheet.create({
  greetingContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingBottom: getHeight(10),
  },
  greeting: {
    color: theme.colors.floos1,
    fontSize: getWidth(7),
    letterSpacing: 0.4,
    paddingBottom: getHeight(1)
  },
  greetingName: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  greetingDate: {
    fontSize: getWidth(4),
    fontWeight: 'bold'
  },
  largeTagContainer: {
    marginBottom: getWidth(4),
  },
  smallTagsContainer: {
    flexDirection: 'row',
  },
  smallTagsDivider: {
    width: getWidth(4),
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  info: {
    position: 'absolute',
    right: -MAIN_WRAPPER_PADDING_HORIZONTAL,
    top: '10%',
  }
});

export default styles;