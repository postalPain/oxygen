import { RootState } from 'modules/store/rootReducer';

export const selectUserInfo = (state: RootState) => state.user;

export const selectVerificationStatus = (state: RootState) => state.user.verification_status;
