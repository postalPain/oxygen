import React, { useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles, { tipHeight } from './styles';

interface ITooltip {
  show?: boolean;
  text?: string;
  onPress?: () => void;
  children?;
}

const Tooltip = (props: ITooltip) => {
  const [childrenHeight, setChildrenHeight] = useState<number>();

  return (
    <>
      {props.show && (
        <TouchableWithoutFeedback onPress={props.onPress}>
          <View style={[
            styles.tooltip,
            childrenHeight && { bottom: childrenHeight + tipHeight }
          ]}
          >
            <View style={[styles.content]}>
              <Text style={styles.text}>{props.text}</Text>
            </View>
            <View style={styles.tip} />
          </View>
        </TouchableWithoutFeedback>
      )}
      <View onLayout={(event) => setChildrenHeight(event.nativeEvent.layout.height)}>
        {props.children}
      </View>
    </>
  );
};

export default Tooltip;