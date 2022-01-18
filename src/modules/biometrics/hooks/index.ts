import { requestFaceIdPermission } from 'modules/permissions';
import { getLoginCount } from 'modules/user/asyncStorage';
import { selectUserEmail } from 'modules/user/selectors';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { biometricLogin, getBiometricReady } from '../actions';
import { getBiometricsAccepted, storeBiometricsAccepted } from '../asyncStorage';
import { BiometricsTypes, getBiometricsSupported } from '../biometrics';
import { selectBiometricsReady } from '../selectors';

export const useBiometrics = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  const biometricsReady = useSelector(selectBiometricsReady);
  const [biometricsType, setBiometricsType] = useState<BiometricsTypes>(null);
  const [biometricsAccepted, setBiometricsAccepted] = useState<boolean>(null);

  useEffect(() => {
    getBiometricsSupported().then(setBiometricsType);
  }, []);

  useEffect(() => {
    getBiometricsAccepted(email).then(setBiometricsAccepted);
    dispatch(getBiometricReady());
  }, [email]);

  useEffect(() => {
    storeBiometricsAccepted(email, biometricsAccepted);
    dispatch(getBiometricReady());
  }, [biometricsAccepted]);

  const shouldRequestBiometrics = async () => {
    if (!biometricsAccepted && biometricsType) {
      const loginCount = await getLoginCount(email);
      return [2, 7].includes(loginCount); // On 2nd and 7th login
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
    setBiometricsAccepted,
    requestBiometrics: async () => {
      const accepted = await requestFaceIdPermission();
      accepted === 'granted' && setBiometricsAccepted(true);
      return accepted === 'granted';
    },
  };
};
