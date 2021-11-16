import styles from './styles';
import React from 'react';
import { Text, View } from 'react-native';

interface ITooltip {
  text?: string;
}

const Tooltip = (props: ITooltip) => {
  return (
    <View style={styles.tooltip}>
      <View style={[styles.main, styles.shadow]} />
      <View style={styles.tip} />

      <View style={[styles.main, styles.content]}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>

  );
};

export default Tooltip;