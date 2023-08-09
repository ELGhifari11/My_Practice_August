import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Animated,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import {useState, useRef, useEffect} from 'react';
import {ViewToken} from 'react-native';
import React from 'react';
import Slide from './Slide';
import OnboardingItems from './OnboardingItems';
import Paginator from './Paginator';
import NextButton from './NextButton';

const TesOnboarding = () => {
  const {width} = useWindowDimensions();

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef<FlatList<any>>(null);

  const viewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      const index = viewableItems[0]?.index ?? 0; // Gunakan operator ?? untuk menangani kemungkinan nilai null
      setCurrentIndex(index);
    },
  ).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = () => {
    if (currentIndex < Slide.length - 1) {
      slidesRef.current?.scrollToIndex({
        index: currentIndex + 1,
      });
    } else {
      console.log('Last item.');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollTo();
    }, 2500);
    return () => clearTimeout(timer);
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />

      <View style={{flex: 4}}>
        <FlatList
          data={Slide}
          renderItem={({item}) => <OnboardingItems item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
          bounces={false}
        />
      </View>

      <Paginator data={Slide} scrollX={scrollX} />

      <NextButton scrollTo={scrollTo} />
    </View>
  );
};

export default TesOnboarding;

const styles = StyleSheet.create({
  containerSplash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageSplash: {
    flex: 0.3,
    top: -20,
    justifyContent: 'center',
  },
});
