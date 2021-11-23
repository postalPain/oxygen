import { useSelector } from 'react-redux';
import React from 'react';
import { View, Text } from 'react-native';
import { selectBalance } from 'modules/withdrawal/selectors';
import vocabulary from 'i18n';
import IconInfoDark from 'components/IconInfoDark';
import ModalWrapper from 'components/ModalWrapper';
import styles from './styles';

interface IModalGoodToKnow {
  onClose?: () => void;
}

const vocab = vocabulary.get();

const ModalGoodToKnow = ({ onClose }: IModalGoodToKnow) => {
  const balance = useSelector(selectBalance);

  return (
    <ModalWrapper onClose={onClose}>
      <View style={styles.headerContainer}>
        <IconInfoDark />
        <Text style={styles.header}>{vocab.helpfulTerms}</Text>
      </View>
      <View style={styles.itemHeader}>
        <Text style={[styles.itemHeaderText, { width: '44%' }]}>
          {vocab.availableToWithdraw.replace(vocab.availableToWithdraw[0], vocab.availableToWithdraw[0].toUpperCase())}
        </Text>
        <View style={[styles.itemHeaderLabel, { width: '53%' }]}>
          <Text style={styles.itemHeaderLabelTextLarge}>
            {balance.withdrawable_wages}
          </Text>
          <Text style={styles.itemHeaderLabelTextSmall}>
            {vocab.aed}
          </Text>
        </View>
      </View>
      <Text style={styles.itemText}>
        {vocab.amountToWithdraw}
      </Text>
      <View style={styles.itemHeader}>
        <Text style={styles.itemHeaderText}>
          {vocab.payCycle}
        </Text>
      </View>
      <Text style={styles.itemText}>
        {vocab.cycleIsRegular}
      </Text>
    </ModalWrapper>
  );
};



export default ModalGoodToKnow;