import { uuid } from 'utils/uuid';
import {
  NotificationActions,
  NotificationTypes,
  INotificationAction,
} from 'modules/notifications/types';
import { IMeta } from 'modules/store/types';



export const successNotification = (text: string): INotificationAction => ({
  type: NotificationActions.ADD_NOTIFICATION,
  payload: {
    type: NotificationTypes.Success,
    id: uuid(),
    text,
    timeout: 3000
  }
});

export const errorNotification = (text: string): INotificationAction => ({
  type: NotificationActions.ADD_NOTIFICATION,
  payload: {
    type: NotificationTypes.Error,
    id: uuid(),
    text,
    timeout: 5000
  }
});

export const infoNotification = (text: string): INotificationAction => ({
  type: NotificationActions.ADD_NOTIFICATION,
  payload: {
    type: NotificationTypes.Info,
    id: uuid(),
    text,
    timeout: 3000
  }
});

export const removeNotification = (id: string, meta?: IMeta) => {
  return ({
    payload: id,
    meta,
    type: NotificationActions.REMOVE_NOTIFICATION,
  });
}
