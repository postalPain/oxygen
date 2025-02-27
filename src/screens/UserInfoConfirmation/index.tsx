import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import vocabulary from 'i18n';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { selectUserEmail } from 'modules/user/selectors';
import useStyles from './styles';
import { userGetInfo } from 'modules/user/actions';
import { openBrowser } from 'utils';
import externalUrls from 'config/externalUrls';
import { deleteFromStoredLoginEmails } from 'modules/user/asyncStorage';
import { clearSignUpData } from 'modules/auth/actions';
import { analyticEvents } from '../../services/analytics';
import ScreenGradient from 'components/ScreenGradient';
import IconBadge from 'components/IconBadge';
import UserInformation from 'components/UserInformation';
import Button from 'components/Button';


const vocab = vocabulary.get();

const UserInfoConfirmation = ({ navigation }: AppNavigationProps<AppScreenNames.UserInfoConfirmation>) => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const userEmail = useSelector(selectUserEmail);
  useEffect(() => {
    dispatch(userGetInfo());
  }, []);
  const onPress = async () => {
    await deleteFromStoredLoginEmails(userEmail);
    dispatch(clearSignUpData());
    navigation.navigate(AppScreenNames.AuthorizedStack);
  };
  return (
    <SafeAreaView style={styles.screen}>
      <ScreenGradient style={styles.screenGradient} />
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
            <Text style={styles.contactUsText}>
              <Text>{vocab.ifNotAccurate} </Text>
              <Text
                onPress={() => openBrowser(externalUrls.help, { name: analyticEvents.helpViewed, sourceScreen: 'UserInfoConfirmation' })}
                style={styles.contactUsLink}
              >
                {vocab.contactUsImmediately}
              </Text>
            </Text>
          </View>
          <Button onPress={onPress}>
            {vocab.continue}
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserInfoConfirmation;
