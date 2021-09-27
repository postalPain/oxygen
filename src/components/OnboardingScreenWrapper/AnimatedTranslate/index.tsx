import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

interface IAnimatedCircle {
  x?: number;
  y?: number;
  children?: any;
  styles?: any;
}

const AnimatedTranslate = (props: IAnimatedCircle) => {
  const { x, y, children } = props;
  const translateX = useRef(new Animated.Value(x)).current;
  const translateY = useRef(new Animated.Value(y)).current;

  useEffect(() =>{
    Animated.timing(translateX, { toValue: x, duration: 1000, useNativeDriver: true }).start();
    Animated.timing(translateY, { toValue: y, duration: 1000, useNativeDriver: true }).start();
  }, [x, y]);

  return (
    <Animated.View style={[props.styles, {
      transform: [
        { translateX },
        { translateY },
      ]
    }]}
    >
      {children}
    </Animated.View>
  );
};

export default AnimatedTranslate;