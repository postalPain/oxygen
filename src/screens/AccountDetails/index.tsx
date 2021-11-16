import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectUserInfo } from 'modules/user/selectors';
import { Details } from 'components';
import vocabulary from 'i18n';
import styles from './styles';

const vocab = vocabulary.get()

const AccountDetails = () => {
  const userInfo = useSelector(selectUserInfo);
  return (
    <View style={styles.detailsContainer}>
      <Details
        data={[
          {
            label: vocab.name,
            text: `${userInfo.first_name} ${userInfo.last_name}`,
          },
          {
            label: vocab.email,
            text: userInfo.email,
          },
          {
            label: vocab.registrationId,
            text: userInfo.registration_id,
          },
          {
            label: vocab.iban,
            text: userInfo.iban,
          },
        ]}
      />
    </View>
  )
};

export default AccountDetails;