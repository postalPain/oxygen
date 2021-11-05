import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { SCREEN_BOTTOM_PADDING } from 'utils/screen';

const useStyles = () => StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  screen: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',
    paddingBottom: SCREEN_BOTTOM_PADDING,
  },
  steps: {
    paddingTop: '35%',
    paddingLeft: '10%',
    width: '73%',
  },
  step: {},
  progressBar: {
    alignItems: 'center',
    position: 'absolute',
    top: 8,
    left: -46,
    width: 26,
    height: '100%',
  },
  progressBarVerified: {
    top: 4,
    height: '115%',
  },
  line: {
    position: 'absolute',
    width: 2,
    height: '100%',
    backgroundColor: theme.colors.floos1,
  },
  stepTitle: {
    marginBottom: 12,
    fontFamily: theme.font.fontFamily,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: .5,
    lineHeight: 28,
  },
  textHighlightedWrapper: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: '#F3ECFF',
  },
  textHighlighted: {
    color: theme.colors.floos2,
    fontSize: 16,
    fontWeight: '600',
  },
  stepText: {
    paddingTop: 8,
    paddingBottom: 22,
    color: theme.colors.textDark,
    fontFamily: theme.font.fontFamily,
    fontSize: 16,
    letterSpacing: .6,
    lineHeight: 26,
  },
  infoContainer: {},
  infoText: {
    color: theme.colors.textDark,
    fontSize: 16,
    lineHeight: 28,
    letterSpacing: .5,
  },
  infoTextCentered: {
    textAlign: 'center',
  },
  link: {
    paddingTop: '10%',
    color: theme.colors.floos2,
  },
  buttonsWrapper: {
    alignItems: 'center',
  },
});

export default useStyles;
