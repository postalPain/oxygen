export const enum NotificationActions {
  ADD_NOTIFICATION = 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION',
  CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS',
}

export enum NotificationTypes {
  Success = 'Success',
  Error = 'Error',
  Info = 'Info',
}

export interface INotification {
  text: string;
  type?: NotificationTypes;
  timeout?: number;
  id?: string;
}

export interface INotificationAction {
  type: NotificationActions;
  payload: INotification;
}