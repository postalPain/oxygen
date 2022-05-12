import React from 'react';
import { View, Pressable } from 'react-native';
import useStyles from './styles';
import Checkbox from 'react-native-bouncy-checkbox';
import theme from 'config/theme';
import { RatingIcon } from './icons';

interface IRatingButton {
  onSelect: (value: string) => void;
  value: string;
  checked?: boolean;
}

export const RatingButton = (props: IRatingButton) => {
  const { onSelect, value, checked } = props;
  const styles = useStyles();
  let checkboxRef: Checkbox | null = null;

  return (
    <Pressable onPress={() => checkboxRef?.onPress()}>
      <View style={styles.button}>
        <RatingIcon checked={checked} value={value} />
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
      </View>
    </Pressable>
  );
};
