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
    <View style={styles.infoText}>
      <Text style={styles.iStyle}>{'ⓘ'}</Text>
      <Text>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  iStyle: {
    marginRight: 0.01 * windowDimensions.width
  }
});

export default InfoText;