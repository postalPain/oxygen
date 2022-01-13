import { Button, Link } from 'components';
import IconFaceId from 'components/IconFaceId';
import Modal from 'components/Modal';
import ModalWrapper from 'components/ModalWrapper';
import vocab from 'i18n';
import { BiometricsTypes } from 'modules/biometrics/biometrics';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getHeight, getWidth } from 'utils/window';

interface IModalBiometricLogin {
  biometricsType: BiometricsTypes;
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
            <Text style={styles.title}>{vocab.get().logWithBiometrics(props.biometricsType)}</Text>
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
              {vocab.get().allowBiometrics(props.biometricsType)}
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