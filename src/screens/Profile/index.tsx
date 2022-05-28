import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, Pressable } from 'react-native';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { openBrowser } from 'utils';
import { signOut } from 'modules/auth/actions';
import styles from './styles';
import externalUrls from 'config/externalUrls';
import vocab from 'i18n';
import { analyticEvents } from '../../services/analytics';
import env from 'env';
import ScreenWrapperMain from 'components/ScreenWrapperMain';
import IconAccountDetails from 'components/IconAccountDetails';
import IconArrowRight from 'components/IconArrowRight';
import IconSettings from 'components/IconSettings';
import IconPrivacyPolicy from 'components/IconPrivacyPolicy';
import IconHelpCenter from 'components/IconHelpCenter';
import IconLogout from 'components/IconLogout';

const Profile = (
  { navigation }: AppNavigationProps<AppScreenNames.Profile>
) => {
  const dispatch = useDispatch();
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };
  const logout = () => {
    dispatch(signOut({
      onSuccess: () => navigation.reset({
        index: 0,
        routes: [{ name: AppScreenNames.Onboarding }]
      })
    }));
  };
  return (
    <ScreenWrapperMain style={styles.screenWrapper}>
      <Pressable
        onPress={() => goTo(AppScreenNames.AccountDetails)}
        style={styles.menuItem}
      >
        <IconAccountDetails />
        <Text style={styles.menuItemText}>{vocab.get().accountDetails}</Text>
        <View style={styles.arrow}><IconArrowRight /></View>
      </Pressable>
      <Pressable
        onPress={() => goTo(AppScreenNames.Settings)}
        style={styles.menuItem}
      >
        <IconSettings />
        <Text style={styles.menuItemText}>{vocab.get().settings}</Text>
        <View style={styles.arrow}><IconArrowRight /></View>
      </Pressable>
      <Pressable
        style={styles.menuItem}
        onPress={() => openBrowser(externalUrls.privacyPolicy)}
      >
        <IconPrivacyPolicy />
        <Text style={styles.menuItemText}>{vocab.get().privacyPolicy}</Text>
        <View style={styles.arrow}><IconArrowRight /></View>
      </Pressable>
      <Pressable
        style={styles.menuItem}
        onPress={() => openBrowser(externalUrls.help, { name: analyticEvents.helpViewed, sourceScreen: 'Profile' })}
      >
        <IconHelpCenter />
        <Text style={styles.menuItemText}>{vocab.get().helpCenter}</Text>
        <View style={styles.arrow}><IconArrowRight /></View>
      </Pressable>
      <Pressable
        onPress={logout}
        style={[styles.menuItem, styles.menuItemNoBorder]}
      >
        <IconLogout />
        <Text style={[styles.menuItemText, styles.menuItemTextHighlighted]}>{vocab.get().logout}</Text>
      </Pressable>
      <View style={styles.versionContainer}>
        <Text style={styles.version}>
          {vocab.get().version} {env.version}
        </Text>
      </View>
    </ScreenWrapperMain>
  );
};

export default Profile;
