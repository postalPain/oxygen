import React from 'react';
import { View, Pressable } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
// import { NavBackground, NavSide } from 'components/Icons';
import useStyles from './styles';

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const styles = useStyles();
  
  const onTabPress = (route, isFocused) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });
    
    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes
      // sure that the params inside the tab screen are preserved
      // @ts-ignore
      navigation.navigate({
        name: route.name,
        merge: true,
      });
    }
  };
  
  const onTabLongPress = (route) => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };
  
  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.iconWrapper}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const icon = options.tabBarIcon;
          const isFocused = state.index === index;
          
          return (
            <Pressable
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={() => onTabPress(route, isFocused)}
              onLongPress={() => onTabLongPress(route)}
              style={styles.item}
            >
              {icon({
                focused: isFocused,
                size: 25,
                color: 'transparent',
              })}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;
