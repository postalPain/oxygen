import InfoRecord from 'components/InfoRecord';
import React from 'react';
import { View, ViewStyle } from 'react-native';
import styles from './styles';

const DetailsContainer = (props) => {
  return (
    <View style={[styles.details]}>
      {props.children}
    </View>
  );
};

export default DetailsContainer;
