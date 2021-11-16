import styles from './styles';
import ModalWrapper from 'components/ModalWrapper';
import React from 'react';
import { View, Text } from 'react-native';
import vocab from 'i18n';
import IconInfoDark from 'components/IconInfoDark';
import { useSelector } from 'react-redux';
import { selectBalance } from 'modules/withdrawal/selectors';

interface IModalGoodToKnow {
  onClose?: () => void;
}

const ModalGoodToKnow = ({ onClose }: IModalGoodToKnow) => {
  const balance = useSelector(selectBalance);

  return (
    <ModalWrapper onClose={onClose}>
      <View style={styles.headerContainer}>
        <IconInfoDark />
        <Text style={styles.header}>{vocab.get().goodToKnow}</Text>
      </View>
      <Text style={styles.itemHeader}>{balance.withdrawable_wages} {vocab.get().aed}</Text>
      <Text style={styles.itemText}>
        {vocab.get().availableSumInfo(balance.withdrawable_wages, balance.earned_wages)}
      </Text>
      <Text style={styles.itemHeader}>{balance.total_withdrawn_amount} {vocab.get().aed}</Text>
      <Text style={styles.itemText}>
        {vocab.get().sumWasPayoutInfo}
      </Text>
      <Text style={styles.itemHeader}>{balance.earned_wages} {vocab.get().aed}</Text>
      <Text style={styles.itemText}>
        {vocab.get().salaryEarnedInfo}
      </Text>

    </ModalWrapper>
  );
};



export default ModalGoodToKnow;