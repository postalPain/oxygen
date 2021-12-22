import { Link } from 'components';
import vocab from 'i18n';
import { BiometryTypes } from 'modules/biometrics/biometrics';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { getHeight } from 'utils/window';

interface IBiometricsLogin {
  onPress?: () => void;
  biometricsType?: BiometryTypes;
}

const BiometricLogin = (props: IBiometricsLogin) => {
  return (
    <View style={styles.biometricLogin}>
      <Link onPress={props.onPress} >
        {vocab.get().useYourBiometrics(props.biometricsType)}
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  biometricLogin: {
    paddingTop: getHeight(2.5),
    alignItems: 'center'
  }
});



export default BiometricLogin;