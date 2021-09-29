import React from 'react';
import { Text, View } from 'react-native';
import vocab from 'i18n';
import { AppScreenNames, SignUpNavigationProps, SignUpScreenNames } from 'navigation/types';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import ScreenWithAnimatedHeader from 'components/ScreenWithAnimatedKeyboard';
import IconInfo from 'components/IconInfo';
import useStyles from './styles';
import Button from 'components/Button';
import { getSizeForLayout } from '../../utils/screen';


const EnterEmployer = (
  { navigation }: SignUpNavigationProps<SignUpScreenNames.EnterEmployer>
) => {
  const styles = useStyles();
  const onPress = () => {
    navigation.navigate(AppScreenNames.EnterEmail);
  }
  return (
    <ScreenWithAnimatedHeader title={null}>
      <View style={styles.formContainer}>
        <View>
          <Input style={styles.input} inputStyle={styles.input} />
          <View style={styles.infoContainer}>
            <View style={styles.iconContainer}>
              <IconInfo size={getSizeForLayout(7)} />
            </View>
            <Text style={styles.infoText}>
              {vocab.get().shouldReceiveRegistrationId}
            </Text>
          </View>
        </View>
        <Button
          onPress={onPress}
          styles={styles.button}
        >
          {vocab.get().continue}
        </Button>
      </View>
    </ScreenWithAnimatedHeader>
  );
};

export default EnterEmployer;
