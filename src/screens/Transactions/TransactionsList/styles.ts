import { StyleSheet } from 'react-native';
import theme from '../../../config/theme';
import { TransactionStatuses } from '../../../modules/transactions/types';

const useStyles = () => StyleSheet.create({
  list: {},
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 60,
    marginBottom: 30,
    paddingLeft: 12,
  },
  headerTitle: {
    marginLeft: 14,
    color: theme.colors.textDark,
    fontSize: 18,
  },
  transaction: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 52,
    paddingHorizontal: 23,
    paddingVertical: 10,
    borderRadius: 36,
  },
  transactionEven: {
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  transactionOdd: {
    backgroundColor: theme.colors.shade2,
  },
  date: {
    fontSize: 12,
    letterSpacing: .5,
  },
  details: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: .5,
  },
  status: {
    fontSize: 12,
    letterSpacing: .5,
  },
  [TransactionStatuses.pending]: {
    color: theme.colors.textTransactionPending,
  },
  [TransactionStatuses.processing]: {
    color: theme.colors.textTransactionPending,
  },
  [TransactionStatuses.accepted]: {
    color: theme.colors.floos2,
  },
  [TransactionStatuses.declined]: {
    color: theme.notifications.errorTextColor,
  },
  [TransactionStatuses.error]: {
    color: theme.notifications.errorTextColor,
  },
});

export default useStyles;