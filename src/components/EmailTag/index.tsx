import React from 'react';
import { Pressable, Text, View } from 'react-native';
import EditEmail from '../../../assets/edit_email.svg';
import useStyles from './styles';

interface IEmailTag {
  email: string;
  onPress: () => void;
  style?: any;
}

const EmailTag = (props: IEmailTag) => {
  const styles = useStyles();
  return (
    <Pressable
      onPress={props.onPress}
      style={[styles.emailTag, props.style]}
    >
      <Text style={styles.emailText}>{props.email}</Text>
      <View style={styles.editIcon}>
        <EditEmail />
      </View>
    </Pressable>
  );
};

export default EmailTag;