import { StyleSheet } from 'react-native';
import { getHeight, getWidth, windowDimensions } from 'utils/window';
import theme from 'config/theme';

const useStyles = () => StyleSheet.create({
  emailTag: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: getWidth(4),
    paddingLeft:  getWidth(5),
    paddingVertical: getHeight(1.2),
    borderRadius: getHeight(2.5),
  },
  emailText: {
    fontSize: getWidth(4),
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: getWidth(5),
    height: getWidth(5),
    marginLeft: getWidth(1),
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
