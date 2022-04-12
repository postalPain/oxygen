import { Button } from 'components';
import IconUpdate from 'components/IconUpdate';
import env from 'env';
import vocab from 'i18n';
import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { getHeight, getWidth } from 'utils/window';
import UpdateScreenWrapper from './UpdateWrapper';

const Update = () => {
  const navigateToAppMarket = () => {
    // Linking.openURL(`market://details?id=${env.appId}`);
    Linking.openURL(`itms-apps://itunes.apple.com/us/app/apple-store/${env.appId}?mt=8`);

  };

  return (
    <UpdateScreenWrapper>
      <View style={styles.update}>
        <Text style={styles.header}>{vocab.get().newVersionAvailable}</Text>
        <Text style={styles.text}>{vocab.get().thereIsANewerVersion}</Text>
        <Button Icon={<IconUpdate />} onPress={navigateToAppMarket}>
          {vocab.get().update}
        </Button>
      </View>
    </UpdateScreenWrapper>
  );
};

const styles = StyleSheet.create({
  update: {
    alignItems: 'center',
    paddingHorizontal: getWidth(12),
  },
  header: {
    fontSize: getWidth(5),
    fontWeight: '600',
    marginTop: getHeight(2),
    marginBottom: getHeight(5)
  },
  text: {
    fontSize: getWidth(4),
    textAlign: 'center',
    marginBottom: getHeight(7)
  }
});

export default Update;