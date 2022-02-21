import IconInfoDark from 'components/IconInfoDark';
import IconInfoOpacity from 'components/IconInfoOpacity';
import { actionableTooltipStyles } from 'components/Tooltip/styles';
import vocab from 'i18n';
import { selectPaycycleInfo } from 'modules/withdrawal/selectors';
import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const PayPeriodTooltip = () => {
  const paycycleInfo = useSelector(selectPaycycleInfo);

  return (
    <View style={actionableTooltipStyles.container}>
      <Text style={[actionableTooltipStyles.text]}>
        { paycycleInfo.left_days === 0
          ? <Text>{vocab.get().lastDayOfPayCycle}</Text>
          : (
            <>
              <Text style={actionableTooltipStyles.textBold}>
                {`${vocab.get().days(paycycleInfo.left_days)} `}
              </Text>
              <Text>{vocab.get().untilEndOfPayPeriod}</Text>
            </>
          )}
      </Text>
      <IconInfoOpacity />
    </View>
  );
};

export default PayPeriodTooltip;