import React from 'react';
import { View } from 'react-native';
import { windowDimensions } from '../../../utils/window';

const CarouselSlide = (props) => {
  return (
    <View
      style={{
        width: windowDimensions.width,
        // justifyContent: "center",
        alignItems: "center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
      }}
    >
      {props.children}
    </View>
  );
};

export default CarouselSlide;
