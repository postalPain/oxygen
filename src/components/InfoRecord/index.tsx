import theme from 'config/theme';
import * as React from 'react';
import { Text, View, StyleSheet, ViewStyle } from 'react-native';
import { getHeight, getWidth } from 'utils/window';

interface InfoRecordProps {
  label?: string;
  text?: string;
  width?: string;
  styles?: ViewStyle;
}

const InfoRecord = (props: InfoRecordProps) => {
  const { label, text, width = '100%' } = props;

  return (
    <View
      key={label}
      style={[styles.infoRecord, { width }]}
    >
      <Text style={[styles.label]}>
        {label}
      </Text>
      <Text style={[styles.text]}>
        {text}
      </Text>
    </View>
  );
};

export default InfoRecord;

const styles = StyleSheet.create({
  infoRecord: {
    width: '100%',
    marginBottom: getHeight(4),
  },
  label: {
    textAlign: 'left',
    color: '#B3B3B3',
    fontSize: getWidth(4),
    textTransform: 'uppercase',
  },
  text: {
    textAlign: 'left',
    paddingTop: getHeight(1),
    color: theme.colors.textDark,
    fontSize: getWidth(4),
  },
});
