import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import vocabulary from 'i18n';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { getItem, setItem } from 'modules/asyncStorage';
import { selectUserEmail } from 'modules/user/selectors';
import { AuthStoredKeys } from 'modules/auth/types';
import {
  Button,
  IconBadge,
  Link,
  ScreenGradient,
  UserInformation,
} from 'components';
import useStyles from './styles';


const vocab = vocabulary.get();

const UserInfoConfirmation = ({ navigation }: AppNavigationProps<AppScreenNames.UserInfoConfirmation>) => {
  const styles = useStyles();
  const userEmail = useSelector(selectUserEmail);
  const onPress = async () => {
    const firstLoginEmails = await getItem(AuthStoredKeys.firstLoginEmails);
    await setItem(AuthStoredKeys.firstLoginEmails, firstLoginEmails.replace(userEmail, ''));
    navigation.navigate(AppScreenNames.TabNavigation);
  };
  return (
    <SafeAreaView style={styles.screen}>
      <ScreenGradient />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.title}>
            <IconBadge />
            <Text style={styles.headerLabel}>
              {vocab.personalInformation.toUpperCase()}
            </Text>
          </View>
          <Text style={styles.headerText}>
            {vocab.informationReceived}
          </Text>
        </View>
        <UserInformation />
        <View style={styles.footer}>
          <View style={styles.contactUs}>
            <Text style={styles.contactUsText}>{vocab.ifNotAccurate}</Text>
            <Link style={styles.contactUsLink}>{vocab.contactUsImmediately}</Link>
          </View>
          <Button onPress={onPress}>
            {vocab.continue}
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
};

export default UserInfoConfirmation;
