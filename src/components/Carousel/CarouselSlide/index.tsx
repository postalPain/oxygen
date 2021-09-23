import React from 'react';
import { View } from 'react-native';
import { windowDimenstions } from '../../../utils/window';

const CarouselSlide = (props) => {
  return (
    <View
      style={{
        height: windowDimenstions.width,
        width: windowDimenstions.width,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </View>
  );
};

export default CarouselSlide;
