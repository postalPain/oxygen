import IconClose from 'components/IconClose';
import theme from 'config/theme';
import React from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import { windowDimensions } from 'utils/window';

interface IModalWrapper {
  children: any;
  style?: ViewStyle;
  onClose?: () => void;
}

const ModalWrapper = ({ style, children, onClose }: IModalWrapper) => {
  return (
    <View style={[styles.modalWrapper, style]}>
      <View style={styles.closeContainer}>
        <Pressable onPress={onClose}>
          <IconClose />
        </Pressable>
      </View>
      {children}

    </View>
  );
};

const styles = StyleSheet.create({
  modalWrapper: {
    backgroundColor: theme.colors.screenBackgroundColorLight,
    borderRadius: 0.07 * windowDimensions.width,
    width: 0.9 * windowDimensions.width,
    paddingHorizontal: 0.07 * windowDimensions.width,
    paddingVertical: 0.06 * windowDimensions.height,
  },
  closeContainer: {
    position: 'absolute',
    right: 0.05 * windowDimensions.width,
    top: 0.05 * windowDimensions.width,
  }
});

export default ModalWrapper;