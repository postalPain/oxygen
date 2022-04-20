import React from 'react';
import { StyleSheet, Text, View, ViewStyle, Switch, Pressable } from 'react-native';
import Checkbox from 'react-native-bouncy-checkbox';

import vocab from 'i18n';
import { getHeight, getWidth } from 'utils/window';
import theme from 'config/theme';
import { IconArrowRight } from 'components';

interface ISettingsItem {
  type?: 'regular' | 'toggle' | 'radio';
  on?: boolean;
  onChange?: (on?: boolean) => void;
  onPress?: () => void;
  title?: string;
  description?: string;
  style?: ViewStyle;
  disabled?: boolean;
}

const SettingsItem = ({
  type = 'regular',
  on,
  onChange,
  onPress,
  title,
  description,
  disabled,
  style
}: ISettingsItem) => {
  const renderItem = () => (
    <View style={[style, styles.settingsItem]}>
      <View style={styles.label}>
        <View>
          <Text
            style={[
              styles.text,
              styles.title,
              disabled ? styles.textDisabled : {},
            ]}
          >
            {title}
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.text,
              styles.description,
              disabled ? styles.textDisabled : {},
            ]}
          >
            {description}
          </Text>
        </View>
      </View>
      <View style={styles.rightCol}>
        {
          type === 'toggle'
            ? <Switch disabled={disabled} value={on} onValueChange={onChange} trackColor={{ true: theme.colors.floos1 }} />
            : type === 'radio'
              ? (
                disabled
                  ? <Text style={[styles.text, styles.textDisabled]}>{vocab.get()['comingSoon']}</Text>
                  : (
                    <Checkbox
                      size={getWidth(5.5)}
                      fillColor={theme.colors.floos4}
                      unfillColor={theme.colors.screenBackgroundColorLight}
                      iconStyle={styles.checkbox}
                      onPress={onChange}
                      isChecked={on}
                      disableBuiltInState
                      disableText
                      iconComponent={<View style={styles.checkboxIcon} />}
                    />
                  )
              )
              : <IconArrowRight />
        }
      </View>
    </View>
  );
  const renderWithPressableWrapper = () => (
    <Pressable
      disabled={disabled}
      onPress={onPress}
    >
      {renderItem()}
    </Pressable>
  );
  return type !== 'regular' ? renderItem() : renderWithPressableWrapper();
};

const styles = StyleSheet.create({
  settingsItem: {
    flexDirection: 'row',
    padding: getWidth(3)
  },
  label: {
    flex: 1,
    justifyContent: 'space-around'
  },
  text: {
    textAlign: 'left',
    fontSize: getWidth(5),
    paddingVertical: getHeight(.5),
  },
  title: {
    color: theme.colors.textDark,
  },
  description: {
    color: theme.colors.textLight
  },
  textDisabled: {
    color: '#b4b4b4'
  },
  rightCol: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  checkbox: {
    borderColor: theme.colors.checkboxBorderColor,
  },
  checkboxIcon: {
    width: getWidth(1.8),
    height: getWidth(1.8),
    backgroundColor: theme.colors.screenBackgroundColorLight,
    borderRadius: getHeight(1),
  }
});

export default SettingsItem;
