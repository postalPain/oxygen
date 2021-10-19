import { StyleSheet } from 'react-native';
import theme from 'config/theme';

const useStyles = () => StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 32,
    paddingLeft: 16,
  },
  iconContainer: {
    width: 14,
    height: 14,
    marginTop: 4,
    marginRight: 8,
  },
  infoText: {
    flexShrink: 2,
    flexWrap: 'wrap',
    color: theme.colors.textDark,
    fontSize: 16,
    lineHeight: 22,
  },
});

export default useStyles;
