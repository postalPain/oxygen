import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { windowDimensions } from 'utils/window';

const styles = StyleSheet.create({
  modalGoodToKnow: {
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 0.03 * windowDimensions.height,
  },
  header: {
    fontSize: 0.04 * windowDimensions.width,
    paddingLeft: '3%'
  },
  itemHeader: {
    fontSize: 0.05 * windowDimensions.width,
    color: theme.colors.floos1,
    fontWeight: '500',
    paddingTop: 0.04 * windowDimensions.height,
    paddingBottom: 0.01 * windowDimensions.height,
  },
  itemText: {
    fontSize: 0.04 * windowDimensions.width,
    letterSpacing: 1.1
  }
});


export default styles;