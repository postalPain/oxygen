import vocab from 'i18n';
import React from 'react';
import { StyleSheet } from 'react-native';
import Dialog from 'react-native-dialog';
import { getHeight, getWidth } from 'utils/window';

interface IDialogBiometricPermissions {
  visible?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  onPressAny?: () => void;
}

const DialogBiometricPermissions = (props: IDialogBiometricPermissions) => {
  return (
    <Dialog.Container visible={props.visible}>
      <Dialog.Title style={styles.title}>{vocab.get().allowBiometricsTitle}</Dialog.Title>
      <Dialog.Description style={styles.text}>
        {vocab.get().allowBiometricsText}
      </Dialog.Description>
      <Dialog.Button
        label={vocab.get().dontAllow}
        onPress={() => {
          props.onCancel();
          props.onPressAny();
        }}
      />
      <Dialog.Button
        label={vocab.get().ok}
        onPress={() => {
          props.onConfirm();
          props.onPressAny();
        }}
      />
    </Dialog.Container>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingBottom: getHeight(1),
    fontSize: getWidth(4),
  },
  text: {
    fontSize: getWidth(3.7),
  }
});

export default DialogBiometricPermissions;
