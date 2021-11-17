import { StyleSheet } from 'react-native';
import theme from 'config/theme';


const useStyles = () => StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  inputLabelError: {
    color: theme.colors.error,
  },
  button: {
    width: '100%',
  },
});

export default useStyles;
