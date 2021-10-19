import theme from 'config/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getFontSize } from 'utils/screen';
import { windowDimensions } from 'utils/window';
import EditEmail from '../../../../assets/edit_email.svg';

interface IEmailTag {
  email: string;
  style?: any;
}

const EmailTag = (props: IEmailTag) => {
  return (
    <View style={[styles.emailTag, props.style]}>
      <Text style={styles.emailText}>{props.email}</Text>
      <View style={styles.editIcon}>
        <EditEmail />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailTag: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 0.04 * windowDimensions.width,
    paddingLeft: 0.05 * windowDimensions.width,
    paddingVertical: 0.012 * windowDimensions.height,
    backgroundColor: theme.colors.screenBackgroundColorLight,
    borderRadius: 0.05 * windowDimensions.height
  },
  emailText: {
    fontSize: getFontSize(5),
  },
  editIcon: {
    width: 0.05 * windowDimensions.width,
    height: 0.05 * windowDimensions.width,
    marginLeft: 0.01 * windowDimensions.width
  }
});

export default EmailTag;