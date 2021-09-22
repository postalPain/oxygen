import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@stryberventures/stryber-react-native-ui-components';
import { AppScreenNames } from 'navigation/types';
import vocab from 'i18n';
import theme from 'config/theme';
import { successNotification } from '../../modules/notifications/actions';


const Authentication = (): React.ReactElement => {
  const navigation = useNavigation();
  
  const dispatch = useDispatch();
  
  useEffect(
    () => {
      dispatch(successNotification('hahaha'))
    },
    []
  );
  
  const onSignUpPress = () => {
    navigation.navigate(AppScreenNames.SignUp);
  };
  
  const onSignInPress = () => {
    navigation.navigate(AppScreenNames.SignIn);
  };
  
  return (
    <View style={styles.authScreen}>
      <View style={styles.authScreenWrapper}>
        <View style={styles.carousel}>
          <Text>Carousel</Text>
        </View>
        <View>
          <Button
            shape="round"
            onPress={onSignUpPress}
          >
            {vocab.get().register}
          </Button>
          <Button
            type="outlined"
            shape="round"
            onPress={onSignInPress}
          >
            {vocab.get().logIn}
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authScreen: {
    flex: 1,
    backgroundColor: theme.colors.screenBackgroundColorLight,
  },
  authScreenWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  carousel: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  carouselText: {
    textAlign: 'center',
  },
});

export default Authentication;
