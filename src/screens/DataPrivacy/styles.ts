import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { getHeight, getWidth } from 'utils/window';


const useStyles = () => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: getHeight(4),
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: getWidth(5),
  },
  heading: {
    marginBottom: getHeight(3),
    fontSize: getWidth(5),
    letterSpacing: .5,
  },
  text: {
    fontSize: getWidth(4),
    letterSpacing: .5,
    lineHeight: getHeight(3.5),
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
    marginTop: getHeight(.5),
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
    width: getWidth(1.8),
    height: getWidth(1.8),
    backgroundColor: theme.colors.screenBackgroundColorLight,
    borderRadius: getHeight(1),
  },
  checkboxLabel: {
    fontSize: getWidth(3.5),
    lineHeight: getHeight(3.5),
    letterSpacing: .5,
  },
  link: {
    marginTop: getHeight(.1),
    color: theme.colors.floos4,
    fontSize: getWidth(3.5),
    lineHeight: getHeight(3.5),
    letterSpacing: .5,
    textDecorationStyle: 'solid',
    textDecorationColor: theme.colors.floos4,
    textDecorationLine: 'underline',
  },
  button: {
    width: '100%',
  },
});

export default useStyles;
