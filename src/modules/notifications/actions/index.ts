import { uuid } from 'utils/uuid';
import {
  NotificationActions,
  NotificationTypes,
  INotificationAction,
  INotification,
} from 'modules/notifications/types';
import { IMeta } from 'modules/store/types';
import vocab from 'i18n';


export const successNotification = ({
  title = vocab.get().success,
  text,
  timeout = 3000,
}: Partial<INotification>): INotificationAction => ({
  type: NotificationActions.ADD_NOTIFICATION,
  payload: {
    type: NotificationTypes.Success,
    id: uuid(),
    title,
    text,
    timeout,
  }
});

export const successMessage = ({
  text,
  timeout = 3000,
}: Partial<INotification>): INotificationAction => ({
  type: NotificationActions.ADD_NOTIFICATION,
  payload: {
    type: NotificationTypes.SuccessMessage,
    id: uuid(),
    text,
    timeout,
  }
});


const errorNotificationObj = (notification?: Partial<INotification>): INotificationAction => ({
  type: NotificationActions.ADD_NOTIFICATION,
  payload: {
    type: NotificationTypes.Error,
    id: uuid(),
    title: notification?.title || vocab.get().error,
    text: notification?.text || vocab.get().somethingWentWrong,
    timeout: notification?.timeout || 5000,
  }
});

const errorNotificationStr = (text: string): INotificationAction => errorNotificationObj({ text });

export const errorNotification = (notification?: Partial<INotification> | string): INotificationAction =>
  typeof notification === 'object' ? errorNotificationObj(notification) : errorNotificationStr(notification);

export const infoNotification = ({
  title = vocab.get().info,
  text,
  timeout = 3000
}: Partial<INotification>): INotificationAction => ({
  type: NotificationActions.ADD_NOTIFICATION,
  payload: {
    type: NotificationTypes.Info,
    id: uuid(),
    title,
    text,
    timeout,
  }
});

export const removeNotification = (id: string, meta?: IMeta) => {
  return ({
    payload: id,
    meta,
    type: NotificationActions.REMOVE_NOTIFICATION,
  });
};
