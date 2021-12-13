import { Link } from 'components';
import DialogBiometricPermissions from 'components/DialogBiometricPermissions';
import theme from 'config/theme';
import vocab from 'i18n';
import { getBiometricsAllowed, storeBiometricsAllowed } from 'modules/biometrics/asyncStorage';
import { biometricAuthenticate } from 'modules/biometrics/biometrics';
import { useBiometricsSupported } from 'modules/biometrics/hooks';
import { selectBiometricsEnabled } from 'modules/biometrics/selectors';
import { getLoginCount, resetLoginCount } from 'modules/user/asyncStorage';
import { selectUserEmail } from 'modules/user/selectors';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { getHeight } from 'utils/window';

const BiometricLogin = () => {
  const email = useSelector(selectUserEmail);
  const biometricsEnabled = useSelector(selectBiometricsEnabled);

  const biometricsSupported = useBiometricsSupported();
  const [biometricPrompt, setBiometricPrompt] = useState<boolean>(false);
  const [biometricsAllowed, setBiometricsAllowed] = useState<boolean>(null);

  console.log('biometricsSupported', biometricsSupported);

  useEffect(() => {
    if (!biometricsEnabled) {

      getLoginCount(email).then((loginCount) => {
        [1, 4].includes(loginCount) && setBiometricPrompt(true); // On 2nd and 5th login
      });
    }


  }, [email]);

  return (
    <>
      <DialogBiometricPermissions
        visible={biometricPrompt}
        onConfirm={() => {
          storeBiometricsAllowed(email, true);
          setBiometricsAllowed(true);
        }}
        onPressAny={() => setBiometricPrompt(false)}
      />
      {biometricsAllowed && (
        <Link
          // style={styles.biometricLink}
          onPress={() => {
            biometricAuthenticate();
          }}
        >
          {vocab.get().useYourBiometrics(biometricsSupported)}
        </Link>
      )}
    </>
  );
};



export default BiometricLogin;