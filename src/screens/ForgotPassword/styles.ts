import { StyleSheet } from "react-native";
import { getFontSize } from "utils/screen";
import { getHeight } from 'utils/window';

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
    marginTop: getHeight(7),
    textAlign: 'center'
  },
  emailInput: {
    marginTop: getHeight(5)
  },
  buttonContainer: {
    paddingTop: getHeight(5)
  },
});

export default styles;