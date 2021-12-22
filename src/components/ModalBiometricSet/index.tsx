import { Button } from 'components';
import IconCheckRound from 'components/IconCheckRound';
import Modal from 'components/Modal';
import ModalWrapper from 'components/ModalWrapper';
import vocab from 'i18n';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getHeight, getWidth } from 'utils/window';

interface IModalBiometricsSet {
  onConfirm?: () => void;
}

const ModalBiometricsSet = (props: IModalBiometricsSet) => {
  return (
    <Modal>
      <ModalWrapper>
        <View style={styles.modalBiometricSet}>
          <View style={styles.section}>
            <IconCheckRound />
            <Text style={styles.title}>{vocab.get().youAreAllSet}</Text>
            <Text style={styles.text}>{vocab.get().biometricIdAssigned}</Text>
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
  modalBiometricSet: {
    height: getHeight(60),
    paddingVertical: getHeight(15),
  },
  title: {
    fontSize: getHeight(2.5),
    paddingTop: getHeight(4),
    paddingBottom: getHeight(1),
    textAlign: 'center',
  },
  text: {
    paddingHorizontal: getWidth(8),
    paddingBottom: getHeight(4),
    lineHeight: getHeight(2.5),
    textAlign: 'center',
  },
  section: {
    alignItems: 'center'
  },
});

export default ModalBiometricsSet;