import Button from 'components/Button';
import IconUpdate from 'components/IconUpdate';
import env from 'env';
import vocab from 'i18n';
import React, { useEffect } from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { analyticEvents, EventLogger } from 'services/analytics';
import { getHeight, getWidth } from 'utils/window';
import UpdateWrapper from './UpdateWrapper';

let eventLogger: EventLogger;

const Update = () => {
  const navigateToAppMarket = () => {
    eventLogger.log({ app_version: env.version, button_pressed_at: EventLogger.getTimestamp() });
    Linking.openURL(env.marketLink);
  };

  useEffect(() => {
    eventLogger = new EventLogger(analyticEvents.signUpStarted);
    eventLogger.addParams({ screen_shown_at: EventLogger.getTimestamp() });
  }, []);

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