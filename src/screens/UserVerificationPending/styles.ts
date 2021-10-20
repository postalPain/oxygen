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
    justifyContent: 'space-between',
    paddingBottom: SCREEN_BOTTOM_PADDING,
  },
  steps: {
    flex: 2,
    paddingTop: '35%',
    paddingLeft: 65,
    marginBottom: 53,
  },
  step: {
  },
  progressBar: {
    alignItems: 'center',
    width: 40,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: -74,
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 14,
    height: 14,
    borderRadius: 40,
    backgroundColor: theme.colors.floos1,
    zIndex: 1,
  },
  circleNotVerified: {
    marginTop: 4,
  },
  circleVerified: {
    width: 40,
    height: 40,
    marginTop: -6,
  },
  stepTitle: {
    marginBottom: 8,
    fontFamily: theme.font.fontFamily,
    fontSize: 16,
    fontWeight: 'normal',
    // lineHeight: 28,
  },
  stepTitleVerified: {
    paddingBottom: 42,
  },
  stepLabel: {
    alignSelf: 'flex-start',
    marginBottom: 16,
    paddingVertical: 4,
    paddingHorizontal: 4,
    backgroundColor: 'rgba(0, 125, 131, 0.13)',
    borderRadius: 4,
    color: theme.colors.floos1,
    fontFamily: theme.font.fontFamily,
    fontSize: 10,
    fontWeight: '600',
  },
  stepText: {
    opacity: 0.5,
    color: theme.colors.textDark,
    fontFamily: theme.font.fontFamily,
    fontSize: 12,
  },
  line: {
    position: 'absolute',
    width: 3,
    height: '115%',
    backgroundColor: theme.colors.floos1,
  },
  withPadding: {
    paddingBottom: 34,
  },
  stepTextHighlighted: {
    fontWeight: '600',
  },
  infoContainer: {
    flex: 4,
    paddingHorizontal: 70,
  },
  infoText: {
    color: theme.colors.textDark,
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: .5,
  },
});

export default useStyles;
