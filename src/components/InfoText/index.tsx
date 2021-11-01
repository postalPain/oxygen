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
      <Text style={styles.infoStyle}>{'ⓘ'}</Text>
      {(typeof props.children) === 'string'
        ? <Text style={styles.textStyle}>{props.children}</Text>
        : props.children
      }
    </View>
  );
};

const styles = StyleSheet.create({
  infoText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  infoStyle: {
    marginRight: 0.01 * windowDimensions.width
  },
  textStyle: {
    flex: 1
  }
});

export default InfoText;