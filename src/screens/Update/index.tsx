import { Button } from 'components';
import IconUpdate from 'components/IconUpdate';
import vocab from 'i18n';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getHeight, getWidth } from 'utils/window';
import UpdateScreenWrapper from './UpdateWrapper';

const Update = () => {
  return (
    <UpdateScreenWrapper>
      <View style={styles.update}>
        <Text style={styles.header}>{vocab.get().newVersionAvailable}</Text>
        <Text style={styles.text}>{vocab.get().thereIsANewerVersion}</Text>
        <Button Icon={<IconUpdate />}>
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