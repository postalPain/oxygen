import { RootState } from 'modules/store/rootReducer';

export const selectToken = (state: RootState) => state.auth.token;
