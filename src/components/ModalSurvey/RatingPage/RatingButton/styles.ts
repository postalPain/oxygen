import { StyleSheet } from 'react-native';
import theme from '../../../../config/theme';

const useStyles = () => StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  checkbox: {
    borderColor: theme.colors.checkboxBorderColor,
    marginLeft: 15,
    marginTop: 20,
  },
  checkboxIcon: {
    width: 8,
    height: 8,
    backgroundColor: theme.colors.screenBackgroundColorLight,
    borderRadius: 50,
  },
});

export default useStyles;
