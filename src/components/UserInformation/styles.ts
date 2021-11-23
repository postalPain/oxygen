import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { getHeight, getWidth } from 'utils/window';


const useStyles = () => StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: getHeight(3),
    paddingHorizontal: getWidth(7),
    backgroundColor: theme.colors.personalInfoBackground,
    borderRadius: 26,
  },
});

export default useStyles;