import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { SCREEN_BOTTOM_PADDING } from 'utils/screen';

const useStyles = () => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: SCREEN_BOTTOM_PADDING,
  },
  steps: {
    paddingTop: '35%',
    paddingLeft: 65,
    marginBottom: 64,
  },
  step: {},
  progressBar: {
    alignItems: 'center',
    width: 41,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: -74,
  },
  line: {
    position: 'absolute',
    width: 3,
    height: '115%',
    backgroundColor: '#C9C9C9',
  },
  lineDark: {
    backgroundColor: theme.colors.floos1,
  },
  stepTitle: {
    marginBottom: 8,
    fontFamily: theme.font.fontFamily,
    fontSize: 16,
    fontWeight: 'normal',
    letterSpacing: .5,
    lineHeight: 28,
  },
  stepTitleVerified: {
    paddingBottom: 42,
  },
  stepTextWrapper: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 8,
    backgroundColor: '#F2F2F2',
  },
  stepText: {
    color: theme.colors.textDark,
    fontFamily: theme.font.fontFamily,
    fontSize: 16,
    letterSpacing: .5,
  },
  stepTextHighlighted: {
    fontWeight: '600',
  },
  infoContainer: {
    paddingHorizontal: 70,
  },
  infoText: {
    color: theme.colors.textDark,
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: .5,
  },
  infoTextCentered: {
    textAlign: 'center',
  },
  link: {
    color: theme.colors.floos2,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});

export default useStyles;
