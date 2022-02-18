import React from 'react';
import { Pressable } from 'react-native';
import IconBack from 'components/IconBack';
import { testIds } from '../../config/testIds';


interface IBackButtonProps {
  onPress: () => void;
  color?: string;
  size?: number;
}

const BackButton = ({ onPress, color, size }: IBackButtonProps) => {
  return (
    <Pressable onPress={onPress} testID={testIds.navigationBackButton}>
      <IconBack color={color} size={size} />
    </Pressable>
  );
};

export default BackButton;
