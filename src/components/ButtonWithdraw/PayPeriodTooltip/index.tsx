import IconInfoDark from 'components/IconInfoDark';
import IconInfoOpacity from 'components/IconInfoOpacity';
import { actionableTooltipStyles } from 'components/Tooltip/styles';
import vocab from 'i18n';
import React from 'react';
import { Text, View } from 'react-native';

// TODO: Use in future stories
const PayPeriodTooltip = () => {
  return (
    <View style={actionableTooltipStyles.container}>
      <Text style={[actionableTooltipStyles.text]}>
        <Text style={actionableTooltipStyles.textBold}>{vocab.get().days(1)} </Text>
        <Text>{vocab.get().untilEndOfPayPeriod}</Text>
      </Text>
      <IconInfoOpacity />
    </View>
  );
};

export default PayPeriodTooltip;