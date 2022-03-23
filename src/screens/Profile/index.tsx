import React from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { openBrowser } from 'utils';
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
import externalUrls from 'config/externalUrls';
import vocab from 'i18n';
import { analyticEvents } from '../../services/analytics';

const Profile = (
  { navigation }: AppNavigationProps<AppScreenNames.Profile>
) => {
  const dispatch = useDispatch();
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };
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
          <IconAccountDetails />
          <Text style={styles.menuItemText}>{vocab.get().accountDetails}</Text>
          <Arrow style={styles.arrow} />
        </Pressable>
        <Pressable
          onPress={() => goTo(AppScreenNames.Settings)}
          style={styles.menuItem}
        >
          <IconSettings />
          <Text style={styles.menuItemText}>{vocab.get().settings}</Text>
          <Arrow style={styles.arrow} />
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => openBrowser(externalUrls.privacyPolicy)}
        >
          <IconPrivacyPolicy />
          <Text style={styles.menuItemText}>{vocab.get().privacyPolicy}</Text>
          <Arrow style={styles.arrow} />
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => openBrowser(externalUrls.help, { name: analyticEvents.helpViewed, sourceScreen: 'Profile' })}
        >
          <IconHelpCenter />
          <Text style={styles.menuItemText}>{vocab.get().helpCenter}</Text>
          <Arrow style={styles.arrow} />
        </Pressable>
        <Pressable
          onPress={logout}
          style={[styles.menuItem, styles.menuItemNoBorder]}
        >
          <IconLogout />
          <Text style={[styles.menuItemText, styles.menuItemTextHighlighted]}>{vocab.get().logout}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
