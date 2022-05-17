import InfoRecord from 'components/InfoRecord';
import React from 'react';
import { View, ViewStyle } from 'react-native';
import styles from './styles';

interface IDetailsProps {
  data: {
    label: string;
    text: string;
    width?: string;
  }[];
  containerStyle?: ViewStyle;
}

const Details = ({ data, containerStyle }: IDetailsProps) => {
  return (
    <View style={[styles.details, containerStyle]}>
      {data.map(({ label, text, width }) =>
        <InfoRecord label={label} text={text} width={width} key={label} />
      )}
    </View>
  );
};

export default Details;
