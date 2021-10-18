import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import BackButton from 'components/BackButton';
import vocab from 'i18n';
import useStyles from './styles';
import { openBrowser } from 'utils';

interface IHeaderProps {
  options: any; // TODO add types
  route: any; // TODO add types
  navigation: any,
}

const Header: React.FC<IHeaderProps> = ({
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

export default Header;
