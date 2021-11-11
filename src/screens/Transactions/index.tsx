import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, } from 'react-native';
import { batch, useDispatch, useSelector } from 'react-redux';
import { selectTransactions } from 'modules/transactions/selectors';
import { getTransactions } from 'modules/transactions/actions';
import NoTransactions from './NoTransactions';
import TransactionsList from './TransactionsList';
import useStyles from './styles';

interface ITransactionsProps {
}

const Transactions: React.FC<ITransactionsProps> = () => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const transactions = useSelector(selectTransactions);
  const [loading, setLoading] = useState(true);
  console.log('transactions ==>>', transactions);
  useEffect(() => {
    // TODO prevent mount when other tabs are clicked
    batch(() => {
      dispatch(getTransactions());
      setLoading(false);
    });
  }, []);
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        {!loading && !transactions.length
          ? (
            <NoTransactions />
          )
          : (
            <TransactionsList transactions={transactions} />
          )
        }
      </View>
    </SafeAreaView>
  );
};

export default Transactions;
