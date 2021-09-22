import { AppActions, TAppAction } from 'modules/app/types';


export const appResetStore = (): TAppAction => ({
  type: AppActions.APP_RESET_STORE,
});