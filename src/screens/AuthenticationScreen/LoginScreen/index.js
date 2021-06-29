import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import Button from '../../../components/button';
import {AuthContext} from '../../../navigation/AuthProvider';

interface LoginProps {
  subtitle: string;
}

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login, googleLogin, fbLogin} = useContext(AuthContext);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 0.2,
          backgroundColor: 'orange',
        }}
      />
      <View style={{flex: 0.8}}>
        <View style={{flex: 0.8, backgroundColor: 'orange'}}>
          <View
            style={{
              flex: 1,
              borderTopRightRadius: 75,
              backgroundColor: 'white',
              borderBottomLeftRadius: 75,
              borderBottomRightRadius: 75,
              paddingLeft: 30,
              paddingRight: 30,
            }}>
            <View>
              <Text style={styles.subtitle}>Welcome Back</Text>
              <Text style={styles.description}>
                Use your credential below and login to your account
              </Text>
            </View>
            <View style={{position: 'relative'}}>
              <TextInput
                value={email}
                onChangeText={userEmail => setEmail(userEmail)}
                placeholderText="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={{
                  marginBottom: 20,
                  borderWidth: 1,
                  borderColor: '#e8e8e8',
                  height: 50,
                  fontSize: 13,
                  paddingLeft: 45,
                  paddingRight: 20,
                  backgroundColor: 'white',
                  color: 'black',
                }}
              />
              <Icon
                name="email-outline"
                color="grey"
                size={20}
                style={{position: 'absolute', top: 15, left: 15}}
              />
            </View>
            <View style={{position: 'relative'}}>
              <TextInput
                value={password}
                onChangeText={userPassword => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
                style={{
                  borderWidth: 1,
                  borderColor: '#e8e8e8',
                  height: 50,
                  fontSize: 13,
                  paddingLeft: 45,
                  paddingRight: 20,
                  backgroundColor: 'white',
                  color: 'black',
                }}
              />
              <Icon
                name="lock-outline"
                color="grey"
                size={20}
                style={{position: 'absolute', top: 15, left: 15}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 40,
              }}>
              <Button
                label={'Login'}
                variant={'primary'}
                onPress={() => login(email, password)}
              />
            </View>
          </View>
        </View>
        <View style={{flex: 0.2, backgroundColor: 'orange'}}></View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 24,
    color: '#0C0D34',
    lineHeight: 30,
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 40,
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

// #BFEAF5
