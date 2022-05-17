import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { getHeight, getWidth } from 'utils/window';

const useStyles = () => StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: getHeight(3.5),
    paddingHorizontal: getWidth(5),
  },
  iconContainer: {
    width: getWidth(3.5),
    height: getHeight(1.5),
    marginTop: getHeight(.7),
    marginRight: getWidth(2),
  },
  infoText: {
    flexShrink: 2,
    flexWrap: 'wrap',
    color: theme.colors.textDark,
    fontSize: getWidth(4),
    lineHeight: getHeight(3),
    textAlign: 'left',
  },
});

export default useStyles;
