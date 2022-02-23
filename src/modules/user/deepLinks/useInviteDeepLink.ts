import { useDeepLink } from 'modules/deepLinks';
import { useEffect, useState } from 'react';
import { DeepLink } from 'modules/deepLinks';

enum UserDeepLinks {
  invite_employee = 'invite_employee',
}

interface LinkUserInvite extends DeepLink {
  topic: UserDeepLinks.invite_employee;
  registration_id: string;
  email: string;
}

const useInviteUserDeepLink = () => {
  const [deepLink] = useDeepLink<LinkUserInvite>(UserDeepLinks.invite_employee);

  const [inviteRegistrationId, setInviteRegistrationId] = useState<string>(null);
  const [inviteEmail, setInviteEmail] = useState<string>(null);

  useEffect(() => {
    deepLink && (setInviteRegistrationId(deepLink.registration_id), setInviteEmail(deepLink.email));
  }, [deepLink]);

  return [inviteRegistrationId, inviteEmail];
};

export default useInviteUserDeepLink;