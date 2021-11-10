import { RootState } from 'modules/store/rootReducer';

export const selectTestModal = (state: RootState) => state.payments.showModal;