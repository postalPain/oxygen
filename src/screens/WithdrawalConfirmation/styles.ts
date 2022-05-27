import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { getHeight, getWidth } from 'utils/window';

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  header: {
    fontSize: theme.sizes.fontSizeHeaderLarge,
    textAlign: 'center',
    paddingTop: getHeight(4),
  },
  description: {
    paddingTop: getHeight(2),
    fontSize: getWidth(4)
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
});

export default styles;
