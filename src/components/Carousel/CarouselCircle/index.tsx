import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const CarouselCircle = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View
        style={{
          ...styles.carouselDot,
          ...props.styles,
          ...(props.active && { backgroundColor: '#7E5BA6' })
        }}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  carouselDot: {
    width: 15,
    height: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#7E5BA6',
  }
});

export default CarouselCircle;
