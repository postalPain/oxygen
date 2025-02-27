import React from 'react';
import { KeyboardAvoidingView, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import CircleLarge from 'components/CircleLarge';
import CircleMedium from 'components/CircleMedium';
import CircleSmall from 'components/CircleSmall';
import IconFloosFull from 'components/IconFloosFull';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from 'modules/user/selectors';
import { userClearInfo } from 'modules/user/actions';
import { clearAuthData } from 'modules/auth/actions';
import vocab from 'i18n';
import { getHeight } from 'utils/window';
import EmailTag from 'components/EmailTag';

interface IScreenWrapperLogin {
  children?: any;
}

const ScreenWrapperLogin = (props: IScreenWrapperLogin) => {
  const dispatch = useDispatch();
  const { first_name, email } = useSelector(selectUserInfo);

  return (
    <KeyboardAvoidingView
      behavior={'position'}
      keyboardVerticalOffset={-getHeight(10)}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.screenWrapperLogin}>
          <View style={styles.header}>
            <View style={[styles.circle, styles.circleMedium]}>
              <CircleMedium />
            </View>
            <View style={[styles.circle, styles.circleLarge]}>
              <CircleLarge />
            </View>
            <View style={[styles.circle, styles.circleSmall1]}>
              <CircleSmall />
            </View>
            <View style={[styles.circle, styles.circleSmall2]}>
              <CircleSmall />
            </View>
            <View style={styles.headerBackground} />
            <View style={styles.logo}>
              <IconFloosFull />
            </View>
            <View>
              {!!first_name && <Text style={styles.hiMessage}>{vocab.get().hi} {first_name}!</Text>}
              {!!email && (
                <EmailTag
                  onPress={() => {
                    dispatch(userClearInfo());
                    dispatch(clearAuthData());
                  }}
                  light
                  email={email}
                />
              ) }
            </View>
          </View>
          <View style={styles.childrenContainer}>
            {props.children}
          </View>
        </View>
      </TouchableWithoutFeedback>

    </KeyboardAvoidingView>

  );
};


export default ScreenWrapperLogin;