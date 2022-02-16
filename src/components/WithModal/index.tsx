import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { windowDimensions } from 'utils/window';
import { ModalContext } from './context';

interface IModal {
  children?;
}

const WithModal = (props: IModal) => {
  const [Component, setComponent] = useState(null);

  return (
    <ModalContext.Provider value={{ setComponent }}>
      {props.children}

      {Component && (
        <View style={styles.modal}>
          <View style={styles.backDrop} />
          {Component}
        </View>
      )}
    </ModalContext.Provider>
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

export default WithModal;