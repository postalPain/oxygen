import { getItemForUser, setItemForUser } from 'modules/asyncStorage';
import store from 'modules/store';
import { selectUserEmail } from 'modules/user/selectors';

enum WithdrawalStored {
  paycycleViewed = 'paycycleViewed'
}

export const getStoredPaycycleViewed = async () => {
  const email = selectUserEmail(store.getState());

  const paycycleViewed: string = await getItemForUser(email, WithdrawalStored.paycycleViewed);

  return paycycleViewed;
};

export const storePaycycleViewed = async (date) => {
  const email = selectUserEmail(store.getState());

  await setItemForUser(email, WithdrawalStored.paycycleViewed, date);
};