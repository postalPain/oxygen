import { StyleSheet } from 'react-native';
import { windowDimensions } from 'utils/window';

const styles = StyleSheet.create({
  verificationCode: {
    flex: 1,
    justifyContent: 'space-between',
  },
  codeInput: {
    marginVertical: 0.08 * windowDimensions.height,
    paddingHorizontal: 20,
  },
  infoBlock: {
    paddingHorizontal: 20,
  },
  infoText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
  },
  buttonsContainer: {
    alignItems: 'center',
  }
});

export default styles;
