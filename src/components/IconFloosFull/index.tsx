import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { windowDimensions } from 'utils/window';

const IconFloosFull = () => {
  return (
    <View style={styles.iconFullLogo}>
      <Image
        style={styles.image}
        source={require('../../../assets/logo_with_name_3x.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconFullLogo: {
    width:  0.3 * windowDimensions.width,
    height: 0.1 * windowDimensions.width,
  },
  image: {
    resizeMode: 'contain',
    width: undefined,
    height: undefined,
    flex: 1,
  }
});

export default IconFloosFull;