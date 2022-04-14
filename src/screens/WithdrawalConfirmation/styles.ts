import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { getHeight, getWidth, windowDimensions } from 'utils/window';

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
  transactionContainer: {
    backgroundColor: theme.colors.shade2,
    borderRadius: getWidth(5),
    paddingHorizontal: getWidth(10),
    paddingTop: getHeight(1),
    paddingBottom: getHeight(3),
    marginTop: getHeight(2.5),
    width: '100%',
  },
  transactionHeader: {
    textAlign: 'left',
    color: theme.colors.shade1,
    fontSize: getWidth(4),
    textTransform: 'uppercase',
    paddingTop: getHeight(2),
  },
  transactionValue: {
    textAlign: 'left',
    color: theme.colors.textDark,
    paddingTop: getHeight(1),
    fontSize: getWidth(4),
  }
});

export default styles;
