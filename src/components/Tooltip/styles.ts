import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { getHeight, getWidth } from 'utils/window';

export const tipHeight = getHeight(2);

const styles = StyleSheet.create({
  tooltip: {
    maxWidth: '95%',
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: theme.colors.shade2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: getWidth(6),
    zIndex: 1,
  },
  tip: {
    position: 'absolute',
    width: tipHeight,
    height: tipHeight,
    transform: [{ rotate: '45deg' }],
    bottom: -tipHeight / 2,
    alignSelf: 'center',
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

export const actionableTooltipStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: getWidth(2),
  },
  text: {
    fontSize: getHeight(2),
    marginLeft: getWidth(2),
    marginRight: getWidth(4)
  },
  textBold: {
    fontWeight: '600'
  }
});


export default styles;