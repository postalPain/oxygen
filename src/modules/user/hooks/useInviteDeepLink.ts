import { useDynamicLinks } from 'modules/dynamicLinks/hooks';
import { useEffect, useState } from 'react';
import { DeepLink } from 'modules/dynamicLinks/hooks';

enum UserDeepLinks {
  invite_employee = 'invite_employee',
}

interface LinkUserInvite extends DeepLink {
  topic: UserDeepLinks.invite_employee;
  registration_id: string;
  email: string;
}

const useInviteUserDeepLink = () => {
  const [deepLink] = useDynamicLinks() as LinkUserInvite[];

  const [inviteRegistrationId, setInviteRegistrationId] = useState<string>(null);
  const [inviteEmail, setInviteEmail] = useState<string>(null);

  useEffect(() => {
    if (!deepLink) {
      return;
    }
    if (deepLink.topic === UserDeepLinks.invite_employee) {
      setInviteRegistrationId(deepLink.registration_id);
      setInviteEmail(deepLink.email);
    }
  }, [deepLink]);

  return [inviteRegistrationId, inviteEmail];
};

export default useInviteUserDeepLink;