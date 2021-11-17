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
  descriptionText: {
    color: theme.colors.shade1,
    height: 0.07 * windowDimensions.height,
    fontSize: 0.035 * windowDimensions.width,
    paddingTop: 0.01 * windowDimensions.height,
    fontWeight: '600',
    textAlign: 'center',
  },
  slider: {
    width: '100%',
    marginTop: 0.02 * windowDimensions.height,
    marginBottom: 0.05 * windowDimensions.height
  },
  suggestedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  suggestedContainerTotal: {
    width: '100%',
  },
  suggestedTag: {
    marginVertical: 0.03 * windowDimensions.width
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