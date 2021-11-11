import { StyleSheet } from 'react-native';
import theme from 'config/theme';


const useStyles = () => StyleSheet.create({
  infoBlock: {
    marginTop: 26,
  },
  infoTitle: {
    color: '#B2B2B2',
    fontSize: 16,
    letterSpacing: .5,
  },
  infoText: {
    marginTop: 4,
    color: theme.colors.textDark,
    fontSize: 16,
    letterSpacing: .5,
  },
});

export default useStyles;