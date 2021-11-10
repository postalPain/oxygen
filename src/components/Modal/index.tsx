import React from 'react';
import { StyleSheet, View } from 'react-native';
import { windowDimensions } from 'utils/window';

interface IModal {
  children?;
}

const Modal = (props: IModal) => {
  return (
    <View style={[styles.modal, {
    }]}
    >
      <View style={styles.backDrop} />
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 0.05 * windowDimensions.height,
    zIndex: 100,
  },
  backDrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    opacity: 0.1,
  }
});

export default Modal;