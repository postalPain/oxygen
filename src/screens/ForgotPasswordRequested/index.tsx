import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import vocabulary from 'i18n';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { selectForgotPassword } from 'modules/auth/selectors';
import useStyles from './styles';
import IconCheck from 'components/IconCheck';
import EmailTag from 'components/EmailTag';
import Button from 'components/Button';


const vocab = vocabulary.get();

const ForgotPasswordRequested = (props: AppNavigationProps<any>) => {
  const { navigation } = props;
  const styles = useStyles();
  const forgotPassword = useSelector(selectForgotPassword);
  const onSubmit = () => {
    navigation.navigate(AppScreenNames.VerificationCodeForgot);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <View style={styles.iconWrapper}>
            <IconCheck size={24} />
          </View>
          <Text style={styles.headerText}>
            {vocab.weSentVerificationCode}
          </Text>
        </View>
        <View style={styles.content}>
          <EmailTag
            email={forgotPassword?.credentials || 'test@stryber.com'}
            onPress={() => navigation.navigate(AppScreenNames.ForgotPassword)}
            style={styles.emailTag}
          />
          <Text style={styles.contentText}>
            {vocab.useTheCodeProvided}
          </Text>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../ForgotPasswordRequested/email_verification_requested.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>
        <Button onPress={onSubmit}>
          {vocab.ok}
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordRequested;