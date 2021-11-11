import styles from './styles';
import ModalWrapper from 'components/ModalWrapper';
import React from 'react';
import { View, Text } from 'react-native';
import vocab from 'i18n';
import theme from 'config/theme';
import IconInfoDark from 'components/IconInfoDark';

interface IModalGoodToKnow {
  onClose?: () => void;
}

const ModalGoodToKnow = ({ onClose }: IModalGoodToKnow) => {
  return (
    <ModalWrapper onClose={onClose}>
      <View style={styles.headerContainer}>
        <IconInfoDark />
        <Text style={styles.header}>{vocab.get().goodToKnow}</Text>
      </View>
      <Text style={styles.itemHeader}>350AED</Text>
      <Text style={styles.itemText}>
        Availiable sum to withdraw is 200 AED.  It is calculated from the earned sum, which 900 AED.
      </Text>
      <Text style={styles.itemHeader}>OAED</Text>
      <Text style={styles.itemText}>
        The sum which was payout.
      </Text>
      <Text style={styles.itemHeader}>700AED</Text>
      <Text style={styles.itemText}>
        The salary which you have earned till this period of time.
      </Text>

    </ModalWrapper>
  );
};



export default ModalGoodToKnow;