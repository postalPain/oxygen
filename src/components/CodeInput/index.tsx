import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles from './styles';

export const CODE_LENGTH = 5;

interface ICodeInput {
  style?: any;
  onChange?: (value: string) => void;
  onEndEditing?: (value?: string) => void;
  value?: string;
}

const CodeInput = (props: ICodeInput) => {
  const ref = useBlurOnFulfill({ value: props.value, cellCount: CODE_LENGTH });
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value: props.value,
    setValue: props.onChange,
  });

  return (
    <CodeField
      autoFocus
      ref={ref}
      {...codeFieldProps}  // eslint-disable-line
      value={props.value}
      onChangeText={props.onChange}
      caretHidden={false}
      onEndEditing={(e) => props.onEndEditing && props.onEndEditing(e.nativeEvent.text)}
      cellCount={CODE_LENGTH}
      rootStyle={[styles.codeFiledRoot, props.style]}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <View
          // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
          onLayout={getCellOnLayoutHandler(index)}
          key={index}
          style={[styles.cellRoot, isFocused && styles.focusCell]}
        >
          <Text style={styles.cellText}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        </View>
      )}
    />
  );
};

export default CodeInput;
