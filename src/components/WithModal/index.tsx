import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { windowDimensions } from 'utils/window';
import { ModalContext } from './context';

interface IModal {
  children?;
}

const WithModal = (props: IModal) => {
  const [Component, setComponent] = useState(null);
  const [opened, setOpened] = useState(null);

  return (
    <ModalContext.Provider value={{ setOpened, setComponent }}>
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

export default WithModal;