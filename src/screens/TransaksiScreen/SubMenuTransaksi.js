import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Animated, {interpolate, Extrapolate} from 'react-native-reanimated';

interface DotProps {
  index: number;
  currentIndex: Animated.Node<number>;
  title: string;
  onPress: () => void;
}
const SubMenu = ({index, currentIndex, title, right, onPress}: DotProps) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View
      style={{
        opacity,
        width: 50,
        height: 30,
      }}>
      <TouchableOpacity {...{onPress}}>
        <Text style={{fontSize: 12, color: 'white', fontWeight: 'bold'}}>
          {title}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default SubMenu;
