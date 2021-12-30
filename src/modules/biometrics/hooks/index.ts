import { getLoginCount } from 'modules/user/asyncStorage';
import { selectUserEmail } from 'modules/user/selectors';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { biometricLogin, getBiometricReady } from '../actions';
import { getBiometricsPermission, storeBiometricsPermission } from '../asyncStorage';
import { BiometricsTypes, getBiometricsSupported } from '../biometrics';
import { selectBiometricsReady } from '../selectors';

export const useBiometrics = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  const biometricsReady = useSelector(selectBiometricsReady);
  const [biometricsType, setBiometricsType] = useState<BiometricsTypes | boolean>(null);
  const [biometricsPermitted, setBiometricsPermitted] = useState<boolean>(null);

  useEffect(() => {
    getBiometricsSupported().then(setBiometricsType);
  }, []);

  useEffect(() => {
    getBiometricsPermission(email).then(setBiometricsPermitted);
    dispatch(getBiometricReady());
  }, [email]);

  const shouldRequestBiometrics = async () => {
    if (!biometricsPermitted && biometricsType) {
      const loginCount = await getLoginCount(email);
      return [2, 5].includes(loginCount); // On 2nd and 5th login
    }
  };

  const authenticate = (onSuccess, onError) => {
    dispatch(biometricLogin(email, { onSuccess, onError }));
  };

  return {
    biometricsReady,
    biometricsType,
    shouldRequestBiometrics,
    authenticate,
    onBiometricAllow: () => {
      storeBiometricsPermission(email, true);
    },
  };
};
