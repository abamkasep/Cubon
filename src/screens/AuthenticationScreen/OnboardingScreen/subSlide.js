import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';

import Button from '../../../components/button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 44,
    paddingTop: 50,
    paddingBottom: 44,
  },
  subtitle: {
    fontSize: 24,
    color: '#0C0D34',
    lineHeight: 30,
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: 'grey',
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 40,
  },
});
interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({subtitle, description, last, onPress}: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{onPress}}
      />
    </View>
  );
};

export default Subslide;
