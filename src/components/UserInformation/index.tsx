import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import vocabulary from 'i18n';
import { selectUserInfo } from 'modules/user/selectors';
import InfoBlock from './InfoBlock';
import useStyles from './styles';
import { IUserInfo } from 'services/api/employees/types';

const vocab = vocabulary.get();

const getDisplayInfo = (userInfo: IUserInfo) => {
  const bankDetail = userInfo.iban ? 'iban' : 'workPermitNumber';

  return [
    {
      id: 'email',
      label: vocab.email,
    },
    {
      id: 'employee_number',
      label: vocab.employeeNumber,
    },
    {
      id: bankDetail,
      label:  vocab[bankDetail],
    },
  ];
};

const UserInformation = () => {
  const styles = useStyles();
  const userInfo = useSelector(selectUserInfo);
  return (
    <View style={styles.container}>
      <InfoBlock
        title={vocab.name.toUpperCase()}
        text={`${userInfo.first_name} ${userInfo.last_name}`}
      />
      {getDisplayInfo(userInfo).map((key) => (
        <InfoBlock
          key={key.id}
          title={key.label.toUpperCase()}
          text={userInfo[key.id]}
        />
      ))}
    </View>
  );
};

export default UserInformation;
