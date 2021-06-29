import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useTheme} from '@react-navigation/native';

const style = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 15,
    textAlign: 'center',
  },
});

interface ButtonProps {
  variant: 'default' | 'primary' | 'transparent';
  label: string;
  onPress: () => void;
}

const Button = ({variant, label, onPress}: ButtonProps) => {
  const backgroundColor =
    variant === 'primary'
      ? 'orange'
      : variant === 'transparent'
      ? 'transparent'
      : 'rgba(12, 13, 52, 0.05)';
  const color = variant === 'primary' ? 'white' : '#0C0D34';
  return (
    <RectButton style={[style.container, {backgroundColor}]} {...{onPress}}>
      <Text style={[style.label, {color}]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = {variant: 'default'};

export default Button;
