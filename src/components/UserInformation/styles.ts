import { StyleSheet } from 'react-native';
import theme from 'config/theme';


const useStyles = () => StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 32,
    backgroundColor: theme.colors.personalInfoBackground,
    borderRadius: 26,
  },
});

export default useStyles;