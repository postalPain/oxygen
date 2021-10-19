import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import BackButton from 'components/BackButton';
import vocab from 'i18n';
import { openBrowser } from 'utils';
import useStyles from './styles';

interface INavigationHeaderProps {
  options: any; // TODO add types
  route: any; // TODO add types
  navigation: any,
}

const NavigationHeader: React.FC<INavigationHeaderProps> = ({
  navigation,
}) => {
  const styles = useStyles();
  const { canGoBack, goBack } = navigation;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        {canGoBack() && (
          <BackButton onPress={() => goBack()} />
        )}
        <Text style={styles.headerText} onPress={() => openBrowser('/help')}>
          {vocab.get().help}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default NavigationHeader;
