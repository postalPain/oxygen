import { StyleSheet } from 'react-native';
import theme from 'config/theme';
import { TransactionStatusesFE } from 'modules/transactions/types';
import { getHeight, getWidth } from 'utils/window';


const useStyles = () => StyleSheet.create({
  list: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: getHeight(3),
    paddingLeft: getWidth(5),
  },
  headerTitle: {
    marginLeft: getWidth(3),
    color: theme.colors.textDark,
    fontSize: getWidth(4.5),
  },
  scrollView: {
    flex: 1,
  },
  transaction: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: getHeight(7),
    paddingHorizontal: getWidth(5),
    // paddingVertical: getHeight(2),
    borderRadius: 36,
    marginTop: getHeight(0.7),
    backgroundColor: theme.colors.shade2,
  },
  date: {
    fontSize: getWidth(3),
  },
  details: {
    alignItems: 'flex-end',
  },
  detailsContainer: {
    alignItems: 'flex-start',
  },
  amount: {
    fontSize: getHeight(2.5),
    fontWeight: '600',
  },
  status: {
    fontSize: getWidth(3),
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
