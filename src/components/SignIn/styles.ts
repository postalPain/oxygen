import theme from "config/theme";
import { StyleSheet } from "react-native";
import { windowDimensions } from "utils/window";

const styles = StyleSheet.create({

  input: {
    marginTop: 0.02 * windowDimensions.height
  },
  buttonSection: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  biometricLink: {
    textAlign: 'center',
    marginTop: 0.025 * windowDimensions.height,
    color: theme.colors.floos1
  },
  forgotPassword: {
    marginTop: 0.025 * windowDimensions.height,
    textAlign: 'right'
  }
});

export default styles;