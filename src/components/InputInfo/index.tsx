import React from 'react';
import { Text, View } from 'react-native';
import IconInfo from 'components/IconInfo';
import useStyles from './styles';


interface IInputInfo {
  text: string;
}

const InputInfo = ({ text }: IInputInfo) => {
  const styles = useStyles();
  return (
    <View style={styles.infoContainer}>
      <View style={styles.iconContainer}>
        <IconInfo size={14} />
      </View>
      <Text style={styles.infoText}>
        {text}
      </Text>
    </View>
  );
};

export default InputInfo;
