import { Button, Link } from 'components';
import IconCheckRound from 'components/IconCheckRound';
import Modal from 'components/Modal';
import ModalWrapper from 'components/ModalWrapper';
import vocab from 'i18n';
import { BiometricsTypes } from 'modules/biometrics/biometrics';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getHeight, getWidth } from 'utils/window';

interface IModalBiometricsSet {
  onConfirm?: () => void;
  biometricsType: BiometricsTypes | boolean;
}

const ModalBiometricAllSet = (props: IModalBiometricsSet) => {
  return (
    <Modal>
      <ModalWrapper>
        <View style={styles.modalBiometricsSet}>
          <View style={styles.section}>
            <IconCheckRound />
            <Text style={styles.title}>{vocab.get().yourAllSet}</Text>
            <Text style={styles.text}>{vocab.get().biometricIdAssigned(props.biometricsType)}</Text>
          </View>

          <View style={styles.section} >
            <Button width={getWidth(75)} onPress={props.onConfirm} >
              {vocab.get().continue}
            </Button>
          </View>
        </View>

      </ModalWrapper>
    </Modal>

  );
};

const styles = StyleSheet.create({
  modalBiometricsSet: {
    height: getHeight(60),
    paddingVertical: getHeight(15),
  },
  title: {
    fontSize: getHeight(2.5),
    paddingTop: getHeight(5),
    paddingBottom: getHeight(1.4),
    textAlign: 'center',
  },
  text: {
    fontSize: getHeight(2),
    // paddingTop: getHeight(5),
    paddingHorizontal: getWidth(8),
    paddingBottom: getHeight(4),
    textAlign: 'center',
  },
  section: {
    alignItems: 'center'
  },
  link: {
    paddingTop: getHeight(3),
  }
});

export default ModalBiometricAllSet;