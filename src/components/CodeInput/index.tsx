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
}

const CodeInput = (props: ICodeInput) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CODE_LENGTH });
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    props.onChange && props.onChange(value);
  }, [value]);

  return (
    <CodeField
      autoFocus
      ref={ref}
      {...codeFieldProps}  // eslint-disable-line
      value={value}
      onChangeText={setValue}
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
