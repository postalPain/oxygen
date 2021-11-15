import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, } from 'react-native';
import { batch, useDispatch, useSelector } from 'react-redux';
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
    // TODO prevent mount when other tabs are clicked
    batch(() => {
      dispatch(getTransactions());
      setLoading(false);
    });
  }, []);
  return (
    <SafeAreaView style={styles.screen}>
      <ScreenGradient />
      <View style={styles.container}>
        {!loading && !transactions.length
          ? <NoTransactions />
          : (
            <TransactionsList
              navigation={navigation}
              transactions={transactions}
            />
          )
        }
      </View>
    </SafeAreaView>
  );
};

export default Transactions;
