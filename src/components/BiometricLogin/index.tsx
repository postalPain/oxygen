import { Link } from 'components';
import DialogBiometricPermissions from 'components/DialogBiometricPermissions';
import vocab from 'i18n';
import { biometricLogin, getBiometricEnabled } from 'modules/biometrics/actions';
import { storeBiometricsPermission } from 'modules/biometrics/asyncStorage';
import { BiometryTypes, getBiometricsSupported } from 'modules/biometrics/biometrics';
import { selectBiometricsEnabled } from 'modules/biometrics/selectors';
import { getLoginCount } from 'modules/user/asyncStorage';
import { selectUserEmail } from 'modules/user/selectors';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const BiometricLogin = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  const biometricsEnabled = useSelector(selectBiometricsEnabled);

  const [biometricsSupported, setBiometricsSupported] = useState<BiometryTypes>(null);
  const [biometricPrompt, setBiometricPrompt] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getBiometricEnabled());
    getBiometricsSupported().then(setBiometricsSupported);
  }, []);

  useEffect(() => {
    if (biometricsEnabled === false && biometricsSupported) {
      getLoginCount(email).then((loginCount) => {
        [1, 4].includes(loginCount) && setBiometricPrompt(true); // On 2nd and 5th login
      });
    }
  }, [email, biometricsSupported, biometricsEnabled]);

  return (
    <>
      <DialogBiometricPermissions
        visible={biometricPrompt}
        onConfirm={() => {
          storeBiometricsPermission(email, true);
        }}
        onPressAny={() => setBiometricPrompt(false)}
      />
      {biometricsEnabled && (
        <Link
          onPress={() => {
            dispatch(biometricLogin(email));
          }}
        >
          {vocab.get().useYourBiometrics(biometricsSupported)}
        </Link>
      )}
    </>
  );
};



export default BiometricLogin;