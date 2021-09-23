export enum AppActions {
  APP_RESET_STORE = 'APP_RESET_STORE',
}

interface IResetStore {
  type: AppActions.APP_RESET_STORE;
}

export type TAppAction = IResetStore;
