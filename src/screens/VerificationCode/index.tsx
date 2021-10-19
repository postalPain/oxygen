import { Button, ScreenWithAnimatedHeader } from 'components';
import CodeInput from 'components/CodeInput';
import InfoText from 'components/InfoText';
import Link from 'components/Link';
import vocab from 'i18n';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { windowDimensions } from 'utils/window';

const VerificationCode = () => {
  return (
    <ScreenWithAnimatedHeader title={null}>
      <View style={styles.verificationCode}>
        <View>
          <CodeInput style={styles.codeInput} />
          <InfoText>{vocab.get().pleaseEnterCode}</InfoText>
        </View>
        <View>
          <Link style={styles.link}>{vocab.get().sendEmailAgain}</Link>
          <Button>{vocab.get().confirm}</Button>
        </View>
      </View>
    </ScreenWithAnimatedHeader>
  );
};

const styles = StyleSheet.create({
  verificationCode: {
    flex: 1,
    justifyContent: 'space-between',
  },
  codeInput: {
    marginVertical: 0.08 * windowDimensions.height
  },
  link: {
    textAlign: 'center',
    marginBottom: 0.025 * windowDimensions.height
  },
});

export default VerificationCode;