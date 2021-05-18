import React, {useRef} from 'react';
import {
  View,
  Text,
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

import Slide from './slide';
import Subslide from './subSlide';
import Dot from './dot';
import {windowWidth} from '../../../utils/Dimentions';
import {SLIDE_HEIGHT} from '../../../utils/SlideHeight';

const BORDER_RADIUS = 75;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 9,
  },
});

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: '#BFEAF5',
    picture: {
      //src : require('../../assets/1.png'),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
    picture: {
      //src : require('../../assets/1.png'),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9',
    picture: {
      //src : require('../../assets/1.png'),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Godd',
    description:
      'Discover the latest trends in fashion and explore your personality',
    color: '#FFDDDD',
    picture: {
      //src : require('../../assets/1.png'),
      width: 2513,
      height: 3583,
    },
  },
];

const OnboardingScreen = ({navigation}) => {
  const scroll = useRef(null);
  const x = useValue(0);
  const onScroll = onScrollEvent({x});
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * windowWidth), // inputRange: [0, width, width *2, width *3],
    outputRange: slides.map(Slide => Slide.color), // outputRange: ['#BFEAF5','#BEECC4','#FFE4D9','#FFDDDD'],
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        {slides.map(({picture}, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.5) * windowWidth,
              index * windowWidth,
              (index + 0.5) * windowWidth,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View style={[styles.underlay, {opacity}]} key={index}>
              <Image
                source={picture.src}
                style={{
                  width: windowWidth - BORDER_RADIUS,
                  height:
                    ((windowWidth - BORDER_RADIUS) * picture.height) /
                    picture.width,
                  borderRadius: 25,
                }}
              />
            </Animated.View>
          );
        })}
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={windowWidth}
          declerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{onScroll}}>
          {slides.map(({title, picture}, index) => (
            <Slide key={index} right={!!(index % 2)} {...{title, picture}} />
          ))}
          {/* or you can use this 
                    <Slide title='Relaxed'/>
                    <Slide title='Playful' right/>
                    <Slide title='Excentric'/>
                    <Slide title='Funky' right/> */}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{...StyleSheet.absoluteFillObject, backgroundColor}}
        />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot
                key={index}
                currentIndex={divide(x, windowWidth)}
                {...{index}}
              />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: windowWidth * slides.length,
              transform: [{translateX: multiply(x, -1)}],
            }}>
            {slides.map(({subtitle, description}, index) => {
              const last = index === slides.length - 1;
              return (
                <Subslide
                  key={index}
                  onPress={() => {
                    if (last) {
                      navigation.navigate('Login');
                    } else {
                      scroll.current?.getNode().scrollTo({
                        x: windowWidth * (index + 1),
                        animated: true,
                      });
                    }
                  }}
                  {...{subtitle, description, last}}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen;
