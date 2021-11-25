import { useEffect, useState } from 'react';
import vocab from 'i18n';

export const useWithdrawButton = ({ isUserBlocked, isWithdrawalPaused, suggestedValues, }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [withdrawalDisabled, setWithdrawalDisabled] = useState(null);
  useEffect(() => {
    !isUserBlocked && !isWithdrawalPaused && suggestedValues?.length && setWithdrawalDisabled(null);
    if ((isUserBlocked != null)
      && (isWithdrawalPaused != null)
      && (suggestedValues != null)
    ) {
      isUserBlocked && setWithdrawalDisabled(vocab.get().withdrawalErrorBlocked);
      isWithdrawalPaused && setWithdrawalDisabled(vocab.get().withdrawalErrorDays);
      !suggestedValues?.length && setWithdrawalDisabled(vocab.get().withdrawalErrorMinimum);
    }
  }, [isUserBlocked, isWithdrawalPaused, suggestedValues]);
  useEffect(() => {
    !!withdrawalDisabled && setShowTooltip(true);
  }, [withdrawalDisabled]);
  useEffect(() => {
    showTooltip && setTimeout(() => setShowTooltip(false), 4000);
  }, [showTooltip]);
  return {
    showTooltip,
    withdrawalDisabled,
    setShowTooltip,
  }
};
