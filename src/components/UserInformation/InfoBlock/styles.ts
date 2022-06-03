import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { getHeight, getWidth } from 'utils/window';


const useStyles = () => StyleSheet.create({
  infoBlock: {
    marginTop: getHeight(3),
  },
  infoTitle: {
    textAlign: 'left',
    color: '#B2B2B2',
    fontSize: getWidth(4.5),
  },
  infoText: {
    textAlign: 'left',
    marginTop: getHeight(.7),
    color: theme.colors.textDark,
    fontSize: getWidth(4.5),
  },
});

export default useStyles;
