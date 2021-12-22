import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import vocabulary from 'i18n';
import { selectUserInfo } from 'modules/user/selectors';
import InfoBlock from './InfoBlock';
import useStyles from './styles';


const vocab = vocabulary.get();

const displayInfo = ['email', 'employee_number', 'iban'];

const UserInformation = () => {
  const styles = useStyles();
  const userInfo = useSelector(selectUserInfo);
  return (
    <View style={styles.container}>
      <InfoBlock
        title={vocab.name.toUpperCase()}
        text={`${userInfo.first_name} ${userInfo.last_name}`}
      />
      {displayInfo.map((key) => (
        <InfoBlock
          key={key}
          title={key.toUpperCase()}
          text={userInfo[key]}
        />
      ))}
    </View>
  );
};

export default UserInformation;
