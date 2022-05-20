import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { AccountDetails, Settings, SettingsLanguage } from 'screens';
import TabNavigation from 'navigation/TabNavigation';
import WithdrawalSelect from 'screens/WithdrawalSelect';
import WithdrawalOverview from 'screens/WithdrawalOverview';
import WithdrawalConfirmation from 'screens/WithdrawalConfirmation';
import { modalScreenStyles } from 'navigation/styles';
import vocab from 'i18n';
import { navigate } from 'navigation';
import useTabNavigationDeepLinks from 'navigation/deepLinks/useTabNavigationDeepLink';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from 'modules/transactions/actions';
import { selectBalance } from 'modules/withdrawal/selectors';
import { getBalance, getPaycycleInfo, getSuggestedValues, getWithdrawableDefaults } from 'modules/withdrawal/actions';
import AppStatusBlur from '../../components/AppStatusBlur';
import { usePushMessages } from 'modules/pushNotifications/hooks/usePushMessages';
import { PushTopics, PushTransactionData } from 'modules/pushNotifications/types';
import BackButton from 'components/BackButton';
import NavigationHeader from 'components/NavigationHeader';

const Stack = createNativeStackNavigator();

const AuthorizedStack = () => {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);

  const deepLinkScreenName = useTabNavigationDeepLinks();
  const {
    message: transactionMessage,
  } = usePushMessages<PushTransactionData>(PushTopics.transaction_details);

  useEffect(() => {
    if (transactionMessage?.data?.transaction_id) {
      navigate(
        AppScreenNames.TabNavigation,
        {},
        navigate(
          AppScreenNames.TransactionsStack,
          { id: transactionMessage.data.transaction_id },
        ));
    }
  }, [transactionMessage]);

  useEffect(() => {
    dispatch(getBalance());
    dispatch(getWithdrawableDefaults());
    dispatch(getPaycycleInfo());
    setTimeout(() => dispatch(getTransactions()), 500); // Preload for Transactions screen
  }, []);

  useEffect(() => {
    balance && dispatch(getSuggestedValues()); // BE produces an error when requesting values before the balance
  }, [balance]);

  useEffect(() => {
    deepLinkScreenName && navigate(deepLinkScreenName);
  }, [deepLinkScreenName]);

  return (
    <>
      <Stack.Navigator initialRouteName={AppScreenNames.TabNavigation}>
        <Stack.Screen
          name={AppScreenNames.TabNavigation}
          component={TabNavigation}
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={AppScreenNames.WithdrawalSelect}
          component={WithdrawalSelect}
          options={({ navigation }: AppNavigationProps<AppScreenNames.WithdrawalSelect>) => ({
            title: '',
            headerTransparent: true,
            headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
          })}
        />
        <Stack.Screen
          name={AppScreenNames.WithdrawalOverview}
          component={WithdrawalOverview}
          options={({ navigation }: AppNavigationProps<AppScreenNames.WithdrawalOverview>) => ({
            title: '',
            headerTransparent: true,
            headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
          })}
        />
        <Stack.Screen
          name={AppScreenNames.WithdrawalConfirmation}
          component={WithdrawalConfirmation}
          options={{ headerShown: false }}
        />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name={AppScreenNames.AccountDetails}
            component={AccountDetails}
            options={{
              headerShown: true,
              header: (headerProps) => (
                <>
                  {Platform.OS === 'ios' && <AppStatusBlur />}
                  <NavigationHeader
                    {...headerProps}
                    headerStyle={modalScreenStyles.header}
                    title={vocab.get().accountDetails}
                    headerRight={null}
                  />
                </>
              )
            }}
          />
          <Stack.Screen
            name={AppScreenNames.Settings}
            component={Settings}
            options={{
              headerShown: true,
              header: (headerProps) => (
                <NavigationHeader
                  {...headerProps}
                  headerStyle={modalScreenStyles.header}
                  title={vocab.get().settings}
                  headerRight={null}
                />
              )
            }}
          />
          <Stack.Screen
            name={AppScreenNames.SettingsLanguage}
            component={SettingsLanguage}
            options={{
              headerShown: true,
              header: (headerProps) => (
                <NavigationHeader
                  {...headerProps}
                  headerStyle={modalScreenStyles.header}
                  title={vocab.get().settingsLanguage}
                  headerRight={null}
                />
              )
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </>
  );
};

export default AuthorizedStack;
