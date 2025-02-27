import IconCheck from 'components/IconCheck';
import vocab from 'i18n';
import React from 'react';
import { Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { getHeight } from 'utils/window';
import styles from './styles';

interface IScreenWrapperLoginForgot {
  children?: any;
}

const ScreenWrapperForgotPasswordLogin = (props: IScreenWrapperLoginForgot) => {
  return (
    <KeyboardAvoidingView
      behavior={'position'}
      keyboardVerticalOffset={-getHeight(10)}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.screenWrapperLogin}>
          <View style={styles.header}>
            <View style={styles.check}>
              <IconCheck size={24} />
            </View>
            <Text style={styles.text}>{vocab.get().newPasswordCreated}</Text>
            <Text style={styles.text}>{vocab.get().pleaseLogInIntoAccount}</Text>
          </View>

          <View style={styles.childrenContainer}>
            {props.children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};


export default ScreenWrapperForgotPasswordLogin;