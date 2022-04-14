import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import styles from './styles';


interface IDetailsProps {
  data: {
    label: string;
    text: string;
    width?: string;
  }[];
  containerStyle?: ViewStyle;
  itemStyles?: ViewStyle;
  labelStyles?: ViewStyle;
  textStyles?: ViewStyle;
}

const Details = (
  {
    data,
    containerStyle,
    itemStyles,
    labelStyles,
    textStyles,
  }: IDetailsProps
) => {
  return (
    <View style={[styles.details, containerStyle]}>
      {data.map(({ label, text, width = '100%' }) => (
        <View
          key={label}
          style={[styles.item, itemStyles, { width }]}
        >
          <Text style={[styles.label, labelStyles]}>
            {label}
          </Text>
          <Text style={[styles.text, textStyles]}>
            {text}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Details;
