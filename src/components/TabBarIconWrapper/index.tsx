import React from 'react';
import { Text, View } from 'react-native';
import useStyles from './styles';
import theme from '../../config/theme';


interface ITabBarIconWrapperProps {
  icon: React.ReactElement,
  title: string,
  focused: boolean,
}

const TabBarIconWrapper = ({ focused, icon, title }: ITabBarIconWrapperProps) => {
  const styles = useStyles();
  return (
    <View style={styles.tabBarIconWrapper}>
      {icon}
      <Text style={{color: focused ? theme.colors.floos1 : '#CCCCCC'}}>{title}</Text>
    </View>
  )
};

export default TabBarIconWrapper;