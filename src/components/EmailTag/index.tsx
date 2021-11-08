import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { IconCross } from 'components';
import theme from 'config/theme';
import useStyles from './styles';

interface IEmailTag {
  email: string;
  onPress: () => void;
  style?: any;
  light?: boolean;
}

const EmailTag = (props: IEmailTag) => {
  const styles = useStyles();
  return (
    <View style={[
      styles.emailTag,
      { backgroundColor: props.light ? theme.colors.screenBackgroundColorLight : theme.colors.shade2 },
      props.style
    ]}
    >
      <Text style={styles.emailText}>{props.email}</Text>
      <View style={styles.icon}>
        <Pressable style={styles.iconBackground} onPress={props.onPress} />
        <IconCross color={theme.colors.floos2} size={8} />
      </View>
    </View>
  );
};

export default EmailTag;