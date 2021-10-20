import { StyleSheet } from 'react-native';
import theme from 'config/theme';


const useStyles = () => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  heading: {
    fontSize: 20,
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'center',
  },
  consentBlock: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
  },
  checkboxWrapper: {
    width: '10%',
    marginTop: 4,
  },
  checkboxLabelWrapper: {
    width: '70%',
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
    lineHeight: 28,
  },
  link: {
    color: theme.colors.floos4,
    fontSize: 16,
    lineHeight: 28,
    textDecorationStyle: 'solid',
    textDecorationColor: theme.colors.floos4,
    textDecorationLine: 'underline',
  },
  button: {
    width: '100%',
  },
});

export default useStyles;
