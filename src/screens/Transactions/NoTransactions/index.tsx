import React from 'react';
import { Image, Text, View, } from 'react-native';
import { useSelector } from 'react-redux';
import vocabulary from 'i18n';
import { selectIsUserBlocked } from 'modules/user/selectors';
import { selectIsWithdrawalPaused, selectSuggestedValues } from 'modules/withdrawal/selectors';
import { useWithdrawButton } from 'modules/withdrawal/hooks';
import ButtonWithdraw from 'components/ButtonWithdraw';
import Tooltip from 'components/Tooltip';
import useStyles from './styles';


const vocab = vocabulary.get();

interface INoTransactionsProps {
}

const NoTransactions: React.FC<INoTransactionsProps> = () => {
  const styles = useStyles();
  const isUserBlocked = useSelector(selectIsUserBlocked);
  const isWithdrawalPaused = useSelector(selectIsWithdrawalPaused);
  const suggestedValues = useSelector(selectSuggestedValues);
  const { withdrawalDisabled, showTooltip, setShowTooltip } = useWithdrawButton({
    isUserBlocked,
    isWithdrawalPaused,
    suggestedValues,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {vocab.noTransactionsYet}
        </Text>
      </View>
      <View style={styles.infoBlock}>
        <Image
          source={require('../../../../assets/onboarding_03.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.infoText}>
          {vocab.easyToRequestPayout}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        {showTooltip && <Tooltip text={withdrawalDisabled} />}
        <ButtonWithdraw
          disabled={!!withdrawalDisabled}
          onPressDisabled={() => setShowTooltip(true)}
        />
      </View>
    </View>
  );
};

export default NoTransactions;
