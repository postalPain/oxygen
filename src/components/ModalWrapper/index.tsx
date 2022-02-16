import React from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import { getHeight, getWidth } from 'utils/window';
import IconClose from 'components/IconClose';
import theme from 'config/theme';

interface IModalWrapper {
  children: any;
  style?: ViewStyle;
  onClose?: () => void;
}

const ModalWrapper = ({ style, children, onClose }: IModalWrapper) => {
  return (
    <View style={[styles.modalWrapper, style]}>
      {onClose && (
        <View style={styles.closeContainer}>
          <Pressable onPress={onClose}>
            <IconClose />
          </Pressable>
        </View>
      )}
      {children}

    </View>
  );
};

const styles = StyleSheet.create({
  modalWrapper: {
    backgroundColor: theme.colors.screenBackgroundColorLight,
    borderRadius: getWidth(7),
    width: getWidth(90),
    paddingHorizontal: getWidth(6),
    paddingVertical: getHeight(4),
  },
  closeContainer: {
    position: 'absolute',
    right: getWidth(5),
    top: getWidth(5),
    zIndex: 1,
  }
});

export default ModalWrapper;