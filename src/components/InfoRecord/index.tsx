import theme from 'config/theme';
import * as React from 'react';
import { Text, View, StyleSheet, ViewStyle } from 'react-native';
import { getHeight, getWidth } from 'utils/window';

interface InfoRecordProps {
  label?: string;
  text?: string;
  width?: string;
  footnote?: string;
}

const InfoRecord = (props: InfoRecordProps) => {
  const { label, text, width = '100%', footnote } = props;

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
      { footnote && (
        <View>
          <View style={styles.footnoteDivider} />
          <Text style={styles.footnote}>{footnote}</Text>
        </View>
      )}
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
    color: theme.colors.shade1,
    fontSize: getWidth(4),
    textTransform: 'uppercase',
  },
  text: {
    textAlign: 'left',
    paddingTop: getHeight(1),
    color: theme.colors.textDark,
    fontSize: getWidth(4),
  },
  footnoteDivider: {
    marginTop: getHeight(1.7),
    marginBottom: getHeight(.8),
    backgroundColor: theme.colors.shade1,
    height: getHeight(.4),
    width: getWidth(7),
  },
  footnote: {
    fontSize: getWidth(3.5),
    fontWeight: '600',
    color: theme.colors.shade1,
  }
});
