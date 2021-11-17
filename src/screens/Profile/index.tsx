import React from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import vocabulary from 'i18n';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { openBrowser } from 'utils';
import env from 'env';
import { signOut } from 'modules/auth/actions';
import {
  IconAccountDetails,
  IconHelpCenter,
  IconLogout,
  IconPrivacyPolicy,
  IconSettings,
  ScreenGradient
} from 'components';
import Arrow from './Arrow';
import styles from './styles';

const vocab = vocabulary.get()

const Profile = (
  { navigation }: AppNavigationProps<AppScreenNames.Profile>
) => {
  const dispatch = useDispatch();
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };
  const openLink = (link: string) => {
    openBrowser(link);
  }
  const logout = () => {
    dispatch(signOut({
      onSuccess: () => navigation.navigate(AppScreenNames.Onboarding),
    }));
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScreenGradient />
      <View style={styles.screen}>
        <Pressable
          onPress={() => goTo(AppScreenNames.AccountDetails)}
          style={styles.menuItem}
        >
          <IconAccountDetails size={20} />
          <Text style={styles.menuItemText}>{vocab.accountDetails}</Text>
          <Arrow style={styles.arrow} />
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => openLink(`${env.websiteDomain}/privacy-policy`)}
        >
          <IconPrivacyPolicy size={22} />
          <Text style={styles.menuItemText}>{vocab.privacyPolicy}</Text>
          <Arrow style={styles.arrow} />
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => openLink('https://support.floos.ae')}
        >
          <IconHelpCenter size={22} />
          <Text style={styles.menuItemText}>{vocab.helpCenter}</Text>
          <Arrow style={styles.arrow} />
        </Pressable>
        <Pressable
          onPress={logout}
          style={[styles.menuItem, styles.menuItemNoBorder]}
        >
          <IconLogout size={22} />
          <Text style={styles.menuItemText}>{vocab.logout}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
};

export default Profile;