import React from 'react';
import { View, Text } from 'react-native';
import IconInfoDark from 'components/IconInfoDark';
import ModalWrapper from 'components/ModalWrapper';
import styles from './styles';
import { getWidth } from 'utils/window';
import vocab from 'i18n';
import { IBalance } from 'services/api/employees/types';
import WithdrawInfoItem from './WithdrawInfoItem';
import WithdrawInfoBar from './WithdrawInfoBar';

interface IModalGoodToKnow {
  onClose?: () => void;
}


const ModalWithdrawInfo = ({ onClose }: IModalGoodToKnow) => {
  // const balance = useSelector(selectBalance);

  const balance: Partial<IBalance> = {
    withdrawable_wages: 123,
  };
  // balance.withdrawable_wages = 20;
  return (
    <ModalWrapper onClose={onClose}>
      <View style={styles.headerContainer}>
        <IconInfoDark />
        <Text style={styles.header}>{vocab.get().helpfulTerms}</Text>
      </View>
      <View style={styles.itemHeader}>
        <Text style={[styles.itemHeaderText]}>
          {vocab.get().availableToWithdraw}
        </Text>
        <View style={[styles.amountTag]}>
          <Text>
            <Text style={[styles.amount,
              balance.withdrawable_wages?.toString().length > 4 &&
            { fontSize: getWidth(40) / balance.withdrawable_wages.toString().length } ]}
            >
              {balance.withdrawable_wages}
            </Text>
            <Text style={styles.currency}>
              {vocab.get().aed}
            </Text>
          </Text>
        </View>
      </View>
      <Text style={styles.listHeader}>
        {vocab.get().theAmountYouAreAbleToWithdraw}
      </Text>
      <WithdrawInfoItem
        header={vocab.get().earnedSalary}
        text={vocab.get().theAmountYouEarnedUntilToday}
        amount={100500}
        styles={{ padding: 8 }}
      />
      <WithdrawInfoItem
        header={vocab.get().eltizamRule}
        text={vocab.get().withdrawalIsSetToPercentage(50)}
        amount={12}
        styles={{ padding: 8 }}
      />
      <WithdrawInfoItem
        header={vocab.get().payoutsRequested}
        text={vocab.get().totalAmountWithdrawn}
        amount={12}
        styles={{ padding: 8 }}
      />
      <View style={styles.itemHeader}>
        <Text style={styles.itemHeaderText}>
          {vocab.get().payCycle}
        </Text>
      </View>
      <Text style={styles.itemText}>
        {vocab.get().aCycleIsTheRegularPeriod}
      </Text>
      <WithdrawInfoBar
        startDate='2021-02-01'
        endDate='2021-02-22'
        daysTotal={30}
        daysLeft={0}
      />
    </ModalWrapper>
  );
};



export default ModalWithdrawInfo;