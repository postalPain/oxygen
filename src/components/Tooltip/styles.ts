import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { windowDimensions } from 'utils/window';

const mainHeight = 0.1 * windowDimensions.height;
const mainWidth = mainHeight * 2.5 ;
const tipHeight = 0.01 * windowDimensions.height;

const styles = StyleSheet.create({
  tooltip: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: -mainHeight - tipHeight * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    zIndex: 1,
  },
  main: {
    height: mainHeight,
    width: mainWidth,
    backgroundColor: theme.colors.screenBackgroundColorLight,
    borderRadius: mainHeight / 10,
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  tip: {
    width: tipHeight,
    height: tipHeight,
    transform: [{ rotate: '45deg' }],
    bottom: tipHeight / 2,
    backgroundColor: theme.colors.screenBackgroundColorLight,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    elevation: 2,
    zIndex: 1,
  },
  content: {
    position: 'absolute',
    top: 0,
    zIndex: 2,
    paddingHorizontal: '10%',
    paddingVertical: '5%',
  },
  text: {
    color: theme.colors.textDark
  }
});


export default styles;