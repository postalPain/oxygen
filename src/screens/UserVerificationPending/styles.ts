import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { SCREEN_BOTTOM_PADDING } from 'utils/screen';
import { getHeight, getWidth } from 'utils/window';

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
    paddingTop: getHeight(12),
    paddingLeft: '10%',
    width: '73%',
  },
  step: {},
  progressBar: {
    alignItems: 'center',
    position: 'absolute',
    top: getHeight(1.2),
    left: -getWidth(11.5),
    width: getWidth(6),
    height: '100%',
  },
  progressBarVerified: {
    height: '100%',
  },
  line: {
    position: 'absolute',
    width: 2,
    height: '100%',
    backgroundColor: theme.colors.floos1,
  },
  stepTitle: {
    marginBottom: getHeight(1.5),
    fontFamily: theme.font.fontFamily,
    fontSize: getWidth(4),
    fontWeight: '600',
    lineHeight: getHeight(4),
    textAlign: 'left',
  },
  textHighlightedWrapper: {
    alignSelf: 'flex-start',
    paddingHorizontal: getWidth(3),
    paddingVertical: getHeight(.5),
    borderRadius: getHeight(.8),
    backgroundColor: '#F3ECFF',
  },
  textHighlighted: {
    color: theme.colors.floos2,
    fontSize: getWidth(4),
    fontWeight: '600',
  },
  stepText: {
    paddingTop: getHeight(1),
    paddingBottom: getHeight(1.5),
    color: theme.colors.textDark,
    fontFamily: theme.font.fontFamily,
    fontSize: getWidth(4),
    lineHeight: getHeight(3.5),
    textAlign: 'left',
  },
  infoContainer: {},
  infoText: {
    color: theme.colors.textDark,
    fontSize: getWidth(4),
    lineHeight: getHeight(3.5),
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
