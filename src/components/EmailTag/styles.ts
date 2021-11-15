import { StyleSheet } from 'react-native';
import { windowDimensions } from 'utils/window';
import theme from 'config/theme';

const useStyles = () => StyleSheet.create({
  emailTag: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '100%',
    paddingRight: 0.04 * windowDimensions.width,
    paddingLeft: 0.05 * windowDimensions.width,
    paddingVertical: 0.012 * windowDimensions.height,
    borderRadius: 0.025 * windowDimensions.height,
  },
  emailText: {
    maxWidth: '80%',
    fontSize: 16,
    letterSpacing: .5,
    lineHeight: 22,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    marginLeft: 0.01 * windowDimensions.width,
  },
  iconBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.floos2,
    borderRadius: 6,
    opacity: .4,
  },
});

export default useStyles;
