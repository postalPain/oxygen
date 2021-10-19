import React from 'react';
import { Pressable } from 'react-native';
import IconBack from 'components/IconBack';

const BackButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <IconBack />
    </Pressable>
  );
};

export default BackButton;
