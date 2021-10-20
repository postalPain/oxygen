import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getFontSize } from 'utils/screen';
import { windowDimensions } from 'utils/window';
import IconInfo from '../../../assets/info_circle.svg';

interface IInfoText {
  style?: any;
  children?: string;
}

const InfoText = (props: IInfoText) => {
  return (
    <View style={[styles.infoText, props.style]}>
      <Text style={styles.infoStyle}>{'ⓘ'}</Text>
      <Text style={styles.textStyle}>{props.children}</Text>
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