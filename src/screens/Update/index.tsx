import Button from 'components/Button';
import IconUpdate from 'components/IconUpdate';
import env from 'env';
import vocab from 'i18n';
import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { getHeight, getWidth } from 'utils/window';
import UpdateWrapper from './UpdateWrapper';

const Update = () => {
  const navigateToAppMarket = () => {
    Linking.openURL(env.marketLink);
  };

  return (
    <UpdateWrapper>
      <View style={styles.update}>
        <Text style={styles.header}>{vocab.get().newVersionAvailable}</Text>
        <Text style={styles.text}>{vocab.get().thereIsANewerVersion}</Text>
        <Button Icon={<IconUpdate />} onPress={navigateToAppMarket}>
          {vocab.get().update}
        </Button>
      </View>
    </UpdateWrapper>
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
    marginTop: getHeight(3),
    marginBottom: getHeight(5)
  },
  text: {
    fontSize: getWidth(4),
    textAlign: 'center',
    marginBottom: getHeight(7)
  }
});

export default Update;