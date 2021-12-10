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
  },
  buttonSectionExistingUser: {
    justifyContent: 'flex-start',
  },
  biometricLink: {
    textAlign: 'center',
    marginTop: getHeight(2.5),
    color: theme.colors.floos1
  },
  forgotPassword: {
    marginTop: getHeight(2.5),
    textAlign: 'right'
  },
  useBiometrics: {
    marginTop: getHeight(2.5),
    textAlign: 'center',
  }
});

export default styles;