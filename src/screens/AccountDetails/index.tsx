import React from 'react';
import { View, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { selectUserInfo } from 'modules/user/selectors';
import vocabulary from 'i18n';
import styles from './styles';
import AppStatusBlur from '../../components/AppStatusBlur';
import DetailsContainer from 'components/Details';
import InfoRecord from 'components/InfoRecord';

const vocab = vocabulary.get();

const AccountDetails = () => {
  const userInfo = useSelector(selectUserInfo);
  const fields = [
    {
      label: vocab.name,
      text: `${userInfo.first_name} ${userInfo.last_name}`,
    },
    {
      label: vocab.email,
      text: userInfo.email,
    },
    {
      label: vocab.employeeNumber,
      text: userInfo.employee_number,
    },
    {
      label: vocab[userInfo.iban ? 'iban' : 'workPermitNumber'],
      text: userInfo.iban || userInfo.work_permit_number,
    },
  ];

  return (
    <View style={styles.detailsContainer}>
      <DetailsContainer>
        {fields.map(({ label, text }) => (
          <InfoRecord label={label} text={text} key={label} />
        ))}
      </DetailsContainer>
      {Platform.OS === 'ios' && <AppStatusBlur />}
    </View>
  );
};

export default AccountDetails;
