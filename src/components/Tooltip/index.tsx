import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';

interface ITooltip {
  text?: string;
  onPress?: () => void;
}

const Tooltip = (props: ITooltip) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.tooltip}>
        <View style={[styles.main, styles.shadow]}>
          <View style={[styles.main, styles.content]}>
            <Text style={styles.text}>{props.text}</Text>
          </View>
          <View style={styles.tip} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Tooltip;