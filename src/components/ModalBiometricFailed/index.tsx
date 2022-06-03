import Button from 'components/Button';
import IconCrossFail from 'components/IconCrossFail';
import Link from 'components/Link';
import Modal from 'components/Modal';
import ModalWrapper from 'components/ModalWrapper';
import vocab from 'i18n';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BiometryType } from 'react-native-biometrics';
import { getHeight, getWidth } from 'utils/window';

interface IModalBiometricsSet {
  onRetry?: () => void;
  onCancel?: () => void;
  biometricsType: BiometryType | boolean;
}

const ModalBiometricsFailed = (props: IModalBiometricsSet) => {
  return (
    <Modal>
      <ModalWrapper>
        <View style={styles.modalBiometricFailed}>
          <View style={styles.section}>
            <IconCrossFail />
            <Text style={styles.title}>{vocab.t(vocab.get().biometricNotSuccessful, props.biometricsType)}</Text>
          </View>

          <View style={styles.section} >
            <Button width={getWidth(75)} onPress={props.onRetry} >
              {vocab.get().tryAgain}
            </Button>
            <Link style={styles.link} onPress={props.onCancel}>{vocab.get().useMyEmail}</Link>
          </View>
        </View>

      </ModalWrapper>
    </Modal>

  );
};

const styles = StyleSheet.create({
  modalBiometricFailed: {
    height: getHeight(60),
    paddingVertical: getHeight(15),
  },
  title: {
    fontSize: getHeight(2.5),
    paddingTop: getHeight(5),
    paddingBottom: getHeight(2.8),
    textAlign: 'center',
  },
  section: {
    alignItems: 'center'
  },
  link: {
    paddingTop: getHeight(3),
  }
});

export default ModalBiometricsFailed;