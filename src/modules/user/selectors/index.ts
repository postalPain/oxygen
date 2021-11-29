import { stat } from 'fs';
import { RootState } from 'modules/store/rootReducer';
import { TVerificationStatus, VerificationStatuses, VerificationStatusesFe } from '../types';

export const selectUserInfo = (state: RootState) => state.user;

export const selectUserFirstName = (state: RootState) => state.user?.first_name;

export const selectUserEmail = (state: RootState) => state.user?.email;

export const selectVerificationStatus = (state: RootState) => state.user.verification_status;

export const selectUserStatusError = (state: RootState) => state.user.statusError;

export const isPending = (userStatus) => {
  return userStatus === VerificationStatuses.new
  || userStatus === VerificationStatuses.email_verified
  || userStatus === VerificationStatuses.employer_verified
  || userStatus === VerificationStatuses.employer_not_verified;
};

export const selectIsUserBlocked = (state: RootState) => state.user.verification_status === VerificationStatuses.blocked;

export const selectEmailVerifiedStatus = (state: RootState) =>
  VerificationStatuses.new === state.user.verification_status
    ? VerificationStatusesFe.pending
    : VerificationStatusesFe.verified ;

export const selectEmployerVerifiedStatus = (state: RootState) => {
  if ([
    VerificationStatuses.employer_verified,
    VerificationStatuses.activated,
    VerificationStatuses.activated_no_beneficiary,
  ].includes(state.user.verification_status)) {
    return VerificationStatusesFe.verified;
  }

  if ([
    VerificationStatuses.employer_not_verified,
    VerificationStatuses.blocked,
    VerificationStatuses.deactivated,
  ].includes(state.user.verification_status)) {
    return VerificationStatusesFe.rejected;
  }

  return VerificationStatusesFe.pending;
};