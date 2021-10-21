import { INotification, NotificationActions } from 'modules/notifications/types';


const defaultState = [];

export const maxNumberOfNotifications = 5;

export default function notifications(state = defaultState, action) {
  switch (action.type) {
    case NotificationActions.ADD_NOTIFICATION: {
      return [...state]
        .concat([{ ...action.payload, id: action.payload.id }])
        .filter((d, i: number, arr: INotification[]) => i >= arr.length - maxNumberOfNotifications);
    }
    case NotificationActions.REMOVE_NOTIFICATION: {
      return [...state].filter((notification: INotification) => notification.id !== action.payload);
    }
    case NotificationActions.CLEAR_NOTIFICATIONS: {
      return state;
    }
  }
  return state;
}
