import React from 'react';
import { View, Text } from 'react-native';
import { StackHeaderProps } from '@react-navigation/stack';
import { ProjectThemeType } from 'config/theme';
import useStyles from './styles';

interface IHeaderProps {
  options: any; // TODO add types
  route: any; // TODO add types
  theme: ProjectThemeType;
}

const Header: React.FC<StackHeaderProps & IHeaderProps> = ({
  theme,
  options,
  // route,
  // navigation,
}) => {
  const styles = useStyles(theme);
  const { headerTitle } = options;
  // const { name } = route;
  // const { canGoBack, goBack } = navigation;
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{headerTitle}</Text>
    </View>
  );
};

export default Header;
