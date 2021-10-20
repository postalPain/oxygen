import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import BackButton from 'components/BackButton';
import vocab from 'i18n';
import { openBrowser } from 'utils';
import useStyles from './styles';

interface INavigationHeaderProps {
  options: any; // TODO add types
  route: any; // TODO add types
  navigation: any;
  headerLeft?: React.ReactElement;
  headerRight?: React.ReactElement;
}

const NavigationHeader: React.FC<INavigationHeaderProps> = ({
  navigation,
  headerLeft,
  headerRight,
}) => {
  const styles = useStyles();
  const { canGoBack, goBack } = navigation;
  const left = (headerLeft !== undefined) ? headerLeft : (
    <BackButton onPress={() => goBack()} />
  );
  const right = (headerRight !== undefined) ? headerRight : (
    <Text style={styles.headerText} onPress={() => openBrowser('/help')}>
      {vocab.get().help}
    </Text>
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View>
          {canGoBack() && left}
        </View>
        <View>
          {right}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigationHeader;
