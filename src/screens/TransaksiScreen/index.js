import React, {useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import {
  useValue,
  onScrollEvent,
  interpolateColor,
} from 'react-native-redash/lib/module/v1';
import Animated, {
  multiply,
  divide,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {useTheme} from '@react-navigation/native';

import SlideTransaksi, {SLIDE_HEIGHT} from './SlideTransaksi';
import SlideTransaksi2 from './SlideTransaksi2';
import SubMenu from './SubMenuTransaksi';

import {windowWidth, windowHeight} from '../../utils/Dimentions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    flex: 1,
    height: windowHeight,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 9,
    backgroundColor: '#BEECC4',
  },
});

const slides = [
  {
    title: 'HARI INI',
    rightMove: false,
  },
  {
    title: 'SEMUA',
    rightMove: true,
  },
];

const TransaksiScreen = ({navigation}) => {
  const scroll = useRef(null);
  const x = useValue(0);
  const onScroll = onScrollEvent({x});
  const backgroundColor = interpolateColor(x, {
    inputRange: [0, windowWidth],
    outputRange: ['#fffecf', '#fffecf'],
  });
  return (
    <View style={styles.container}>
      <View style={styles.pagination}>
        {slides.map(({title, rightMove}, index) => (
          <SubMenu
            key={index}
            currentIndex={divide(x, windowWidth)}
            {...{title}}
            {...{index}}
            onPress={() => {
              if (rightMove) {
                scroll.current
                  ?.getNode()
                  .scrollTo({x: windowWidth * (index + 1), animated: true});
              } else {
                scroll.current
                  ?.getNode()
                  .scrollTo({x: windowWidth * (index - 1), animated: true});
              }
            }}
          />
        ))}
      </View>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={windowWidth}
          declerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{onScroll}}>
          <SlideTransaksi />
          <SlideTransaksi2 />
        </Animated.ScrollView>
      </Animated.View>
    </View>
  );
};

export default TransaksiScreen;
