import Button from 'components/Button';
import IconFaceId from 'components/IconFaceId';
import Link from 'components/Link';
import Modal from 'components/Modal';
import ModalWrapper from 'components/ModalWrapper';
import vocab from 'i18n';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BiometryType } from 'react-native-biometrics';
import { getHeight, getWidth } from 'utils/window';

interface IModalBiometricLogin {
  biometricsType: BiometryType;
  onConfirm?: () => void;
  onCancel?: () => void;
  onAnyPress?: () => void;
}

const ModalBiometricLogin = (props: IModalBiometricLogin) => {
  return (
    <Modal>
      <ModalWrapper>
        <View style={styles.modalBiometricLogin}>
          <View style={styles.section}>
            <IconFaceId />
            <Text style={styles.title}>
              {vocab.t(vocab.get().logWithBiometrics, props.biometricsType)}
            </Text>
          </View>

          <View style={styles.section} >
            <Button
              width={getWidth(75)}
              styles={styles.button}
              onPress={() => {
                props.onConfirm?.();
                props.onAnyPress?.();
              } }
            >
              {vocab.t(vocab.get().allowBiometrics, props.biometricsType)}
            </Button>
            <Link onPress={() => {
              props.onCancel?.();
              props.onAnyPress?.();
            }}
            >{vocab.get().useMyEmail}
            </Link>
          </View>
        </View>

      </ModalWrapper>
    </Modal>

  );
};

const styles = StyleSheet.create({
  modalBiometricLogin: {
    height: getHeight(60),
    justifyContent: 'space-between',
    paddingVertical: getHeight(12),
  },
  title: {
    fontSize: getHeight(2.5),
    paddingTop: getHeight(3),
    paddingHorizontal: getWidth(10),
    textAlign: 'center',
    lineHeight: getHeight(3.5)
  },
  section: {
    alignItems: 'center'
  },
  button: {
    marginBottom: getHeight(2)
  }
});

export default ModalBiometricLogin;