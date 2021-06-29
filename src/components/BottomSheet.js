import React from 'react';
import {View, Text} from 'react-native';

import {windowWidth, windowHeight} from '../utils/Dimentions';

const renderContent = () => (
  <View
    style={{
      backgroundColor: 'white',
      padding: 5,
      height: windowHeight - 300,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      alignItems: 'center',
    }}>
    <Text>Swipe down to close</Text>
  </View>
);

export default renderContent;
