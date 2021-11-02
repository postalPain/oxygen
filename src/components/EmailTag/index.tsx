import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { IconCross } from 'components';
import theme from 'config/theme';
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
      <View style={styles.icon}>
        <View style={styles.iconBackground} />
        <IconCross color={theme.colors.floos2} size={8} />
      </View>
    </Pressable>
  );
};

export default EmailTag;