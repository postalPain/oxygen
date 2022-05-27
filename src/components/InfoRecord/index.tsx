import theme from 'config/theme';
import * as React from 'react';
import { Text, View, StyleSheet, ViewStyle, Linking } from 'react-native';
import { getHeight, getWidth } from 'utils/window';
import Link from 'components/Link';

interface InfoRecordProps {
  label?: string;
  text?: string;
  link?: {
    anchor: string;
    url: string;
  };
  width?: string;
  footnote?: string;
}

const InfoRecord = (props: InfoRecordProps) => {
  const { label, text, link, width = '100%', footnote } = props;

  return (
    <View
      key={label}
      style={[styles.infoRecord, { width }]}
    >
      <Text style={styles.label}>
        {label}
      </Text>
      {
        text &&
        <Text style={styles.text}>
          {text}
        </Text>
      }
      {
        link &&
        <Link
          style={styles.link}
          onPress={() => {
            Linking.openURL(link.url);
          }}
        >
          {link.anchor}
        </Link>
      }

      {footnote && (
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
    paddingBottom: getHeight(1),
    color: theme.colors.textDark,
    fontSize: getWidth(4),
  },
  link: {
    textDecorationStyle: 'solid',
    textDecorationColor: theme.colors.floos4,
    textDecorationLine: 'underline',
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
