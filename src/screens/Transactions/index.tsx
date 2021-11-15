import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectTransactions } from 'modules/transactions/selectors';
import { getTransactions } from 'modules/transactions/actions';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { ScreenGradient } from 'components';
import NoTransactions from './NoTransactions';
import TransactionsList from './TransactionsList';
import useStyles from './styles';


const Transactions = (
  { navigation }: AppNavigationProps<AppScreenNames.Transactions>
) => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const transactions = useSelector(selectTransactions);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getTransactions({
      onSuccess: () => { setLoading(false) },
      onError: () => { setLoading(false) },
    }));
  }, []);
  return (
    <SafeAreaView style={styles.screen}>
      <ScreenGradient />
      <View style={styles.container}>
        {(!loading && !transactions.length) ? <NoTransactions /> : null}
        {(!loading && transactions.length) ? (
          <TransactionsList
            navigation={navigation}
            transactions={transactions}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Transactions;
