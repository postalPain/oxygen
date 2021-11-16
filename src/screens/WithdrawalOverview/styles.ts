import { StyleSheet } from 'react-native';
import { windowDimensions } from 'utils/window';

const styles = StyleSheet.create({
  content: {
    paddingTop: 0.1 * windowDimensions.height,
    paddingLeft: 0.1 * windowDimensions.width,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  contentItem: {
    paddingTop: 0.05 * windowDimensions.height,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 0.04 * windowDimensions.width,
    paddingLeft: 0.03 * windowDimensions.width,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  item: {
    paddingTop: 0.03 * windowDimensions.height,
  }
});

export default styles;