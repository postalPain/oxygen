import React from 'react';
import { StyleSheet, Text, View, ViewStyle, Switch } from 'react-native';
import { getHeight, getWidth } from 'utils/window';
import theme from 'config/theme';

interface ISettingsToggle {
  on?: boolean;
  onChange?: (on?: boolean) => void;
  title?: string;
  description?: string;
  style?: ViewStyle;
}

const SettingsToggle = (props: ISettingsToggle) => {
  return (
    <View style={[props.style, styles.settingsToggle]}>
      <View style={styles.label}>
        <View>
          <Text style={[styles.text, styles.title]}>{props.title}</Text>
        </View>
        <View>
          <Text style={[styles.text, styles.description]}>{props.description}</Text>
        </View>
      </View>
      <View style={styles.toggle}>
        <Switch value={props.on} onValueChange={props.onChange} trackColor={{ true: theme.colors.floos1 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsToggle: {
    flexDirection: 'row',
    padding: getWidth(3)
  },
  label: {
    flex: 5,
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
  toggle: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default SettingsToggle;
