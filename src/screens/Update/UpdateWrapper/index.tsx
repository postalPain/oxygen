import React from 'react';
import { StyleSheet, View } from 'react-native';
import { getHeight } from 'utils/window';
import UpdateScreenBackground from './UpdateBackground';
import UpdateIllustration from './UpdateIllustration';

const UpdateWrapper = (props) => {
  return (
    <View >
      <View style={styles.updateScreenWrapper}>
        <UpdateScreenBackground />
      </View>

      <View style={styles.updateIllustration}>
        <UpdateIllustration />
      </View>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  updateScreenWrapper: {
    position: 'absolute',
    top: -getHeight(3), // TODO: Remove after SVG fix
  },
  updateIllustration: {
    marginTop: getHeight(10),
    alignItems: 'center',
  }
});

export default UpdateWrapper;