import React from 'react';
import env from '../../env';
import { View } from 'react-native';

// There is an issue with React Native <Text> element and detox tests on iOS -
// if <Text> is not wrapped in <View> (as a first parent)
// detox matchers (like element(by.text()) and element(by.id())) don't work -
// they can not find element.
// This workaround adds <View> around the <Text> when env is E2E

export const E2ETextWrapper = ({ children }) => {
  if (!env.e2e) {
    return children;
  }
  return (
    <View>
      {children}
    </View>
  );
};
