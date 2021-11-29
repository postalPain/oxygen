import { RootState } from 'modules/store/rootReducer';
import { VerificationStatuses, VerificationStatusesFe } from '../types';

export const selectUserInfo = (state: RootState) => state.user;

export const selectUserFirstName = (state: RootState) => state.user?.first_name;

export const selectUserEmail = (state: RootState) => state.user?.email;

export const selectVerificationStatus = (state: RootState) => state.user.verification_status;

export const selectUserStatusError = (state: RootState) => state.user.statusError;

export const selectIsUserBlocked = (state: RootState) => state.user.verification_status === VerificationStatuses.blocked;

export const selectEmailVerifiedStatus = (state: RootState) =>
  VerificationStatuses.new === state.user.verification_status
    ? VerificationStatusesFe.pending
    : VerificationStatusesFe.verified;

export const isUserEmployerVerified = (status: VerificationStatuses) => [
  VerificationStatuses.employer_verified,
  VerificationStatuses.activated,
  VerificationStatuses.activated_no_beneficiary,
  VerificationStatuses.blocked,
  VerificationStatuses.deactivated,
].includes(status);

export const selectEmployerVerifiedStatus = (state: RootState) => {
  if (isUserEmployerVerified(state.user.verification_status)) {
    return VerificationStatusesFe.verified;
  }

  if (VerificationStatuses.employer_not_verified === state.user.verification_status) {
    return VerificationStatusesFe.rejected;
  }

  return VerificationStatusesFe.pending;
};