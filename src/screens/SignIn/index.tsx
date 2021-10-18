import ScreenWrapperLogin from 'components/ScreenWrapperLogin';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import vocab from 'i18n';
import { windowDimensions } from 'utils/window';
import Button from 'components/Button';
import { Link } from '@react-navigation/native';
import theme from 'config/theme';

const SignIn = () => {
  return (
    <ScreenWrapperLogin>
      <View>
        <View>
          <Input
            style={styles.input}
            name="password"
            label={vocab.get().email}
            // value={values.email}
            // onChange={handleChange}
            placeholder="Email"
            required
          />
          <Input
            style={styles.input}
            name="password"
            label={vocab.get().password}
            // value={values.email}
            // onChange={handleChange}
            placeholder="Password"
            secure
            required
          />
        </View>
      </View>
      <View style={styles.buttonSection}>
        <Button>{vocab.get().logIn}</Button>
        <Text style={styles.biometricLink}>{vocab.get().useYourFaceId}</Text>
      </View>
    </ScreenWrapperLogin>

  );
};

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
  }
});

export default SignIn;
