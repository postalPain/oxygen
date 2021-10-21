import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import vocabulary from 'i18n';
import {
  AppNavigationProps,
  AppScreenNames,
} from 'navigation/types';
import { Button, IconCheck } from 'components';
import useStyles from './styles';


const vocab = vocabulary.get();

const UserVerificationRequested = (
  { navigation }: AppNavigationProps<AppScreenNames.UserVerificationRequested>
) => {
  const styles = useStyles();
  const onPress = () => {
    navigation.navigate(AppScreenNames.VerificationCode);
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.header}>
          <View style={styles.iconWrapper}>
            <IconCheck size={24} />
          </View>
          <Text style={styles.headerText}>
            {vocab.emailVerificationRequested}
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>
            {vocab.youReceivedEmail}
          </Text>
          <Text style={styles.contentText}>
            {vocab.useCode}
          </Text>
          <View style={styles.imageWrapper}>
            <Image
              source={require('./email_verification_requested.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>
        <Button onPress={onPress}>
          {vocab.ok}
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default UserVerificationRequested;
