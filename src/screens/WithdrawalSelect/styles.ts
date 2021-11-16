import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { windowDimensions } from 'utils/window';

const styles = StyleSheet.create({
  headerText: {
    fontSize: 0.06 * windowDimensions.width,
  },
  amountText: {
    fontSize: 0.1 * windowDimensions.width,
    paddingTop: 0.03 * windowDimensions.height,
  },
  minimalText: {
    color: theme.colors.shade1,
    fontSize: 0.045 * windowDimensions.width,
    paddingTop: 0.01 * windowDimensions.height,
  },
  slider: {
    width: '100%',
    paddingVertical: 0.08 * windowDimensions.height
  },
  suggestedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  suggestedContainerTotal: {
    width: '100%',
  },
  suggestedTag: {
    margin: 0.03 * windowDimensions.width
  },
  otherAmount: {
    paddingTop: 0.01 * windowDimensions.height,
    fontSize: 0.04 * windowDimensions.width
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export default styles;