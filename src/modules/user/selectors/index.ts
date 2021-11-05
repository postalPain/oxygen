import { RootState } from 'modules/store/rootReducer';
import { VerificationStatuses } from '../types';

export const selectUserInfo = (state: RootState) => state.user;

export const selectVerificationStatus = (state: RootState) => state.user.verification_status;

export const isPending = (userStatus) => {
  return userStatus === VerificationStatuses.new
  || userStatus === VerificationStatuses.email_verified
  || userStatus === VerificationStatuses.employer_verified
  || userStatus === VerificationStatuses.employer_not_verified;
};