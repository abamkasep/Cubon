import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ImageRequireSource,
} from 'react-native';

import {SLIDE_HEIGHT} from '../../../utils/SlideHeight';
export const BORDER_RADIUS = 75;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
interface SlideProps {
  title: string;
  right?: boolean;
}
const Slide = ({title, right}: SlideProps) => {
  const transform = [
    {translateY: (SLIDE_HEIGHT - 100) / 2},
    {translateX: right ? width / 2 - 50 : -width / 2 + 50},
    {rotate: right ? '-90deg' : '90deg'},
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, {transform}]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
