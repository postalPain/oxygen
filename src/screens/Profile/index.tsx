import React from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import vocabulary from 'i18n';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { IconAccountDetails, IconHelpCenter, IconLogout, IconPrivacyPolicy, IconSettings, Link } from 'components';

const vocab = vocabulary.get()

const Profile = (
  { navigation }: AppNavigationProps<AppScreenNames.Profile>
) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };
  const logout = () => {};
  return (
    <SafeAreaView>
      <View>
        <Pressable
          onPress={() => goTo(AppScreenNames.AccountDetails)}
          style={{ alignItems: 'center', flexDirection: 'row' }}
        >
          <IconAccountDetails />
          <Text>{vocab.accountDetails}</Text>
        </Pressable>
        <Pressable
          onPress={() => goTo(AppScreenNames.Settings)}
          style={{ alignItems: 'center', flexDirection: 'row' }}
        >
          <IconSettings />
          <Text>{vocab.settings}</Text>
        </Pressable>
        <Link style={{ alignItems: 'center', flexDirection: 'row' }}>
          <IconPrivacyPolicy />
          {vocab.privacyPolicy}
        </Link>
        <Link style={{ alignItems: 'center', flexDirection: 'row' }}>
          <IconHelpCenter />
          {vocab.helpCenter}
        </Link>
        <Pressable
          onPress={logout}
          style={{ alignItems: 'center', flexDirection: 'row' }}
        >
          <IconLogout />
          <Text>{vocab.logout}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
};

export default Profile;