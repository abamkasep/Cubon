import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {useTheme} from '@react-navigation/native';

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
  onPress: () => void;
  onPress1: () => void;
  onPress2: () => void;
}

const SubSlide = ({
  subtitle,
  description,
  onPress,
  onPress1,
  onPress2,
}: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={'Have an account? Login'}
        variant={'primary'}
        {...{onPress}}
      />
      <Button
        label={"Join us, it's Free"}
        variant={'default'}
        {...{onPress1}}
      />
      <Button
        label={'Forgot Password?'}
        variant={'transparent'}
        {...{onPress2}}
      />
    </View>
  );
};

export default SubSlide;
