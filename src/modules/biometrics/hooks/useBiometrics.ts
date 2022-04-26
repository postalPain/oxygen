import { requestBiometricPermission } from 'modules/biometrics/permissions';
import { getLoginCount } from 'modules/user/asyncStorage';
import { selectUserEmail } from 'modules/user/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { biometricLogin, getBiometryReady, getBiometryStatus } from '../actions';
import { getBiometrics, storeBiometrics } from '../asyncStorage';
import { selectBiometricsReady, selectBiometryStatus } from '../selectors';
import { analytics } from 'services/analytics';

export const useBiometrics = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  const biometricsReady = useSelector(selectBiometricsReady);
  const biometryStatus = useSelector(selectBiometryStatus);

  useEffect(() => {
    dispatch(getBiometryStatus({ onSuccess: () => dispatch(getBiometryReady()) }));
  }, []);

  useEffect(() => {
    analytics.setUserProperties({ biometricLoginEnabled: !!biometricsReady });
  }, [biometricsReady]);

  useEffect(() => {
    dispatch(getBiometryReady());
  }, [email]);

  const shouldRequestBiometrics = async () => {
    const biometricsAccepted = await getBiometrics();

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
    turnOnBiometrics: async () => {
      const accepted = await requestBiometricPermission();
      await storeBiometrics(accepted);
      dispatch(getBiometryReady());
      return accepted;
    },
    turnOffBiometrics: async () => {
      await storeBiometrics(false);
      dispatch(getBiometryReady());
    }
  };
};
