import { StyleSheet } from 'react-native';
import theme from 'config/theme';

const useStyles = () => StyleSheet.create({
  title: {
    marginTop: 80,
    fontSize: 20,
    lineHeight: 24,
    marginBottom: 32,
    fontWeight: '300',
  },
  input: {
    height: 200,
    fontSize: 18,
    lineHeight: 21,
    color: theme.colors.textDarkBlue,
    borderWidth: 1,
    borderRadius: 12,
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderColor: theme.colors.surveyInputBorder,
    backgroundColor: theme.colors.surveyInputBackground,
    textAlignVertical: 'top',
  },
  focus: {
    borderColor: theme.colors.floos2,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  textLength: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 16,
    color: theme.colors.textLight,
    textAlign: 'right',
    marginBottom: 32,
  }
});

export default useStyles;
