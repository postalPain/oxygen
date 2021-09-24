import theme from 'config/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const CarouselCircle = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View
        style={{
          ...styles.carouselCercle,
          ...props.styles,
          ...(props.active && { backgroundColor: theme.colors.floos2 })
        }}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  carouselCercle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: theme.colors.floos2,
  }
});

export default CarouselCircle;
