import { StyleSheet } from "react-native";
import { getFontSize } from "utils/screen";
import { windowDimensions } from "utils/window";

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  forgotPassword: {
    textAlign: 'center',
    fontSize: getFontSize(9)
  },
  enterEmail: {
    marginTop: 0.07 * windowDimensions.height,
    textAlign: 'center'
  },
  emailInput: {
    marginTop: 0.05 * windowDimensions.height
  },
});

export default styles;