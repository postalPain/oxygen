import { RootState } from 'modules/store/rootReducer';

export const selectUserInfo = (state: RootState) => state.user;
