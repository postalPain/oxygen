import React from 'react';
import { View, Text } from 'react-native';
import IconInfoDark from 'components/IconInfoDark';
import ModalWrapper from 'components/ModalWrapper';
import styles from './styles';
import { getWidth } from 'utils/window';
import { crcNumberFormat } from 'utils/currency';
import vocab from 'i18n';
import WithdrawInfoItem from './WithdrawInfoItem';
import PaycycleBar from './PaycycleBar';
import { useSelector } from 'react-redux';
import {
  getWithdrawalRule,
  selectBalance,
  selectMaximumWithdrawable,
  selectPaycycleInfo,
} from 'modules/withdrawal/selectors';
import moment from 'moment';
import { selectUserInfo } from 'modules/user/selectors';

interface IModalGoodToKnow {
  onClose?: () => void;
}

const ModalWithdrawInfo = ({ onClose }: IModalGoodToKnow) => {
  const balance = useSelector(selectBalance);
  const maximumWithdrawable = useSelector(selectMaximumWithdrawable);
  const paycycleInfo = useSelector(selectPaycycleInfo);
  const userInfo = useSelector(selectUserInfo);

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
            <Text
              style={[
                styles.amount,
                maximumWithdrawable?.toString().length > 4 && {
                  fontSize:
                    getWidth(40) / maximumWithdrawable.toString().length,
                },
              ]}
            >
              {crcNumberFormat({ value: maximumWithdrawable })}
            </Text>
            <Text style={styles.currency}>{vocab.get().aed}</Text>
          </Text>
        </View>
      </View>
      <Text style={styles.listHeader}>
        {vocab.get().theAmountYouAreAbleToWithdraw}
      </Text>
      <WithdrawInfoItem
        header={vocab.get().earnedSalary}
        text={vocab.get().theAmountYouEarnedUntilToday}
        amount={balance.earned_wages}
        styles={styles.listItem}
      />
      <WithdrawInfoItem
        header={vocab.t(vocab.get().companyRule, userInfo.company_name)}
        text={vocab.t(vocab.get().withdrawalIsSetToPercentage, balance.cap)}
        amount={getWithdrawalRule(balance)}
        styles={styles.listItem}
      />
      <WithdrawInfoItem
        header={vocab.get().payoutsRequested}
        text={vocab.get().totalAmountWithdrawn}
        amount={balance.total_withdrawn_amount}
        styles={styles.listItem}
      />
      {balance.monthly_limit && (
        <WithdrawInfoItem
          header={vocab.t(vocab.get().companyLimit, userInfo.company_name)}
          text={vocab.get().maximumWithdrawablePerMonth}
          amount={balance.monthly_limit}
          styles={styles.listItem}
        />
      )}
      <View style={styles.itemHeader}>
        <Text style={styles.itemHeaderText}>
          {vocab.get().payCycle}
        </Text>
      </View>
      <Text style={styles.itemText}>
        {vocab.t(vocab.get().aCycleIsTheRegularPeriod, userInfo.company_name, moment(paycycleInfo.end).format('MMM DD'))}
      </Text>
      <PaycycleBar
        startDate={paycycleInfo.start}
        endDate={paycycleInfo.end}
        daysTotal={paycycleInfo.total_days}
        daysLeft={paycycleInfo.left_days}
        styles={styles.bar}
      />
    </ModalWrapper>
  );
};

export default ModalWithdrawInfo;
