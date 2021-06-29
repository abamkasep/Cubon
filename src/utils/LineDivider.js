import React from 'react';
import {View} from 'react-native';

import windowWidth from '../utils/SlideHeight';

export const LineDivider = () => {
  return (
    <View
      style={{
        width: windowWidth,
        borderWidth: 1,
        borderColor: 'grey',
        overflow: 'visible',
        marginVertical: 5,
      }}></View>
  );
};

export const SectionLineDivider = () => {
  return (
    <View
      style={{
        width: windowWidth,
        height: 10,
        marginVertical: 5,
        backgroundColor: 'grey',
      }}></View>
  );
};
