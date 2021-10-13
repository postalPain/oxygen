import { StyleSheet } from 'react-native';
import { fontSize, getSizeForLayout } from '../../utils/screen';
import theme from '../../config/theme';


const useStyles = () => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textContainer: {
    alignItems: 'center',
  },
  heading: {
    fontSize: fontSize(20),
    marginBottom: getSizeForLayout(15),
  },
  text: {
    fontSize: fontSize(18),
    lineHeight: fontSize(26),
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
    width: getSizeForLayout(4),
    height: getSizeForLayout(4),
    backgroundColor: theme.colors.screenBackgroundColorLight,
    borderRadius: 8,
  },
  checkboxLabel: {
    fontSize: fontSize(16),
    lineHeight: fontSize(22),
  },
  link: {
    color: theme.colors.floos4,
    fontSize: fontSize(16),
    lineHeight: fontSize(22),
    textDecorationStyle: 'solid',
    textDecorationColor: 'theme.colors.floos4',
    textDecorationLine: 'underline',
  },
  button: {
    width: '100%',
  },
});

export default useStyles;
