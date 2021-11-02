import { StyleSheet } from 'react-native';
import theme from 'config/theme';

const useStyles = () => StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  inputLabel: {
    paddingTop: 24,
    fontSize: 8,
  },
  inputLabelError: {
    color: theme.colors.error,
  },
  input: {
    marginTop: -12,
  },
  button: {
    width: '100%',
  },
});

export default useStyles;
