import InAppReview from 'react-native-in-app-review';

export const askForReview = (cb?) => {
  if (!InAppReview.isAvailable()) {
    return;
  };

  InAppReview.RequestInAppReview()
    .then((hasFlowFinishedSuccessfully) => {
      cb?.();


    })
    .catch((error) => {
      console.log(error);
    });
};