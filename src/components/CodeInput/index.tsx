import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles from './styles';

const CELL_COUNT = 5;

interface ICodeInput {
  style?: any;
  onChange?: (value: string) => void;
}

const CodeInput = (props: ICodeInput) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    props.onChange && props.onChange(value);
  }, [value]);

  return (
    <CodeField
      ref={ref}
      {...codeFieldProps}  // eslint-disable-line
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
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
