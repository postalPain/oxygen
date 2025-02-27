import { StyleSheet } from 'react-native';
import theme from 'config/theme';


const useStyles = () => StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputLabelError: {
    color: theme.colors.error,
  },
});

export default useStyles;
