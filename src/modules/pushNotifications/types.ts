import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

export enum PushTopics {
  transaction_details = 'transaction_details'
}

export interface IPushData {
  topic: PushTopics;
}

export interface PushTransactionData extends IPushData {
  transaction_id: string;
}

export type IPushMessage<TData extends IPushData> = Omit<FirebaseMessagingTypes.RemoteMessage, 'data'> & {
  data: TData;
};

