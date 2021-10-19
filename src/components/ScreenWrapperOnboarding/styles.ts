import theme from "config/theme";
import { StyleSheet } from "react-native";
import { windowDimensions } from "utils/window";

const styles = StyleSheet.create({
  onboardingScreenWrapper: {
    width: windowDimensions.width,
    height: windowDimensions.height,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: windowDimensions.height / 3,
  },
  circle: {
    position: 'absolute'
  },
});

export default styles;