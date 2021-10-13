import { StyleSheet } from 'react-native';
import { getSizeForLayout, fontSize } from 'utils/screen';
import theme from 'config/theme';

const useStyles = () => StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: getSizeForLayout(16),
    paddingLeft: getSizeForLayout(8),
  },
  iconContainer: {
    width: getSizeForLayout(7),
    height: getSizeForLayout(7),
    marginTop: getSizeForLayout(2),
    marginRight: getSizeForLayout(4),
  },
  infoText: {
    flexShrink: 2,
    flexWrap: 'wrap',
    color: theme.colors.textDark,
    fontSize: fontSize(16),
    lineHeight: fontSize(18),
  },
});

export default useStyles;
