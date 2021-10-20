import React, { useState } from 'react';
import { View } from 'react-native';
import Checkbox from "react-native-bouncy-checkbox";
import vocabulary from 'i18n';
import {
  AppNavigationProps,
  AppScreenNames,
} from 'navigation/types';
import { Text } from '@stryberventures/stryber-react-native-ui-components';
import { Button, ScreenWithAnimatedHeader } from 'components';
import theme from 'config/theme';
import useStyles from './styles';


const vocab = vocabulary.get();

const DataPrivacy = (
  { navigation }: AppNavigationProps<AppScreenNames.DataPrivacy>
) => {
  const styles = useStyles();
  const [checked, setChecked] = useState(false);
  const onPress = async () => {
    if (!checked) return;
    navigation.navigate(AppScreenNames.VerificationCode);
  };
  const handleOnChange = (value) => {
    setChecked(value);
  };
  return (
    <ScreenWithAnimatedHeader title={null}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>
            {vocab.dataPrivacy}
          </Text>
          <Text style={styles.text}>
            {vocab.needConsent}
          </Text>
        </View>
        <View style={styles.consentBlock}>
          <View style={styles.checkboxWrapper}>
            <Checkbox
              size={22}
              fillColor={theme.colors.floos4}
              unfillColor={theme.colors.screenBackgroundColorLight}
              iconStyle={styles.checkbox}
              onPress={handleOnChange}
              isChecked={checked}
              iconComponent={<View style={styles.checkboxIcon} />}
            />
          </View>
          <View style={styles.checkboxLabelWrapper}>
            <Text style={styles.checkboxLabel}>
              {vocab.iHaveRead}
            </Text>
            <Text style={styles.link}>
              {vocab.dataPrivacy.toLowerCase()}
            </Text>
            <Text style={styles.checkboxLabel}>
              {vocab.guidelines}
            </Text>
          </View>
        </View>
        <Button onPress={onPress}>
          {vocab.next}
        </Button>
      </View>
    </ScreenWithAnimatedHeader>
  );
};

export default DataPrivacy;
