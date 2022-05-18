import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { getHeight, getWidth } from 'utils/window';


const useStyles = () => StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
  },
  text: {
    marginBottom: getHeight(2.5),
    color: '#838383',
    fontSize: getWidth(4),
  },
  time: {
    width: getWidth(6),
  },
  link: {
    marginBottom: getHeight(2.5),
    color: theme.colors.floos2,
    fontSize: getWidth(4),
  },
});

export default useStyles;