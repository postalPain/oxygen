import { StyleSheet } from 'react-native';
import { getFontSize } from 'utils/screen';
import theme from 'config/theme';
import { getSizeForLayout } from 'utils/screen';

const useStyles = () => StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  input: {
    color: 'red',
  },
  infoContainer: {
    flexDirection: 'row',
    marginVertical: getSizeForLayout(18),
    paddingHorizontal: getSizeForLayout(12),
  },
  iconContainer: {
    flexShrink: 1,
    width: getSizeForLayout(10),
    height: getSizeForLayout(9),
    marginRight: getSizeForLayout(6),
  },
  infoText: {
    flexShrink: 1,
    flexWrap: 'wrap',
    color: theme.colors.textDark,
    fontSize: getFontSize(7),
    lineHeight: getFontSize(10),
  },
});

export default useStyles;
