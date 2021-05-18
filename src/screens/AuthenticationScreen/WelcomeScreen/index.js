import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

import SubSlide from './SubSlide';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  footer: {
    flex: 1,
    backgroundColor: '#FFE4D9',
  },
});

const index = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          borderBottomRightRadius: 75,
          backgroundColor: '#FFE4D9',
        }}></View>
      <View style={styles.footer}>
        <View
          style={{
            flex: 1,
            borderTopLeftRadius: 75,
            backgroundColor: 'white',
          }}>
          <SubSlide
            key={index}
            subtitle={"Let's get started"}
            description={
              'Login to your account below or signup for an amazing experience'
            }
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </View>
  );
};

export default index;
