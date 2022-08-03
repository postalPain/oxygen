import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import vocab from 'i18n';
import { selectCompanyDeactivatedMessage } from 'modules/user/selectors';
import styles from './styles';


const DeactivatedCompanyBlock = () => {
  const companyDeactivatedMessage = useSelector(
    selectCompanyDeactivatedMessage,
  );

  const currentLang = vocab.getLanguage() || 'en';
  const disabledMessage = companyDeactivatedMessage[currentLang] || vocab.get().disabledCompanyMessageFallback;

  return (
    <View style={styles.wrapper}>
      <View>
        <View style={styles.container}>
          <Text style={styles.message}>
            ⚠️ {disabledMessage}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DeactivatedCompanyBlock;
