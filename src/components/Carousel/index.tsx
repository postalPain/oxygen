import React, { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { windowDimensions } from 'utils/window';
import CarouselCircle from './CarouselCircle';
import CarouselSlide from './CarouselSlide';
import { isRTL } from '../../config/rtl';
import env from '../../env';

interface ICarouselSlide {
  image: string;
  label: string;
}

interface ICarousel {
  slides?: ICarouselSlide[];
  onSlideChange?: (index: number) => void;
}

let timeout;
const reverseCarousel = isRTL && env.ios;

export const Carousel = (props: ICarousel) => {
  const { slides, onSlideChange } = props;
  const flatListRef = useRef(null);
  const [index, setIndex] = useState(0);
  const sliderMounted = useRef(false);

  useEffect(() => {
    onSlideChange && onSlideChange(index);
    const flatListIndex = reverseCarousel ? 2 - index : index;
    if (sliderMounted.current) {
      flatListRef.current.scrollToIndex({ index: flatListIndex });
    }
    sliderMounted.current = true;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setIndex(idx => (idx === slides.length - 1) ? 0 : (idx + 1));
    }, 3000);
    return () => clearTimeout(timeout);
  }, [index]);

  const onScrollEnd = (e) => {
    const contentOffset = e.nativeEvent.contentOffset;
    const viewSize = e.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    setIndex(pageNum);
  };

  return (
    <View style={{ flexGrow: 0 }}>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={onScrollEnd}
        showsHorizontalScrollIndicator={false}
        data={slides}
        style={styles.flatList}
        numColumns={1}
        renderItem={ ({ item, index: idx }) => (
          <CarouselSlide key={idx}>
            <Image
              source={item.image}
              style={{
                width: 0.6 * windowDimensions.width,
                height: 0.8 * windowDimensions.width,
              }}
              resizeMode="contain"
            />
          </CarouselSlide>
        )}
      />
      <View style={styles.paginationContainer}>
        {slides.map((item, circleIndex) =>
          <CarouselCircle
            key={circleIndex}
            styles={styles.paginationChildren}
            active={circleIndex === index}
            onPress={() => setIndex(circleIndex)}
          />
        )}
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{slides[index].label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    margin: 4
  },
  labelContainer: {
    height: 120,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    textAlign: 'center'
  },
  flatList: {
    flexDirection: 'row',
    height: 'auto'
  }
});
