import { RootState } from 'modules/store/rootReducer';

export const userInfoSelector = (state: RootState) => state.user;
