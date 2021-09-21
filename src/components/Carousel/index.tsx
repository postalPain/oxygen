import React, { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import CarouselCircle from './CarouselCircle';
import CarouselSlide from './CarouselSlide';

interface ICarouselSlide {
  image: string;
  label: string;
}

interface ICarousel {
  slides?: ICarouselSlide[];
}

let timeout;
export const Carousel = (props: ICarousel) => {
  const flatListRef = useRef(null);
  const [index, setIndex] = useState(0);
  const slideList = Array.from({ length: 3 }).map((_, i) => {
    return {
      image: `https://picsum.photos/200/200?random=${i}`,
    };
  });

  useEffect(() => {
    flatListRef.current.scrollToIndex({ index });
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setIndex(idx => (idx === slideList.length - 1) ? 0 : (idx + 1));
    }, 3000);
  }, [index]);

  const onScrollEnd = (e) => {
    const contentOffset = e.nativeEvent.contentOffset;
    const viewSize = e.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    setIndex(pageNum);
  };

  return (
    <View style={styles.carousel}>
      <Text>Carousel</Text>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={onScrollEnd}
        showsHorizontalScrollIndicator={false}
        data={slideList}
        style={{ flex: 1, flexDirection: 'row' }}
        numColumns={1}
        renderItem={({ item, index }) => {  // eslint-disable-line
          return (
            <CarouselSlide key={index}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 200, height: 200 }}
              />
            </CarouselSlide>
          );
        }}
      />
      <View style={styles.paginationContainer}>
        {slideList.map((item, circleIndex) =>
          <CarouselCircle
            key={circleIndex}
            styles={styles.paginationChildren}
            active={circleIndex === index}
            onPress={() => setIndex(circleIndex)}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    height: 400
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    overflow: 'hidden',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationChildren: {
    margin: 5
  }
});