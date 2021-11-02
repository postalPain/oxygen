import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { SCREEN_BOTTOM_PADDING } from 'utils/screen';

const useStyles = () => StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    zIndex: 1,
  },
  pending: {
    position: 'absolute',
    top: 0,
    width: 14,
    height: 14,
    backgroundColor: theme.colors.floos2,
  },
  verified: {
    width: 25,
    height: 25,
    backgroundColor: theme.colors.floos2,
  },
  rejected: {
    width: 25,
    height: 25,
    backgroundColor: '#C9C9C9',
  },
});

export default useStyles;
