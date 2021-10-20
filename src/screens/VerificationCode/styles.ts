import { StyleSheet } from "react-native";
import { windowDimensions } from "utils/window";

const styles = StyleSheet.create({
  verificationCode: {
    flex: 1,
    justifyContent: 'space-between',
  },
  codeInput: {
    marginVertical: 0.08 * windowDimensions.height
  },
  link: {
    textAlign: 'center',
    marginBottom: 0.025 * windowDimensions.height
  },
});

export default styles;