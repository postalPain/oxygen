import { requestBiometricPermission } from 'modules/biometrics/permissions';
import { getLoginCount } from 'modules/user/asyncStorage';
import { selectUserEmail } from 'modules/user/selectors';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { biometricLogin, getBiometryReady, getBiometryStatus } from '../actions';
import { getBiometricsAccepted, storeBiometricsAccepted } from '../asyncStorage';
import { selectBiometricsReady, selectBiometryStatus } from '../selectors';

export const useBiometrics = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  const biometricsReady = useSelector(selectBiometricsReady);
  const biometryStatus = useSelector(selectBiometryStatus);
  const [biometricsAccepted, setBiometricsAccepted] = useState<boolean>(null);

  useEffect(() => {
    dispatch(getBiometryStatus({ onSuccess: () => dispatch(getBiometryReady()) }));
  }, []);

  useEffect(() => {
    getBiometricsAccepted(email).then(setBiometricsAccepted);
    dispatch(getBiometryReady());
  }, [email]);

  const shouldRequestBiometrics = async () => {
    if (!biometricsAccepted && biometryStatus.available) {
      const loginCount = await getLoginCount(email);
      return [2, 7].includes(loginCount); // On 2nd and 7th login
    }
  };

  const authenticate = (onSuccess, onError) => {
    dispatch(biometricLogin(email, { onSuccess, onError }));
  };

  return {
    biometricsReady,
    biometryStatus,
    shouldRequestBiometrics,
    authenticate,
    setBiometricsAccepted,
    turnOnBiometrics: async () => {
      const accepted = await requestBiometricPermission();
      await storeBiometricsAccepted(email, accepted);
      dispatch(getBiometryReady());
      return accepted;
    },
    turnOffBiometrics: async () => {
      await storeBiometricsAccepted(email, false);
      dispatch(getBiometryReady());
    }
  };
};
