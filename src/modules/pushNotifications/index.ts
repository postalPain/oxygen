import messaging from '@react-native-firebase/messaging';


export const getFcmToken = async () => {
  return messaging().getToken();
};

export enum PushTopics {
  transaction_details = 'transaction_details'
}