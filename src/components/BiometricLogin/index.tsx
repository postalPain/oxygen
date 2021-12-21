import { Link } from 'components';
import DialogBiometricPermissions from 'components/DialogBiometricPermissions';
import vocab from 'i18n';
import { biometricLogin, getBiometricEnabled } from 'modules/biometrics/actions';
import { storeBiometricsPermission } from 'modules/biometrics/asyncStorage';
import { BiometryTypes, getBiometricsSupported } from 'modules/biometrics/biometrics';
import { selectBiometricsPermitted } from 'modules/biometrics/selectors';
import { getLoginCount } from 'modules/user/asyncStorage';
import { selectUserEmail } from 'modules/user/selectors';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getHeight } from 'utils/window';

interface IBiometricsLogin {
  onSignedIn?: () => void;
}

const BiometricLogin = (props: IBiometricsLogin) => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  const biometricsPermitted = useSelector(selectBiometricsPermitted);

  const [biometricsSupported, setBiometricsSupported] = useState<BiometryTypes>(null);
  const [biometricPrompt, setBiometricPrompt] = useState<boolean>(false);

  useEffect(() => {
    getBiometricsSupported().then(setBiometricsSupported);
  }, []);

  useEffect(() => {
    dispatch(getBiometricEnabled());
  }, [email]);

  useEffect(() => {
    if (biometricsPermitted === false && biometricsSupported) {
      getLoginCount(email).then((loginCount) => {
        [1, 4].includes(loginCount) && setBiometricPrompt(true); // On 2nd and 5th login
      });
    }
  }, [email, biometricsSupported, biometricsPermitted]);

  return (
    <>
      <DialogBiometricPermissions
        visible={biometricPrompt}
        onConfirm={() => {
          storeBiometricsPermission(email, true).then(() => dispatch(getBiometricEnabled()));
        }}
        onPressAny={() => setBiometricPrompt(false)}
      />
      {biometricsPermitted && (
        <View style={styles.biometricLogin}>
          <Link
            onPress={() => {
              dispatch(biometricLogin(email, { onSuccess: props.onSignedIn }));
            }}
          >
            {vocab.get().useYourBiometrics(biometricsSupported)}
          </Link>
        </View>

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