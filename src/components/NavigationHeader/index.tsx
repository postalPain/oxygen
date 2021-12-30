import React from 'react';
import { Text, SafeAreaView, View, ViewStyle, TextStyle } from 'react-native';
import vocab from 'i18n';
import { openBrowser } from 'utils';
import BackButton from 'components/BackButton';
import Link from 'components/Link';
import useStyles from './styles';
import externalUrls from 'config/externalUrls';

interface INavigationHeaderProps {
  options: any; // TODO add types
  route: any; // TODO add types
  navigation: any;
  headerLeft?: React.ReactElement;
  headerRight?: React.ReactElement;
  headerStyle?: ViewStyle;
  title?: string;
  titleStyle?: TextStyle;
  titleTextStyle?: TextStyle;
}

const NavigationHeader: React.FC<INavigationHeaderProps> = ({
  navigation,
  headerStyle,
  headerLeft,
  headerRight,
  title,
  titleStyle,
  titleTextStyle,
}) => {
  const styles = useStyles();
  const { canGoBack, goBack } = navigation;
  const left = (headerLeft !== undefined) ? headerLeft : (
    <BackButton onPress={() => goBack()} />
  );
  const right = (headerRight !== undefined) ? headerRight : (
    <Link
      style={styles.headerLink}
      onPress={() => openBrowser(externalUrls.help)}
    >
      {vocab.get().help}
    </Link>
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.header, headerStyle]}>
        <View style={styles.headerLeft}>
          {canGoBack() && left}
        </View>
        <View style={[styles.headerTitle, titleStyle]}>
          <Text style={[styles.title, titleTextStyle]}>
            {title && title}
          </Text>
        </View>
        <View style={styles.headerRight}>
          {right}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigationHeader;
