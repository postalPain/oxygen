import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { windowDimensions } from 'utils/window';

interface IInfoText {
  style?: any;
  children?: string | React.ReactElement;
}

const InfoText = (props: IInfoText) => {
  return (
    <View style={[styles.infoText, props.style]}>
      <Text style={styles.icon}>{'ⓘ'}</Text>
      {(typeof props.children) === 'string'
        ? <Text style={styles.textStyle}>{props.children}</Text>
        : props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  infoText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  icon: {
    marginTop: 3,
    marginRight: 0.015 * windowDimensions.width,
  },
  textStyle: {
    flex: 1,
  }
});

export default InfoText;