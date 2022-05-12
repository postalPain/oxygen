import { StyleSheet } from 'react-native';
import theme from 'config/theme';

const useStyles = () => StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    marginBottom: 19,
    backgroundColor: theme.colors.surveyRadioBackground,
    borderRadius: 28,
    paddingLeft: 16,
  },
  checked: {
    backgroundColor: theme.colors.surveyRadioBackgroundSelected,
  },
  checkbox: {
    borderColor: theme.colors.checkboxBorderColor,
  },
  checkboxIcon: {
    width: 8,
    height: 8,
    backgroundColor: theme.colors.screenBackgroundColorLight,
    borderRadius: 50,
  },
  buttonLabel: {
    fontWeight: '300',
    fontSize: 16,
    height: 19,
    color: theme.colors.textDarkBlue,
    marginLeft: -2,
  },
});

export default useStyles;
