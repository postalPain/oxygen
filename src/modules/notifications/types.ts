export const enum NotificationActions {
  ADD_NOTIFICATION = 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION',
  CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS',
}

export enum NotificationTypes {
  Success = 'success',
  SuccessMessage = 'successMessage',
  Error = 'error',
  Info = 'info',
}

export interface INotification {
  title?: string;
  text: string;
  type?: NotificationTypes;
  timeout?: number;
  id?: string;
}

export interface INotificationAction {
  type: NotificationActions;
  payload: INotification;
}
