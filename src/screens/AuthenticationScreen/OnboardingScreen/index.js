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
import {windowWidth, windowHeight} from '../../../utils/Dimentions';
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
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
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
    title: 'Abon',
    subtitle: 'Berbagai jenis Abon',
    description:
      'Tidak hanya abon sapi, kita juga menjual berbagai abon seperti abon ayam, abon mujaer dan abon jamur.',
    color: '#BFEAF5',
    picture: {
      //src : require('../../assets/1.png'),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: 'Dendeng',
    subtitle: 'Dendeng Sapi',
    description:
      'Bosan dengan dendeng biasa? Kami mempunyai dendeng rasa yang tak biasa yaitu, dendeng sapi pedas!',
    color: '#BEECC4',
    picture: {
      //src : require('../../assets/1.png'),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: 'Paru Sapi',
    subtitle: 'Paru Sapi Kering',
    description:
      'Paru sapi kering terbaik ditaburi dengan bawang goreng, yang akan menggugah selera. Legit!',
    color: '#FFE4D9',
    picture: {
      //src : require('../../assets/1.png'),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: 'Oleh Oleh',
    subtitle: 'Makanan Olahan Sapi',
    description:
      'Tersedia makanan dan cemilan oleh-oleh olahan sapi seperti keripik Sambal rasa Abon Sapi, Gepuk dan lain-lain!',
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
    inputRange: slides.map((_, i) => i * windowWidth),
    outputRange: slides.map(Slide => Slide.color),
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
