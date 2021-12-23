import theme from 'config/theme';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { getWidth } from 'utils/window';

interface ILink {
  onPress?: () => void;
  children?: any;
  style?: any;
}

const Link = (props: ILink) => {
  return (
    <Pressable onPress={props.onPress}>
      <Text style={[styles.link, props.style]}>
        {props.children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  link: {
    color: theme.colors.floos1,
    fontSize: getWidth(4.5)
  }
});

export default Link;