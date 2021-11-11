import React from 'react';
import { Text, View } from 'react-native';
import useStyles from './styles';


interface IInfoBlockProps {
  title: string;
  text: string;
}

const InfoBlock = ({ title, text }: IInfoBlockProps) => {
  const styles = useStyles();
  return (
    <View style={styles.infoBlock}>
      <Text style={styles.infoTitle}>
        {title}
      </Text>
      <Text style={styles.infoText}>
        {text}
      </Text>
    </View>
  );
};

export default InfoBlock;
