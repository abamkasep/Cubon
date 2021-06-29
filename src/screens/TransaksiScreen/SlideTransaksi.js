import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  ImageRequireSource,
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
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

import TransaksiCard from '../../components/TransaksiCard';

import dataTransaksi from '../../model/dataTransaksi';

import {windowWidth} from '../../utils/Dimentions';
import {SLIDE_HEIGHT} from '../../utils/SlideHeight';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  shadow: {
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

const SlideTransaksi = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Animated.View style={{flex: 1}}>
        <TextInput
          placeholder="Cari nama produk atau nominal"
          placeholderTextColor="#66666f"
          style={{
            width: windowWidth - 4,
            height: 50,
            top: 1,
            left: 2,
            paddingHorizontal: 28,
            backgroundColor: 'white',
            color: 'black',
            ...styles.shadow,
          }}
        />
        <Animated.ScrollView vertical style={{flex: 1}}>
          <Animatable.View
            animation="fadeInUpBig"
            style={{top: 20, marginBottom: 10}}>
            {dataTransaksi
              .sort((a, b) => (b.id > a.id ? 1 : -1))
              .map((datas, index) => {
                if (datas.dateTime == 'hari ini') {
                  return (
                    <TransaksiCard
                      key={index}
                      idTransaksi={datas.id}
                      jumlahTransaksi={datas.jumlahPembelian}
                      onPress={() => {
                        navigation.navigate('DetailsScreen');
                      }}
                    />
                  );
                }
              })}
          </Animatable.View>
        </Animated.ScrollView>
      </Animated.View>
    </View>
  );
};

export default SlideTransaksi;
