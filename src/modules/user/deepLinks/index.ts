import { DeepLink } from 'modules/dynamicLinks/hooks';

export enum UserDeepLinks {
  invite_employee = 'invite_employee',
}

export interface LinkUserInvite extends DeepLink{
  topic: UserDeepLinks.invite_employee;
  registration_id: string;
}