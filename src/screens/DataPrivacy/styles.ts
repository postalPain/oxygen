import { StyleSheet } from 'react-native';
import theme from 'config/theme';


const useStyles = () => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textContainer: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
  },
  checkboxContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  checkboxLabelWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  checkbox: {
    borderColor: theme.colors.checkboxBorderColor,
  },
  checkboxIcon: {
    width: 8,
    height: 8,
    backgroundColor: theme.colors.screenBackgroundColorLight,
    borderRadius: 8,
  },
  checkboxLabel: {
    fontSize: 16,
    lineHeight: 22,
  },
  link: {
    color: theme.colors.floos4,
    fontSize: 16,
    lineHeight: 22,
    textDecorationStyle: 'solid',
    textDecorationColor: theme.colors.floos4,
    textDecorationLine: 'underline',
  },
  button: {
    width: '100%',
  },
});

export default useStyles;
