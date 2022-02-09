import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { getHeight, getWidth, windowDimensions } from 'utils/window';

const mainHeight = getHeight(8);
const mainWidth = getWidth(75) ;
export const tipHeight = getHeight(2);

const styles = StyleSheet.create({
  tooltip: {
    width: mainWidth,
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: theme.colors.shade2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: getWidth(5),
    zIndex: 1,
  },
  tip: {
    position: 'absolute',
    width: tipHeight,
    height: tipHeight,
    transform: [{ rotate: '45deg' }],
    bottom: -tipHeight / 2,
    left: mainWidth / 2,
    backgroundColor: theme.colors.shade2,
  },
  content: {
    paddingHorizontal: getWidth(3),
    paddingVertical: getHeight(1.3),
  },
  text: {
    color: theme.colors.textLight,
    fontSize: getHeight(2),
  }
});


export default styles;