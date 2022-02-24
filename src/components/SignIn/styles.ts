import theme from 'config/theme';
import { StyleSheet } from 'react-native';
import { getHeight, windowDimensions } from 'utils/window';

const styles = StyleSheet.create({

  input: {
    marginTop: 0.02 * windowDimensions.height
  },
  buttonSection: {
    flex: 1,
    paddingTop: getHeight(6),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonSectionExistingUser: {
    justifyContent: 'flex-start',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end'
  },
  forgotPassword: {
    marginTop: getHeight(2.5),
    textAlign: 'right'
  },
});

export default styles;