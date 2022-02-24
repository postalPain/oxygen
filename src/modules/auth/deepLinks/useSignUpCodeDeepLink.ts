import { setSignUpCode } from 'modules/auth/actions';
import { DeepLink, useDeepLink } from 'modules/deepLinks';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const SIGNUP_CODE_TOPIC = 'signup_code';

interface ISignUpCodeDeepLink extends DeepLink {
  code;
}

const useSignUpCodeDeepLink = () => {
  const dispatch = useDispatch();

  const [deepLink] = useDeepLink<ISignUpCodeDeepLink>(SIGNUP_CODE_TOPIC);

  const [code, setCode] = useState<boolean>(false);

  useEffect(() => {
    deepLink && (dispatch(setSignUpCode(deepLink.code)), setCode(deepLink.code));
  }, [deepLink]);

  return [code];
};

export default useSignUpCodeDeepLink;