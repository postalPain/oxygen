export enum PushTopics {
  transaction_details = 'transaction_details'
}

export interface PushTransactionData {
  topic: PushTopics.transaction_details;
  id: string;
}