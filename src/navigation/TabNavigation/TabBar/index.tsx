import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
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
          const title = options.tabBarLabel;
          const isFocused = state.index === index;
          const color = isFocused ? options.tabBarActiveTintColor : options.tabBarInactiveTintColor;
          return (
            <Pressable
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={() => onTabPress(route, isFocused)}
              onLongPress={() => onTabLongPress(route)}
              style={styles.tabBarIconWrapper}
            >
              {icon({
                focused: isFocused,
                size: 25,
                color,
              })}
              <Text style={[styles.label, { color, }]}>
                {title}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;
