import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { getHeight, getWidth, windowDimensions } from 'utils/window';

const mainHeight = 0.1 * windowDimensions.height;
const mainWidth = mainHeight * 2.5 ;
const tipHeight = 0.01 * windowDimensions.height;

const shadow = {
  shadowColor: 'black',
  shadowOffset: { width: 1, height: 1 },
  shadowOpacity: 0.1,
  elevation: 2,
};

const styles = StyleSheet.create({
  tooltip: {
    width: '100%',
    position: 'absolute',
    backgroundColor: 'transparent',
    top: -mainHeight - tipHeight * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  main: {
    position: 'absolute',
    top: 0,
    width: mainWidth,
    height: mainHeight,
    backgroundColor: theme.colors.screenBackgroundColorLight,
    borderRadius: mainHeight / 10,
    zIndex: 2
  },
  shadow: {
    ...shadow,
  },
  tip: {
    position: 'absolute',
    width: tipHeight,
    height: tipHeight,
    transform: [{ rotate: '45deg' }],
    bottom: -tipHeight / 2,
    left: mainWidth / 2,
    backgroundColor: theme.colors.screenBackgroundColorLight,
    ...shadow
  },
  content: {
    paddingHorizontal: getWidth(3),
    paddingVertical: getHeight(1.3),
  },
  text: {
    color: theme.colors.textDark,
    fontSize: getHeight(1.6)
  }
});


export default styles;