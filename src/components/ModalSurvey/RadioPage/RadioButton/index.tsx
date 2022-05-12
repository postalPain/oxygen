import React from 'react';
import { Pressable, Text, View } from 'react-native';
import useStyles from './styles';
import Checkbox from 'react-native-bouncy-checkbox';
import theme from '../../../../config/theme';

interface IRadioButton {
  label: string;
  value: string;
  onSelect: (value: string) => void;
  checked?: boolean;
}

export const RadioButton = (props: IRadioButton) => {
  const { label, onSelect, value, checked } = props;
  const styles = useStyles();
  let checkboxRef: Checkbox | null = null;

  return (
    <View>
      <Pressable
        style={[styles.button, checked ? styles.checked : {}]}
        onPress={() => checkboxRef?.onPress()}
      >
        <Checkbox
          ref={(ref: Checkbox) => (checkboxRef = ref)}
          size={22}
          fillColor={theme.colors.floos4}
          unfillColor={theme.colors.screenBackgroundColorLight}
          iconStyle={styles.checkbox}
          onPress={() => onSelect(value)}
          isChecked={checked}
          disableBuiltInState
          iconComponent={<View style={styles.checkboxIcon} />}
        />
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};
