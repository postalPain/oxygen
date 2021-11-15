import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import vocabulary from 'i18n';

const vocab = vocabulary.get()

const AccountDetails = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>{vocab.accountDetails}</Text>
      </View>
    </SafeAreaView>
  )
};

export default AccountDetails;