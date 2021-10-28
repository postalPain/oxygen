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
    top: 6,
    width: 14,
    height: 14,
    backgroundColor: '#C9C9C9',
  },
  verified: {
    width: 40,
    height: 40,
    backgroundColor: theme.colors.floos2,
  },
  rejected: {
    width: 40,
    height: 40,
    backgroundColor: '#C9C9C9',
  },
});

export default useStyles;
