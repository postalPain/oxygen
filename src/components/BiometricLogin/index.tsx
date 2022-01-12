import { Link } from 'components';
import ModalBiometricsFailed from 'components/ModalBiometricFailed';
import ModalBiometricLogin from 'components/ModalBiometricLogin';
import vocab from 'i18n';
import { useBiometrics } from 'modules/biometrics/hooks';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { getHeight } from 'utils/window';

interface IBiometricsLogin {
  onSignedIn?: () => void;
  signedIn?: boolean;
}

const BiometricLogin = (props: IBiometricsLogin) => {
  const {
    biometricsReady,
    biometricsType,
    onBiometricAllow,
    shouldRequestBiometrics,
    authenticate,
  } = useBiometrics();

  const [biometricsPrompt, setBiometricsPrompt] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    biometricsReady && authenticate(props.onSignedIn, () => setError(true));
  }, [biometricsReady]);

  useEffect(() => {
    props.signedIn && shouldRequestBiometrics().then((requestBiometrics) =>
      requestBiometrics ? setBiometricsPrompt(true) : props.onSignedIn()
    );
  }, [props.signedIn]);

  return (
    <>
      {biometricsReady && (
        <View style={styles.biometricLogin}>
          <Link onPress={(() => authenticate(props.onSignedIn, () => setError(true)))} >
            {vocab.get().useYourBiometrics(biometricsType)}
          </Link>
        </View>
      )}

      {biometricsPrompt && (
        <ModalBiometricLogin
          onAllow={onBiometricAllow}
          onAnyPress={() => {
            setBiometricsPrompt(false);
            props.onSignedIn();
          }}
        />
      )}
      {
        error && (
          <ModalBiometricsFailed
            biometricsType={biometricsType}
            onRetry={() => {
              authenticate(props.onSignedIn, () => setError(true));
              setError(false);
            }}
            onCancel={() => {
              setError(false);
            }}
          />
        )
      }
    </>
  );
};

const styles = StyleSheet.create({
  biometricLogin: {
    paddingTop: getHeight(2.5),
    alignItems: 'center'
  }
});



export default BiometricLogin;