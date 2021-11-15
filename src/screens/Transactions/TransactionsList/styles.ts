import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { TransactionStatusesFE } from 'modules/transactions/types';

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
    height: 60,
    paddingHorizontal: 23,
    paddingVertical: 8,
    borderRadius: 36,
    marginTop: 6,
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
  [TransactionStatusesFE.pending]: {
    color: theme.colors.textTransactionPending,
  },
  [TransactionStatusesFE.failed]: {
    color: theme.notifications.errorTextColor,
  },
  [TransactionStatusesFE.completed]: {
    color: theme.colors.floos2,
  },
});

export default useStyles;