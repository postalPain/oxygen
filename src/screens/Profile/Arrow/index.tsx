import React from 'react';
import { View, ViewStyle } from 'react-native';
import styles from './styles';


interface IArrowProps {
  style: ViewStyle;
}

const Arrow = ({ style }: IArrowProps) => {
  return <View style={[styles.arrow, style]} />;
};

export default Arrow;