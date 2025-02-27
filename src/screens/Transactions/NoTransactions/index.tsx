import React from 'react';
import { Image, Text, View, } from 'react-native';
import vocabulary from 'i18n';
import ButtonWithdraw from 'components/ButtonWithdraw';
import useStyles from './styles';

const vocab = vocabulary.get();

interface INoTransactionsProps {
}

const NoTransactions: React.FC<INoTransactionsProps> = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {vocab.noTransactionsYet}
        </Text>
      </View>
      <View style={styles.infoBlock}>
        <Image
          source={require('../../../../assets/onboarding_03.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.infoText}>
          {vocab.easyToRequestPayout}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonWithdraw source="via-empty-transaction" />
      </View>
    </View>
  );
};

export default NoTransactions;
