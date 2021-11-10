import React from 'react';
import vocabulary from 'i18n';
import { AppNavigationProps, AppScreenNames } from 'navigation/types';
import { ScreenWrapperMain, Button, } from 'components';
import useStyles from './styles';


const vocab = vocabulary.get();

const UserInfoConfirmation = ({ navigation }: AppNavigationProps<AppScreenNames.UserInfoConfirmation>) => {
  const styles = useStyles();
  const onPress = () => {
    navigation.navigate(AppScreenNames.Dashboard);
  };
  return (
    <ScreenWrapperMain>
      <Button onPress={onPress}>
        {vocab.continue}
      </Button>
    </ScreenWrapperMain>
  )
};

export default UserInfoConfirmation;
