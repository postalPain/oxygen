import { StyleSheet } from 'react-native';
import theme from 'config/theme';


const useStyles = () => StyleSheet.create({
  link: {
    marginBottom: 20,
    color: theme.colors.floos2,
    fontSize: 16,
    letterSpacing: .5,
  },
});

export default useStyles;