import { Link } from 'components';
import ModalBiometricAllSet from 'components/ModalBiometricAllSet';
import ModalBiometricsFailed from 'components/ModalBiometricFailed';
import ModalBiometricLogin from 'components/ModalBiometricLogin';
import vocab from 'i18n';
import { useBiometrics } from 'modules/biometrics/hooks/useBiometrics';
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
    biometryStatus,
    turnOnBiometrics,
    shouldRequestBiometrics,
    authenticate,
  } = useBiometrics();

  const [biometricsPrompt, setBiometricsPrompt] = useState<boolean>(false);
  const [allSetModal, setAllSetModal] = useState<boolean>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    biometricsReady && !props.signedIn && authenticate(props.onSignedIn, () => setError(true));
  }, [biometricsReady]);

  useEffect(() => {
    props.signedIn && shouldRequestBiometrics().then((shouldRequest) =>
      shouldRequest ? setBiometricsPrompt(true) : props.onSignedIn()
    );
  }, [props.signedIn]);

  return (
    <>
      {biometricsReady && (
        <View style={styles.biometricLogin}>
          <Link onPress={(() => authenticate(props.onSignedIn, () => setError(true)))} >
            {vocab.t(vocab.get().useYourBiometrics, biometryStatus.biometryType)}
          </Link>
        </View>
      )}

      {biometricsPrompt && (
        <ModalBiometricLogin
          biometricsType={biometryStatus.biometryType}
          onConfirm={() => turnOnBiometrics().then(permissionAccepted => {
            permissionAccepted ? setAllSetModal(true) : props.onSignedIn();
          })}
          onCancel={() => {
            props.onSignedIn();
          }}
          onAnyPress={() => {
            setBiometricsPrompt(false);
          }}
        />
      )}

      {allSetModal && (
        <ModalBiometricAllSet
          biometricsType={biometryStatus.biometryType}
          onConfirm={() => {
            setAllSetModal(false);
            props.onSignedIn();
          }}
        />
      )}

      { error && (
        <ModalBiometricsFailed
          biometricsType={biometryStatus.biometryType}
          onRetry={() => {
            authenticate(props.onSignedIn, () => setError(true));
            setError(false);
          }}
          onCancel={() => {
            setError(false);
          }}
        />
      )}
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